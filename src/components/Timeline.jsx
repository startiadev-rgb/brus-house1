import React from 'react';
import { Heart, Key, Sparkles, Home } from 'lucide-react';

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
    <section id="historia" className="py-16 bg-[#EFE6D5]/30 relative text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B6E4E] bg-[#5B6E4E]/10 px-4 py-1.5 rounded-full inline-block">
            📖 Nossa História
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-[#2B2A27]">
            Um pouquinho sobre a Bru's House
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2A27]/80 max-w-lg mx-auto">
            A jornada de carinho da Bru & Cat até abrir as portas do nosso lar.
          </p>
        </div>

        {/* Centered Timeline Items */}
        <div className="space-y-6 max-w-xl mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="glass-panel p-6 rounded-3xl border border-white text-left flex items-start gap-4 shadow-xs hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-2xl terracotta-gradient flex-shrink-0 flex items-center justify-center text-white shadow-sm">
                  <Icon size={18} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif font-bold text-lg text-[#2B2A27]">
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-bold text-[#C86D51] bg-[#C86D51]/10 px-2.5 py-0.5 rounded-full">
                      {step.date}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2B2A27]/80 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="mt-10 max-w-md mx-auto p-4 rounded-2xl bg-white border border-[#D4A373]/30 shadow-xs">
          <p className="font-serif text-sm italic text-[#2B2A27]">
            "Obrigada por fazerem parte dessa nova fase da nossa vida!"
          </p>
          <span className="block text-[11px] font-bold text-[#C86D51] uppercase tracking-wider mt-1">
            — Bru & Cat <Heart size={10} className="fill-[#C86D51] inline" />
          </span>
        </div>

      </div>
    </section>
  );
}
