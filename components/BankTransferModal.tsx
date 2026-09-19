import { useState } from 'react';
import { X, Copy, Check, ShieldCheck, Mail, MessageCircle, AlertCircle } from 'lucide-react';
import { MASTERCLASS_META } from '../data/content';
import { AffiliateConfig } from '../types';

interface BankTransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  affiliateConfig: AffiliateConfig;
}

export default function BankTransferModal({
  isOpen,
  onClose,
  affiliateConfig,
}: BankTransferModalProps) {
  const [copied, setCopied] = useState(false);
  const { bankDetails, pricing } = MASTERCLASS_META;

  if (!isOpen) return null;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappReceiptUrl = `https://wa.me/${affiliateConfig.whatsappNumber || '2348053453099'}?text=${encodeURIComponent(
    `Hello! I just made a bank transfer for the Remote Work Masterclass. Here is my payment receipt.\n\nName:\nPhone:\nTicket Type: (Single Seat ₦5,375 or Bundle ₦8,600)`
  )}`;

  const whatsappGroupUrl = affiliateConfig.whatsappLink || 'https://chat.whatsapp.com/KJBIA89IG0NDVAWLsWsFi8';

  return (
    <div
      id="bank-transfer-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="bank-modal-close-btn"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white">Bank Transfer Details</h3>
            <p className="text-xs text-slate-400">Official iTrain Africa Enrollment Account</p>
          </div>
        </div>

        {/* Pricing notice */}
        <div className="mb-5 grid grid-cols-2 gap-2 text-center">
          <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-3">
            <div className="text-xs text-slate-400 uppercase font-semibold">Single Seat</div>
            <div className="text-xl font-bold text-amber-400">{pricing.single.naira}</div>
          </div>
          <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-3">
            <div className="text-xs text-amber-300 uppercase font-semibold">Growth Bundle (2 Seats)</div>
            <div className="text-xl font-bold text-amber-400">{pricing.bundle.naira}</div>
          </div>
        </div>

        {/* Account Details Box */}
        <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-5 space-y-3.5 mb-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
            <span className="text-xs font-semibold uppercase text-slate-400">Bank Name</span>
            <span className="text-sm font-bold text-white">{bankDetails.bankName}</span>
          </div>

          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
            <span className="text-xs font-semibold uppercase text-slate-400">Account Name</span>
            <span className="text-sm font-bold text-amber-400">{bankDetails.accountName}</span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="text-xs font-semibold uppercase text-slate-400 block">Account Number</span>
              <span className="text-2xl font-mono font-extrabold tracking-wider text-white">
                {bankDetails.accountNumber}
              </span>
            </div>
            <button
              id="copy-account-btn"
              onClick={handleCopyAccount}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition shadow-md ${
                copied
                  ? 'bg-emerald-500 text-white'
                  : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Next Steps */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-300 mb-6 bg-slate-800/40 rounded-2xl p-4 border border-slate-800">
          <div className="flex items-start gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs">
              1
            </span>
            <p>Make your transfer of <strong>{pricing.single.naira}</strong> (Single) or <strong>{pricing.bundle.naira}</strong> (Bundle) to the GTB account above.</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs">
              2
            </span>
            <p>Take a screenshot or save your payment receipt.</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs">
              3
            </span>
            <p>
              Send receipt proof via WhatsApp or email to{' '}
              <span className="text-amber-400 font-mono">{bankDetails.supportEmail}</span> with your Full Name & WhatsApp number.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <a
            id="bank-confirm-whatsapp-btn"
            href={whatsappReceiptUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 py-3.5 text-center text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition duration-200"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Send Receipt on WhatsApp</span>
          </a>

          <a
            id="bank-join-group-btn"
            href={whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/50 py-3 text-center text-xs sm:text-sm font-bold text-emerald-300 transition duration-200"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            <span>Join Masterclass WhatsApp Group</span>
          </a>
        </div>
      </div>
    </div>
  );
}
