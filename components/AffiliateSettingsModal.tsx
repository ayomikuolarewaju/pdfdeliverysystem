import { useState } from 'react';
import { X, Check, Link2, MessageCircle, RefreshCw, Sparkles } from 'lucide-react';
import { AffiliateConfig } from '../types';
import { DEFAULT_AFFILIATE_CONFIG } from '../data/content';

interface AffiliateSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AffiliateConfig;
  onSave: (newConfig: AffiliateConfig) => void;
}

export default function AffiliateSettingsModal({
  isOpen,
  onClose,
  config,
  onSave,
}: AffiliateSettingsModalProps) {
  const [formData, setFormData] = useState<AffiliateConfig>({ ...config });
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ ...DEFAULT_AFFILIATE_CONFIG });
  };

  return (
    <div
      id="affiliate-settings-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="affiliate-settings-close-btn"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Link2 className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">Affiliate Partner Controls</h3>
            <p className="text-xs text-slate-400">Configure your direct affiliate WhatsApp & tracking links</p>
          </div>
        </div>

        <div className="mb-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 p-3.5 flex items-start gap-2.5 text-xs text-emerald-300">
          <Sparkles className="h-4 w-4 shrink-0 mt-0.5 text-emerald-400" />
          <p>
            Your current WhatsApp link is active across all page buttons: <strong className="font-mono text-white break-all">{formData.whatsappLink || `+${formData.whatsappNumber}`}</strong>. You can customize your details below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block font-semibold text-slate-300 mb-1">
              WhatsApp Group or Direct Link
            </label>
            <input
              id="affiliate-whatsapp-link-input"
              type="url"
              value={formData.whatsappLink || ''}
              onChange={(e) => setFormData({ ...formData, whatsappLink: e.target.value })}
              placeholder="https://chat.whatsapp.com/KJBIA89IG0NDVAWLsWsFi8"
              className="w-full rounded-xl bg-slate-800/90 border border-slate-700 px-3.5 py-2.5 font-mono text-emerald-400 focus:border-emerald-400 focus:outline-none"
              required
            />
            <span className="text-[11px] text-slate-400 mt-1 block">
              Official WhatsApp Group: <span className="font-mono text-emerald-400">https://chat.whatsapp.com/KJBIA89IG0NDVAWLsWsFi8</span>
            </span>
          </div>

          <div>
            <label className="block font-semibold text-slate-300 mb-1">
              Your WhatsApp Phone Number (with country code, no +)
            </label>
            <div className="relative">
              <input
                id="affiliate-phone-input"
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                placeholder="2347076981373"
                className="w-full rounded-xl bg-slate-800/90 border border-slate-700 px-3.5 py-2.5 font-mono text-amber-300 focus:border-amber-400 focus:outline-none"
              />
            </div>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Used for receiving bank payment receipts directly. Example: 2347076981373
            </span>
          </div>

          <div>
            <label className="block font-semibold text-slate-300 mb-1">
              WhatsApp Pre-filled Inquiring Message
            </label>
            <textarea
              id="affiliate-message-input"
              rows={3}
              value={formData.whatsappMessage}
              onChange={(e) => setFormData({ ...formData, whatsappMessage: e.target.value })}
              className="w-full rounded-xl bg-slate-800/90 border border-slate-700 p-3 text-slate-200 focus:border-amber-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-300 mb-1">
              Selar Single Seat Link (₦5,375)
            </label>
            <input
              id="affiliate-single-link-input"
              type="url"
              value={formData.selarSingleUrl}
              onChange={(e) => setFormData({ ...formData, selarSingleUrl: e.target.value })}
              className="w-full rounded-xl bg-slate-800/90 border border-slate-700 px-3 py-2 font-mono text-xs text-slate-300 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-300 mb-1">
              Selar Growth Bundle Link (₦8,600)
            </label>
            <input
              id="affiliate-bundle-link-input"
              type="url"
              value={formData.selarBundleUrl}
              onChange={(e) => setFormData({ ...formData, selarBundleUrl: e.target.value })}
              className="w-full rounded-xl bg-slate-800/90 border border-slate-700 px-3 py-2 font-mono text-xs text-slate-300 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between pt-3 gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition py-2"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              id="affiliate-save-btn"
              type="submit"
              className={`flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-bold transition shadow-lg ${
                isSaved
                  ? 'bg-emerald-500 text-white'
                  : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
              }`}
            >
              {isSaved ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Changes</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
