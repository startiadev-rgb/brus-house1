import React, { useState, useEffect } from 'react';
import { Heart, Home, Gift, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#1A1917]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo - Bru's House */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl terracotta-gradient flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300 border border-white/20">
            <Home size={19} />
          </div>
          <div className="text-left">
            <span className="font-serif font-extrabold text-xl sm:text-2xl text-white tracking-tight flex items-center gap-1.5 leading-none drop-shadow-md">
              Bru's House
              <Heart size={14} className="fill-[#C86D51] text-[#C86D51] inline animate-pulse" />
            </span>
            <span className="text-[10px] text-[#D4A373] font-bold tracking-widest uppercase block mt-1">
              Chá de Casa Nova • Bru & Cat
            </span>
          </div>
        </a>

        {/* Desktop Navigation Capsule */}
        <nav className="hidden md:flex items-center gap-8 bg-white/10 px-6 py-2.5 rounded-full border border-white/15 backdrop-blur-xl shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-white/80 hover:text-[#D4A373] transition-colors py-1 uppercase tracking-widest relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#D4A373] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#presentes"
            className="terracotta-gradient text-white text-xs font-extrabold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer uppercase tracking-widest border border-white/25"
          >
            <Gift size={16} />
            <span>Escolher Mimo</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors shadow-lg border border-white/15"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden luxury-glass-dark border-t border-white/15 px-6 py-6 mt-3 space-y-4 shadow-2xl animate-fadeIn text-center mx-4 rounded-3xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-white hover:text-[#D4A373] py-3 rounded-2xl hover:bg-white/10 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/15">
            <a
              href="#presentes"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full terracotta-gradient text-white text-xs font-extrabold py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 uppercase tracking-widest border border-white/20"
            >
              <Gift size={17} />
              <span>Escolher Meu Mimo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
