import React from 'react';
import { ShoppingBag, Check, ShieldCheck, Download, Zap, Database, Gift, Sparkles, FileCode } from 'lucide-react';
import { BOOK_METADATA } from '../data/bookContent';
import { getSupabaseConfig } from '../lib/supabase';

interface PricingCheckoutSectionProps {
  onOpenCheckout: () => void;
  currency: 'NGN' | 'USD';
  onToggleCurrency: (c: 'NGN' | 'USD') => void;
}

export const PricingCheckoutSection: React.FC<PricingCheckoutSectionProps> = ({
  onOpenCheckout,
  currency,
  onToggleCurrency,
}) => {
  const config = getSupabaseConfig();
  const isSupabaseConfigured = Boolean(config.url && config.anonKey);

  const displayAmount = currency === 'NGN' ? '2,500' : '$25';
  const originalAmount = currency === 'NGN' ? '12,000' : '$60';

  return (
    <section id="pricing" className="py-24 bg-[#0b0f19] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-r from-indigo-600/15 via-cyan-600/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>Launch Offer · 80% Discount</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Start Coding Today for Just 2,500
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            No recurring monthly subscriptions. One single payment for lifetime access, updates, and starter projects.
          </p>
        </div>

        {/* Currency Toggle */}
        <div className="mt-8 flex justify-center">
          <div className="p-1 bg-slate-900 border border-slate-800 rounded-xl inline-flex items-center gap-1 text-xs font-semibold">
            <span className="px-3 text-slate-400">Currency:</span>
            <button
              onClick={() => onToggleCurrency('NGN')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                currency === 'NGN'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ₦ NGN (2,500)
            </button>
            <button
              onClick={() => onToggleCurrency('USD')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                currency === 'USD'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              $ USD ($25)
            </button>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="mt-10 max-w-xl mx-auto rounded-3xl bg-gradient-to-b from-[#131b2e] to-[#0d1424] border-2 border-indigo-500/40 p-8 sm:p-10 shadow-2xl shadow-indigo-950/50 relative">
          
          {/* Top highlight ribbon */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-md">
            Complete Beginner's Master Bundle
          </div>

          <div className="text-center pt-2 pb-6 border-b border-slate-800">
            <h3 className="text-2xl font-bold text-white">
              {BOOK_METADATA.title}
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              {BOOK_METADATA.subtitle} · 76 Pages High-Res PDF
            </p>

            {/* Big Price Display */}
            <div className="mt-6 flex items-baseline justify-center gap-3">
              <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                {displayAmount}
              </span>
              <div className="text-left">
                <span className="text-xs text-slate-500 line-through block font-mono">
                  {originalAmount}
                </span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  One-Time Payment
                </span>
              </div>
            </div>

            {/* Supabase status indicator */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300">
              <Database className={`w-3.5 h-3.5 ${isSupabaseConfigured ? 'text-emerald-400' : 'text-cyan-400'}`} />
              <span>
                {isSupabaseConfigured ? 'Supabase Database Active' : 'Supabase Instant Checkout Ready'}
              </span>
            </div>
          </div>

          {/* Feature Checklist */}
          <div className="py-6 space-y-3.5">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Everything Included in the Download:
            </div>

            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Full 76-Page High-Res PDF Guide</strong>
                  <p className="text-xs text-slate-400">Crisp vector typography, diagrams, and line-by-line annotated code bubbles.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">3 Complete Capstone Source Code Kits</strong>
                  <p className="text-xs text-slate-400">Profile page, To-Do App with localStorage, and Live Weather Board with Open-Meteo API.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">4 Printable Desk Cheat Sheets</strong>
                  <p className="text-xs text-slate-400">HTML Skeleton & tags, CSS selectors & box model, JS syntax & array methods, Troubleshooting guide.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Lifetime Access & Free Future Updates</strong>
                  <p className="text-xs text-slate-400">Re-download anytime with your unique license key.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Big Buy Button */}
          <div className="pt-2 space-y-3">
            <button
              onClick={onOpenCheckout}
              id="pricing-buy-button"
              className="w-full py-4 px-6 rounded-2xl font-black text-lg text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <ShoppingBag className="w-6 h-6" />
              <span>Get Instant Access · {displayAmount}</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                30-Day Money-Back Guarantee
              </span>
              <span className="flex items-center gap-1">
                <Download className="w-4 h-4 text-cyan-400" />
                Instant PDF Delivery
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
