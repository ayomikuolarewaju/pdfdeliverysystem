import React from 'react';
import { Sparkles, AlertTriangle, Play, HelpCircle, Flame, ChefHat, School, Home, Compass } from 'lucide-react';
import { CORE_PILLARS } from '../data/bookContent';

export const AnalogyShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-[#090d16] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>The Pedagogical Breakthrough</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            "Explained like you're 13, annotated like a pro."
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Instead of dry, academic computer science jargon, this guide translates abstract programming concepts into physical pictures and everyday metaphors you will never forget.
          </p>
        </div>

        {/* The 3 Core Everyday Analogies */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Analogy 1: The House */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">Page 2 & 7 Metaphor</span>
              <h3 className="text-xl font-bold text-white mt-1">A Website is a House</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-cyan-400">HTML</strong> is the skeleton: walls, doors, and rooms. <strong className="text-indigo-400">CSS</strong> is the paint, furniture, and floor plan: how it all looks. <strong className="text-amber-400">JavaScript</strong> is the electricity and plumbing: lights switch on, doorbells ring.
            </p>
          </div>

          {/* Analogy 2: Specificity School Hierarchy */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <School className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Page 23 Metaphor</span>
              <h3 className="text-xl font-bold text-white mt-1">The CSS School Hierarchy</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              CSS Specificity is like rank in a school. An element selector (<code className="text-cyan-300">p</code>) is a student. A class (<code className="text-cyan-300">.note</code>) is a prefect. An ID (<code className="text-cyan-300">#logo</code>) is the head teacher. The head teacher instruction always wins.
            </p>
          </div>

          {/* Analogy 3: The Restaurant Chef Event Loop */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Page 55 Metaphor</span>
              <h3 className="text-xl font-bold text-white mt-1">The Restaurant Chef Event Loop</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              JavaScript has one chef (it does one thing at a time). When a dish needs the oven for 20 minutes, the chef doesn't stand and stare. The timer (a helper) watches the oven while the chef cooks. When it rings, it joins the task queue.
            </p>
          </div>

        </div>

        {/* The 5 Signature Annotation Callouts (Directly from Page 2 of the Guide) */}
        <div className="mt-16 bg-[#0c121e] rounded-2xl border border-slate-800 p-6 sm:p-8">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-white">
              The 5 Signature Visual Study Callouts
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Every page uses consistent visual signaling so you know immediately what to memorize, what trap to avoid, and what code to run.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Callout 1 */}
            <div className="p-4 rounded-xl bg-indigo-950/20 border-l-4 border-indigo-500 border-y border-r border-slate-800/80">
              <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-black tracking-wider">
                <span>★</span> KEY IDEA
              </div>
              <p className="text-xs text-slate-300 mt-1.5">
                The big ideas. If you remember nothing else on a page, remember these.
              </p>
            </div>

            {/* Callout 2 */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border-l-4 border-emerald-500 border-y border-r border-slate-800/80">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-black tracking-wider">
                <span>◆</span> THINK OF IT LIKE THIS
              </div>
              <p className="text-xs text-slate-300 mt-1.5">
                An everyday comparison that makes an abstract concept instantly obvious.
              </p>
            </div>

            {/* Callout 3 */}
            <div className="p-4 rounded-xl bg-rose-950/20 border-l-4 border-rose-500 border-y border-r border-slate-800/80">
              <div className="flex items-center gap-1.5 text-rose-400 text-xs font-black tracking-wider">
                <span>⚠</span> WATCH OUT
              </div>
              <p className="text-xs text-slate-300 mt-1.5">
                Common mistakes and traps that catch almost every beginner before they start.
              </p>
            </div>

            {/* Callout 4 */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border-l-4 border-cyan-500 border-y border-r border-slate-800/80">
              <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-black tracking-wider">
                <span>▶</span> TRY IT
              </div>
              <p className="text-xs text-slate-300 mt-1.5">
                A short hands-on task. Do it right away in VS Code. Reading alone will not make it stick.
              </p>
            </div>

            {/* Callout 5 */}
            <div className="p-4 rounded-xl bg-amber-950/20 border-l-4 border-amber-500 border-y border-r border-slate-800/80">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-black tracking-wider">
                <span>✦</span> BEYOND THE LESSON
              </div>
              <p className="text-xs text-slate-300 mt-1.5">
                Extra notes added by senior engineers: modern best practice, accessibility, and what's next.
              </p>
            </div>

            {/* Callout 6 */}
            <div className="p-4 rounded-xl bg-slate-900 border-l-4 border-emerald-400 border-y border-r border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px] flex items-center justify-center">
                  1
                </span>
                <span className="text-xs font-black tracking-wider text-emerald-400">
                  GREEN NUMBERED BUBBLES
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1.5">
                Bubbles in every code block point directly to the exact explanation listed right below it.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
