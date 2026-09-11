import { createAdminClient } from '@/lib/supabase-admin';

const supabaseAdmin = createAdminClient();

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref: reference } = await searchParams;

  if (!reference) {
    return <p className="p-8 text-ink-soft">Missing payment reference.</p>;
  }

  const { data: purchase } = await supabaseAdmin
    .from('purchases')
    .select('status, amount, currency, pdfs(title)')
    .eq('payment_reference', reference)
    .single();

  if (!purchase) {
    return <p className="p-8 text-ink-soft">We couldn&apos;t find that payment.</p>;
  }

  if (purchase.status !== 'success') {
    return (
      <main className="bg-paper min-h-screen flex items-center justify-center px-5">
        <p className="text-ink-soft text-sm text-center max-w-[320px]">
          Confirming your payment — this page will update automatically in a moment.
          Refresh if it doesn&apos;t.
        </p>
      </main>
    );
  }

  const pdfTitle = (purchase as any).pdfs?.title ?? 'Your guide';
  const downloadUrl = `/api/download/${reference}`;

  return (
    <main className="bg-paper min-h-screen">
      <div className="max-w-[420px] mx-auto px-5 pt-16 text-center">
        <div className="w-[78px] h-[78px] rounded-full border-2 border-green flex items-center justify-center mx-auto mb-6 text-green">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-9 h-9">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="font-serif text-2xl mb-2">Payment received</h1>
        <p className="text-ink-soft text-sm mb-8">
          Your download is ready below and on its way to your inbox.
        </p>

        <div className="bg-paper-raised border border-line-strong text-left p-5">
          <div className="flex justify-between text-sm py-1.5">
            <span>{pdfTitle}</span>
            <span>₦{purchase.amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm py-1.5">
            <span>Reference</span>
            <span className="font-mono text-xs">{reference}</span>
          </div>
          <div className="flex justify-between font-mono text-sm border-t border-line mt-2 pt-3">
            <span>Paid</span>
            <span>₦{purchase.amount.toLocaleString()}</span>
          </div>
        </div>

        <a 
          href={downloadUrl}
          className="mt-6 block w-full text-center bg-green hover:bg-green-deep text-paper-raised font-medium text-sm px-6 py-3 rounded-sm"
        >
          Download your PDF
        </a>

        <p className="mt-5 text-xs text-ink-soft leading-relaxed">
          A copy of this link was also emailed to you. It stays valid for 48 hours — if it
          expires, just reply to that email and we&apos;ll resend it.
        </p>
      </div>
    </main>
  );
}