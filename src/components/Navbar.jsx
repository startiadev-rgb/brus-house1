import React, { useState, useEffect } from 'react';
import { Heart, Home, Gift, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenCustomGift }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nossa História', href: '#historia' },
    { name: 'Escolher Mimo', href: '#presentes' },
    { name: 'Recados dos Amigos', href: '#mural' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-spring ${
        scrolled ? 'glass-panel shadow-sm py-3 border-b border-[#D4A373]/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo - Bru's House */}
        <a href="#" className="flex items-center gap-3 group mx-auto sm:mx-0">
          <div className="w-10 h-10 rounded-2xl terracotta-gradient flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform duration-300 ease-spring">
            <Home size={19} />
          </div>
          <div className="text-center sm:text-left">
            <span className="font-serif font-extrabold text-xl sm:text-2xl text-[#2B2A27] tracking-tight flex items-center gap-1.5 leading-none">
              Bru's House
              <Heart size={14} className="fill-[#C86D51] text-[#C86D51] inline animate-pulse" />
            </span>
            <span className="text-[10px] text-[#5B6E4E] font-bold tracking-widest uppercase block mt-1">
              Chá de Casa Nova • Bru & Cat
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 bg-white/40 px-5 py-2 rounded-full border border-white/60 backdrop-blur-md shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-[#2B2A27]/75 hover:text-[#C86D51] transition-colors py-1 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#presentes"
            className="terracotta-gradient text-white text-xs font-extrabold px-5 py-2.5 rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:scale-98 transition-all duration-300 ease-spring flex items-center gap-2 cursor-pointer uppercase tracking-widest border border-white/20"
          >
            <Gift size={15} />
            <span>Escolher Mimo</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#2B2A27] p-2.5 rounded-xl bg-white/60 hover:bg-[#EFE6D5] transition-colors absolute right-4 top-4 shadow-xs"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel-elevated border-t border-[#D4A373]/30 px-5 py-5 mt-2 space-y-4 shadow-2xl animate-fadeIn text-center mx-4 rounded-3xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#2B2A27] hover:text-[#C86D51] py-2.5 rounded-xl hover:bg-[#EFE6D5]/50 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#D4A373]/20">
            <a
              href="#presentes"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full terracotta-gradient text-white text-xs font-extrabold py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 uppercase tracking-widest"
            >
              <Gift size={16} />
              <span>Escolher Meu Mimo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
