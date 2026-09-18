import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, getWhatsAppTargetUrl } from '../data/content';
import { AffiliateConfig } from '../types';

interface FaqSectionProps {
  affiliateConfig: AffiliateConfig;
}

export default function FaqSection({ affiliateConfig }: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const whatsappUrl = getWhatsAppTargetUrl(
    affiliateConfig,
    `Hello! I have a question about the Remote Work Masterclass before registering:`
  );

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Everything you need to know about the Remote Work Masterclass and registration.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-amber-500/50 bg-slate-900/90 shadow-lg'
                    : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-amber-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-500/20 text-amber-300' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* More Questions Box */}
        <div className="mt-12 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 text-center space-y-3">
          <h3 className="text-lg font-bold text-white">Have More Questions?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Our affiliate support team is available on WhatsApp to answer any questions or clarify payment methods.
          </p>
          <div className="pt-2">
            <a
              id="faq-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-md transition"
            >
              <MessageCircle className="h-4 w-4 fill-slate-950" />
              <span>Ask A Question on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
