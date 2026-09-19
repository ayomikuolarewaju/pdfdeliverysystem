import { Users, Zap, Check, ArrowRight, ShieldCheck, Landmark, MessageCircle } from 'lucide-react';
import { MASTERCLASS_META, getWhatsAppTargetUrl } from '../data/content';
import { AffiliateConfig } from '../types';

interface BundlePricingSectionProps {
  affiliateConfig: AffiliateConfig;
  onOpenBankModal: () => void;
}

export default function BundlePricingSection({
  affiliateConfig,
  onOpenBankModal,
}: BundlePricingSectionProps) {
  const { pricing } = MASTERCLASS_META;

  const whatsappSingle = getWhatsAppTargetUrl(
    affiliateConfig,
    `Hello! I want to register for 1 Single Seat at ${pricing.single.naira} (${pricing.single.dollar}). Please send payment details.`
  );

  const whatsappBundle = getWhatsAppTargetUrl(
    affiliateConfig,
    `Hello! I want to secure the Growth Partner Bundle (2 Seats) at ${pricing.bundle.naira}. Please send payment details.`
  );

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-900/80 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
            Investment &amp; Growth Partner Bundle
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simple, Accessible Pricing <br />
            <span className="text-amber-400">With Massive Career Upside</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Gain career insights and a proven transition roadmap that can open doors to global dollar income for less than the cost of a casual lunch.
          </p>
        </div>

        {/* Growth Partner Explanation Banner */}
        <div className="max-w-4xl mx-auto mb-12 rounded-3xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/15 border border-amber-500/30 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30">
              <Users className="h-8 w-8" />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                What Is The Growth Partner Bundle?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Growth sticks better when you have someone to grow with. Instead of attending alone, invite a trusted colleague, friend, spouse, or team member to join you. You will both learn, reflect, and hold each other accountable, which yields dramatically higher results after the workshop.
              </p>
            </div>
          </div>
        </div>

        {/* The 2 Pricing Cards */}
        <div className="grid max-w-4xl mx-auto gap-8 md:grid-cols-2 items-stretch">
          
          {/* Card 1: Single Seat */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950 p-7 shadow-xl hover:border-slate-700 transition">
            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Individual Access
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">Single Seat</h3>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                  1 Attendee
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">{pricing.single.naira}</span>
                  <span className="text-lg text-slate-400 font-bold">/ {pricing.single.dollar}</span>
                </div>
                <div className="text-xs text-slate-500 line-through">
                  Regular: {pricing.single.originalNaira}
                </div>
              </div>

              <p className="text-xs text-slate-300">
                Ideal if you are ready to attend and execute your transition independently.
              </p>

              <div className="border-t border-slate-800 pt-4 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Access to live 3-Hour Zoom Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Live Q&amp;A directly with Dr. Aderinsola</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Private Remote Work Community Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Full Masterclass Recording Replay</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>₦50,000 Bonus Pack (Roles Guide &amp; Templates)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-2.5">
              {/* <a
                id="pricing-single-selar-btn"
                href={affiliateConfig.selarSingleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-800 hover:bg-slate-700 py-3.5 text-center text-sm font-bold text-white transition border border-slate-700"
              >
                <span>Instant Checkout on Selar</span>
                <ArrowRight className="h-4 w-4" />
              </a> */}

              <a
                id="pricing-single-whatsapp-btn"
                href={whatsappSingle}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600/90 hover:bg-emerald-500 py-3 text-center text-xs font-bold text-white transition"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Register via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Growth Partner Bundle (Highlighted) */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-amber-500 bg-gradient-to-b from-slate-900 to-slate-950 p-7 shadow-2xl shadow-amber-500/10">
            {/* Top Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-4 py-1 text-[11px] font-black uppercase tracking-wider text-slate-950 shadow-md">
              Most Popular • Save ₦2,150
            </div>

            <div className="space-y-5">
              <div className="flex justify-between items-start mt-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                    Accountability Duo
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">Growth Partner Bundle</h3>
                </div>
                <span className="rounded-full bg-amber-500/20 border border-amber-500/40 px-3 py-1 text-xs font-bold text-amber-300">
                  2 Seats
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-amber-400">{pricing.bundle.naira}</span>
                  <span className="text-lg text-slate-400 font-bold">/ {pricing.bundle.dollar}</span>
                </div>
                <div className="text-xs text-emerald-400 font-semibold">
                  Only ₦4,300 per attendee (Save over 20%)
                </div>
              </div>

              <p className="text-xs text-slate-300">
                Bring your partner, colleague, or friend to learn together and accelerate your outcomes.
              </p>

              <div className="border-t border-slate-800 pt-4 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400" />
                  <span className="font-bold text-white">Full Access for TWO (2) Attendees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400" />
                  <span>2x Individual Zoom login credentials</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400" />
                  <span>Interactive Q&amp;A directly with Dr. Aderinsola</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400" />
                  <span>2x Private Remote Community Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400" />
                  <span>2x Replay links &amp; ₦50,000 Bonus Packs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400" />
                  <span className="text-amber-300 font-semibold">Built-in Accountability Partner for maximum results</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-2.5">
              {/* <a
                id="pricing-bundle-selar-btn"
                href={affiliateConfig.selarBundleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 py-3.5 text-center text-sm font-black text-slate-950 shadow-lg shadow-amber-500/25 transition"
              >
                <Zap className="h-4 w-4 fill-slate-950" />
                <span>Yes, I’ll Bring a Growth Partner ({pricing.bundle.naira})</span>
              </a> */}

              <a
                id="pricing-bundle-whatsapp-btn"
                href={whatsappBundle}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600/90 hover:bg-emerald-500 py-3 text-center text-xs font-bold text-white transition"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Register Bundle on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bank Transfer Option Footer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400 mb-2">Prefer to pay by direct Nigerian Bank Transfer?</p>
          <button
            id="pricing-open-bank-btn"
            onClick={onOpenBankModal}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-5 py-2.5 text-xs font-bold text-amber-400 hover:border-amber-400 hover:bg-slate-900 transition"
          >
            <Landmark className="h-4 w-4" />
            <span>Click Here for GTBank Account Transfer Details (₦5,375 / ₦8,600)</span>
          </button>
        </div>

      </div>
    </section>
  );
}
