import type { Metadata } from "next";
import { createClient } from '@/lib/supabase';
import Image from "next/image";
import CodeSample from "@/components/CodeSample";
import Faq from "@/components/Faq";
import { formatNaira } from "@/lib/format";
import { product } from "@/lib/products/html-css-javascript-guide";
import Link from 'next/link';

const price = formatNaira(product.price);
const SLUG = 'htmlcssjs';


export const metadata: Metadata = {
  title: `${product.title}: ${product.subtitle} (PDF) | ${price}`,
  description: product.tagline,
  openGraph: {
    title: `${product.title}: ${product.subtitle}`,
    description: product.tagline,
    images: [{ url: product.images.cover, width: 1000, height: 1413 }],
    type: "website",
  },
};

const house = [
  { name: "HTML", role: "The skeleton", text: "What is on the page: headings, paragraphs, images, buttons.", box: "border-amber-200 bg-amber-50", chip: "bg-amber-400 text-slate-900" },
  { name: "CSS", role: "The paint", text: "How it looks and where things sit: colours, fonts, spacing, layout.", box: "border-sky-200 bg-sky-50", chip: "bg-sky-500 text-white" },
  { name: "JavaScript", role: "The electricity", text: "What it does: clicks, forms, data and things that move.", box: "border-emerald-200 bg-emerald-50", chip: "bg-emerald-500 text-white" },
];

const audience = [
  { title: "Complete beginners", text: "You have never written a line of code and want a clear, friendly start." },
  { title: "Students and teens", text: "Written so a 13-year-old can follow it, with pictures and everyday comparisons." },
  { title: "Parents and teachers", text: "Teach a child or a class with a ready-made path and three finished projects." },
  { title: "Career switchers", text: "Get the fundamentals right before moving on to React or Next.js." },
];

const includes = [
  "76-page PDF with 49 step-by-step lessons",
  "Numbered, annotated code you can type and run",
  "Diagrams for the box model, Flexbox, Grid and the DOM",
  "Three complete projects, with every line explained",
  "HTML, CSS and JavaScript cheat sheets",
  "Troubleshooting guide and plain-language glossary",
];

