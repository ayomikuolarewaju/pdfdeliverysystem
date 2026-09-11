import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase-admin';
import { isValidPaystackSignature, verifyPaystackTransaction, debugSignatureInfo } from '@/lib/paystack';
import { sendDownloadEmail } from '@/lib/mail';

const supabaseAdmin = createAdminClient();

async function logOutcome(reference: string | null, outcome: string, detail?: string) {
  try {
    await supabaseAdmin.from('webhook_logs').insert({ reference, outcome, detail });
  } catch {
    // If logging itself fails, don't let that mask the original problem.
  }
}

export async function POST(req: NextRequest) {
  let reference: string | null = null;

  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-paystack-signature');

    if (!isValidPaystackSignature(rawBody, signature)) {
      const debug = debugSignatureInfo(rawBody, signature);
      await logOutcome(
        null,
        'invalid_signature',
        `bodyLength=${debug.bodyLength} expected=${debug.expectedSig} received=${debug.receivedSig} preview=${debug.bodyPreview}`
      );
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(rawBody);

    if (event.event !== 'charge.success') {
      await logOutcome(event.data?.reference ?? null, 'ignored_event', event.event);
      return NextResponse.json({ received: true });
    }

    reference = event.data.reference as string;

    const { data: purchase, error: purchaseError } = await supabaseAdmin
      .from('purchases')
      .select('id, pdf_id, status, amount, buyers(email)')
      .eq('payment_reference', reference)
      .single();

    if (purchaseError || !purchase) {
      await logOutcome(reference, 'purchase_not_found', purchaseError?.message);
      return NextResponse.json({ error: 'Purchase not found' }, { status: 404 });
    }

    if (purchase.status === 'success') {
      await logOutcome(reference, 'already_success');
      return NextResponse.json({ received: true });
    }

    const verified = await verifyPaystackTransaction(reference);
    const expectedKobo = Math.round(purchase.amount * 100);

    if (verified.status !== 'success' || verified.amount !== expectedKobo) {
      await logOutcome(
        reference,
        'verify_mismatch',
        `verified.status=${verified.status} verified.amount=${verified.amount} expectedKobo=${expectedKobo}`
      );
      return NextResponse.json({ error: 'Verification mismatch' }, { status: 400 });
    }

    await supabaseAdmin
      .from('purchases')
      .update({ status: 'success', confirmed_at: new Date().toISOString() })
      .eq('id', purchase.id);

    const { data: pdf } = await supabaseAdmin
      .from('pdfs')
      .select('storage_path, title')
      .eq('id', purchase.pdf_id)
      .single();

    if (!pdf) {
      await logOutcome(reference, 'pdf_missing');
      return NextResponse.json({ error: 'PDF record missing' }, { status: 500 });
    }

    const expiresInSeconds = 60 * 60 * 48;
    const expiresAt = new Date(Date.now() + expiresInSeconds * 1000).toISOString();

    await supabaseAdmin.from('downloads').insert({
      purchase_id: purchase.id,
      signed_url: '',
      expires_at: expiresAt,
    });

    const buyerEmail = (purchase as any).buyers?.email;
    const downloadUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/download/${reference}`;
    if (buyerEmail) {
      try {
        await sendDownloadEmail({ to: buyerEmail, pdfTitle: pdf.title, downloadUrl, reference });
      } catch (mailError) {
        console.error('Failed to send download email:', mailError);
      }
    }

    await logOutcome(reference, 'success');
    return NextResponse.json({ received: true });
  } catch (err) {
    await logOutcome(reference, 'unhandled_error', err instanceof Error ? err.message : String(err));
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}