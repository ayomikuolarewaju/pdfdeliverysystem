import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Eye, CheckCircle2, ArrowRight, BookMarked, Terminal, Code2, ShieldCheck, Download } from 'lucide-react';
import { BOOK_METADATA } from '../data/bookContent';

interface HeroSectionProps {
  onOpenCheckout: () => void;
  onOpenSample: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout, onOpenSample }) => {
  const [clickedCount, setClickedCount] = useState<number>(0);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleButtonClick = () => {
    const nextCount = clickedCount + 1;
    setClickedCount(nextCount);
    setAlertMessage(`🎉 It works! (Button clicked ${nextCount} time${nextCount > 1 ? 's' : ''})`);
    setTimeout(() => {
      setAlertMessage(null);
    }, 2800);
  };

  return (
    <section id="top" className="relative pt-10 pb-20 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-950/40 via-cyan-950/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative dot matrix pattern from Page 1 of the PDF */}
      <div className="absolute top-8 left-6 md:left-16 opacity-30 pointer-events-none -z-10 hidden sm:grid grid-cols-6 gap-3">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* The Badge from Page 1 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md shadow-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{BOOK_METADATA.badge}</span>
            </div>

            {/* Title from Page 1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              HTML, CSS & JavaScript
              <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                {BOOK_METADATA.subtitle}
              </span>
            </h1>

            {/* Subtitle from Page 1 */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Build real websites from scratch, explained like you're 13 and annotated like a professional.
            </p>

            {/* Key Book Stats Pills */}
            <div className="flex flex-wrap gap-2 pt-1 pb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 border border-slate-700 text-slate-200">
                <BookMarked className="w-3.5 h-3.5 text-cyan-400" /> 76 Comprehensive Pages
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 border border-slate-700 text-slate-200">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" /> 3 Real Capstone Projects
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 border border-slate-700 text-slate-200">
                <Code2 className="w-3.5 h-3.5 text-amber-400" /> 4 Printable Cheat Sheets
              </span>
            </div>

            {/* Pricing & CTA Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800 shadow-2xl backdrop-blur-sm max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Instant PDF & Source Code Access</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-extrabold text-white">2,500</span>
                    <span className="text-sm font-semibold text-emerald-400">One-time purchase</span>
                    <span className="text-xs text-slate-500 line-through">12,000</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Supabase instant verification · Direct PDF download
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                  <button
                    onClick={onOpenCheckout}
                    id="hero-buy-button"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Get PDF for 2,500</span>
                  </button>
                  
                  <button
                    onClick={onOpenSample}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
                  >
                    <Eye className="w-4 h-4 text-slate-400" />
                    <span>Preview</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Instant High-Res PDF + EPUB</span>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Interactive Code Card & Workflow from Page 1 */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Code Terminal matching Page 1 */}
            <div className="rounded-2xl bg-[#0f172a] border border-slate-800 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#1e293b]/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">one button, three languages</span>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-2 py-0.5 rounded bg-slate-900/60 border border-slate-700/50">
                  HTML
                </span>
              </div>

              {/* Code Snippet from Page 1 */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#0a0f1d] space-y-2">
                <div className="text-slate-500">&lt;<span className="text-cyan-400">style</span>&gt;</div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-400">button</span> &#123; <span className="text-amber-300">background</span>: <span className="text-rose-400">tomato</span>; <span className="text-amber-300">color</span>: <span className="text-emerald-300">white</span>; &#125;
                </div>
                <div className="text-slate-500">&lt;/<span className="text-cyan-400">style</span>&gt;</div>

                <div className="pt-2">
                  &lt;<span className="text-cyan-400">button</span> <span className="text-amber-300">id</span>=<span className="text-emerald-300">"hello"</span>&gt;<span className="text-white font-medium">Click me</span>&lt;/<span className="text-cyan-400">button</span>&gt;
                </div>

                <div className="pt-2 text-slate-500">&lt;<span className="text-cyan-400">script</span>&gt;</div>
                <div className="pl-4 text-slate-300">
                  <span className="text-cyan-400">document</span>.<span className="text-indigo-300">querySelector</span>(<span className="text-emerald-300">"#hello"</span>).<span className="text-amber-300">onclick</span> = () =&gt; <span className="text-indigo-300">alert</span>(<span className="text-emerald-300">"It works!"</span>);
                </div>
                <div className="text-slate-500">&lt;/<span className="text-cyan-400">script</span>&gt;</div>
              </div>

              {/* Live Interactive Runner Output */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400">Live Result:</span>
                  <button
                    id="hello"
                    onClick={handleButtonClick}
                    style={{ background: 'tomato', color: 'white' }}
                    className="px-4 py-2 rounded font-medium shadow-md hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                  >
                    Click me
                  </button>
                </div>

                {alertMessage ? (
                  <div className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-md animate-pulse">
                    {alertMessage}
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-500 font-mono">
                    Click button to trigger JavaScript alert!
                  </span>
                )}
              </div>
            </div>

            {/* The 4-Pill House Metaphor from Page 1 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xs font-extrabold text-white">HTML</div>
                <div className="text-[11px] text-cyan-400 font-medium">the skeleton</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xs font-extrabold text-white">CSS</div>
                <div className="text-[11px] text-indigo-400 font-medium">the paint</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xs font-extrabold text-white">JavaScript</div>
                <div className="text-[11px] text-amber-400 font-medium">the electricity</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-indigo-500/40 text-center bg-indigo-950/20">
                <div className="text-xs font-extrabold text-white">Website</div>
                <div className="text-[11px] text-emerald-400 font-medium">the house</div>
              </div>
            </div>

          </div>

        </div>

        {/* The bottom ribbon from Page 1 */}
        <div className="mt-16 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono tracking-widest text-slate-500 uppercase">
          <span>STRUCTURE</span>
          <span className="text-slate-700">·</span>
          <span>STYLE</span>
          <span className="text-slate-700">·</span>
          <span>LAYOUT</span>
          <span className="text-slate-700">·</span>
          <span>LOGIC</span>
          <span className="text-slate-700">·</span>
          <span>DOM</span>
          <span className="text-slate-700">·</span>
          <span>APIS</span>
          <span className="text-slate-700">·</span>
          <span className="text-cyan-400 font-bold">3 PROJECTS</span>
        </div>
      </div>
    </section>
  );
};
