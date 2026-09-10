import Link from 'next/link';
import { Fraunces, Inter } from 'next/font/google';
import { createClient } from '@/lib/supabase-server';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-fraunces' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter' });

const SLUG = 'tenant-toolkit';
const FALLBACK_PRICE = 4500;

const situations = [
  'Received a quit notice',
  'Locked out of my home',
  'Deposit not returned',
  "Landlord won't repair",
  'Being harassed',
  'Rent dispute',
  'Rent increase',
  'Utility disconnected',
];

const pillars = [
  { num: '11', title: 'Core problems', body: 'Quit notices, lockouts, deposits, repairs, harassment and more — each with immediate steps and what to avoid.' },
  { num: '15', title: 'Letter templates', body: 'Ready-to-send letters for every situation — just fill in your details and send.' },
  { num: '8', title: 'Checklists & logs', body: 'Evidence trackers and worksheets so nothing gets lost while a dispute plays out.' },
  { num: '1', title: 'Resource directory', body: 'Where to go in Lagos for free mediation or legal help, and how to choose.' },
];

const includes = [
  '11 core problems with step-by-step guidance',
  '15 ready-to-send letter templates',
  '8 evidence checklists & worksheets',
  '5 emergency quick-reference cards',
  'Lagos mediation & legal resource directory',
];

