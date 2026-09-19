import { useState } from 'react';
import { MessageCircle, Settings, Menu, X, Landmark, ExternalLink, Sparkles } from 'lucide-react';
import { AffiliateConfig } from '../types';
import { getWhatsAppTargetUrl } from '../data/content';

interface NavbarProps {
  affiliateConfig: AffiliateConfig;
  onOpenBankModal: () => void;
  onOpenAffiliateModal: () => void;
}

export default function Navbar({
  affiliateConfig,
  onOpenBankModal,
  onOpenAffiliateModal,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappUrl = getWhatsAppTargetUrl(affiliateConfig);

  const navLinks = [
    { label: 'Why Attend', href: '#why-attend' },
    { label: "What You'll Learn", href: '#curriculum' },
    { label: 'Channels TV Video', href: '#video-proof' },
    { label: 'Bonuses', href: '#bonuses' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      {/* Top micro ticker */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-4 py-1.5 text-center text-[11px] sm:text-xs font-bold text-slate-950">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 fill-slate-950" />
          <span>Next Cohort Registration Is Live • Over 4,290+ Africans Trained • Limited Zoom Capacity</span>
        </span>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 font-black text-slate-950 text-lg shadow-md shadow-amber-500/20">
            iT
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-white leading-none">
              iTrain Africa
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-amber-400 tracking-wider uppercase">
              Remote Work Masterclass
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="nav-bank-transfer-btn"
            onClick={onOpenBankModal}
            className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-amber-500 hover:text-amber-400 transition"
          >
            <Landmark className="h-3.5 w-3.5 text-amber-400" />
            <span>Bank Details</span>
          </button>

          <a
            id="nav-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition"
          >
            <MessageCircle className="h-3.5 w-3.5 fill-slate-950" />
            <span>WhatsApp Us</span>
          </a>

          <button
            id="nav-affiliate-settings-btn"
            onClick={onOpenAffiliateModal}
            title="Affiliate Settings (Customize your WhatsApp & referral links)"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-amber-400 hover:border-slate-700 transition"
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-affiliate-settings-btn"
            onClick={onOpenAffiliateModal}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 text-slate-400 hover:text-amber-400"
          >
            <Settings className="h-4 w-4" />
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-200 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu dropdown */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 py-5 sm:hidden space-y-3">
          <div className="flex flex-col space-y-2.5 text-sm font-semibold text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-amber-400 py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBankModal();
              }}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 py-2.5 text-xs font-semibold text-slate-200"
            >
              <Landmark className="h-3.5 w-3.5 text-amber-400" />
              <span>Bank Details</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 py-2.5 text-xs font-bold text-slate-950 shadow-md"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
