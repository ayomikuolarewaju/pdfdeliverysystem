import { useState } from 'react';
import { CheckSquare, Square, ArrowRight, MessageCircle, AlertTriangle } from 'lucide-react';
import { AffiliateConfig } from '../types';
import { getWhatsAppTargetUrl } from '../data/content';

interface PainPointsSectionProps {
  affiliateConfig: AffiliateConfig;
}

export default function PainPointsSection({ affiliateConfig }: PainPointsSectionProps) {
  const [checkedItems, setCheckedItems] = useState<number[]>([0, 1]);

  const toggleCheck = (index: number) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter((i) => i !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  const painPoints = [
    {
      text: 'Are you tired of listening to generic work advice around resume and LinkedIn upgrades that ends up NOT getting you that dream remote global role?',
      subtext: 'You follow cookie-cutter tips, but recruiters never reach out.',
    },
    {
      text: 'You are struggling to find employment opportunities that match your skills in the global job market?',
      subtext: 'You know you can deliver, but you do not know where to look or how to bypass geographic bias.',
    },
    {
      text: 'Do you dream of working remotely with top international organizations and earning a high-paying income in foreign currency?',
      subtext: 'Protecting your livelihood against inflation with stable dollar earnings.',
    },
    {
      text: 'You have invested in undergraduate, master’s, or professional diplomas, yet your career progression feels stuck?',
      subtext: 'You want a direct roadmap rather than accumulating yet another expensive academic degree.',
    },
  ];

  const whatsappUrl = getWhatsAppTargetUrl(
    affiliateConfig,
    `Hello, I resonated with the points on your page and want to join the Remote Work Masterclass. Please send me the registration details.`
  );

  return (
    <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>Honest Self-Assessment</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Is This You?
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            If you check even one of these boxes, you are the exact professional this 3-hour clarity workshop was created for.
          </p>
        </div>

        {/* Interactive Checklist Cards */}
        <div className="space-y-3.5">
          {painPoints.map((item, idx) => {
            const isChecked = checkedItems.includes(idx);
            return (
              <div
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`cursor-pointer rounded-2xl border p-5 sm:p-6 transition-all duration-200 flex items-start gap-4 ${
                  isChecked
                    ? 'border-amber-500/50 bg-slate-900/90 shadow-md shadow-amber-500/5'
                    : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                <div className="pt-0.5 shrink-0 text-amber-400">
                  {isChecked ? (
                    <CheckSquare className="h-6 w-6 text-amber-400" />
                  ) : (
                    <Square className="h-6 w-6 text-slate-600" />
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.text}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conclusion Box */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/40 p-6 text-center space-y-4">
          <p className="text-base sm:text-lg font-bold text-amber-300">
            Then you should listen to Dr. Aderinsola Adio-Adepoju!
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            You do not need more luck. You need strategic positioning and direct guidance from someone who has navigated international remote organizations firsthand.
          </p>
          <div className="pt-2">
            <a
              id="painpoint-whatsapp-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 px-6 py-3 text-sm font-extrabold shadow-md transition"
            >
              <MessageCircle className="h-4 w-4 fill-slate-950" />
              <span>Talk To Us On WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
