import { NextRequest,NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';

const MAX_DOWNLOADS = 10; // generous allowance for retries/devices, not unlimited

export async function GET( 
  request: NextRequest,
  { params }: { params: Promise<{ reference: string }> }
) {
  const {reference} = await params;

  const supabaseAdmin = await createClient();
  const { data: purchase } = await supabaseAdmin
    .from('purchases')
    .select('id, status, pdfs(storage_path)')
    .eq('payment_reference', reference)
    .single();

  if (!purchase || purchase.status !== 'success') {
    return NextResponse.json({ error: 'Link not found or payment not confirmed' }, { status: 404 });
  }

  const { data: download } = await supabaseAdmin
    .from('downloads')
    .select('id, expires_at, download_count')
    .eq('purchase_id', purchase.id)
    .single();

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

  const storagePath = (purchase as any).pdfs?.storage_path;
  if (!storagePath) {
    return NextResponse.json({ error: 'File missing' }, { status: 500 });
  }

  // Mint a short-lived signed URL for this single click — the long-lived
  // access window lives in `downloads.expires_at`, not in any URL we hand out.
  const { data: signed, error: signError } = await supabaseAdmin.storage
    .from('pdfs')
    .createSignedUrl(storagePath, 60);

  if (signError || !signed) {
    return NextResponse.json({ error: 'Could not generate download link' }, { status: 500 });
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