export default async function TenantToolkitPage() {
  // Price is the one thing pulled live from Supabase — everything else on
  // this page is this guide's own hardcoded marketing copy. If the row
  // hasn't been added yet, fall back rather than breaking the page.

  const supabaseAdmin = await createClient();

  const { data: pdf, error } = await supabaseAdmin
    .from('pdfs')
    .select('*')
    .eq('slug', SLUG)
    .maybeSingle();



if (error) {
  return
}

   if(!pdf) {
    return
  }

  const price = pdf?.price ?? FALLBACK_PRICE;
  const priceLabel = `₦${price.toLocaleString()}`;

  return (
    <main className={`${fraunces.variable} ${inter.variable} bg-[#FAF7F0] text-[#1C2B39]`} style={{ fontFamily: 'var(--font-inter)' }}>
      {/* ---------- top bar ---------- */}
      <div className="border-b border-[#DAD2BE] py-[18px]">
        <div className="max-w-[1100px] mx-auto px-8 flex items-center justify-between">
          <div className="font-semibold text-[17px] capitalize" style={{ fontFamily: 'var(--font-fraunces)' }}>
           {pdf.title}<span className="text-[#9A3324]"></span>
          </div>
          <div className="text-[13px] text-[#4A5A68] border border-[#DAD2BE] px-3 py-[5px] rounded-[3px]">
            Lagos Edition
          </div>
        </div>
      </div>

      {/* ---------- hero ---------- */}
      <section className="pt-16 pb-14">
        <div className="max-w-[1100px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-9 md:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-[#9A3324] font-semibold mb-[18px]">
              <span className="w-[7px] h-[7px] bg-[#9A3324] rounded-full" />
              For tenants in Lagos, right now
            </div>
            <h1
              className="text-[34px] md:text-[46px] font-semibold leading-[1.08] max-w-none md:max-w-[11.5ch]"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              You got a notice. <em className="italic font-normal text-[#9A3324]">Here&apos;s exactly</em> what to do next.
            </h1>
            <p className="mt-5 text-lg text-[#4A5A68] max-w-[46ch]">
              A practical toolkit for handling quit notices, lockouts, deposit disputes, and landlord
              harassment — with the letters, checklists, and steps already written for you.
            </p>
            <div className="mt-8 flex items-center gap-[18px] flex-wrap">
              <Link
                href={`/checkout?pdf=${SLUG}`}
                className="bg-[#1C2B39] hover:bg-[#9A3324] text-[#FAF7F0] font-semibold text-base px-[26px] py-[15px] rounded-[3px] inline-block"
              >
                Get the Toolkit — {priceLabel}
              </Link>
              <span className="text-sm text-[#4A5A68]">Instant PDF download</span>
            </div>
            <div className="mt-6 pt-[18px] border-t border-[#DAD2BE] text-sm text-[#4A5A68] max-w-[44ch]">
              Written by a former mediator at the Lagos State Citizens&apos; Mediation Bureau — built from
              what actually resolves these disputes, not just what the law says.
            </div>
          </div>

          <div className="flex justify-center order-first md:order-last">
            <svg viewBox="0 0 320 400" className="w-full max-w-[340px] h-auto drop-shadow-[0_18px_30px_rgba(28,43,57,0.14)]">
              <g transform="rotate(-4 160 200)">
                <rect x="30" y="20" width="260" height="360" rx="4" fill="#FFFFFF" stroke="#DAD2BE" strokeWidth="1.5" />
                <rect x="56" y="54" width="150" height="10" rx="2" fill="#1C2B39" />
                <rect x="56" y="76" width="200" height="6" rx="2" fill="#DAD2BE" />
                <rect x="56" y="90" width="190" height="6" rx="2" fill="#DAD2BE" />
                <rect x="56" y="104" width="205" height="6" rx="2" fill="#DAD2BE" />
                <rect x="56" y="118" width="160" height="6" rx="2" fill="#DAD2BE" />
                <rect x="56" y="148" width="205" height="6" rx="2" fill="#DAD2BE" />
                <rect x="56" y="162" width="180" height="6" rx="2" fill="#DAD2BE" />
                <rect x="56" y="176" width="205" height="6" rx="2" fill="#DAD2BE" />
                <rect x="56" y="190" width="140" height="6" rx="2" fill="#DAD2BE" />
                <rect x="56" y="220" width="205" height="6" rx="2" fill="#DAD2BE" />
                <rect x="56" y="234" width="190" height="6" rx="2" fill="#DAD2BE" />
                <rect x="56" y="248" width="205" height="6" rx="2" fill="#DAD2BE" />
              </g>
              <g transform="rotate(-16 235 300)">
                <rect x="176" y="266" width="118" height="66" rx="3" fill="none" stroke="#9A3324" strokeWidth="4" />
                <text x="235" y="294" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="700" fontSize="19" fill="#9A3324">URGENT</text>
                <text x="235" y="314" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="10" fill="#9A3324" letterSpacing="1.5">RESPOND WITHIN 24H</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ---------- situations strip ---------- */}
      <section className="pb-[60px]">
        <div className="max-w-[1100px] mx-auto px-8 flex flex-wrap gap-[10px]">
          {situations.map((s) => (
            <span key={s} className="border border-[#DAD2BE] bg-white px-4 py-[9px] rounded-[3px] text-[14.5px] text-[#4A5A68]">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- personas ---------- */}
      <section className="py-16 border-t border-[#DAD2BE]">
        <div className="max-w-[1100px] mx-auto px-8">
          <span className="inline-block bg-[#F0E6D2] text-[#7A5A22] text-[13px] font-semibold px-[14px] pt-[6px] pb-[5px] rounded-t">
            Who it&apos;s for
          </span>
          <h2 className="mt-3 text-[30px] font-semibold max-w-[20ch]" style={{ fontFamily: 'var(--font-fraunces)' }}>
            Two moments this toolkit is built for.
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#DAD2BE] rounded-[4px] pt-[30px] px-7 pb-7 border-t-[3px] border-t-[#9A3324]">
              <svg viewBox="0 0 24 24" fill="none" stroke="#9A3324" strokeWidth="1.8" className="w-7 h-7 mb-4">
                <path d="M12 3l10 18H2z" />
                <path d="M12 10v5" />
                <circle cx="12" cy="18" r="0.6" fill="#9A3324" />
              </svg>
              <h3 className="text-[19px] font-semibold" style={{ fontFamily: 'var(--font-fraunces)' }}>You&apos;re in it right now</h3>
              <p className="mt-[10px] text-[14.5px] text-[#4A5A68]">
                A notice landed today. The locks got changed. Your deposit request has gone quiet for
                weeks. You need to know what to do in the next hour, not the next month.
              </p>
              <ul className="mt-[18px] pt-4 border-t border-[#DAD2BE] pl-[18px] text-sm text-[#4A5A68] list-disc space-y-[7px]">
                <li>Jump straight to your exact problem — no reading required</li>
                <li>Send the matching letter today</li>
                <li>Know exactly when to ask for mediation</li>
              </ul>
            </div>

            <div className="bg-white border border-[#DAD2BE] rounded-[4px] pt-[30px] px-7 pb-7 border-t-[3px] border-t-[#1B6B45]">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1B6B45" strokeWidth="1.8" className="w-7 h-7 mb-4">
                <path d="M3 11l9-7 9 7" />
                <path d="M5 10v10h14V10" />
              </svg>
              <h3 className="text-[19px] font-semibold" style={{ fontFamily: 'var(--font-fraunces)' }}>You&apos;re getting ahead of it</h3>
              <p className="mt-[10px] text-[14.5px] text-[#4A5A68]">
                About to sign a lease, moving to Lagos, or just tired of hearing rent horror stories
                from friends. You want to get this right from day one.
              </p>
              <ul className="mt-[18px] pt-4 border-t border-[#DAD2BE] pl-[18px] text-sm text-[#4A5A68] list-disc space-y-[7px]">
                <li>Start with &quot;Before You Move In&quot;</li>
                <li>Know what to document before it&apos;s ever a dispute</li>
                <li>Keep every template on hand, just in case</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- what's inside ---------- */}
      <section className="py-16 border-t border-[#DAD2BE]">
        <div className="max-w-[1100px] mx-auto px-8">
          <span className="inline-block bg-[#F0E6D2] text-[#7A5A22] text-[13px] font-semibold px-[14px] pt-[6px] pb-[5px] rounded-t">
            What&apos;s inside
          </span>
          <h2 className="mt-3 text-[30px] font-semibold max-w-[20ch]" style={{ fontFamily: 'var(--font-fraunces)' }}>
            Everything you need, already organized by problem.
          </h2>
          <p className="mt-3 text-base text-[#4A5A68] max-w-[60ch]">
            Not a legal textbook. A working toolkit — find your exact situation, follow the steps,
            send the letter.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#DAD2BE]">
            {pillars.map((p) => (
              <div key={p.title} className="border-r border-b border-[#DAD2BE] pt-7 px-6 pb-[30px]">
                <div className="text-[34px] font-semibold text-[#9A3324]" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  {p.num}
                </div>
                <h3 className="mt-[6px] text-[17px] font-semibold">{p.title}</h3>
                <p className="mt-2 text-[14.5px] text-[#4A5A68]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- credibility ---------- */}
      <section className="bg-[#1C2B39] text-[#FAF7F0] py-16">
        <div className="max-w-[1100px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-9 items-center text-center md:text-left">
          <svg viewBox="0 0 96 96" fill="none" className="w-24 h-24 shrink-0 mx-auto md:mx-0">
            <circle cx="48" cy="48" r="44" stroke="#C9A66B" strokeWidth="2" />
            <circle cx="48" cy="48" r="36" stroke="#C9A66B" strokeWidth="1" />
            <path d="M48 26l4.5 9.2 10.1 1.5-7.3 7.1 1.7 10-9-4.7-9 4.7 1.7-10-7.3-7.1 10.1-1.5z" fill="#C9A66B" />
          </svg>
          <div>
            <h2 className="text-[26px] max-w-[22ch] mx-auto md:mx-0" style={{ fontFamily: 'var(--font-fraunces)' }}>
              Built on mediation experience, not just legal theory.
            </h2>
            <p className="mt-[14px] text-base text-[#C9D2D9] max-w-[60ch] mx-auto md:mx-0">
              Most landlord-tenant disputes in Lagos are resolved through documentation, communication,
              and mediation — not court. This toolkit is written from that vantage point: what actually
              gets a dispute resolved, based on patterns seen in real cases handled through Lagos
              State&apos;s community mediation system.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- inside a page ---------- */}
      <section className="py-16 border-t border-[#DAD2BE]">
        <div className="max-w-[1100px] mx-auto px-8">
          <span className="inline-block bg-[#F0E6D2] text-[#7A5A22] text-[13px] font-semibold px-[14px] pt-[6px] pb-[5px] rounded-t">
            Inside a page
          </span>
          <h2 className="mt-3 text-[30px] font-semibold max-w-[20ch]" style={{ fontFamily: 'var(--font-fraunces)' }}>
            Built to be used in the moment, not read cover to cover.
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="bg-white border border-[#DAD2BE] rounded-[4px] px-[26px] pt-[26px] pb-6">
              <div className="font-semibold text-lg text-[#9A3324] mb-[10px]" style={{ fontFamily: 'var(--font-fraunces)' }}>
                Problem 4: You&apos;ve Been Locked Out of Your Home
              </div>
              <div className="bg-[#F0E6D2] rounded-[3px] px-[14px] py-3 text-[13.5px] text-[#7A5A22] italic mb-[14px]">
                &quot;A tenant returns from a trip to find the locks changed and no notice of any court
                process. She does not attempt to force entry, photographs the door, texts the landlord
                to formally record the lockout...&quot;
              </div>
              <ul className="pl-[18px] text-[14.5px] text-[#4A5A68] list-disc space-y-[6px]">
                <li>Immediate steps, in order</li>
                <li>Evidence to preserve</li>
                <li>What not to do</li>
                <li>When to escalate to mediation</li>
              </ul>
            </div>

            <ul className="list-none p-0 m-0">
              {[
                'Find your situation on the navigation page',
                'Follow the immediate steps — no legal reading required',
                'Pull the matching letter template and send it',
                'Log the dispute with the matching worksheet',
                'Escalate to mediation using the resource directory, if needed',
              ].map((step, i) => (
                <li key={step} className="flex gap-3 py-3 border-b border-[#DAD2BE] last:border-none text-[15px]">
                  <span className="text-[#9A3324] font-semibold" style={{ fontFamily: 'var(--font-fraunces)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- pricing ---------- */}
      <section id="pricing" className="py-16 border-t border-[#DAD2BE] text-center">
        <div className="max-w-[1100px] mx-auto px-8">
          <span className="inline-block bg-[#F0E6D2] text-[#7A5A22] text-[13px] font-semibold px-[14px] pt-[6px] pb-[5px] rounded-t">
            Get the toolkit
          </span>
          <h2 className="mt-3 text-[30px] font-semibold" style={{ fontFamily: 'var(--font-fraunces)' }}>
            One PDF. Every situation covered.
          </h2>

          <div className="max-w-[480px] mx-auto mt-9 bg-white border border-[#DAD2BE] rounded-[6px] px-9 py-10">
            <div className="text-[52px] font-semibold" style={{ fontFamily: 'var(--font-fraunces)' }}>
              {priceLabel}
            </div>
            <ul className="mt-[22px] text-left list-none p-0 space-y-[3px]">
              {includes.map((item) => (
                <li key={item} className="flex gap-[10px] text-[15px] text-[#4A5A68] py-[7px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1B6B45" strokeWidth="2" className="w-4 h-4 shrink-0 mt-[3px]">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={`/checkout?pdf=${SLUG}`}
              className="mt-6 block w-full text-center bg-[#1C2B39] hover:bg-[#9A3324] text-[#FAF7F0] font-semibold text-base px-[26px] py-[15px] rounded-[3px]"
            >
              Get Instant Access
            </Link>
            <div className="mt-[14px] text-[13px] text-[#4A5A68]">Delivered by email immediately after payment</div>
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="border-t border-[#DAD2BE] py-[34px] pb-11">
        <div className="max-w-[1100px] mx-auto px-8 flex justify-between gap-6 flex-wrap">
          <div className="font-semibold text-[15px]" style={{ fontFamily: 'var(--font-fraunces)' }}>
            Tenant Dispute Resolution Toolkit
          </div>
          <div className="text-[12.5px] text-[#4A5A68] max-w-[60ch]">
            This toolkit provides practical, general information and is not a substitute for legal
            advice. Laws and procedures can vary and change — for formal legal matters, consult a
            qualified Nigerian legal practitioner.
          </div>
        </div>
      </footer>
    </main>
  );
}
