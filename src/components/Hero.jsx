import React, { useState, useEffect } from 'react';
import { Gift, Maximize2, Compass } from 'lucide-react';

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
    desc: 'Bancada funcional em madeira, prateleiras abertas para potes de âmbar e iluminação quente.'
  },
  {
    id: 'sala2',
    title: 'Sala Integrada & Jantar',
    src: '/images/sala2.jpg',
    boardSrc: '/images/sala2_board.jpg',
    desc: 'Integração perfeita entre estar, mesa de jantar e cantinho de leitura.'
  },
  {
    id: 'banheiro',
    title: 'Banheiro Afetivo',
    src: '/images/banheiro.jpg',
    boardSrc: '/images/banheiro_board.jpg',
    desc: 'Bancada em madeira aquecida, espelho oval moderno e folhagens pendentes.'
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

  const currentSlide = SLIDES[bgIndex];

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 sm:pt-36 sm:pb-24 bg-[#121110] text-white overflow-hidden flex items-center">
      
      {/* Background Slideshow Layer */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: index === bgIndex ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              pointerEvents: index === bgIndex ? 'auto' : 'none',
            }}
          >
            <img
              src={slide.src}
              alt={slide.title}
              loading="eager"
              className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.10]"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: 'linear-gradient(to right, #121110 0%, rgba(18,17,16,0.75) 50%, rgba(18,17,16,0.3) 100%), linear-gradient(to bottom, transparent 65%, #F6F3EC 100%)',
        }}
      />

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative w-full" style={{ zIndex: 10 }}>
        
        <div className="max-w-2xl text-left space-y-7">
          
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] drop-shadow-xl">
            O novo lar da <br />
            <span className="text-[#D4A373]">Bru & Cat</span> em tons terrosos e madeira.
          </h1>

          <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal max-w-xl">
            Abrimos as portas do nosso projeto de casa nova. Preparamos uma lista especial de mimos e cotas para quem quiser nos ajudar a montar cada cantinho!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#presentes"
              className="terracotta-gradient text-white font-mono font-bold text-xs py-4 px-8 rounded-sm shadow-xl hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
            >
              <Gift size={16} />
              <span>Escolher Mimo</span>
            </a>

            <a
              href="#historia"
              className="bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs py-4 px-8 rounded-sm backdrop-blur-md transition-all text-center uppercase tracking-widest border border-white/15"
            >
              Nossa História
            </a>
          </div>

          {/* Room Selector Tabs */}
          <div className="pt-6 border-t border-white/15 space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-white/60 uppercase tracking-widest">
              <span>Ambiente: <strong className="text-[#D4A373] font-bold">{currentSlide.title}</strong></span>
              <button
                onClick={() => setFullscreenImage(currentSlide.boardSrc)}
                className="text-white/80 hover:text-white flex items-center gap-1 bg-white/10 px-2 py-1 rounded-sm transition-colors cursor-pointer"
              >
                <Maximize2 size={10} /> Ver Prancha 3D
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setBgIndex(idx)}
                  className={`text-xs font-mono font-bold px-3 py-1.5 rounded-sm transition-all cursor-pointer ${
                    idx === bgIndex
                      ? 'bg-[#D4A373] text-[#121110]'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {slide.title.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox for Viewing Full Board */}
      {fullscreenImage && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn" style={{ zIndex: 60 }} onClick={() => setFullscreenImage(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-sm bg-[#121110] border border-white/20 shadow-2xl">
            <div className="p-3 text-white text-xs font-mono font-bold text-center border-b border-white/10 flex items-center justify-between px-4">
              <span className="text-[#D4A373]">Prancha Conceitual - Planta Baixa & Paleta</span>
              <span className="text-[10px] text-white/60">✕ fechar</span>
            </div>
            <img src={fullscreenImage} alt="Projeto Completo" className="w-full h-full object-contain max-h-[82vh] mx-auto p-2" />
          </div>
        </div>
      )}

    </section>
  );
}
