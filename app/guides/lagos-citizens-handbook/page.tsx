import type { Metadata } from "next";
import Image from "next/image";
import { createClient } from '@/lib/supabase';
import BuyButton from "@/components/BuyButton";
import Faq from "@/components/Faq";
import { formatNaira } from "@/lib/format";
import { product } from "@/lib/products/lagos-citizens-handbook";
import Link from 'next/link';

const price = formatNaira(product.price);
const SLUG = 'lagoshandbook'

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

// Static class maps so Tailwind's compiler can see every class name literally.
const groupStyles: Record<string, { chip: string; box: string; ring: string }> = {
  sky: { chip: "bg-sky-500 text-white", box: "border-sky-200 bg-sky-50", ring: "ring-sky-400/40" },
  violet: { chip: "bg-violet-500 text-white", box: "border-violet-200 bg-violet-50", ring: "ring-violet-400/40" },
  emerald: { chip: "bg-emerald-500 text-white", box: "border-emerald-200 bg-emerald-50", ring: "ring-emerald-400/40" },
  amber: { chip: "bg-amber-500 text-white", box: "border-amber-200 bg-amber-50", ring: "ring-amber-400/40" },
  gold: { chip: "bg-yellow-700 text-white", box: "border-yellow-200 bg-yellow-50", ring: "ring-yellow-500/40" },
};

