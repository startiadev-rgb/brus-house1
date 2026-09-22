import React, { useState, useEffect } from 'react';
import { Heart, Gift, Sparkles, MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

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

  // Preload all slide images on mount
  useEffect(() => {
    SLIDES.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.src;
    });
  }, []);

  // Automatic background slideshow (every 4.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = SLIDES[bgIndex];

  return (
    <section
      className="relative min-h-[96vh] pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden flex items-center justify-center text-center"
      style={{ backgroundColor: '#2B2A27' }}
    >
      
      {/* ================================================================
          LAYER 0: CSS Background Images (primary background)
          pure <img> tags with crossfade and ken burns animation.
          z-index: 0
          ================================================================ */}
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.08); }
        }
      `}</style>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ zIndex: 0, backgroundColor: '#2B2A27' }}
      >
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: index === bgIndex ? 1 : 0,
              animation: index === bgIndex ? 'kenBurns 6s ease-out forwards' : 'none',
              transition: 'opacity 1.2s ease-in-out',
              pointerEvents: index === bgIndex ? 'auto' : 'none',
            }}
          >
            <img
              src={slide.src}
              alt={slide.title}
              loading="eager"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.70) contrast(1.08)',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>

      {/* ================================================================
          LAYER 3: Dark Vignette Gradient (text readability & ratio depth)
          z-index: 2
          ================================================================ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(43,42,39,0.85) 0%, rgba(43,42,39,0.55) 50%, #F9F6F0 100%)',
        }}
      />

      {/* ================================================================
          LAYER 4: Hero Content (text, buttons, controls)
          z-index: 10
          ================================================================ */}
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 relative space-y-8"
        style={{ zIndex: 10 }}
      >
        
        {/* Logo Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/25 shadow-xl animate-float">
          <Sparkles size={14} className="text-[#D4A373]" />
          <span className="text-xs font-bold text-white uppercase tracking-widest">
            Bru's House • Chá de Casa Nova
          </span>
        </div>

        {/* Golden Ratio Typography & Headline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-2xl">
            Sejam bem-vindos à <br />
            <span className="text-[#D4A373] italic font-normal">Bru's House</span>
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-bold tracking-widest uppercase drop-shadow-md max-w-lg mx-auto">
            Nosso novo lar em tons terrosos, madeira & afeto
          </p>
        </div>

        {/* WhatsApp-style Intimate Card (High Contrast Glassmorphism) */}
        <div className="bg-[#2B2A27]/90 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/25 max-w-xl mx-auto text-left relative transition-all duration-300">
          <div className="flex items-center justify-between gap-2 mb-3.5">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#D4A373] uppercase tracking-wider">
              <MessageCircle size={16} className="text-[#D4A373]" /> Mensagem da Bru & Cat
            </div>
            <span className="text-[10px] text-white/75 bg-white/10 px-2.5 py-0.5 rounded-full font-mono font-semibold">
              Agora
            </span>
          </div>

          <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal drop-shadow-xs">
            "Oi gente! Finalmente vamos nos mudar e estamos montando a casa com muito carinho. Preparamos esse site bem simples e leve pros amigos ajudarem a gente a deixar cada cantinho especial! Dá uma olhadinha nas fotos 3D da casa passando no fundo e escolhe um mimo pra nós!"
          </p>

          <div className="mt-5 text-right border-t border-white/15 pt-3.5">
            <span className="font-serif italic font-bold text-xs text-[#D4A373] tracking-wide">
              — Bru & Cat <Heart size={13} className="fill-[#C86D51] text-[#C86D51] inline ml-1" />
            </span>
          </div>
        </div>

        {/* Background Slideshow Controls & Info Indicator */}
        <div className="bg-black/75 backdrop-blur-xl p-3 px-6 rounded-2xl border border-white/25 max-w-md mx-auto flex items-center justify-between gap-3 text-white text-xs shadow-2xl">
          <button
            onClick={() => setBgIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2 overflow-hidden">
            <span className="font-bold text-[#D4A373] truncate tracking-wide">
              {currentSlide.title}
            </span>
            <button
              onClick={() => setFullscreenImage(currentSlide.boardSrc)}
              className="text-[10px] bg-white/20 hover:bg-white/30 text-white font-bold px-3 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer flex-shrink-0 uppercase tracking-wider"
            >
              <Maximize2 size={11} /> Prancha
            </button>
          </div>

          <button
            onClick={() => setBgIndex((prev) => (prev + 1) % SLIDES.length)}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-1">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setBgIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === bgIndex
                  ? 'w-8 bg-[#D4A373]'
                  : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              title={slide.title}
            />
          ))}
        </div>

        {/* 2 Main Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
          <a
            href="#historia"
            className="w-full sm:w-1/2 bg-white hover:bg-[#EFE6D5] text-[#2B2A27] font-extrabold text-xs py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-spring text-center cursor-pointer uppercase tracking-widest border border-white/80"
          >
            Nossa História
          </a>

          <a
            href="#presentes"
            className="w-full sm:w-1/2 terracotta-gradient text-white font-extrabold text-xs py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 active:scale-98 transition-all duration-300 ease-spring text-center cursor-pointer flex items-center justify-center gap-2 uppercase tracking-widest border border-white/20"
          >
            <Gift size={18} />
            <span>Escolher Mimo</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="pt-6 text-center">
          <a href="#presentes" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#5B6E4E] hover:text-[#C86D51] transition-colors">
            <span>Ver a lista de mimos</span>
            <ChevronDown size={16} className="animate-bounce" />
          </a>
        </div>

      </div>

      {/* Lightbox for viewing full board experience */}
      {fullscreenImage && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn" style={{ zIndex: 50 }} onClick={() => setFullscreenImage(null)}>
          <div className="relative max-w-5xl w-full max-h-[92vh] overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
            <div className="bg-[#2B2A27] p-3 text-white text-xs font-bold text-center border-b border-white/10 flex items-center justify-between px-5">
              <span className="uppercase tracking-wider">Prancha Conceitual Completa — Paleta de Cores, Diretrizes & Planta Baixa</span>
              <span className="text-[10px] text-[#D4A373]">Clique em ✕ para fechar</span>
            </div>
            <img src={fullscreenImage} alt="Projeto Completo" className="w-full h-full object-contain max-h-[85vh] mx-auto rounded-b-2xl" />
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-black p-2 rounded-full transition-colors cursor-pointer shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
