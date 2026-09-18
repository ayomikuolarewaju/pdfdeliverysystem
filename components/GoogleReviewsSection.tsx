import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { MASTERCLASS_META } from '../data/content';

export default function GoogleReviewsSection() {
  const { googleReviewsCount, googleReviewsLink } = MASTERCLASS_META;

  return (
    <section className="py-12 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 p-8 sm:p-10 shadow-xl">
          
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 sm:h-7 sm:w-7 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            {googleReviewsCount} Google Reviews About iTrain Africa Can&apos;t Be Wrong!
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
            Rated 4.9 out of 5 stars by hundreds of African graduates, career changers, and working professionals who transformed their employability through iTrain Africa.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              id="google-reviews-btn"
              href={googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white hover:bg-slate-100 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-md transition"
            >
              <span>Read Verified Google Reviews</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="h-4 w-4" />
              <span>Verified Google Business Profile</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
