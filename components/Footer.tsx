import { Landmark, MessageCircle, ShieldCheck } from 'lucide-react';
import { MASTERCLASS_META, getWhatsAppTargetUrl } from '../data/content';
import { AffiliateConfig } from '../types';

interface FooterProps {
  affiliateConfig: AffiliateConfig;
  onOpenBankModal: () => void;
  onOpenAffiliateModal: () => void;
}

export default function Footer({
  affiliateConfig,
  onOpenBankModal,
  onOpenAffiliateModal,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { bankDetails } = MASTERCLASS_META;
  const whatsappUrl = getWhatsAppTargetUrl(affiliateConfig);

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pb-28 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 font-black text-slate-950 text-base">
                iT
              </div>
              <span className="text-base font-extrabold text-white">
                iTrain Africa
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering African professionals and youths to become skilled, relevant, and employable on the global stage.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Verified Affiliate Partner Landing Page</span>
            </div>
          </div>

          {/* Masterclass Details */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Event Highlights
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Saturday, September 26, 2026 at 6:00 PM WAT</li>
              <li>• Live 3-Hour Zoom Masterclass</li>
              <li>• Full Recording Replay Included</li>
              <li>• Facilitated by Dr. Aderinsola Adio-Adepoju</li>
              <li>• ₦50,000 Bonus Pack (Roles + Community)</li>
            </ul>
          </div>

          {/* Bank Transfer Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Bank Payment Info
            </h4>
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-3 space-y-1 text-[11px]">
              <div><strong className="text-slate-300">Bank:</strong> {bankDetails.bankName}</div>
              <div><strong className="text-slate-300">Account Name:</strong> {bankDetails.accountName}</div>
              <div><strong className="text-slate-300">Acct No:</strong> <span className="font-mono text-amber-400 font-bold">{bankDetails.accountNumber}</span></div>
            </div>
            <button
              onClick={onOpenBankModal}
              className="text-amber-400 hover:underline text-[11px] font-semibold block pt-1"
            >
              Open Full Transfer Instructions &rarr;
            </button>
          </div>

          {/* Affiliate Controls */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              WhatsApp Community
            </h4>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-3 py-1.5 text-xs font-bold text-emerald-400 hover:bg-emerald-500/30 transition"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Join WhatsApp Group</span>
            </a>
            <p className="text-[11px] text-slate-400">
              WhatsApp Contact: <span className="font-mono text-slate-200">+{affiliateConfig.whatsappNumber}</span>
            </p>
            <button
              onClick={onOpenAffiliateModal}
              className="rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 px-3 py-1.5 text-[11px] font-semibold text-slate-300 transition"
            >
              Configure WhatsApp &amp; Links
            </button>
          </div>

        </div>

        {/* Legal Disclaimers */}
        <div className="border-t border-slate-800/80 pt-8 space-y-3 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Affiliate Partnership Notice:</strong> This website is an authorized promotional landing page created by an independent affiliate partner for the iTrain Africa Remote Work Masterclass. All trademarks, program logos, Dr. Aderinsola Adio-Adepoju branding, and media materials are the property of iTrain Africa.
          </p>
          <p>
            <strong>Disclaimer:</strong> This site is not a part of the Facebook website or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Facebook or Meta in any way. FACEBOOK is a trademark of META PLATFORMS, Inc.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-400">
            <span>&copy; {currentYear} iTrain Africa Remote Work Masterclass. All rights reserved.</span>
            <span>Employability Is The Goal, Not Certification.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
