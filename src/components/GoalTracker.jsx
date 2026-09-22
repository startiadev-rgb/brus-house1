import React from 'react';
import { Target, TrendingUp, Users, HeartHandshake } from 'lucide-react';

export default function GoalTracker({ totalRaised, targetGoal = 5000, totalContributors, onOpenCustomGift }) {
  const percentage = Math.min(Math.round((totalRaised / targetGoal) * 100), 100);
  const remaining = Math.max(targetGoal - totalRaised, 0);

  return (
    <section id="meta" className="py-20 bg-[#121110] text-white border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="bg-[#181715] rounded-sm p-8 sm:p-10 border border-white/15 shadow-2xl relative overflow-hidden text-left">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono font-bold text-[#D4A373] tracking-widest uppercase block">
                Progresso Financeiro
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Meta do Lar & Vaquinha
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-normal">
                Nosso objetivo é arrecadar R$ 5.000 para cobrir itens essenciais do projeto e custos de mudança.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="flex items-center gap-6 bg-white/5 p-4 px-6 rounded-sm border border-white/10 flex-shrink-0">
              <div>
                <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-widest block">Arrecadado</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#C86D51]">
                  R$ {totalRaised.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-widest block">Meta</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#5B6E4E]">
                  R$ {targetGoal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono font-bold tracking-wider">
              <span className="text-[#5B6E4E] flex items-center gap-1.5 uppercase">
                <TrendingUp size={15} /> {percentage}% Concluído
              </span>
              <span className="text-[#C86D51] uppercase">
                Faltam R$ {remaining.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>

            {/* Bar */}
            <div className="h-4 w-full bg-white/10 rounded-xs p-0.5 relative overflow-hidden">
              <div
                className="h-full terracotta-gradient transition-all duration-1000 ease-out relative"
                style={{ width: `${Math.max(percentage, 4)}%` }}
              />
            </div>
          </div>

          {/* Bottom Info & Action */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3 text-xs text-white/80">
              <div className="w-8 h-8 rounded-sm bg-[#5B6E4E]/20 flex items-center justify-center text-[#5B6E4E]">
                <Users size={16} />
              </div>
              <div>
                <span className="font-bold text-white">{totalContributors} amigos</span> já contribuíram com o nosso lar!
              </div>
            </div>

            <button
              onClick={onOpenCustomGift}
              className="w-full sm:w-auto terracotta-gradient text-white text-xs font-mono font-bold px-7 py-3 rounded-sm shadow-md hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-widest"
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
