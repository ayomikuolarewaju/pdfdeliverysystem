import { Gift, Users, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { MASTERCLASS_BONUSES, getWhatsAppTargetUrl } from '../data/content';
import { AffiliateConfig } from '../types';

interface BonusesSectionProps {
  affiliateConfig: AffiliateConfig;
}

export default function BonusesSection({ affiliateConfig }: BonusesSectionProps) {
  const getBonusIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="h-6 w-6 text-amber-400" />;
      case 1:
        return <FileText className="h-6 w-6 text-amber-400" />;
      case 2:
        return <Gift className="h-6 w-6 text-amber-400" />;
      default:
        return <Gift className="h-6 w-6 text-amber-400" />;
    }
  };

  const whatsappUrl = getWhatsAppTargetUrl(
    affiliateConfig,
    `Hello, I would like to register for the Remote Work Masterclass and unlock the ₦50,000 bonuses. Please send me details.`
  );

  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Gift className="h-3.5 w-3.5" />
            <span>Fast Action Enrollment Package</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Unlock Bonuses Worth <span className="text-amber-400">₦50,000</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            As a special thank you for taking action today, you will receive these 3 premium resources completely free with your masterclass ticket.
          </p>
        </div>

        {/* 3 Bonus Cards */}
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {MASTERCLASS_BONUSES.map((bonus, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-7 shadow-xl hover:border-amber-500/40 transition"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {bonus.number}
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    {bonus.value}
                  </span>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/80 border border-slate-700">
                  {getBonusIcon(idx)}
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {bonus.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-amber-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Included Free With Ticket</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            id="bonuses-cta-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 hover:bg-amber-400 px-7 py-3.5 text-sm sm:text-base font-extrabold text-slate-950 shadow-lg shadow-amber-500/20 transition"
          >
            <span>Claim Bonuses &amp; Secure Your Spot (₦5,375)</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
