import React, { useState, useEffect } from 'react';
import { Heart, Home, Gift, MessageCircle, Menu, X } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel shadow-sm py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo - Bru's House */}
        <a href="#" className="flex items-center gap-2 group mx-auto sm:mx-0">
          <div className="w-9 h-9 rounded-full terracotta-gradient flex items-center justify-center text-white shadow-sm transform group-hover:scale-105 transition-transform">
            <Home size={18} />
          </div>
          <div className="text-center sm:text-left">
            <span className="font-serif font-bold text-xl sm:text-2xl text-[#2B2A27] tracking-tight flex items-center gap-1">
              Bru's House
              <Heart size={14} className="fill-[#C86D51] text-[#C86D51] inline animate-pulse" />
            </span>
            <span className="text-[10px] text-[#5B6E4E] font-medium block uppercase tracking-wider">
              Chá de Casa Nova • Bru & Cat
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-[#2B2A27]/80 hover:text-[#C86D51] transition-colors py-1 uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#presentes"
            className="terracotta-gradient text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
          >
            <Gift size={15} />
            <span>Escolher Meu Mimo</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#2B2A27] p-2 rounded-lg hover:bg-[#EFE6D5] transition-colors absolute right-4 top-4"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-[#EFE6D5] px-4 py-4 mt-2 space-y-3 shadow-xl animate-fadeIn text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#2B2A27] hover:text-[#C86D51] py-2 rounded-lg hover:bg-[#EFE6D5]/50 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#EFE6D5]">
            <a
              href="#presentes"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full terracotta-gradient text-white text-xs font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
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
