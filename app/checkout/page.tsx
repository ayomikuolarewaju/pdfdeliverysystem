'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase';

type Pdf = {
  slug: string;
  title: string;
  price: number;
  currency: string;
  cover_image_url: string | null;
};

export default function CheckoutPage() {
  return (
    <Suspense fallback={<p className="p-8 text-ink-soft">Loading…</p>}>
      <CheckoutForm />
    </Suspense>
  );
}

function CheckoutForm() {
  const params = useSearchParams();
  const slug = params.get('pdf');

  const [pdf, setPdf] = useState<Pdf | null>(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    createClient()
      .from('pdfs')
      .select('slug, title, price, currency, cover_image_url')
      .eq('slug', slug)
      .single()
      .then(({ data }) => setPdf(data));
  }, [slug]);

  async function handlePay() {
    if (!pdf || !email) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: pdf.slug, email }),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {
        // Response wasn't JSON at all (e.g. a host-level timeout page) —
        // surface that clearly instead of leaving the button spinning forever.
        throw new Error(`Server returned an unexpected response (status ${res.status}).`);
      }

      if (!res.ok) {
        throw new Error(data?.error || 'Something went wrong. Please try again.');
      }
      if (!data?.authorization_url) {
        throw new Error('No payment link returned. Please try again.');
      }

      window.location.href = data.authorization_url; // off to Paystack
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  if (!slug) {
    return <p className="p-8 text-ink-soft">No PDF selected.</p>;
  }

  if (!pdf) {
    return <p className="p-8 text-ink-soft">Loading…</p>;
  }

  return (
    <main className="bg-paper min-h-screen">
      <div className="max-w-[460px] mx-auto px-5 py-10">
        <Link href={`/guides/${pdf.slug}`} className="text-sm text-ink-soft mb-6 inline-block">
          ← Back to the guide
        </Link>

        <div className="bg-paper-raised border border-line-strong rounded-sm p-6">
          <div className="flex gap-4 items-center pb-5 mb-5 border-b border-dashed border-line-strong">
            {pdf.cover_image_url ? (
              <img
                src={pdf.cover_image_url}
                alt={pdf.title}
                className="w-[46px] h-[60px] object-cover rounded-sm shrink-0 border border-line-strong"
              />
            ) : (
              <div className="w-[46px] h-[60px] bg-green rounded-sm shrink-0" />
            )}
            <div>
              <div className="font-serif text-base">{pdf.title}</div>
              <div className="text-xs text-ink-soft">1 copy · PDF download</div>
            </div>
          </div>

          <div className="flex justify-between font-mono text-sm mb-5">
            <span>Total due</span>
            <span>₦{pdf.price.toLocaleString()}</span>
          </div>

          <div className="mb-4">
            <label className="block text-xs text-ink-soft mb-1.5">
              Email — your download link is sent here
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full px-3 py-2.5 border border-line-strong rounded-sm text-sm"
            />
          </div>

          {error && <p className="text-sm text-red-700 mb-3">{error}</p>}

          <button
            onClick={handlePay}
            disabled={loading || !email}
            className="w-full justify-center bg-green hover:bg-green-deep disabled:opacity-50 text-paper-raised font-medium text-sm px-6 py-3 rounded-sm"
          >
            {loading ? 'Redirecting…' : `Pay ₦${pdf.price.toLocaleString()}`}
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-5 text-[11px] text-ink-soft">
          <span>256-bit encrypted</span>
          <span>Paystack</span>
          <span>No card details stored</span>
        </div>
      </div>
    </main>
  );
}