const labelStyles: Record<string, { dot: string; box: string; text: string }> = {
  emerald: { dot: "bg-emerald-500", box: "border-emerald-200 bg-emerald-50", text: "text-emerald-700" },
  sky: { dot: "bg-sky-500", box: "border-sky-200 bg-sky-50", text: "text-sky-700" },
  amber: { dot: "bg-amber-500", box: "border-amber-200 bg-amber-50", text: "text-amber-700" },
};

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
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <span className="font-heading text-lg font-semibold text-white">{product.brand}</span>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#inside" className="hover:text-white">What&apos;s inside</a>
            <a href="#preview" className="hover:text-white">Preview</a>
            <a href="#chapters" className="hover:text-white">Chapters</a>
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
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-[32rem] rounded-full bg-yellow-600/20 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 size-[28rem] rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-200">
                2026 Premium Edition · Independent guide
              </p>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight sm:text-5xl">{product.title}</h1>
              <p className="mt-4 text-lg font-medium text-yellow-200">{product.headline}</p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{product.tagline}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
               <Link
                href={`/checkout?pdf=${SLUG}`}
               className=" inline-flex items-center justify-center gap-2 p-2 rounded-full bg-amber-400 font-heading font-semibold text-slate-900 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 "
              >
                Buy {price}
              </Link>
                <a href="#preview" className="font-medium text-slate-200 underline-offset-4 hover:underline">
                  See inside the handbook
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

        {/* Why this handbook / disclaimer honesty */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Built to be honest, not just tidy</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Government paperwork wastes your time in one of two ways: nobody tells you what&apos;s actually official,
              or a guide quietly guesses at things it doesn&apos;t know. This handbook labels every piece of
              information, so you always know what to trust and what to verify.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {product.labels.map((l) => {
              const st = labelStyles[l.color];
              return (
                <div key={l.name} className={`rounded-2xl border p-6 ${st.box}`}>
                  <span className={`inline-flex items-center gap-2 font-heading text-sm font-semibold ${st.text}`}>
                    <span className={`size-2.5 rounded-full ${st.dot}`} aria-hidden="true" />
                    {l.name}
                  </span>
                  <p className="mt-3 leading-relaxed text-slate-600">{l.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Chapter groups */}
        <section id="chapters" className="scroll-mt-20 bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">15 chapters, five journeys</h2>
              <p className="mt-4 text-lg text-slate-600">Every chapter follows the same shape: why it matters, the quick route, the detailed process, and a working checklist.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {product.groups.map((g) => {
                const st = groupStyles[g.color];
                return (
                  <article key={g.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <span className={`inline-block rounded-full px-3 py-1 font-heading text-xs font-semibold ${st.chip}`}>{g.range}</span>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-slate-900">{g.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{g.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* What's inside every chapter */}
        <section id="inside" className="scroll-mt-20 bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">Every chapter, the same reliable shape</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Once you&apos;ve read one chapter, you know how to read all fifteen. That consistency is what turns a
                book into a tool you actually use.
              </p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {["Why this guide matters, in two sentences", "A Quick Route flow diagram for the whole process",
                  "The full step-by-step workflow", "A document & evidence table to tick off",
                  "A \"common mistake to avoid\" callout", "The official sources used, listed and linked"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-1 size-5 shrink-0 text-yellow-400">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image src={product.images.previews[1].src} alt={product.images.previews[1].caption} width={900} height={1272} className="h-auto w-full" />
            </div>
          </div>
        </section>

        {/* Preview gallery */}
        <section id="preview" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Take a look inside</h2>
            <p className="mt-4 text-lg text-slate-600">Real pages from the handbook, including the parts most guides skip.</p>
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

        {/* Who it's for */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Who this handbook is for</h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Residents", text: "Anyone dealing with LASRRA, Land Use Charge, or a complaint that needs a paper trail." },
                { title: "Property owners & buyers", text: "Verify title, run due diligence, and understand C of O, Consent and Assignment." },
                { title: "Developers & builders", text: "Move from planning permit to LASBCA authorization to a completion certificate." },
                { title: "Drivers & business owners", text: "Handle LASTMA violations, vehicle compliance, signage and premises requirements." },
              ].map((a) => (
                <div key={a.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-heading text-lg font-semibold text-slate-900">{a.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="buy" className="scroll-mt-20 bg-slate-950 py-20">
          <div className="mx-auto max-w-3xl px-5">
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="grid md:grid-cols-5">
                <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-8 text-white md:col-span-2">
                  <p className="text-sm font-semibold uppercase tracking-wider">Get the handbook</p>
                  <p className="mt-3 font-heading text-5xl font-bold">{price}</p>
                  <p className="mt-1 text-sm font-medium text-yellow-100">One-time payment. Yours to keep.</p>
                   <Link
                href={`/checkout?pdf=${SLUG}`}
               className="lg:mt-8 w-full p-4 text-white! shadow-slate-900/30! hover:text-lg"
              >
                Buy {price}
              </Link>
              
                  <p className="mt-3 text-center text-xs font-medium text-yellow-100">Secure checkout with Paystack</p>
                </div>
                <div className="p-8 md:col-span-3">
                  <h2 className="font-heading text-xl font-semibold text-slate-900">Everything you get</h2>
                  <ul className="mt-5 space-y-3">
                    {product.includes.map((t) => (
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

        {/* Disclaimer strip */}
        <section className="mx-auto max-w-4xl px-5 py-14">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-relaxed text-amber-900">
            <p className="font-heading font-semibold">Independent publication</p>
            <p className="mt-2">
              This handbook is an independent practical guide. It is not a publication of the Lagos State Government,
              any ministry, department or agency, and it does not create a legal relationship with any government
              body. It is not a substitute for legal advice, professional surveying, architectural, engineering,
              planning, tax or other regulated professional advice. Verify current requirements before acting.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 mx-auto max-w-3xl px-5 pb-20">
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
            <h2 className="font-heading text-3xl font-bold">Stop starting from zero with every agency</h2>
            <p className="mt-3 text-lg text-slate-300 mb-5">Get the handbook today for </p>
            <Link href={`/checkout?pdf=${SLUG}`}
              className="mt-15 w-full bg-slate-900! p-3 rounded-md  text-white! shadow-slate-900/30! hover:bg-slate-800!"
              >
                Buy {price}
              </Link>
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
            <p className="mt-1 text-xs text-slate-500">Lagos Citizen&apos;s Handbook</p>
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
