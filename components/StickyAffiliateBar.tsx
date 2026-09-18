import { MessageCircle, Zap, Landmark } from 'lucide-react';
import { MASTERCLASS_META, getWhatsAppTargetUrl } from '../data/content';
import { AffiliateConfig } from '../types';

interface StickyAffiliateBarProps {
  affiliateConfig: AffiliateConfig;
  onOpenBankModal: () => void;
}

export default function StickyAffiliateBar({
  affiliateConfig,
  onOpenBankModal,
}: StickyAffiliateBarProps) {
  const { pricing } = MASTERCLASS_META;

  const whatsappUrl = getWhatsAppTargetUrl(
    affiliateConfig,
    `Hello! I want to register for the Remote Work Masterclass (Single: ₦5,375 / Bundle: ₦8,600). Please send me payment details.`
  );

  return (
    <aside
      id="sticky-affiliate-bar"
      aria-label="Registration and Enrollment Actions"
      className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-800 bg-slate-950/95 p-3 backdrop-blur-lg shadow-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-2 sm:px-6">
        
        {/* Left: Summary text */}
        <div className="hidden sm:flex flex-col">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Remote Work Masterclass
            </span>
          </div>
          <span className="text-xs text-slate-400">
            Single: <strong className="text-amber-400">{pricing.single.naira}</strong> ({pricing.single.dollar}) • Bundle: <strong className="text-amber-400">{pricing.bundle.naira}</strong>
          </span>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={onOpenBankModal}
            className="hidden md:flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition"
          >
            <Landmark className="h-3.5 w-3.5 text-amber-400" />
            <span>Bank Details</span>
          </button>

          <a
            id="sticky-selar-btn"
            href={affiliateConfig.selarSingleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3.5 py-2.5 text-center text-xs font-bold text-white transition"
          >
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            <span>Selar Checkout</span>
          </a>

          <a
            id="sticky-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2.5 text-center text-xs font-extrabold text-slate-950 shadow-md shadow-emerald-500/20 transition"
          >
            <MessageCircle className="h-4 w-4 fill-slate-950" />
            <span>WhatsApp Register</span>
          </a>
        </div>

      </div>
    </aside>
  );
}
