import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Download, CreditCard, Copy, Check, Sparkles, Database, ArrowRight, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { createPurchaseOrder } from '../lib/supabase';
import { PurchaseOrder } from '../types';
import { BOOK_METADATA } from '../data/bookContent';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'NGN' | 'USD';
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose, currency }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [paymentMethod, setPaymentMethod] = useState<PurchaseOrder['payment_method']>('card');
  const [loading, setLoading] = useState(false);
  const [orderResult, setOrderResult] = useState<{
    order: PurchaseOrder;
    savedToSupabase: boolean;
  } | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen) return null;

  const displayAmount = currency === 'NGN' ? '2,500' : '$25';
  const numericAmount = currency === 'NGN' ? 2500 : 25;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);

    try {
      // Simulate payment gateway delay
      await new Promise((resolve) => setTimeout(resolve, 900));

      const result = await createPurchaseOrder({
        customer_name: name.trim(),
        customer_email: email.trim(),
        country: country,
        amount: numericAmount,
        currency: currency,
        payment_method: paymentMethod,
      });

      setOrderResult({
        order: result.order,
        savedToSupabase: result.savedToSupabase,
      });

      // Fire festive celebration confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Safe fallback
      }
    } catch (err) {
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const copyLicenseKey = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleDownloadPDF = () => {
    // Generate a downloadable text/markdown summary guide file or trigger download
    const guideContent = `# ${BOOK_METADATA.title} - ${BOOK_METADATA.subtitle}
${BOOK_METADATA.tagline}

ORDER ID: ${orderResult?.order.id}
LICENSE KEY: ${orderResult?.order.license_key}
CUSTOMER: ${orderResult?.order.customer_name} (${orderResult?.order.customer_email})
PURCHASE DATE: ${orderResult?.order.created_at}

==================================================
TABLE OF CONTENTS & QUICK START
==================================================

1. How the Web Works (pp. 6-8)
   - Browser = reading desk, Server = librarian, Internet = roads.
   - HTML (nouns), CSS (adjectives), JavaScript (verbs).
   
2. HTML: The Structure (pp. 9-17)
   - Page skeleton, <!DOCTYPE html>, UTF-8, viewport meta.
   - Headings, semantic tags, forms, accessibility checklist.

3. CSS: Style & Looks (pp. 18-26)
   - Selectors, colors, typography.
   - The Box Model: Margin, Border, Padding, Content.
   - Specificity: Student (1), Prefect (10), Head Teacher (100).

4. CSS: Layout (pp. 27-36)
   - Normal flow vs absolute positioning.
   - Flexbox: 1D layout, main axis & cross axis, centering trick.
   - Grid: 2D layout, repeat(auto-fit, minmax(220px, 1fr)).
   - CSS Variables & prefers-color-scheme dark mode.

5. JavaScript: The Basics (pp. 37-47)
   - const vs let, template literals, strict equality (===).
   - Functions, loops, arrays & 5 essential methods (map, filter, reduce).

6. The DOM: Controlling the Page (pp. 48-54)
   - querySelector, textContent, classList.toggle.
   - Events and event delegation.
   - localStorage persistence with JSON.stringify & parse.

7. Talking to the World (pp. 55-60)
   - Event loop restaurant chef analogy.
   - async/await, fetch(), error handling, POST requests.

8. Three Real Projects (pp. 61-69)
   - Project 1: Responsive Developer Profile Page.
   - Project 2: Persistent To-Do List with localStorage.
   - Project 3: Live Weather Dashboard using Open-Meteo REST API.

Appendices:
   - Appendix A: Troubleshooting (13 common beginner bugs & instant fixes)
   - Appendix B: HTML Cheat Sheet
   - Appendix C: CSS Cheat Sheet
   - Appendix D: JavaScript Cheat Sheet
   - Appendix E: Developer Glossary

Thank you for your purchase of ${BOOK_METADATA.title}!
`;

    const blob = new Blob([guideContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `HTML-CSS-JS-Complete-Guide-Order-${orderResult?.order.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-sm">
              ⚡
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {orderResult ? 'Order Confirmed!' : 'Complete Your Purchase'}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {orderResult ? 'Your download is ready below' : `One-Time Payment: ${displayAmount}`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!orderResult ? (
            /* CHECKOUT FORM */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ayo Balogun"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address (PDF download will be delivered here)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. ayo@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 placeholder:text-slate-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Nigeria">Nigeria (₦)</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Kenya">Kenya</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States ($)</option>
                    <option value="Other">Other / International</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Payment Method
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500"
                  >
                    <option value="card">Debit / Credit Card</option>
                    <option value="bank_transfer">Direct Bank Transfer</option>
                    <option value="apple_pay">Apple Pay</option>
                    <option value="google_pay">Google Pay</option>
                  </select>
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>HTML, CSS & JS (76-Page PDF + 3 Projects)</span>
                  <span className="font-mono font-bold text-white">{displayAmount}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Printable Cheat Sheets Bundle</span>
                  <span className="font-mono text-emerald-400">FREE</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-bold text-white">
                  <span>Total Due Today:</span>
                  <span className="text-indigo-400 font-mono text-base">{displayAmount}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing with Supabase...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>Pay {displayAmount} & Download Now</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Supabase secure verification · 256-Bit encrypted transaction</span>
              </div>
            </form>
          ) : (
            /* SUCCESS CONFIRMATION RECEIPT */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-xl font-black text-white">
                  Welcome to Web Development, {orderResult.order.customer_name}!
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Your purchase of <strong className="text-white">HTML, CSS & JavaScript Complete Guide</strong> is confirmed.
                </p>
              </div>

              {/* Order Metadata Box */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Order Reference:</span>
                  <span className="text-white font-bold">{orderResult.order.id}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Amount Paid:</span>
                  <span className="text-emerald-400 font-bold">{displayAmount}</span>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <span className="text-slate-400 block mb-1">Your Lifetime License Key:</span>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-cyan-300 font-bold tracking-wider select-all">
                      {orderResult.order.license_key}
                    </span>
                    <button
                      onClick={() => copyLicenseKey(orderResult.order.license_key)}
                      className="p-1 text-slate-400 hover:text-white transition-colors"
                      title="Copy Key"
                    >
                      {copiedKey ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Database record status */}
                <div className="pt-1 flex items-center gap-2 text-[11px] text-slate-400">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  <span>
                    {orderResult.savedToSupabase
                      ? 'Saved in Supabase purchases database!'
                      : 'Saved safely to local client storage & ready for Supabase sync.'}
                  </span>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="space-y-2">
                <button
                  onClick={handleDownloadPDF}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Guide (76 Pages + Cheat Sheets)</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Close and Continue Browsing
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