export default async function Page() {
  const buy = product.paystackUrl;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.title}: ${product.subtitle}`,
    description: product.tagline,
    brand: { "@type": "Brand", name: product.brand },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
    },
  };

    const { data: pdf, error: pdfError } = await createClient()
      .from('pdfs')
      .select('price, cover_image_url')
      .eq('slug', SLUG)
      .maybeSingle();
  
    if (pdfError) {
      console.error(`Supabase error fetching "${SLUG}":`, pdfError.message);
    } else if (!pdf) {
      console.warn(`No PDF found for slug "${SLUG}" — using fallback price of ${price}`);
    }

  return (
    <div className="pb-24 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <span className="font-heading text-lg font-semibold text-white">{product.brand}</span>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#inside" className="hover:text-white">What&apos;s inside</a>
            <a href="#preview" className="hover:text-white">Preview</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
           <Link
                href={`/checkout?pdf=${SLUG}`}
               className=" inline-flex items-center justify-center gap-2 p-2 rounded-full bg-amber-400 font-heading font-semibold text-slate-900 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 "
              >
                Buy {price}
              </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-[32rem] rounded-full bg-amber-500/25 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 size-[28rem] rounded-full bg-sky-500/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-200">
                PDF guide · Beginner friendly
              </p>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight sm:text-5xl">
                Learn <span className="text-amber-300">HTML</span>, <span className="text-sky-300">CSS</span> &amp;{" "}
                <span className="text-emerald-300">JavaScript</span> from zero
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{product.tagline}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                 <Link
                href={`/checkout?pdf=${SLUG}`}
               className=" inline-flex items-center justify-center gap-2 p-2 rounded-full bg-amber-400 font-heading font-semibold text-slate-900 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 "
              >
                Buy {price}
              </Link>
                <a href="#preview" className="font-medium text-slate-200 underline-offset-4 hover:underline">
                  See inside the guide
                </a>
              </div>
              <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-400">
                <span>One-time payment</span>
                <span aria-hidden="true">·</span>
                <span>Secure checkout with Paystack</span>
                <span aria-hidden="true">·</span>
                <span>PDF sent to your email</span>
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <Image
                src={product.images.cover}
                alt={`Cover of ${product.title}: ${product.subtitle}`}
                width={1000}
                height={1413}
                priority
                sizes="(min-width: 768px) 384px, 80vw"
                className="rotate-2 rounded-xl shadow-2xl shadow-black/60 ring-1 ring-white/10 transition duration-500 hover:rotate-0"
              />
              <div className="absolute -bottom-5 -left-3 rotate-[-4deg] rounded-2xl bg-white px-5 py-3 shadow-xl">
                <p className="font-heading text-2xl font-bold text-slate-900">{price}</p>
                <p className="text-xs font-medium text-slate-500">one-time, no subscription</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-slate-200 bg-white">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 text-center md:grid-cols-4">
            {product.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-heading text-3xl font-bold text-slate-900">{s.value}</span>
                  <span className="mt-1 block text-sm text-slate-500">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* The house idea */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">A website is just a house</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Most tutorials throw code at you. This guide gives you a picture first, so every new idea has somewhere to
              land. Then it shows you the code, one small step at a time.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {house.map((h) => (
              <div key={h.name} className={`rounded-2xl border p-6 ${h.box}`}>
                <span className={`inline-block rounded-full px-3 py-1 font-heading text-xs font-semibold ${h.chip}`}>{h.name}</span>
                <h3 className="mt-4 font-heading text-xl font-semibold text-slate-900">{h.role}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's inside */}
        <section id="inside" className="scroll-mt-20 bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">What&apos;s inside</h2>
              <p className="mt-4 text-lg text-slate-600">Eight parts that build on each other, from your first tag to a live API.</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.parts.map((p) => (
                <article key={p.n} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-xl bg-slate-900 font-heading text-sm font-semibold text-white">{p.n}</span>
                    <span className="text-xs font-medium text-slate-500">{p.lessons} lessons</span>
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Annotated code */}
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">Every line of code is explained</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                The green numbers in each code block point to a plain-English explanation underneath. You never have to
                wonder what a line is for.
              </p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {["Numbered annotations on every example", "Warnings for the mistakes every beginner makes", "Try-it tasks so you learn by doing, not just reading"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-1 size-5 shrink-0 text-emerald-400">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <CodeSample />
          </div>
        </section>

        {/* Preview gallery */}
        <section id="preview" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Take a look inside</h2>
            <p className="mt-4 text-lg text-slate-600">Real pages from the guide, with diagrams, code and explanations.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {product.images.previews.map((p) => (
              <figure key={p.src} className="group">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition group-hover:-translate-y-1 group-hover:shadow-xl">
                  <Image src={p.src} alt={p.caption} width={900} height={1272} sizes="(min-width: 1024px) 200px, (min-width: 768px) 30vw, 45vw" className="h-auto w-full" />
                </div>
                <figcaption className="mt-3 text-center text-xs leading-snug text-slate-500">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Build three real projects</h2>
              <p className="mt-4 text-lg text-slate-600">Finish with things you made yourself, not just exercises you copied.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {product.projects.map((p, i) => (
                <article key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="font-heading text-sm font-semibold text-amber-600">Project {i + 1}</span>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{p.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Who is this guide for?</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((a) => (
              <div key={a.title} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-heading text-lg font-semibold text-slate-900">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="buy" className="scroll-mt-20 bg-slate-950 py-20">
          <div className="mx-auto max-w-3xl px-5">
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="grid md:grid-cols-5">
                <div className="bg-gradient-to-br from-amber-400 to-amber-500 p-8 text-slate-900 md:col-span-2">
                  <p className="text-sm font-semibold uppercase tracking-wider">Get the guide</p>
                  <p className="mt-3 font-heading text-5xl font-bold">{price}</p>
                  <p className="mt-1 text-sm font-medium">One-time payment. Yours to keep.</p>
                   <Link
                href={`/checkout?pdf=${SLUG}`}
                      className=" mt-2 p-2 text-white hover:text-gray-200 inline-flex items-center justify-center gap-2 p-2 rounded-full bg-amber-400 font-heading font-semibold text-slate-900 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 "
              >
                Buy {price}
              </Link>
                  <p className="mt-3 text-center text-xs font-medium">Secure checkout with Paystack</p>
                </div>
                <div className="p-8 md:col-span-3">
                  <h2 className="font-heading text-xl font-semibold text-slate-900">Everything you get</h2>
                  <ul className="mt-5 space-y-3">
                    {includes.map((t) => (
                      <li key={t} className="flex items-start gap-3 text-slate-600">
                        <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 size-5 shrink-0 text-emerald-500">
                          <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                        </svg>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 mx-auto max-w-3xl px-5 py-20">
          <h2 className="text-center font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Questions, answered</h2>
          <div className="mt-10">
            <Faq items={product.faqs} />
          </div>
          <p className="mt-8 text-center text-slate-600">
            Still not sure? Write to{" "}
            <a href={`mailto:${product.supportEmail}`} className="font-medium text-slate-900 underline underline-offset-4">
              {product.supportEmail}
            </a>
            .
          </p>
        </section>

        {/* Final call to action */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-950 py-16 text-center text-white">
          <div className="mx-auto max-w-2xl px-5">
            <h2 className="font-heading text-3xl font-bold">Ready to build your first website?</h2>
            <p className="mt-3 text-lg text-slate-300">Start today for {price}. No experience needed.</p>
            
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {product.brand}. All rights reserved.</p>
          <p>Payments processed securely by Paystack.</p>
        </div>
      </footer>

      {/* Sticky buy bar on phones */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between gap-4">
          <div>
            <p className="font-heading text-lg font-bold leading-none text-slate-900">{price}</p>
            <p className="mt-1 text-xs text-slate-500">HTML, CSS &amp; JavaScript guide</p>
          </div>
          <Link href={`/checkout?pdf=${SLUG}`}
              className="mt-8 w-full bg-slate-900! text-white! shadow-slate-900/30! hover:bg-slate-800!"
              >
                Buy {price}
              </Link>
        </div>
      </div>
    </div>
  );
}
