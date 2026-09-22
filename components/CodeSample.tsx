function Bubble({ n }: { n: number }) {
  return (
    <span className="ml-3 inline-grid size-5 place-items-center rounded-full bg-emerald-500 font-heading text-[11px] font-semibold text-white">
      {n}
    </span>
  );
}

const notes = [
  "Find the button on the page.",
  "When it is clicked, run this function.",
  "Change the text. The page updates instantly.",
];

/** A tiny taste of the numbered, annotated code style used throughout the guide. */
export default function CodeSample() {
  return (
    <div className="overflow-hidden rounded-2xl bg-slate-950 shadow-2xl ring-1 ring-white/10">
      <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-4 py-3">
        <span className="size-3 rounded-full bg-rose-400" />
        <span className="size-3 rounded-full bg-amber-400" />
        <span className="size-3 rounded-full bg-emerald-400" />
        <span className="ml-3 font-mono text-xs text-slate-400">script.js</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-slate-200">
        <code>
          <span className="block">
            <span className="text-violet-300">const</span> btn <span className="text-slate-400">=</span>{" "}
            <span className="text-sky-300">document.querySelector</span>(<span className="text-emerald-300">&quot;#btn&quot;</span>);
            <Bubble n={1} />
          </span>
          <span className="block">
            <span className="text-violet-300">let</span> count <span className="text-slate-400">=</span>{" "}
            <span className="text-orange-300">0</span>;
          </span>
          <span className="block">&nbsp;</span>
          <span className="block">
            btn.<span className="text-sky-300">addEventListener</span>(<span className="text-emerald-300">&quot;click&quot;</span>, () =&gt; {"{"}
            <Bubble n={2} />
          </span>
          <span className="block">&nbsp;&nbsp;count++;</span>
          <span className="block">
            &nbsp;&nbsp;btn.textContent <span className="text-slate-400">=</span>{" "}
            <span className="text-emerald-300">{"`Clicked ${count} times`"}</span>;
            <Bubble n={3} />
          </span>
          <span className="block">{"});"}</span>
        </code>
      </pre>
      <ol className="space-y-2 border-t border-white/10 bg-slate-900/60 px-5 py-4">
        {notes.map((note, i) => (
          <li key={note} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="mt-0.5 inline-grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500 font-heading text-[11px] font-semibold text-white">
              {i + 1}
            </span>
            {note}
          </li>
        ))}
      </ol>
    </div>
  );
}
