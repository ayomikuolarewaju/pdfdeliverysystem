import React, { useState } from 'react';
import { Layers, Sliders, Calculator, Play, CheckCircle2, RotateCcw } from 'lucide-react';

export const InteractivePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'box-model' | 'specificity' | 'array-methods'>('box-model');

  // Box Model State
  const [margin, setMargin] = useState<number>(24);
  const [border, setBorder] = useState<number>(4);
  const [padding, setPadding] = useState<number>(20);
  const [isBorderBox, setIsBorderBox] = useState<boolean>(true);

  // Specificity State
  const [selectorInput, setSelectorInput] = useState<string>('nav .card a:hover');

  // Specificity calculation logic
  const calculateSpecificity = (sel: string) => {
    let ids = (sel.match(/#[a-zA-Z0-9_-]+/g) || []).length;
    let classesAndPseudo = (sel.match(/(\.[a-zA-Z0-9_-]+|:[a-zA-Z0-9_-]+|\[[^\]]+\])/g) || []).length;
    // rough estimate for tags
    let tags = (sel.match(/(^|\s|>|\+)([a-zA-Z0-9]+)/g) || []).length;
    const score = ids * 100 + classesAndPseudo * 10 + tags * 1;
    return { ids, classesAndPseudo, tags, score };
  };
  const specResults = calculateSpecificity(selectorInput);

  // Array Methods State (from Page 43 of book)
  const initialScores = [45, 82, 67, 91, 30];
  const [scores] = useState<number[]>(initialScores);
  const [arrayAction, setArrayAction] = useState<'original' | 'map' | 'filter' | 'find' | 'reduce'>('original');

  let arrayResult: any = scores;
  let arrayCodeSnippet = `const scores = [45, 82, 67, 91, 30];`;

  if (arrayAction === 'map') {
    arrayResult = scores.map((s) => s * 2);
    arrayCodeSnippet = `const doubled = scores.map((s) => s * 2);\n// Result: [${arrayResult.join(', ')}]`;
  } else if (arrayAction === 'filter') {
    arrayResult = scores.filter((s) => s >= 50);
    arrayCodeSnippet = `const passed = scores.filter((s) => s >= 50);\n// Result: [${arrayResult.join(', ')}]`;
  } else if (arrayAction === 'find') {
    arrayResult = scores.find((s) => s >= 90);
    arrayCodeSnippet = `const first90 = scores.find((s) => s >= 90);\n// Result: ${arrayResult}`;
  } else if (arrayAction === 'reduce') {
    arrayResult = scores.reduce((sum, s) => sum + s, 0);
    arrayCodeSnippet = `const total = scores.reduce((sum, s) => sum + s, 0);\n// Result: ${arrayResult}`;
  }

  return (
    <section id="playground" className="py-20 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Live Labs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Try the Lessons in Real Time
          </h2>
          <p className="text-base text-slate-400">
            Test the exact visual explanations found in the guide right in your browser.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-10 flex justify-center">
          <div className="p-1 bg-slate-900 border border-slate-800 rounded-xl inline-flex gap-1">
            <button
              onClick={() => setActiveTab('box-model')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'box-model'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. The Box Model (Page 23)
            </button>
            <button
              onClick={() => setActiveTab('specificity')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'specificity'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2. Specificity Ranker (Page 22)
            </button>
            <button
              onClick={() => setActiveTab('array-methods')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'array-methods'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3. 5 Array Methods (Page 43)
            </button>
          </div>
        </div>

        {/* Lab Content Card */}
        <div className="mt-8 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0e1626] to-slate-900 border border-slate-800 shadow-2xl">
          
          {/* TAB 1: Box Model */}
          {activeTab === 'box-model' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">The Box Model: Everything is a Box</h3>
                  <p className="text-xs text-slate-400">
                    4 nested layers: Margin (outside), Border, Padding (inside), Content.
                  </p>
                </div>
                <label className="flex items-center gap-2 cursor-pointer bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-medium text-slate-200">
                  <input
                    type="checkbox"
                    checked={isBorderBox}
                    onChange={(e) => setIsBorderBox(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>box-sizing: border-box</span>
                </label>
              </div>

              {/* Interactive Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs font-mono text-amber-400">
                    <span>Margin: {margin}px</span>
                    <span className="text-slate-500">(space outside)</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={margin}
                    onChange={(e) => setMargin(Number(e.target.value))}
                    className="w-full mt-2 accent-amber-500"
                  />
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs font-mono text-rose-400">
                    <span>Border: {border}px</span>
                    <span className="text-slate-500">(edge itself)</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="16"
                    value={border}
                    onChange={(e) => setBorder(Number(e.target.value))}
                    className="w-full mt-2 accent-rose-500"
                  />
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs font-mono text-emerald-400">
                    <span>Padding: {padding}px</span>
                    <span className="text-slate-500">(breathing room)</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="40"
                    value={padding}
                    onChange={(e) => setPadding(Number(e.target.value))}
                    className="w-full mt-2 accent-emerald-500"
                  />
                </div>
              </div>

              {/* Visual Box Container */}
              <div className="p-6 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-center min-h-[260px] overflow-hidden">
                <div
                  style={{ margin: `${margin}px` }}
                  className="bg-amber-500/10 border-2 border-dashed border-amber-500/40 rounded-xl p-2 transition-all text-center"
                >
                  <span className="text-[10px] font-mono uppercase text-amber-400 block pb-1">
                    MARGIN ({margin}px)
                  </span>

                  <div
                    style={{
                      borderWidth: `${border}px`,
                      borderColor: '#f43f5e',
                      borderStyle: 'solid',
                      padding: `${padding}px`,
                    }}
                    className="bg-emerald-500/10 rounded-lg transition-all"
                  >
                    <span className="text-[10px] font-mono uppercase text-emerald-400 block pb-1">
                      PADDING ({padding}px)
                    </span>

                    <div className="bg-indigo-600/30 border border-indigo-400/40 rounded px-6 py-4 text-center">
                      <div className="text-xs font-bold text-white font-mono">CONTENT</div>
                      <div className="text-[10px] text-cyan-300 font-mono">
                        {isBorderBox ? 'Included in Box Width' : 'Adds on top of Width'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-mono text-center">
                ★ KEY LESSON FROM PAGE 24: With <code className="text-cyan-300">box-sizing: border-box</code>, your padding and border never blow up the designated container width!
              </p>
            </div>
          )}

          {/* TAB 2: Specificity Ranker */}
          {activeTab === 'specificity' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-white">CSS Specificity Calculator (Page 22)</h3>
                <p className="text-xs text-slate-400">
                  Head Teacher (ID = 100) vs Prefect (Class = 10) vs Student (Tag = 1).
                </p>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-2">
                  Type any CSS selector to test its score:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={selectorInput}
                    onChange={(e) => setSelectorInput(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-sm focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. .card:hover, #logo p, nav a"
                  />
                  <button
                    onClick={() => setSelectorInput('#navbar .menu-item a:hover')}
                    className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
                  >
                    Load Sample
                  </button>
                </div>
              </div>

              {/* Breakdown Cards */}
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-800/40">
                  <div className="text-xs text-indigo-400 font-mono">Inline Styles</div>
                  <div className="text-2xl font-black text-white font-mono mt-1">0</div>
                  <div className="text-[10px] text-slate-500 font-mono">1000 pts</div>
                </div>
                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40">
                  <div className="text-xs text-cyan-400 font-mono">IDs (#logo)</div>
                  <div className="text-2xl font-black text-cyan-300 font-mono mt-1">{specResults.ids}</div>
                  <div className="text-[10px] text-slate-500 font-mono">100 pts each</div>
                </div>
                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40">
                  <div className="text-xs text-amber-400 font-mono">Classes / Pseudo</div>
                  <div className="text-2xl font-black text-amber-300 font-mono mt-1">{specResults.classesAndPseudo}</div>
                  <div className="text-[10px] text-slate-500 font-mono">10 pts each</div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40">
                  <div className="text-xs text-emerald-400 font-mono">Elements (p, h1)</div>
                  <div className="text-2xl font-black text-emerald-300 font-mono mt-1">{specResults.tags}</div>
                  <div className="text-[10px] text-slate-500 font-mono">1 pt each</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-sm text-slate-300">Total Calculated Specificity Score:</span>
                <span className="text-2xl font-mono font-black text-indigo-400">
                  {specResults.score} points
                </span>
              </div>
            </div>
          )}

          {/* TAB 3: 5 Array Methods */}
          {activeTab === 'array-methods' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-white">JavaScript: The 5 Essential Array Methods (Page 43)</h3>
                <p className="text-xs text-slate-400">
                  "The real power is in the array methods that loop for you. Learn these five."
                </p>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 mb-2">Original Scores Array:</div>
                <div className="flex gap-2">
                  {scores.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 font-mono text-sm text-cyan-300 font-bold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setArrayAction('map')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    arrayAction === 'map' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  .map(s =&gt; s * 2)
                </button>
                <button
                  onClick={() => setArrayAction('filter')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    arrayAction === 'filter' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  .filter(s =&gt; s &gt;= 50)
                </button>
                <button
                  onClick={() => setArrayAction('find')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    arrayAction === 'find' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  .find(s =&gt; s &gt;= 90)
                </button>
                <button
                  onClick={() => setArrayAction('reduce')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    arrayAction === 'reduce' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  .reduce((sum, s) =&gt; sum + s, 0)
                </button>
                <button
                  onClick={() => setArrayAction('original')}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Code output display */}
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-emerald-400 overflow-x-auto">
                {arrayCodeSnippet}
              </pre>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
