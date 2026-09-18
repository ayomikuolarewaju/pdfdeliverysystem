import { useState } from 'react';
import { ZoomIn, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { WHATSAPP_PROOFS } from '../data/content';

interface WhatsAppScreenshotsSectionProps {
  onOpenLightbox: (imageUrl: string, title?: string, caption?: string) => void;
}

export default function WhatsAppScreenshotsSection({
  onOpenLightbox,
}: WhatsAppScreenshotsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'offers' | 'clarity'>('all');

  return (
    <section id="whatsapp-proof" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <MessageSquare className="h-3.5 w-3.5 fill-emerald-400" />
            <span>Unfiltered WhatsApp Messages</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            4,290+ Africans Have Joined RWM
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Real reactions, breakthroughs, and job offers shared directly in our WhatsApp cohorts. Tap any screenshot to inspect in full resolution.
          </p>
        </div>

        {/* Masonry-style Grid of Real WhatsApp Screenshots */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHATSAPP_PROOFS.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item.src, item.title, item.caption)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-lg transition-all duration-300 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl bg-slate-900 aspect-[9/14]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Overlay hover prompt */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100 p-4 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-slate-950 shadow-lg">
                    <ZoomIn className="h-6 w-6" />
                  </div>
                  <span className="mt-3 text-xs font-extrabold text-white">
                    Tap to View Full Screenshot
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-3">
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h4>
                <p className="mt-1 text-[11px] text-slate-400 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust footer */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>100% Genuine Participant Messages</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Heart className="h-4 w-4 text-rose-400" />
            <span>Over 6 Years of Proven Career Transformations</span>
          </span>
        </div>

      </div>
    </section>
  );
}
