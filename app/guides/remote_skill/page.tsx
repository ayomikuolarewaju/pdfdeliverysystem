'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EmployabilitySection from '@/components/EmployabilitySection';
import PainPointsSection from '@/components/PainPointsSection';
import AuthorityVideoSection from '@/components/AuthorityVideoSection';
import CurriculumSection from '@/components/CurriculumSection';
import BundlePricingSection from '@/components/BundlePricingSection';
import BonusesSection from '@/components/BonusesSection';
import WhatsAppScreenshotsSection from '@/components/WhatsAppScreenshotsSection';
import GoogleReviewsSection from '@/components/GoogleReviewsSection';
import InstructorBioSection from '@/components/InstructorBioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhoShouldAttendSection from '@/components/WhoShouldAttendSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import StickyAffiliateBar from '@/components/StickyAffiliateBar';
import BankTransferModal from '@/components/BankTransferModal';
import AffiliateSettingsModal from '@/components/AffiliateSettingsModal';
import ImageLightboxModal from '@/components/ImageLightboxModal';
import { DEFAULT_AFFILIATE_CONFIG } from '@/data/content';
import { AffiliateConfig } from '@/types';

export default function Home() {
  const [affiliateConfig, setAffiliateConfig] = useState<AffiliateConfig>(DEFAULT_AFFILIATE_CONFIG);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isAffiliateModalOpen, setIsAffiliateModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title?: string;
    caption?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    caption: '',
  });

  // Client-side hydration of custom affiliate settings from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('itrain_affiliate_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        setAffiliateConfig({
          ...DEFAULT_AFFILIATE_CONFIG,
          ...parsed,
          whatsappLink: parsed.whatsappLink || DEFAULT_AFFILIATE_CONFIG.whatsappLink,
        });
      }
    } catch (e) {
      console.error('Failed to load affiliate config from localStorage', e);
    }
  }, []);

  const handleSaveAffiliateConfig = (newConfig: AffiliateConfig) => {
    setAffiliateConfig(newConfig);
    try {
      localStorage.setItem('itrain_affiliate_config', JSON.stringify(newConfig));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleOpenLightbox = (imageUrl: string, title?: string, caption?: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      title,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* Top Navbar */}
      <Navbar
        affiliateConfig={affiliateConfig}
        onOpenBankModal={() => setIsBankModalOpen(true)}
        onOpenAffiliateModal={() => setIsAffiliateModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero with Flyer, Offer, Countdown */}
        <HeroSection
          affiliateConfig={affiliateConfig}
          onOpenBankModal={() => setIsBankModalOpen(true)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 2. Employability vs Certification */}
        <EmployabilitySection />

        {/* 3. Pain Points Self-Assessment */}
        <PainPointsSection affiliateConfig={affiliateConfig} />

        {/* 4. Authority & Channels TV Video */}
        <AuthorityVideoSection />

        {/* 5. 6 Core Curriculum Modules */}
        <CurriculumSection affiliateConfig={affiliateConfig} />

        {/* 6. Pricing & Growth Partner Bundle */}
        <BundlePricingSection
          affiliateConfig={affiliateConfig}
          onOpenBankModal={() => setIsBankModalOpen(true)}
        />

        {/* 7. ₦50,000 Bonuses */}
        <BonusesSection affiliateConfig={affiliateConfig} />

        {/* 8. WhatsApp Chat Screenshots Gallery */}
        <WhatsAppScreenshotsSection onOpenLightbox={handleOpenLightbox} />

        {/* 9. Google Reviews Summary */}
        <GoogleReviewsSection />

        {/* 10. Instructor Biography (Dr. Aderinsola Adio-Adepoju) */}
        <InstructorBioSection onOpenLightbox={handleOpenLightbox} />

        {/* 11. Alumni Impact Stories (Testimonials) */}
        <TestimonialsSection onOpenLightbox={handleOpenLightbox} />

        {/* 12. Target Audience & Why Attend */}
        <WhoShouldAttendSection
          affiliateConfig={affiliateConfig}
          onOpenBankModal={() => setIsBankModalOpen(true)}
        />

        {/* 13. FAQs Accordion */}
        <FaqSection affiliateConfig={affiliateConfig} />
      </main>

      {/* Footer with Legal, Disclaimers, Bank summary */}
      <Footer
        affiliateConfig={affiliateConfig}
        onOpenBankModal={() => setIsBankModalOpen(true)}
        onOpenAffiliateModal={() => setIsAffiliateModalOpen(true)}
      />

      {/* Sticky Bottom Bar */}
      <StickyAffiliateBar
        affiliateConfig={affiliateConfig}
        onOpenBankModal={() => setIsBankModalOpen(true)}
      />

      {/* Bank Transfer Instructions Modal */}
      <BankTransferModal
        isOpen={isBankModalOpen}
        onClose={() => setIsBankModalOpen(false)}
        affiliateConfig={affiliateConfig}
      />

      {/* Affiliate Partner Settings Modal */}
      <AffiliateSettingsModal
        isOpen={isAffiliateModalOpen}
        onClose={() => setIsAffiliateModalOpen(false)}
        config={affiliateConfig}
        onSave={handleSaveAffiliateConfig}
      />

      {/* High-Resolution Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        caption={lightboxState.caption}
      />
    </div>
  );
}
