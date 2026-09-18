import { useState } from 'react';
import { Quote, Star, CheckCircle, ChevronRight, ZoomIn } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

interface TestimonialsSectionProps {
  onOpenLightbox: (imageUrl: string, title?: string, caption?: string) => void;
}

export default function TestimonialsSection({
  onOpenLightbox,
}: TestimonialsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'graduates' | 'professionals'>('all');

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Star className="h-3.5 w-3.5 fill-amber-400" />
            <span>Real Lives Transformed</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Impact Stories &amp; Career Breakthroughs
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Read how past students moved beyond paper degrees, acquired clarity, and positioned themselves for legitimate international employment.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7 shadow-xl hover:border-slate-700 transition space-y-5"
            >
              <div className="space-y-4">
                {/* Profile Header */}
                <div className="flex items-center gap-3.5">
                  <div
                    onClick={() =>
                      onOpenLightbox(t.image, t.name, `${t.role} • ${t.highlight}`)
                    }
                    className="group relative cursor-pointer h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-amber-500/40 bg-slate-800"
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-full w-full object-cover transition group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <ZoomIn className="h-4 w-4 text-amber-400" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-xs text-amber-400 mt-0.5">{t.role}</p>
                    {t.badge && (
                      <span className="inline-block mt-1 text-[10px] font-semibold bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                        {t.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Highlight banner */}
                <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 text-xs font-semibold text-amber-300">
                  {t.highlight}
                </div>

                {/* Quote body */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>Verified iTrain Africa Alumni</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
