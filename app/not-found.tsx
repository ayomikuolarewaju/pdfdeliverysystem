import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-paper min-h-screen flex items-center justify-center px-5">
      <div className="max-w-[380px] text-center">
        <div className="font-serif italic text-lg mb-8">PdfDelivery</div>

        <div className="font-serif text-[64px] leading-none text-gold mb-2">404</div>
        <h1 className="font-serif text-2xl mb-3">This page doesn&apos;t exist</h1>
        <p className="text-ink-soft text-sm leading-relaxed mb-8">
          The page you&apos;re looking for may have moved, or the link might be off. Check the
          address, or head back to the guides.
        </p>

        <Link
          href="/"
          className="inline-block bg-green hover:bg-green-deep text-paper-raised font-medium text-sm px-6 py-3 rounded-sm"
        >
          Back to guides
        </Link>

        <div className="mt-6 pt-6 border-t border-line text-xs text-ink-soft">
          Trying to recover a purchase?{' '}
          <Link href="/resend" className="underline">
            Resend your download
          </Link>
        </div>
      </div>
    </main>
  );
}
