import React, { useState, useEffect } from 'react';
import { Heart, Gift, Sparkles, MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Maximize2, Compass, ShieldCheck } from 'lucide-react';

const SLIDES = [
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

export default function Hero({ onOpenCustomGift }) {
  const [bgIndex, setBgIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Preload slide images
  useEffect(() => {
    SLIDES.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.src;
    });
  }, []);

  // Automatic slideshow (4.5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = SLIDES[bgIndex];

  return (
    <section className="relative min-h-[98vh] pt-32 pb-24 sm:pt-40 sm:pb-32 flex items-center justify-center text-center hero-mesh-bg overflow-hidden">
      
      {/* Background Slideshow Layer */}
      <style>{`
        @keyframes kenBurnsSlow {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.10); }
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: index === bgIndex ? 1 : 0,
              animation: index === bgIndex ? 'kenBurnsSlow 7s ease-out forwards' : 'none',
              transition: 'opacity 1.5s ease-in-out',
              pointerEvents: index === bgIndex ? 'auto' : 'none',
            }}
          >
            <img
              src={slide.src}
              alt={slide.title}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover filter brightness-[0.62] contrast-[1.12]"
            />
          </div>
        ))}
      </div>

      {/* Dark Luxury Vignette & Radial Mesh Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'radial-gradient(circle at center, rgba(26,25,23,0.40) 0%, rgba(26,25,23,0.85) 70%, #1A1917 100%), linear-gradient(to bottom, rgba(26,25,23,0.75) 0%, transparent 40%, #F9F6F0 100%)',
        }}
      />

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative space-y-10" style={{ zIndex: 10 }}>
        
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-black/60 backdrop-blur-2xl border border-white/20 shadow-2xl animate-float gold-border-glow">
          <Sparkles size={15} className="text-[#D4A373]" />
          <span className="text-xs font-bold text-white uppercase tracking-widest">
            Bru's House • Chá de Casa Nova 2026
          </span>
        </div>

        {/* Editorial Title */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] drop-shadow-2xl">
            Sejam bem-vindos à <br />
            <span className="gold-gradient-text italic font-normal">Bru's House</span>
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-bold tracking-widest uppercase drop-shadow-lg max-w-xl mx-auto">
            Nosso novo lar projetado em tons terrosos, madeira & afeto
          </p>
        </div>

        {/* High-Contrast Glassmorphic Card (Message from Bru & Cat) */}
        <div className="luxury-glass-dark p-7 sm:p-9 rounded-3xl max-w-2xl mx-auto text-left relative transition-all duration-300">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2.5 text-xs font-extrabold text-[#D4A373] uppercase tracking-wider">
              <MessageCircle size={17} className="text-[#D4A373]" /> Mensagem da Bru & Cat
            </div>
            <span className="text-[10px] text-white/70 bg-white/10 px-3 py-1 rounded-full font-mono font-semibold uppercase tracking-wider">
              Agora
            </span>
          </div>

          <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal drop-shadow-xs">
            "Oi gente! Finalmente vamos nos mudar e estamos montando a casa com muito carinho. Preparamos esse site bem simples e leve pros amigos ajudarem a gente a deixar cada cantinho especial! Dá uma olhadinha nas fotos 3D da casa passando no fundo e escolhe um mimo pra nós!"
          </p>

          <div className="mt-6 text-right border-t border-white/15 pt-4 flex items-center justify-between">
            <span className="text-[11px] text-white/60 font-mono">Projeto 3D • Arquitetura Afetiva</span>
            <span className="font-serif italic font-bold text-xs text-[#D4A373] tracking-wide">
              — Bru & Cat <Heart size={13} className="fill-[#C86D51] text-[#C86D51] inline ml-1" />
            </span>
          </div>
        </div>

        {/* Room Indicator & Controls Bar */}
        <div className="bg-black/80 backdrop-blur-2xl p-3.5 px-6 rounded-2xl border border-white/20 max-w-lg mx-auto flex items-center justify-between gap-4 text-white text-xs shadow-2xl">
          <button
            onClick={() => setBgIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
            className="p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={19} />
          </button>

          <div className="flex items-center gap-3 overflow-hidden">
            <Compass size={16} className="text-[#D4A373] flex-shrink-0" />
            <span className="font-bold text-[#D4A373] truncate tracking-wide text-xs">
              {currentSlide.title}
            </span>
            <button
              onClick={() => setFullscreenImage(currentSlide.boardSrc)}
              className="text-[10px] bg-white/20 hover:bg-white/30 text-white font-extrabold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer flex-shrink-0 uppercase tracking-wider border border-white/15"
            >
              <Maximize2 size={12} /> Prancha
            </button>
          </div>

          <button
            onClick={() => setBgIndex((prev) => (prev + 1) % SLIDES.length)}
            className="p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={19} />
          </button>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setBgIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === bgIndex
                  ? 'w-9 bg-[#D4A373]'
                  : 'w-2.5 bg-white/30 hover:bg-white/70'
              }`}
              title={slide.title}
            />
          ))}
        </div>

        {/* 2 Main Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
          <a
            href="#historia"
            className="w-full sm:w-1/2 bg-white hover:bg-[#EFE6D5] text-[#2B2A27] font-extrabold text-xs py-4 px-7 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 text-center cursor-pointer uppercase tracking-widest border border-white"
          >
            Nossa História
          </a>

          <a
            href="#presentes"
            className="w-full sm:w-1/2 terracotta-gradient text-white font-extrabold text-xs py-4 px-7 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2 uppercase tracking-widest border border-white/25"
          >
            <Gift size={18} />
            <span>Escolher Mimo</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="pt-6 text-center">
          <a href="#presentes" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5B6E4E] hover:text-[#C86D51] transition-colors">
            <span>Ver a lista de mimos</span>
            <ChevronDown size={17} className="animate-bounce" />
          </a>
        </div>

      </div>

      {/* Lightbox for Viewing Concept Board */}
      {fullscreenImage && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fadeIn" style={{ zIndex: 60 }} onClick={() => setFullscreenImage(null)}>
          <div className="relative max-w-5xl w-full max-h-[92vh] overflow-hidden rounded-3xl border border-white/20 shadow-2xl bg-[#1A1917]">
            <div className="p-3.5 text-white text-xs font-bold text-center border-b border-white/10 flex items-center justify-between px-6">
              <span className="uppercase tracking-widest text-[#D4A373]">Prancha Conceitual Completa — Paleta de Cores, Diretrizes & Planta Baixa</span>
              <span className="text-[10px] text-white/60">Clique em ✕ para fechar</span>
            </div>
            <img src={fullscreenImage} alt="Projeto Completo" className="w-full h-full object-contain max-h-[85vh] mx-auto rounded-b-2xl p-2" />
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-black p-2.5 rounded-full transition-colors cursor-pointer shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
