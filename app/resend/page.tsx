'use client';

import { useState } from 'react';

export default function ResendPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/resend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Even a network error shouldn't reveal anything — same generic UI either way.
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  return (
    <main className="bg-paper min-h-screen">
      <div className="max-w-[420px] mx-auto px-5 py-16 text-center">
        <h1 className="font-serif text-2xl mb-2">Resend my download</h1>
        <p className="text-ink-soft text-sm mb-8">
          Enter the email you paid with — if you have an unused download waiting, we&apos;ll send it
          again.
        </p>

        {submitted ? (
          <div className="bg-paper-raised border border-line-strong p-5 text-sm text-ink-soft">
            If that email has a pending download, we&apos;ve sent it. Check your inbox in a few
            minutes.
          </div>
        ) : (
          <div className="bg-paper-raised border border-line-strong p-5 text-left">
            <label className="block text-xs text-ink-soft mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full px-3 py-2.5 border border-line-strong rounded-sm text-sm mb-4"
            />
            <button
              onClick={handleSubmit}
              disabled={loading || !email}
              className="w-full justify-center bg-green hover:bg-green-deep disabled:opacity-50 text-paper-raised font-medium text-sm px-6 py-3 rounded-sm"
            >
              {loading ? 'Sending…' : 'Resend my link'}
            </button>
          </div>
        )}

        <p className="mt-6 text-xs text-ink-soft leading-relaxed">
          Already used your download or it&apos;s expired? This won&apos;t resend it — reply to your
          original receipt email instead.
        </p>
      </div>
    </main>
  );
}
