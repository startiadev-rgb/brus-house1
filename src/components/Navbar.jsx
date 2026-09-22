import React, { useState, useEffect } from 'react';
import { Home, Gift, Menu, X } from 'lucide-react';

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
    { name: 'História', href: '#historia' },
    { name: 'Presentes', href: '#presentes' },
    { name: 'Meta', href: '#meta' },
    { name: 'Mural', href: '#mural' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#121110]/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Lockup - Impeccable Style */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-sm bg-[#C86D51] flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:bg-[#D4A373] transition-colors">
            <Home size={18} />
          </div>
          <div className="text-left">
            <span className="font-serif font-bold text-lg sm:text-xl text-white tracking-tight block leading-none">
              Bru's House
            </span>
            <span className="text-[10px] font-mono text-[#D4A373] uppercase tracking-widest block mt-1">
              Chá de Casa Nova
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-bold text-white/70 hover:text-[#D4A373] transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#presentes"
            className="terracotta-gradient text-white text-xs font-mono font-bold px-5 py-2.5 rounded-sm hover:opacity-95 active:scale-98 transition-all flex items-center gap-2 cursor-pointer uppercase tracking-widest shadow-md"
          >
            <Gift size={15} />
            <span>Presentear</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-sm bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181715] border-t border-white/10 px-6 py-6 mt-3 space-y-4 shadow-2xl animate-fadeIn text-left mx-4 rounded-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono font-bold text-white hover:text-[#D4A373] py-2 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <a
              href="#presentes"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full terracotta-gradient text-white text-xs font-mono font-bold py-3 rounded-sm shadow-md flex items-center justify-center gap-2 uppercase tracking-widest"
            >
              <Gift size={16} />
              <span>Escolher Mimo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
