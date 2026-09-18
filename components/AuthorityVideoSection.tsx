import { useState } from 'react';
import { Play, Globe2, ShieldCheck, CheckCircle2, Award, ExternalLink, Sparkles } from 'lucide-react';
import { MASTERCLASS_META } from '../data/content';

export default function AuthorityVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { youtubeVideoId, heroBannerImage, instructorHeadshot } = MASTERCLASS_META;

  return (
    <section id="video-proof" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Credibility &amp; Media Appearance</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Should You Listen To Me?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            As someone who has worked remotely with the <strong className="text-amber-400">Museum for the United Nations (UN Live)</strong> and the <strong className="text-amber-400">Natural History Museum of London (NHM)</strong>, I have spent 6 years helping 400+ professionals across 12+ countries break into the global remote job market.
          </p>
        </div>

        {/* Channels TV Video Featured Box */}
        <div className="mx-auto max-w-4xl rounded-3xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl">
          
          {/* Header Bar */}
          <div className="bg-slate-800/90 border-b border-slate-700 px-5 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-red-500 animate-ping" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                Channels Television Live Interview
              </span>
            </div>
            <div className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
              <span>Feature: Why Africans Don&apos;t Get Hired Despite Technical Skills</span>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video w-full bg-black">
            {!isPlaying ? (
              <div className="relative h-full w-full">
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                  alt="Channels Television Interview with Dr. Aderinsola Adio-Adepoju"
                  className="h-full w-full object-cover opacity-85"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/40 to-black/20" />

                {/* Big Play Button */}
                <button
                  id="play-channels-tv-video"
                  onClick={() => setIsPlaying(true)}
                  className="group absolute inset-0 flex flex-col items-center justify-center p-4 text-center cursor-pointer"
                  aria-label="Play video interview"
                >
                  <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-amber-500 text-slate-950 shadow-2xl shadow-amber-500/50 transition duration-300 group-hover:scale-110 group-hover:bg-amber-400">
                    <Play className="h-9 w-9 sm:h-11 sm:w-11 fill-slate-950 translate-x-1" />
                  </div>
                  <span className="mt-4 rounded-full bg-slate-900/90 px-4 py-1.5 text-xs sm:text-sm font-bold text-white border border-slate-700 shadow-md">
                    Click to Watch Channels TV Interview (Dr. Aderinsola Adio-Adepoju)
                  </span>
                </button>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title="Channels Television Feature - Dr. Aderinsola Adio-Adepoju"
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          {/* Video Callout Bar */}
          <div className="p-5 sm:p-6 bg-slate-900/90 border-t border-slate-800 space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Key Insight From Channels TV: The Employability Deficit
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dr. Aderinsola explains on Channels TV why African job applicants with world-class engineering, accounting, and academic skills repeatedly miss out on foreign contracts: <em>the gap is not talent, but the clarity of communicating workplace value, global positioning, and modern remote collaboration.</em>
            </p>
          </div>
        </div>

        {/* 3 Metric Cards Under Video */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 text-center space-y-2">
            <div className="text-3xl font-black text-amber-400">400+</div>
            <div className="text-xs font-bold uppercase text-slate-300">Professionals Mentored</div>
            <p className="text-xs text-slate-400">
              Across 12+ countries placed in international remote, hybrid, and grant-funded positions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 text-center space-y-2">
            <div className="text-3xl font-black text-emerald-400">$700,000+</div>
            <div className="text-xs font-bold uppercase text-slate-300">Earnings &amp; Grants Secured</div>
            <p className="text-xs text-slate-400">
              Direct value unlocked for African professionals, interns, and academic fellows worldwide.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 text-center space-y-2">
            <div className="text-3xl font-black text-amber-400">UN &amp; NHM London</div>
            <div className="text-xs font-bold uppercase text-slate-300">Global Remote Credentials</div>
            <p className="text-xs text-slate-400">
              Direct remote project leadership with the Museum for the United Nations &amp; NHM London.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
