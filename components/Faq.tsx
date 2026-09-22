type Item = { q: string; a: string };

/** Accordion built from native <details>, so it needs no client JavaScript. */
export default function Faq({ items }: { items: Item[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="grid size-7 shrink-0 place-items-center rounded-full bg-slate-100 text-lg leading-none text-slate-600 transition group-open:rotate-45 group-open:bg-amber-100 group-open:text-amber-700"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
