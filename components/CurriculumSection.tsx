import { useState } from 'react';
import { Search, Layers, Compass, MessageSquare, TrendingUp, Map, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { CORE_MODULES, getWhatsAppTargetUrl } from '../data/content';
import { AffiliateConfig } from '../types';

interface CurriculumSectionProps {
  affiliateConfig: AffiliateConfig;
}

export default function CurriculumSection({ affiliateConfig }: CurriculumSectionProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>('01');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return <Search className="h-6 w-6 text-amber-400" />;
      case 'Layers':
        return <Layers className="h-6 w-6 text-amber-400" />;
      case 'Compass':
        return <Compass className="h-6 w-6 text-amber-400" />;
      case 'MessageSquare':
        return <MessageSquare className="h-6 w-6 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="h-6 w-6 text-amber-400" />;
      case 'Map':
        return <Map className="h-6 w-6 text-amber-400" />;
      default:
        return <Search className="h-6 w-6 text-amber-400" />;
    }
  };

  const whatsappUrl = getWhatsAppTargetUrl(
    affiliateConfig,
    `Hello! I reviewed the 6 modules of the Remote Work Masterclass and want to register. Please send payment details.`
  );

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
            Comprehensive 3-Hour Zoom Agenda
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            With My Expertise &amp; Guidance, <br className="hidden sm:block" />
            <span className="text-amber-400">You Will Learn How To:</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A practical, fluff-free curriculum designed to take you from uncertainty to an actionable, high-paying remote job plan.
          </p>
        </div>

        {/* 6 Modules Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CORE_MODULES.map((module) => {
            const isExpanded = expandedModule === module.number;
            return (
              <div
                key={module.number}
                className={`flex flex-col justify-between rounded-3xl border p-6 sm:p-7 transition-all duration-200 ${
                  isExpanded
                    ? 'border-amber-500/50 bg-slate-900/90 shadow-xl shadow-amber-500/5'
                    : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs font-black text-amber-400">
                      {module.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800/80 border border-slate-700">
                      {getIcon(module.icon)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {module.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {module.summary}
                  </p>
                </div>

                <div>
                  {/* Toggle takeaways */}
                  <button
                    onClick={() =>
                      setExpandedModule(isExpanded ? null : module.number)
                    }
                    className="flex w-full items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                  >
                    <span>{isExpanded ? 'Hide Key Takeaways' : 'View Key Takeaways'}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>

                  {isExpanded && (
                    <ul className="mt-3 space-y-2 text-xs text-slate-300 border-t border-slate-800/60 pt-3">
                      {module.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <a
            id="curriculum-enroll-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 hover:bg-amber-400 px-8 py-4 text-sm sm:text-base font-extrabold text-slate-950 shadow-lg shadow-amber-500/20 transition"
          >
            <span>Start My Remote Work Journey (₦5,375 / $7)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
