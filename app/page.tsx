import Link from 'next/link';

// Manually list your guides here as you add them (matches the "add a PDF
// manually" workflow — a static page per slug, listed here too).
const guides = [
  { slug: 'mediators-field-guide', title: "The Mediator's Field Guide" },
  { slug: 'tenant-toolkit', title: 'Tenant Dispute Resolution Toolkit — Lagos Edition' },
];

export default function HomePage() {
  return (
    <main className="bg-paper min-h-screen">
      <div className="max-w-3xl mx-auto px-5 py-16">
        <span className="font-serif italic text-lg">PdfDelivery</span>
        <h1 className="font-serif text-3xl mt-6 mb-8">Guides</h1>
        <div>
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="block py-4 border-b border-line text-lg hover:text-green"
            >
              {g.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
