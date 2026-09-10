import React from 'react';
import { Target, TrendingUp, Users, HeartHandshake, Sparkles } from 'lucide-react';

export default function GoalTracker({ totalRaised, targetGoal = 5000, totalContributors, onOpenCustomGift }) {
  const percentage = Math.min(Math.round((totalRaised / targetGoal) * 100), 100);
  const remaining = Math.max(targetGoal - totalRaised, 0);

  return (
    <section id="meta" className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-xl border border-white relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C86D51]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B6E4E]/10 text-[#5B6E4E] text-xs font-bold uppercase tracking-wider">
                <Target size={14} /> Meta da Casa Nova
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#2B2A27]">
                Nossa vaquinha para a montagem do lar 🏡
              </h2>
              <p className="text-xs sm:text-sm text-[#2B2A27]/80">
                Nosso objetivo é arrecadar R$ 5.000 para cobrir itens essenciais do projeto e o aluguel da mudança.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-2xl border border-[#EFE6D5] shadow-sm">
              <div className="text-center px-2">
                <span className="text-[10px] text-[#2B2A27]/60 font-semibold uppercase block">Arrecadado</span>
                <span className="font-serif text-lg sm:text-xl font-bold text-[#C86D51]">
                  R$ {totalRaised.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="h-8 w-px bg-[#EFE6D5]" />
              <div className="text-center px-2">
                <span className="text-[10px] text-[#2B2A27]/60 font-semibold uppercase block">Meta</span>
                <span className="font-serif text-lg sm:text-xl font-bold text-[#5B6E4E]">
                  R$ {targetGoal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
              <span className="text-[#5B6E4E] flex items-center gap-1.5">
                <TrendingUp size={16} /> {percentage}% Concluído
              </span>
              <span className="text-[#C86D51]">
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
                <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/40 blur-sm rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Bottom Info & Action */}
          <div className="mt-8 pt-6 border-t border-[#EFE6D5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#2B2A27]/80">
              <div className="w-9 h-9 rounded-full bg-[#5B6E4E]/10 flex items-center justify-center text-[#5B6E4E]">
                <Users size={18} />
              </div>
              <div>
                <span className="font-bold text-[#2B2A27]">{totalContributors} amigos</span> já contribuíram com nosso lar!
              </div>
            </div>

            <button
              onClick={onOpenCustomGift}
              className="w-full sm:w-auto terracotta-gradient text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <HeartHandshake size={16} />
              <span>Ajudar a Bater a Meta</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
