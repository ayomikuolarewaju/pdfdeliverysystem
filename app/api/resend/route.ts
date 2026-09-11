import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createAdminClient } from '@/lib/supabase-admin';
import { sendDownloadEmail } from '@/lib/mail';
import { rateLimit } from '@/lib/rate-limit';

const supabaseAdmin = createAdminClient();

const bodySchema = z.object({
  email: z.string().email().max(254),
});

// Always the same response, whether or not the email matched anything —
// this prevents using the form to check who has bought what.
const GENERIC_RESPONSE = {
  message: "If that email has a pending download, we've sent it. Check your inbox in a few minutes.",
};

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const { allowed } = rateLimit(`resend:${ip}`, 3, 15 * 60 * 1000);
  if (!allowed) {
    // Still generic — don't reveal that rate limiting is why nothing happened.
    return NextResponse.json(GENERIC_RESPONSE);
  }

  const parsed = bodySchema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json(GENERIC_RESPONSE);
  }
  const { email } = parsed.data;

  try {
    const { data: buyer } = await supabaseAdmin
      .from('buyers')
      .select('id')
      .eq('email', email)
      .maybeSingle();

    if (!buyer) {
      return NextResponse.json(GENERIC_RESPONSE);
    }

    // Eligible = paid, and its download record still has at least one
    // click left and hasn't expired. Already-used or expired purchases
    // are NOT resent here — that stays a manual case (reply to support),
    // since auto-resetting a "one-time" link on request would defeat the
    // point of it being one-time.
    const { data: purchases } = await supabaseAdmin
      .from('purchases')
      .select('payment_reference, pdf_id, downloads(expires_at, download_count)')
      .eq('buyer_id', buyer.id)
      .eq('status', 'success');

    const eligible = (purchases ?? []).filter((p: any) => {
      const download = p.downloads?.[0];
      if (!download) return false;
      if (new Date(download.expires_at) < new Date()) return false;
      if (download.download_count >= 1) return false; // already used
      return true;
    });

    if (eligible.length === 0) {
      return NextResponse.json(GENERIC_RESPONSE);
    }

    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/+$/, '');

    for (const purchase of eligible as any[]) {
      const { data: pdf } = await supabaseAdmin
        .from('pdfs')
        .select('title')
        .eq('id', purchase.pdf_id)
        .maybeSingle();

      await sendDownloadEmail({
        to: email,
        pdfTitle: pdf?.title ?? 'Your guide',
        downloadUrl: `${siteUrl}/api/download/${purchase.payment_reference}`,
        reference: purchase.payment_reference,
      });
    }

    return NextResponse.json(GENERIC_RESPONSE);
  } catch (err) {
    console.error('Resend error:', err instanceof Error ? err.message : err);
    // Even on an internal error, keep the response generic to the caller.
    return NextResponse.json(GENERIC_RESPONSE);
  }
}
