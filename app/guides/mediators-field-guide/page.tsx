import Link from 'next/link';

const SLUG = 'mediators-field-guide';

const toc = [
  { num: '01', name: 'Reading the room before you speak', pg: 'p. 4' },
  { num: '02', name: 'De-escalation scripts, word for word', pg: 'p. 14' },
  { num: '03', name: 'Documentation templates', pg: 'p. 38' },
  { num: '04', name: 'When to refer the case up', pg: 'p. 51' },
];

export default function MediatorsFieldGuidePage() {
  return (
    <main className="bg-paper text-ink min-h-screen">
      <div className="max-w-3xl mx-auto px-5 py-10">
        <header className="flex items-center justify-between mb-10">
          <span className="font-serif italic text-lg">Fieldnotes</span>
          <span className="font-mono text-sm text-ink-soft">₦4,500 · instant PDF</span>
        </header>

        <div className="grid grid-cols-[220px_1fr] gap-10 items-start">
          <div className="relative aspect-[3/4] bg-green rounded-sm shadow-[6px_6px_0_theme(colors.line-strong)] overflow-hidden">
            <div className="absolute inset-x-4 top-5 text-paper-raised font-serif text-sm leading-snug">
              The Mediator&apos;s Field Guide
            </div>
            <div className="absolute inset-x-4 bottom-4 text-gold font-mono text-[10px] tracking-wide">
              FIELDNOTES / NG
            </div>
          </div>

          <div>
            <h1 className="font-serif text-4xl leading-tight mb-3">
              The Mediator&apos;s Field Guide
            </h1>
            <p className="text-ink-soft text-base leading-relaxed max-w-[46ch] mb-6">
              Practical scripts for de-escalating neighbour, landlord and market disputes —
              written for Nigeria&apos;s community mediation setting.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={`/checkout?pdf=${SLUG}`}
                className="bg-green hover:bg-green-deep text-paper-raised font-medium text-sm px-6 py-3 rounded-sm"
              >
                Buy the guide
              </Link>
              <span className="font-mono text-lg">₦4,500</span>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="font-serif text-xl mb-4">What&apos;s inside</h2>
          <div>
            {toc.map((item) => (
              <div
                key={item.num}
                className="flex justify-between py-3 border-b border-line text-sm"
              >
                <span>
                  <span className="text-gold font-mono text-xs mr-3">{item.num}</span>
                  {item.name}
                </span>
                <span className="text-ink-soft font-mono text-xs">{item.pg}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-9 flex gap-7 flex-wrap text-xs text-ink-soft">
          <div><strong className="block text-sm text-ink font-semibold">62</strong>Pages</div>
          <div><strong className="block text-sm text-ink font-semibold">PDF, A5</strong>Format</div>
          <div><strong className="block text-sm text-ink font-semibold">Aug 2026</strong>Last updated</div>
          <div><strong className="block text-sm text-ink font-semibold">Delivered by email</strong>Sent right after payment, no account needed</div>
        </div>

        <hr className="my-8 border-line" />
        <p className="text-xs text-ink-soft">
          Paid securely by card, bank transfer or USSD via Paystack. The download link also lands in your inbox.
        </p>
      </div>
    </main>
  );
}
