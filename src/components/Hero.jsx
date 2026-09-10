import React, { useState, useEffect } from 'react';
import { Heart, Gift, Sparkles, MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Hero({ onOpenCustomGift }) {
  const [bgIndex, setBgIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const slides = [
    {
      id: 'sala1',
      title: 'Sala de Estar & Rack Vermelho',
      src: '/images/sala1.jpg',
      boardSrc: '/images/sala1_board.jpg',
      desc: 'Rack vermelho em destaque, sofá macio em linho, plantas decorativas e luz amarela 2700K.'
    },
    {
      id: 'cozinha',
      title: 'Cozinha Conceito',
      src: '/images/cozinha.jpg',
      boardSrc: '/images/cozinha_board.jpg',
      desc: 'Bancada funcional em madeira, prateleiras abertas para potes de âmbar, geladeira verde e fita LED.'
    },
    {
      id: 'sala2',
      title: 'Sala Integrada & Jantar',
      src: '/images/sala2.jpg',
      boardSrc: '/images/sala2_board.jpg',
      desc: 'Integração perfeita entre estar, mesa de jantar e cantinho de leitura com linho e couro caramelo.'
    },
    {
      id: 'banheiro',
      title: 'Banheiro Afetivo',
      src: '/images/banheiro.jpg',
      boardSrc: '/images/banheiro_board.jpg',
      desc: 'Bancada em madeira aquecida, espelho oval moderno, folhagens pendentes e luz aconchegante.'
    }
  ];

  // Automatic Background slideshow timer (every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[bgIndex];

  return (
    <section className="relative min-h-[92vh] pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden flex items-center justify-center text-center">
      
      {/* Full-Bleed Background Slideshow (Images Rolling Directly Behind Text) */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-[#2B2A27]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === bgIndex
                ? 'opacity-100 scale-105 z-10'
                : 'opacity-0 scale-100 z-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover filter brightness-[0.65] contrast-[1.05] transition-transform duration-[6000ms] ease-out"
            />
          </div>
        ))}
      </div>

      {/* Dark Gradient Vignette for High Typography Contrast (AAA WCAG) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2B2A27]/80 via-[#2B2A27]/55 to-[#F9F6F0] -z-10 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-7">
        
        {/* Logo Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-lg animate-float">
          <Sparkles size={14} className="text-[#D4A373]" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Bru's House • Chá de Casa Nova
          </span>
        </div>

        {/* Golden Ratio Typography & Headline */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-xl">
            Sejam bem-vindos à <br />
            <span className="text-[#D4A373] italic">Bru's House 🏡</span>
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-semibold tracking-wider uppercase drop-shadow-sm">
            Nosso novo lar em tons terrosos, madeira & afeto
          </p>
        </div>

        {/* WhatsApp-style Intimate Card (High Contrast Glassmorphism) */}
        <div className="bg-[#2B2A27]/85 backdrop-blur-xl p-5 sm:p-7 rounded-3xl shadow-2xl border border-white/25 max-w-xl mx-auto text-left relative transition-all">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4A373] uppercase tracking-wider">
              <MessageCircle size={15} className="text-[#D4A373]" /> Mensagem da Bru & Cat
            </div>
            <span className="text-[10px] text-white/70 bg-white/10 px-2 py-0.5 rounded-full font-mono">
              Agora
            </span>
          </div>

          <p className="text-sm sm:text-base text-white leading-relaxed font-normal drop-shadow-xs">
            "Oi gente! Finalmente vamos nos mudar e estamos montando a casa com muito carinho. Preparamos esse site bem simples e leve pros amigos ajudarem a gente a deixar cada cantinho especial! Dá uma olhadinha nas fotos 3D da casa passando no fundo e escolhe um mimo pra nós! ❤️"
          </p>

          <div className="mt-4 text-right border-t border-white/15 pt-3">
            <span className="font-serif italic font-bold text-xs text-[#D4A373]">
              — Bru & Cat <Heart size={12} className="fill-[#C86D51] text-[#C86D51] inline ml-0.5" />
            </span>
          </div>
        </div>

        {/* Background Slideshow Controls & Info Indicator */}
        <div className="bg-black/60 backdrop-blur-md p-3 px-5 rounded-2xl border border-white/20 max-w-md mx-auto flex items-center justify-between gap-3 text-white text-xs">
          <button
            onClick={() => setBgIndex((prev) => (prev - 1 + slides.length) % slides.length)}
            className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2 overflow-hidden">
            <span className="font-semibold text-[#D4A373] truncate">
              {currentSlide.title}
            </span>
            <button
              onClick={() => setFullscreenImage(currentSlide.boardSrc)}
              className="text-[10px] bg-white/20 hover:bg-white/30 text-white font-bold px-2.5 py-1 rounded-md transition-all flex items-center gap-1 cursor-pointer flex-shrink-0"
            >
              <Maximize2 size={11} /> Prancha
            </button>
          </div>

          <button
            onClick={() => setBgIndex((prev) => (prev + 1) % slides.length)}
            className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setBgIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === bgIndex
                  ? 'w-8 bg-[#D4A373]'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              title={slide.title}
            />
          ))}
        </div>

        {/* 2 Main Action Buttons (Golden Ratio Balanced) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto pt-2">
          <a
            href="#historia"
            className="w-full sm:w-1/2 bg-white hover:bg-[#EFE6D5] text-[#2B2A27] font-bold text-sm py-3.5 px-6 rounded-2xl shadow-xl transition-all text-center cursor-pointer"
          >
            📖 Nossa História
          </a>

          <a
            href="#presentes"
            className="w-full sm:w-1/2 terracotta-gradient text-white font-bold text-sm py-3.5 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all text-center cursor-pointer flex items-center justify-center gap-2"
          >
            <Gift size={18} />
            <span>Escolher Meu Mimo</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="pt-6 text-center">
          <a href="#presentes" className="inline-flex items-center gap-1 text-xs font-semibold text-[#5B6E4E] hover:text-[#C86D51] transition-colors">
            <span>Ver a lista de mimos</span>
            <ChevronDown size={16} className="animate-bounce" />
          </a>
        </div>

      </div>

      {/* Lightbox for viewing full board experience */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn" onClick={() => setFullscreenImage(null)}>
          <div className="relative max-w-5xl w-full max-h-[92vh] overflow-hidden rounded-2xl">
            <div className="bg-[#2B2A27] p-2.5 text-white text-xs font-bold text-center border-b border-white/10 flex items-center justify-between px-4">
              <span>📋 Prancha Conceitual Completa — Paleta de Cores, Diretrizes & Planta Baixa</span>
              <span className="text-[10px] text-[#D4A373]">Clique em ✕ para fechar</span>
            </div>
            <img src={fullscreenImage} alt="Projeto Completo" className="w-full h-full object-contain max-h-[85vh] mx-auto rounded-b-xl" />
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-black p-2 rounded-full transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
