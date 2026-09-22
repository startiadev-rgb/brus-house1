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
      date: 'Agora',
      desc: 'Celebrando a mudança ao lado de quem amamos! Cada mimo recebido torna esse novo ciclo ainda mais inesquecível.',
      icon: Home
    }
  ];

  return (
    <section id="historia" className="py-20 bg-[#EDE8DF] text-[#22201D] border-b border-[#DCD2C3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - Clean, No Pill Eyebrow */}
        <div className="max-w-2xl mb-12 text-left space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#22201D]">
            A trajetória do nosso lar
          </h2>
          <p className="text-xs sm:text-sm text-[#22201D]/70 font-normal">
            Quatro momentos especiais da caminhada da Bru & Cat até abrir as portas da casa nova.
          </p>
        </div>

        {/* 4-Step Grid Layout (No repetitive stacked white cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white p-6 sm:p-7 rounded-sm border border-[#DCD2C3] space-y-3 shadow-xs hover:border-[#C86D51] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#C86D51] tracking-widest uppercase">
                    Fase {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-sm bg-[#5B6E4E]/10 flex items-center justify-center text-[#5B6E4E]">
                    <Icon size={16} />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#22201D]">
                  {step.title}
                </h3>

                <p className="text-xs text-[#22201D]/75 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
