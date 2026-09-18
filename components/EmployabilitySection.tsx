import { GraduationCap, Briefcase, Award, XCircle, CheckCircle2, TrendingUp } from 'lucide-react';

export default function EmployabilitySection() {
  return (
    <section id="why-attend" className="py-16 sm:py-20 bg-slate-900/60 border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
            The Fundamental Reality
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Employability Is The Goal, <span className="text-amber-400">Not Certification!</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
            Dear professionals who desire global work opportunities and keep acquiring more degrees: global employers are not looking for wall paper credentials—they pay for practical problem solving.
          </p>
        </div>

        {/* The Equation Card */}
        <div className="mb-10 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 text-center shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm sm:text-lg font-bold">
            <div className="flex items-center gap-2 rounded-2xl bg-slate-800/80 px-4 py-3 border border-slate-700 text-slate-200">
              <GraduationCap className="h-5 w-5 text-amber-400" />
              <span>Certificates (BSc, PGD, MBA, PhD)</span>
            </div>
            <span className="text-2xl font-black text-amber-400">=</span>
            <div className="rounded-2xl bg-amber-500/15 px-4 py-3 border border-amber-500/30 text-amber-300">
              Theoretical Knowledge
            </div>
            <span className="text-2xl font-black text-rose-500">≠</span>
            <div className="rounded-2xl bg-emerald-500/20 px-4 py-3 border border-emerald-500/40 text-emerald-300 font-extrabold shadow-sm">
              Global Employability!
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            A degree proves you studied yesterday. Employability proves you can deliver measurable value to an international remote team today.
          </p>
        </div>

        {/* Contrast Grid: Knowledge vs Employability */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Certificate Trap */}
          <div className="rounded-2xl border border-rose-900/40 bg-rose-950/15 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400">
                <XCircle className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">The Traditional Degree Trap</h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>Stacking certificates while waiting for local vacancies that pay poorly.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>Generic resume templates that trigger automatic ATS rejections.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>No positioning to bridge local experience with international talent standards.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>Feeling overqualified on paper yet remaining underemployed in reality.</span>
              </li>
            </ul>
          </div>

          {/* Masterclass Blueprint */}
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/15 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">The Remote Clarity Advantage</h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Discover verified international companies actively recruiting African talent.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Translate your degrees and existing background into high-value market competencies.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Strategic LinkedIn profile architecture that triggers inbound recruiter inquiries.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Earn in foreign currency (USD, EUR, GBP) while residing in your home country.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
