import React from 'react';
import { Target, TrendingUp, Users, HeartHandshake, Sparkles } from 'lucide-react';

export default function GoalTracker({ totalRaised, targetGoal = 5000, totalContributors, onOpenCustomGift }) {
  const percentage = Math.min(Math.round((totalRaised / targetGoal) * 100), 100);
  const remaining = Math.max(targetGoal - totalRaised, 0);

  return (
    <section id="meta" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="glass-panel-elevated rounded-3xl p-7 sm:p-11 shadow-2xl border border-white relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C86D51]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-9">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B6E4E]/10 text-[#5B6E4E] text-xs font-extrabold uppercase tracking-widest border border-[#5B6E4E]/20">
                <Target size={14} /> Meta da Casa Nova
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2B2A27] tracking-tight">
                Nossa vaquinha para a montagem do lar
              </h2>
              <p className="text-xs sm:text-sm text-[#2B2A27]/75 font-medium max-w-lg">
                Nosso objetivo é arrecadar R$ 5.000 para cobrir itens essenciais do projeto e a mudança.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="flex items-center gap-5 bg-white/90 p-4 px-6 rounded-2xl border border-[#EFE6D5] shadow-sm flex-shrink-0">
              <div className="text-center px-1">
                <span className="text-[10px] text-[#2B2A27]/60 font-bold uppercase tracking-widest block">Arrecadado</span>
                <span className="font-serif text-xl sm:text-2xl font-extrabold text-[#C86D51]">
                  R$ {totalRaised.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="h-9 w-px bg-[#EFE6D5]" />
              <div className="text-center px-1">
                <span className="text-[10px] text-[#2B2A27]/60 font-bold uppercase tracking-widest block">Meta</span>
                <span className="font-serif text-xl sm:text-2xl font-extrabold text-[#5B6E4E]">
                  R$ {targetGoal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="space-y-3.5">
            <div className="flex justify-between items-center text-xs sm:text-sm font-extrabold tracking-wide">
              <span className="text-[#5B6E4E] flex items-center gap-1.5 uppercase tracking-wider">
                <TrendingUp size={16} /> {percentage}% Concluído
              </span>
              <span className="text-[#C86D51] uppercase tracking-wider">
                Faltam R$ {remaining.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>

            {/* Animated Bar */}
            <div className="h-6 w-full bg-[#EFE6D5] rounded-full p-1 shadow-inner relative overflow-hidden">
              <div
                className="h-full terracotta-gradient rounded-full transition-all duration-1000 ease-out relative shadow-md"
                style={{ width: `${Math.max(percentage, 4)}%` }}
              >
                {/* Glowing light effect inside bar */}
                <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/40 blur-sm rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Bottom Info & Action */}
          <div className="mt-9 pt-7 border-t border-[#EFE6D5] flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3.5 text-xs sm:text-sm text-[#2B2A27]/80">
              <div className="w-10 h-10 rounded-2xl bg-[#5B6E4E]/10 flex items-center justify-center text-[#5B6E4E] flex-shrink-0">
                <Users size={19} />
              </div>
              <div>
                <span className="font-extrabold text-[#2B2A27]">{totalContributors} amigos</span> já contribuíram com nosso lar!
              </div>
            </div>

            <button
              onClick={onOpenCustomGift}
              className="w-full sm:w-auto terracotta-gradient text-white text-xs font-extrabold px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-98 transition-all duration-300 ease-spring flex items-center justify-center gap-2 cursor-pointer uppercase tracking-widest border border-white/20"
            >
              <HeartHandshake size={17} />
              <span>Ajudar a Bater a Meta</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
