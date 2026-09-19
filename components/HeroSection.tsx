import { useState } from 'react';
import { MessageCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, ZoomIn, Users, Calendar, Video } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { MASTERCLASS_META, getWhatsAppTargetUrl } from '../data/content';
import { AffiliateConfig } from '../types';

interface HeroSectionProps {
  affiliateConfig: AffiliateConfig;
  onOpenBankModal: () => void;
  onOpenLightbox: (imageUrl: string, title?: string, caption?: string) => void;
}

export default function HeroSection({
  affiliateConfig,
  onOpenBankModal,
  onOpenLightbox,
}: HeroSectionProps) {
  const { pricing, flyerImage, studentsEnrolled } = MASTERCLASS_META;

  const whatsappSingleUrl = getWhatsAppTargetUrl(
    affiliateConfig,
    `Hello! I want to register for the Remote Work Masterclass (Single Seat - ₦5,375 / $7). Please send me access details.`
  );

  const whatsappBundleUrl = getWhatsAppTargetUrl(
    affiliateConfig,
    `Hello! I want to secure the Growth Partner Bundle (2 Seats for ₦8,600). Please send me registration details.`
  );

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Copy, Offer, Countdowns, and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-400">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span>A Must-Attend Masterclass for Flexible &amp; Profitable Work</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              MY SECRETS TO LANDING{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                HIGH-PAYING REMOTE JOBS
              </span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto lg:mx-0 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
              Discover how to position your existing experience, access verified global talent marketplaces, and build a practical roadmap toward earning in foreign currency without starting from zero.
            </p>

            {/* Social proof metric */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-center gap-2 rounded-xl bg-slate-800/80 border border-slate-700/80 px-3.5 py-2">
                <Users className="h-4 w-4 text-amber-400" />
                <span>Join <strong>{studentsEnrolled}</strong> Africans Who Secured Seats</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-slate-800/80 border border-slate-700/80 px-3.5 py-2">
                <Video className="h-4 w-4 text-emerald-400" />
                <span>3-Hour Live Zoom Session + Replay</span>
              </div>
            </div>

            {/* Countdown Box */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 backdrop-blur-sm shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Next Masterclass Starts In:</span>
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  Saturday 6:00 PM WAT
                </span>
              </div>
              <CountdownTimer />
            </div>

            {/* CTA Action Buttons Grid */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Primary Selar / WhatsApp Register */}
                {/* <a
                  id="hero-single-cta"
                  href={affiliateConfig.selarSingleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 px-6 py-4 text-center text-sm sm:text-base font-extrabold text-slate-950 shadow-lg shadow-amber-500/25 transition duration-200 transform hover:-translate-y-0.5"
                >
                  <Zap className="h-5 w-5 fill-slate-950" />
                  <span>Secure Single Seat ({pricing.single.naira} / {pricing.single.dollar})</span>
                </a> */}

                {/* WhatsApp Direct Option */}
                <a
                  id="hero-whatsapp-cta"
                  href={whatsappSingleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 px-6 py-4 text-center text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition duration-200 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5 fill-slate-950" />
                  <span>WhatsApp Register</span>
                </a>
              </div>

              {/* Bundle Option Banner */}
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wide block">
                    Growth Partner Bundle (2 Seats)
                  </span>
                  <p className="text-xs text-slate-300">
                    Attend with a colleague or friend for just <strong>{pricing.bundle.naira}</strong> ({pricing.bundle.savings})
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {/* <a
                    id="hero-bundle-cta"
                    href={affiliateConfig.selarBundleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 px-4 py-2 text-xs font-extrabold text-slate-950 shadow transition"
                  >
                    <span>Get Bundle ({pricing.bundle.naira})</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a> */}
                  <button
                    onClick={onOpenBankModal}
                    className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition"
                  >
                    Bank Transfer
                  </button>
                </div>
              </div>
            </div>

            {/* Guarantee badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Zoom Access Details Sent Instantly</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>₦50,000 Value Bonus Pack Included</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Full Recording &amp; Replay Access</span>
              </span>
            </div>
          </div>

          {/* Right Column: Official Masterclass Flyer with Click to Zoom */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm rounded-3xl p-2 bg-gradient-to-b from-amber-500/30 via-slate-800 to-slate-900 shadow-2xl border border-amber-500/20">
              <div className="relative overflow-hidden rounded-2xl bg-slate-950">
                <img
                  src={flyerImage}
                  alt="Remote Work Masterclass Official Flyer - Dr Aderinsola Adio-Adepoju"
                  className="w-full h-auto object-cover transition duration-300 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Hover overlay for zoom */}
                <button
                  onClick={() =>
                    onOpenLightbox(
                      flyerImage,
                      'Remote Work Masterclass Official Flyer',
                      'Saturday September 26 on Zoom • Single Seat ₦5,375 • Growth Bundle ₦8,600'
                    )
                  }
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                  title="Click to view flyer in full size"
                >
                  <div className="flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg">
                    <ZoomIn className="h-4 w-4" />
                    <span>View Full Flyer</span>
                  </div>
                </button>
              </div>

              {/* Flyer caption */}
              <div className="p-3 text-center">
                <div className="text-xs font-bold text-amber-400">
                  Official Masterclass Program Flyer
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Facilitated by Dr. Aderinsola Adio-Adepoju • Tap image to enlarge
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
