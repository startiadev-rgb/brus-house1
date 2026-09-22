import React from 'react';
import { Home, Settings, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenPixConfig, pixKey }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121110] text-white py-14 text-center relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Brand Lockup */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-sm bg-[#C86D51] flex items-center justify-center text-white font-bold text-sm shadow-sm">
            <Home size={20} />
          </div>
          <span className="font-serif font-bold text-2xl text-white tracking-tight">
            Bru's House
          </span>
          <p className="text-xs text-white/60 max-w-sm mx-auto font-normal leading-relaxed">
            Obrigada por fazer parte do início da nossa casa nova! Cada presente enche nosso lar de paz e amor.
          </p>
        </div>

        {/* PIX Admin Settings */}
        <div className="pt-2">
          <button
            onClick={onOpenPixConfig}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D4A373] hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-sm border border-white/15 cursor-pointer uppercase tracking-wider"
          >
            <Settings size={14} />
            <span>Configurações do Checkout (Bru & Cat)</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
          <p>© 2026 Bru's House • Chá de Casa Nova</p>
          <button
            onClick={scrollToTop}
            className="text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer font-bold uppercase tracking-wider transition-colors"
          >
            <ArrowUp size={14} /> Topo
          </button>
        </div>

      </div>
    </footer>
  );
}
