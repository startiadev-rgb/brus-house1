import React from 'react';
import { Heart, Home, Settings, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenPixConfig, pixKey }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B2A27] text-white py-14 text-center relative overflow-hidden border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-7">
        
        {/* Brand */}
        <div className="flex flex-col items-center gap-2.5">
          <div className="w-11 h-11 rounded-2xl terracotta-gradient flex items-center justify-center text-white shadow-lg">
            <Home size={22} />
          </div>
          <span className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Bru's House
          </span>
          <p className="text-xs text-white/70 max-w-sm mx-auto font-medium leading-relaxed">
            Obrigada por fazer parte do início da nossa casa nova! Cada presente enche nosso lar de paz e amor.
          </p>
        </div>

        {/* PIX Quick Settings */}
        <div className="pt-2">
          <button
            onClick={onOpenPixConfig}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#D4A373] hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/15 cursor-pointer uppercase tracking-wider"
          >
            <Settings size={14} />
            <span>Configurar PIX & Cartão (Bru & Cat)</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-medium">
          <p>© 2026 Bru's House • Feito com muito amor</p>
          <button
            onClick={scrollToTop}
            className="text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer font-bold uppercase tracking-wider transition-colors"
          >
            <ArrowUp size={15} /> Topo
          </button>
        </div>

      </div>
    </footer>
  );
}
