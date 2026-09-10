import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';
import { isValidPaystackSignature, verifyPaystackTransaction } from '@/lib/paystack';
import { sendDownloadEmail } from '@/lib/mail';

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-paystack-signature');

  if (!isValidPaystackSignature(rawBody, signature)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  const event = JSON.parse(rawBody);

  if (event.event !== 'charge.success') {
    // Ignore every other event type for now
    return NextResponse.json({ received: true });
  }

  const reference = event.data.reference as string;

  // 1. Find the matching purchase, along with the buyer's email
  const supabaseAdmin = await createClient();
  const { data: purchase, error: purchaseError } = await supabaseAdmin
    .from('purchases')
    .select('id, pdf_id, status, amount, buyers(email)')
    .eq('payment_reference', reference)
    .single();

  if (purchaseError || !purchase) {
    return NextResponse.json({ error: 'Purchase not found' }, { status: 404 });
  }

  // Idempotency: Paystack can retry webhooks — don't double-fulfil
  if (purchase.status === 'success') {
    return NextResponse.json({ received: true });
  }

  // 2. Never fulfil off the webhook payload alone — re-fetch the transaction
  // straight from Paystack's API and confirm it actually succeeded, and that
  // the amount paid matches what this purchase expected. A signature only
  // proves the request came from Paystack; it doesn't stop a stale/replayed
  // or mismatched event from slipping through.
  const verified = await verifyPaystackTransaction(reference);
  const expectedKobo = Math.round(purchase.amount * 100);

  if (verified.status !== 'success' || verified.amount !== expectedKobo) {
    return NextResponse.json({ error: 'Verification mismatch' }, { status: 400 });
  }

  // 3. Mark the purchase as paid
  await supabaseAdmin
    .from('purchases')
    .update({ status: 'success', confirmed_at: new Date().toISOString() })
    .eq('id', purchase.id);

  // 4. Look up the PDF's storage path + title (for the email)
  const { data: pdf } = await supabaseAdmin
    .from('pdfs')
    .select('storage_path, title')
    .eq('id', purchase.pdf_id)
    .single();

  if (!pdf) {
    return NextResponse.json({ error: 'PDF record missing' }, { status: 500 });
  }

  // 5. Set a 48-hour access window for this purchase. We don't hand out a
  // long-lived signed URL directly — /api/download/[reference] mints a
  // short-lived one on each click, checked against this expiry.
  const expiresInSeconds = 60 * 60 * 48;
  const expiresAt = new Date(Date.now() + expiresInSeconds * 1000).toISOString();

  // 6. Record the download entry
  await supabaseAdmin.from('downloads').insert({
    purchase_id: purchase.id,
    signed_url: '', // no longer stored — see /api/download/[reference]
    expires_at: expiresAt,
  });

  // 7. Email the buyer their download link
  const buyerEmail = (purchase as any).buyers?.email;
  const downloadUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/download/${reference}`;
  if (buyerEmail) {
    try {
      await sendDownloadEmail({
        to: buyerEmail,
        pdfTitle: pdf.title,
        downloadUrl,
        reference,
      });
    } catch (mailError) {
      // Don't fail the webhook over an email hiccup — the buyer can still
      // download from the /success page, and this gets logged for follow-up.
      console.error('Failed to send download email:', mailError);
    }
  }

  return NextResponse.json({ received: true });
}
