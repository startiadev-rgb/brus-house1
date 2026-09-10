import React from 'react';
import { Heart, Home, Settings, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenPixConfig, pixKey }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B2A27] text-white py-12 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full terracotta-gradient flex items-center justify-center text-white shadow-md">
            <Home size={20} />
          </div>
          <span className="font-serif font-bold text-2xl text-white tracking-tight">
            Bru's House 🏡
          </span>
          <p className="text-xs text-white/70 max-w-sm mx-auto">
            Obrigada por fazer parte do início da nossa casa nova! Cada presente enche nosso lar de paz e amor.
          </p>
        </div>

        {/* PIX Quick Settings */}
        <div className="pt-2">
          <button
            onClick={onOpenPixConfig}
            className="inline-flex items-center gap-1.5 text-xs text-[#D4A373] hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10"
          >
            <Settings size={13} />
            <span>Configurar Chave PIX Real (Bru & Cat)</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© 2026 Bru's House • Feito com muito amor ❤️</p>
          <button
            onClick={scrollToTop}
            className="text-white/60 hover:text-white flex items-center gap-1 cursor-pointer"
          >
            <ArrowUp size={14} /> Topo
          </button>
        </div>

      </div>
    </footer>
  );
}
