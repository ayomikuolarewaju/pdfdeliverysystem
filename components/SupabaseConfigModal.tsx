import React, { useState, useEffect } from 'react';
import { X, Database, CheckCircle2, AlertCircle, Copy, Check, Terminal, RefreshCw, Trash2 } from 'lucide-react';
import {
  getSupabaseConfig,
  saveSupabaseConfig,
  clearCustomSupabaseConfig,
  testSupabaseConnection,
  getLocalPurchases,
  SUPABASE_SQL_SCHEMA,
} from '../lib/supabase';
import { PurchaseOrder } from '../types';

interface SupabaseConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupabaseConfigModal: React.FC<SupabaseConfigModalProps> = ({ isOpen, onClose }) => {
  const currentConfig = getSupabaseConfig();
  const [url, setUrl] = useState(currentConfig.url);
  const [anonKey, setAnonKey] = useState(currentConfig.anonKey);
  const [tableName, setTableName] = useState(currentConfig.tableName || 'purchases');
  
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [testing, setTesting] = useState(false);
  const [copiedSchema, setCopiedSchema] = useState(false);
  const [purchases, setPurchases] = useState<PurchaseOrder[]>([]);

  useEffect(() => {
    if (isOpen) {
      setPurchases(getLocalPurchases());
      handleTest(currentConfig.url, currentConfig.anonKey, currentConfig.tableName);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTest = async (testUrl = url, testKey = anonKey, testTable = tableName) => {
    setTesting(true);
    setStatusMessage(null);
    try {
      const res = await testSupabaseConnection({
        url: testUrl,
        anonKey: testKey,
        tableName: testTable,
      });
      setIsSuccess(res.connected);
      setStatusMessage(res.message);
    } catch (e: any) {
      setIsSuccess(false);
      setStatusMessage(e.message || 'Connection test error');
    } finally {
      setTesting(false);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveSupabaseConfig({ url, anonKey, tableName });
    handleTest(url, anonKey, tableName);
  };

  const handleReset = () => {
    clearCustomSupabaseConfig();
    const cfg = getSupabaseConfig();
    setUrl(cfg.url);
    setAnonKey(cfg.anonKey);
    setTableName('purchases');
    handleTest(cfg.url, cfg.anonKey, 'purchases');
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="text-base font-bold text-white">Supabase Purchase Database</h3>
              <p className="text-xs text-slate-400 font-mono">
                Order records, customer verification, and table schema
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Connection Status Banner */}
          <div className={`p-4 rounded-xl border flex items-start gap-3 text-xs ${
            isSuccess 
              ? 'bg-emerald-950/30 border-emerald-800/80 text-emerald-200' 
              : 'bg-cyan-950/30 border-cyan-800/80 text-cyan-200'
          }`}>
            {isSuccess ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <div className="font-bold text-white">
                {isSuccess ? 'Supabase Active & Ready' : 'Instant Sandbox Mode (Active)'}
              </div>
              <div>{statusMessage || 'Testing connection...'}</div>
            </div>
          </div>

          {/* Config form */}
          <form onSubmit={handleSave} className="space-y-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-slate-300 font-bold">
                Supabase Credentials
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleTest()}
                  disabled={testing}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300 flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className={`w-3 h-3 ${testing ? 'animate-spin' : ''}`} /> Test
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300"
                >
                  Reset Defaults
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                Project URL (VITE_SUPABASE_URL)
              </label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://xyzcompany.supabase.co"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                Anon Public Key (VITE_SUPABASE_ANON_KEY)
              </label>
              <input
                type="password"
                value={anonKey}
                onChange={(e) => setAnonKey(e.target.value)}
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono transition-colors"
              >
                Save Supabase Configuration
              </button>
            </div>
          </form>

          {/* SQL Table Schema */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-slate-300 font-bold">
                SQL Table Definition for Supabase
              </span>
              <button
                onClick={handleCopySchema}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 flex items-center gap-1 transition-colors"
              >
                {copiedSchema ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSchema ? 'Copied!' : 'Copy SQL'}</span>
              </button>
            </div>

            <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto leading-relaxed max-h-40">
              {SUPABASE_SQL_SCHEMA}
            </pre>
          </div>

          {/* Recent Purchases List */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-slate-300 font-bold">
                Recorded Purchases ({purchases.length})
              </span>
              {purchases.length > 0 && (
                <button
                  onClick={() => {
                    localStorage.removeItem('guide_purchases_local_store');
                    setPurchases([]);
                  }}
                  className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" /> Clear History
                </button>
              )}
            </div>

            {purchases.length === 0 ? (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs text-slate-500 font-mono">
                No purchases made yet. Click "Buy PDF · 2,500" to test order creation!
              </div>
            ) : (
              <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                {purchases.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono"
                  >
                    <div>
                      <div className="text-white font-bold">{p.customer_name} ({p.customer_email})</div>
                      <div className="text-slate-500 text-[10px]">
                        Order: {p.id} · Key: {p.license_key}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-bold">{p.currency} {p.amount}</div>
                      <div className="text-[10px] text-slate-500">{new Date(p.created_at).toLocaleDateString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
