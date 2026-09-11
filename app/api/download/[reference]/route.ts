import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase-admin';

const supabaseAdmin = createAdminClient();

const MAX_DOWNLOADS = 10;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ reference: string }> }
) {
  const { reference } = await params;

  const { data: purchase, error: purchaseError } = await supabaseAdmin
    .from('purchases')
    .select('id, status, pdf_id')
    .eq('payment_reference', reference)
    .maybeSingle();

  if (purchaseError) {
    console.error('Download: purchase lookup error:', purchaseError.message);
    return NextResponse.json({ error: 'Lookup failed', detail: purchaseError.message }, { status: 500 });
  }
  if (!purchase) {
    return NextResponse.json({ error: 'No purchase found for this reference' }, { status: 404 });
  }
  if (purchase.status !== 'success') {
    return NextResponse.json({ error: `Payment not confirmed yet (status: ${purchase.status})` }, { status: 404 });
  }

  const { data: pdf, error: pdfError } = await supabaseAdmin
    .from('pdfs')
    .select('storage_path')
    .eq('id', purchase.pdf_id)
    .maybeSingle();

  if (pdfError || !pdf) {
    console.error('Download: pdf lookup error:', pdfError?.message);
    return NextResponse.json({ error: 'PDF record missing', detail: pdfError?.message }, { status: 500 });
  }

  const { data: download, error: downloadError } = await supabaseAdmin
    .from('downloads')
    .select('id, expires_at, download_count')
    .eq('purchase_id', purchase.id)
    .maybeSingle();

  if (downloadError) {
    console.error('Download: downloads lookup error:', downloadError.message);
    return NextResponse.json({ error: 'Lookup failed', detail: downloadError.message }, { status: 500 });
  }
  if (!download) {
    return NextResponse.json({ error: 'No download record for this purchase' }, { status: 404 });
  }

  if (new Date(download.expires_at) < new Date()) {
    return NextResponse.json(
      { error: 'This download link has expired. Reply to your receipt email and we\'ll resend it.' },
      { status: 410 }
    );
  }

  if (download.download_count >= MAX_DOWNLOADS) {
    return NextResponse.json(
      { error: 'Download limit reached for this purchase. Contact support for help.' },
      { status: 429 }
    );
  }

  const { data: signed, error: signError } = await supabaseAdmin.storage
    .from('pdfs')
    .createSignedUrl(pdf.storage_path, 60);

  if (signError || !signed) {
    console.error('Download: signing error:', signError?.message, 'path:', pdf.storage_path);
    return NextResponse.json(
      { error: 'Could not generate download link', detail: signError?.message, storagePath: pdf.storage_path },
      { status: 500 }
    );
  }

  await supabaseAdmin
    .from('downloads')
    .update({
      download_count: download.download_count + 1,
      last_downloaded_at: new Date().toISOString(),
    })
    .eq('id', download.id);

  return NextResponse.redirect(signed.signedUrl);
}