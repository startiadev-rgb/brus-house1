import React from 'react';
import { Heart, Key, Sparkles, Home, Clock } from 'lucide-react';

export default function Timeline() {
  const steps = [
    {
      number: '01',
      title: 'O Sonho da Bru & Cat',
      date: 'O Começo',
      desc: 'A vontade de ter um cantinho aconchegante, com espaço para receber os amigos, cozinhar juntas e ter a nossa cara.',
      icon: Heart
    },
    {
      number: '02',
      title: 'Encontrando a Casa',
      date: 'A Conquista',
      desc: 'Quando entramos na casa e vimos a iluminação entrando pela janela, soubemos de primeira: é a Bru\'s House!',
      icon: Key
    },
    {
      number: '03',
      title: 'Desenhando os Cantinhos',
      date: 'O Projeto',
      desc: 'Planejamos tudo com tons terrosos, madeira natural, luz amarelinha e prateleiras abertas para temperos e amor.',
      icon: Sparkles
    },
    {
      number: '04',
      title: 'O Chá de Casa Nova',
      date: 'Agora!',
      desc: 'Celebrando a mudança ao lado de quem amamos! Cada mimo recebido torna esse novo ciclo ainda mais inesquecível.',
      icon: Home
    }
  ];

  return (
    <section id="historia" className="py-24 bg-[#EFE6D5]/40 relative text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-16 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B6E4E]/10 text-[#5B6E4E] text-xs font-extrabold uppercase tracking-widest border border-[#5B6E4E]/20">
            <Clock size={14} /> Nossa História
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#2B2A27] tracking-tight">
            Um pouquinho sobre a Bru's House
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2A27]/75 font-medium max-w-lg mx-auto leading-relaxed">
            A jornada de carinho da Bru & Cat até abrir as portas do nosso lar.
          </p>
        </div>

        {/* Centered Timeline Items */}
        <div className="space-y-7 max-w-2xl mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="luxury-glass p-7 sm:p-8 rounded-3xl text-left flex items-start gap-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white"
              >
                <div className="w-14 h-14 rounded-2xl terracotta-gradient flex-shrink-0 flex items-center justify-center text-white shadow-lg border border-white/20">
                  <Icon size={24} />
                </div>
                <div className="space-y-2 flex-grow">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-mono font-bold text-[#D4A373] uppercase tracking-widest">
                      Passo {step.number}
                    </span>
                    <span className="text-[11px] font-extrabold text-[#C86D51] bg-[#C86D51]/10 px-3 py-1 rounded-full border border-[#C86D51]/20 uppercase tracking-wider">
                      {step.date}
                    </span>
                  </div>
                  <h3 className="font-serif font-extrabold text-xl sm:text-2xl text-[#2B2A27] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2B2A27]/80 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Card */}
        <div className="mt-14 max-w-lg mx-auto p-6 rounded-3xl bg-white/95 border border-[#D4A373]/35 shadow-xl backdrop-blur-xl text-center">
          <p className="font-serif text-base sm:text-lg italic font-semibold text-[#2B2A27]">
            "Obrigada por fazerem parte dessa nova fase da nossa vida!"
          </p>
          <span className="block text-xs font-bold text-[#C86D51] uppercase tracking-widest mt-3">
            — Bru & Cat <Heart size={12} className="fill-[#C86D51] inline ml-1" />
          </span>
        </div>

      </div>
    </section>
  );
}
