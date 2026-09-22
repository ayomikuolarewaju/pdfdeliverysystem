import React, { useState } from 'react';
import { FileText, Download, Check, Star, BookOpen, Quote, Shield, Layers } from 'lucide-react';
import { TESTIMONIALS } from '../data/bookContent';

export const BookSpecsAndCheatSheets: React.FC = () => {
  const [activeSheet, setActiveSheet] = useState<'html' | 'css' | 'js' | 'troubleshooting'>('html');

  return (
    <section id="cheatsheets" className="py-20 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>Appendices & Quick Lookups</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Printable Cheat Sheets & Troubleshooting
          </h2>
          <p className="text-base text-slate-400">
            The tags, properties, and syntax patterns you look up 95% of the time, condensed into clean desk reference sheets.
          </p>
        </div>

        {/* Cheat Sheet Interactive Preview */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#0f172a] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          {/* Header tabs */}
          <div className="p-3 bg-slate-900 border-b border-slate-800 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSheet('html')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeSheet === 'html' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Appendix B: HTML Cheat Sheet (p.72)
            </button>
            <button
              onClick={() => setActiveSheet('css')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeSheet === 'css' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Appendix C: CSS Cheat Sheet (p.73)
            </button>
            <button
              onClick={() => setActiveSheet('js')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeSheet === 'js' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Appendix D: JS Cheat Sheet (p.74)
            </button>
            <button
              onClick={() => setActiveSheet('troubleshooting')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeSheet === 'troubleshooting' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Appendix A: Troubleshooting (p.70)
            </button>
          </div>

          {/* Table display */}
          <div className="p-6 overflow-x-auto text-xs sm:text-sm">
            {activeSheet === 'html' && (
              <table className="w-full text-left font-mono">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-400 text-xs uppercase">
                    <th className="py-2.5 px-3">Purpose</th>
                    <th className="py-2.5 px-3">Essential Tags</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Page skeleton</td>
                    <td className="py-2.5 px-3 text-cyan-300">&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;body&gt; &lt;title&gt; &lt;meta&gt; &lt;link&gt; &lt;script&gt;</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Headings & text</td>
                    <td className="py-2.5 px-3 text-cyan-300">&lt;h1&gt;–&lt;h6&gt; &lt;p&gt; &lt;strong&gt; &lt;em&gt; &lt;br&gt; &lt;hr&gt; &lt;blockquote&gt; &lt;code&gt; &lt;pre&gt;</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Page structure</td>
                    <td className="py-2.5 px-3 text-cyan-300">&lt;header&gt; &lt;nav&gt; &lt;main&gt; &lt;section&gt; &lt;article&gt; &lt;aside&gt; &lt;footer&gt; &lt;div&gt; &lt;span&gt;</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Forms & inputs</td>
                    <td className="py-2.5 px-3 text-cyan-300">&lt;form&gt; &lt;label&gt; &lt;input&gt; &lt;textarea&gt; &lt;select&gt; &lt;option&gt; &lt;button&gt;</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Interactive</td>
                    <td className="py-2.5 px-3 text-cyan-300">&lt;details&gt; &lt;summary&gt; &lt;dialog&gt;</td>
                  </tr>
                </tbody>
              </table>
            )}

            {activeSheet === 'css' && (
              <table className="w-full text-left font-mono">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-400 text-xs uppercase">
                    <th className="py-2.5 px-3">I want to...</th>
                    <th className="py-2.5 px-3">CSS Properties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Change text & typography</td>
                    <td className="py-2.5 px-3 text-indigo-300">font-family, font-size, font-weight, line-height, text-align, letter-spacing</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Space & size boxes</td>
                    <td className="py-2.5 px-3 text-indigo-300">margin, padding, gap, width, height, max-width, min-height, aspect-ratio, box-sizing: border-box</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Line things up in 1D</td>
                    <td className="py-2.5 px-3 text-indigo-300">display: flex, justify-content, align-items, flex-direction, flex-wrap, gap</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Grid layout in 2D</td>
                    <td className="py-2.5 px-3 text-indigo-300">display: grid, grid-template-columns: repeat(3, 1fr), grid-template-areas, gap</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Micro-interactions</td>
                    <td className="py-2.5 px-3 text-indigo-300">transition: transform 0.2s, transform: translateY(-3px), @keyframes, animation</td>
                  </tr>
                </tbody>
              </table>
            )}

            {activeSheet === 'js' && (
              <table className="w-full text-left font-mono">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-400 text-xs uppercase">
                    <th className="py-2.5 px-3">Category</th>
                    <th className="py-2.5 px-3">Quick Syntax Lookup</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Variables & functions</td>
                    <td className="py-2.5 px-3 text-amber-300">const a = 1; let b = 2; const add = (x, y) =&gt; x + y;</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Arrays & Iteration</td>
                    <td className="py-2.5 px-3 text-amber-300">items.map(fn) · items.filter(fn) · items.find(fn) · items.reduce(fn, 0) · [...items, newItem]</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">DOM Manipulation</td>
                    <td className="py-2.5 px-3 text-amber-300">document.querySelector(".card") · el.textContent = "Hi" · el.classList.toggle("open")</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Async HTTP fetch</td>
                    <td className="py-2.5 px-3 text-amber-300">const res = await fetch(url); if (!res.ok) throw new Error(); const data = await res.json();</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Persistent Storage</td>
                    <td className="py-2.5 px-3 text-amber-300">localStorage.setItem("k", JSON.stringify(v)); JSON.parse(localStorage.getItem("k")) ?? []</td>
                  </tr>
                </tbody>
              </table>
            )}

            {activeSheet === 'troubleshooting' && (
              <table className="w-full text-left font-mono">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-400 text-xs uppercase">
                    <th className="py-2.5 px-3">Symptom</th>
                    <th className="py-2.5 px-3">Likely Cause</th>
                    <th className="py-2.5 px-3">Instant Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-rose-300">My CSS does nothing</td>
                    <td className="py-2.5 px-3 text-slate-400">Path error or missing semicolon/brace above rule</td>
                    <td className="py-2.5 px-3 text-emerald-300">Check &lt;link href="style.css"&gt; in DevTools Network tab</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-rose-300">Cannot read properties of null</td>
                    <td className="py-2.5 px-3 text-slate-400">querySelector found nothing (selector typo or runs before HTML)</td>
                    <td className="py-2.5 px-3 text-emerald-300">Add <code className="text-cyan-300">defer</code> to script tag and verify selector #/.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-rose-300">Numbers glue together ("51")</td>
                    <td className="py-2.5 px-3 text-slate-400">One side is a string, so + concatenates instead of adding</td>
                    <td className="py-2.5 px-3 text-emerald-300">Wrap with <code className="text-cyan-300">Number(value)</code></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-rose-300">Data gone after refresh</td>
                    <td className="py-2.5 px-3 text-slate-400">Variables reset on page reload</td>
                    <td className="py-2.5 px-3 text-emerald-300">Store in <code className="text-cyan-300">localStorage</code> with JSON.stringify</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">
              Loved by Students, Switchers & Beginners
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Real feedback from learners who went from zero code to building their first live websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between space-y-4 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 font-bold text-white text-xs flex items-center justify-center shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-[11px] text-slate-400">{t.role}</div>
                    <div className="text-[10px] text-cyan-400 font-medium mt-0.5">{t.projectCompleted}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
