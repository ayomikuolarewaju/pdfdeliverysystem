import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { z } from 'zod';
import { createClient } from '@/lib/supabase-server';
import { initializePaystackTransaction } from '@/lib/paystack';
import { rateLimit } from '@/lib/rate-limit';

const bodySchema = z.object({
  slug: z
    .string()
    .min(1)
    .max(80)
    .regex(/^[a-z0-9-]+$/, 'invalid slug format'),
  email: z.string().email().max(254),
});

export async function POST(req: NextRequest) {
  // Rate-limit by IP: 5 checkout attempts per 10 minutes is plenty for a
  // genuine buyer and blunts card-testing / spam-purchase abuse.
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const { allowed } = rateLimit(`checkout:${ip}`, 5, 10 * 60 * 1000);
  if (!allowed) {
    return NextResponse.json({ error: 'Too many attempts. Please try again shortly.' }, { status: 429 });
  }

  const parsed = bodySchema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
  const { slug, email } = parsed.data;

  // 1. Look up the PDF (source of truth for price — never trust a price from the client)
  const supabaseAdmin = await createClient();
  const { data: pdf, error: pdfError } = await supabaseAdmin
    .from('pdfs')
    .select('id, title, price, currency')
    .eq('slug', slug)
    .single();

  if (pdfError || !pdf) {
    return NextResponse.json({ error: 'PDF not found' }, { status: 404 });
  }

  // 2. Find or create the buyer
  const { data: existingBuyer } = await supabaseAdmin
    .from('buyers')
    .select('id')
    .eq('email', email)
    .maybeSingle();

  let buyerId = existingBuyer?.id;
  if (!buyerId) {
    const { data: newBuyer, error: buyerError } = await supabaseAdmin
      .from('buyers')
      .insert({ email })
      .select('id')
      .single();
    if (buyerError) {
      return NextResponse.json({ error: 'Could not create buyer' }, { status: 500 });
    }
    buyerId = newBuyer.id;
  }

  // 3. Create a pending purchase row with our own reference.
  // Use a full UUID, not a short slice — a short reference is guessable,
  // and this reference is the only thing gating access to the download.
  const reference = `FN-${randomUUID()}`;

  const { error: purchaseError } = await supabaseAdmin.from('purchases').insert({
    buyer_id: buyerId,
    pdf_id: pdf.id,
    payment_provider: 'paystack',
    payment_reference: reference,
    amount: pdf.price,
    currency: pdf.currency,
    status: 'pending',
  });

  if (purchaseError) {
    return NextResponse.json({ error: 'Could not create purchase' }, { status: 500 });
  }

  // 4. Kick off the Paystack transaction
  const tx = await initializePaystackTransaction({
    email,
    amountKobo: Math.round(pdf.price * 100),
    reference,
    callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/success?ref=${reference}`,
    metadata: { pdf_slug: slug },
  });

  return NextResponse.json({ authorization_url: tx.authorization_url });
}
