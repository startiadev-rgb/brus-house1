import React from 'react';
import { Heart, MessageSquareQuote, Sparkles } from 'lucide-react';

export default function MessagesWall({ messages }) {
  return (
    <section id="mural" className="py-20 bg-[#EFE6D5]/30 relative text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C86D51]/10 text-[#C86D51] text-xs font-extrabold uppercase tracking-widest border border-[#C86D51]/20">
            <Sparkles size={14} /> Carinho das Amigas
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2B2A27] tracking-tight">
            Recados para Bru & Cat
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2A27]/75 font-medium">
            Mensagens cheias de carinho enviadas para a Bru's House!
          </p>
        </div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="glass-panel p-6 rounded-3xl shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-spring border border-white text-left flex flex-col justify-between space-y-4 relative"
            >
              <MessageSquareQuote size={28} className="text-[#C86D51]/20 absolute top-5 right-5" />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl terracotta-gradient text-white font-serif font-extrabold text-sm flex items-center justify-center shadow-sm">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#2B2A27] text-base leading-snug tracking-tight">
                      {msg.name}
                    </h4>
                    <span className="text-[10px] text-[#5B6E4E] font-bold uppercase tracking-wider block mt-0.5">
                      Presentou: {msg.giftTitle || 'Carinho Especial'}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#2B2A27]/85 italic leading-relaxed pt-1 font-normal">
                  "{msg.message}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-[#EFE6D5] flex items-center justify-between text-[11px] text-[#2B2A27]/60">
                <span className="flex items-center gap-1 text-[#C86D51] font-extrabold">
                  <Heart size={12} className="fill-[#C86D51]" /> R$ {msg.amount.toFixed(2)}
                </span>
                <span className="font-medium">{msg.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
