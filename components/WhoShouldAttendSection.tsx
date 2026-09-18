import { Users, GraduationCap, Building, Sparkles, CheckCircle2, DollarSign, Target, ShieldCheck } from 'lucide-react';
import { MASTERCLASS_META, getWhatsAppTargetUrl } from '../data/content';
import { AffiliateConfig } from '../types';

interface WhoShouldAttendSectionProps {
  affiliateConfig: AffiliateConfig;
  onOpenBankModal: () => void;
}

export default function WhoShouldAttendSection({
  affiliateConfig,
  onOpenBankModal,
}: WhoShouldAttendSectionProps) {
  const { pricing } = MASTERCLASS_META;

  const targetAudience = [
    {
      title: 'Experienced Professionals',
      desc: 'Looking for flexible, remote work to earn in dollars and protect household income against inflation.',
      icon: Building,
    },
    {
      title: 'Graduates & Job Seekers',
      desc: 'Tired of the generic advice around resume tweaks that never translates to actual interviews.',
      icon: GraduationCap,
    },
    {
      title: 'Academics & Researchers',
      desc: 'Desiring to leverage their subject expertise, research grants, and international fellowships.',
      icon: Target,
    },
    {
      title: 'Founders & Career Changers',
      desc: 'Needing a proven transition blueprint to pivot into high-paying remote roles without starting from scratch.',
      icon: Users,
    },
  ];

  const whyAttend = [
    {
      title: 'Affordable and High-Impact',
      desc: `Gain career insights that can open doors to global markets for just ${pricing.single.naira} ($7 USD). The ROI of landing a single remote role is over 100x this small investment.`,
      icon: DollarSign,
    },
    {
      title: 'Proven Pathway to Success',
      desc: 'Get expert insights and step-by-step guidance tested across 400+ professionals in 12+ countries, rather than relying on unverified internet theories.',
      icon: ShieldCheck,
    },
    {
      title: 'Direct Zoom Interaction & Q&A',
      desc: 'Ask your specific career transition questions during the dedicated live session and get actionable answers tailored to your reality.',
      icon: Sparkles,
    },
  ];

  const whatsappUrl = getWhatsAppTargetUrl(
    affiliateConfig,
    `Hello! I want to confirm my registration for the Remote Work Masterclass. Please send access details.`
  );

  return (
    <section className="py-16 sm:py-24 bg-slate-900/60 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Who Should Attend */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
            Target Audience
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Who Should Attend?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Built for ambitious Africans who refuse to settle for underemployment and are ready to claim their space on the global stage.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {targetAudience.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-slate-800 bg-slate-950 p-6 space-y-3 hover:border-amber-500/40 transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Part 2: Why Attend */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
            Strategic Value
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Attend This 3-Hour Session?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Get clarity before investing months or years in the wrong direction.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-12">
          {whyAttend.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-7 space-y-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="text-center flex flex-wrap items-center justify-center gap-4">
          <a
            id="attend-whatsapp-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 px-7 py-3.5 text-sm sm:text-base font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 transition"
          >
            <span>Register Now ({pricing.single.naira} / {pricing.single.dollar})</span>
          </a>
          <button
            id="attend-bank-btn"
            onClick={onOpenBankModal}
            className="rounded-2xl border border-slate-700 bg-slate-800 hover:bg-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-200 transition"
          >
            Bank Transfer Details
          </button>
        </div>

      </div>
    </section>
  );
}
