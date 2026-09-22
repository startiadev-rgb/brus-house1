import React from 'react';
import { Heart, MessageSquareQuote, Sparkles } from 'lucide-react';

export default function MessagesWall({ messages }) {
  return (
    <section id="mural" className="py-24 bg-[#EFE6D5]/40 relative text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-[#C86D51]/10 text-[#C86D51] text-xs font-extrabold uppercase tracking-widest border border-[#C86D51]/20">
            <Sparkles size={15} /> Carinho das Amigas
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#2B2A27] tracking-tight">
            Recados para Bru & Cat
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2A27]/75 font-medium leading-relaxed">
            Mensagens cheias de carinho enviadas para a Bru's House!
          </p>
        </div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="luxury-glass p-7 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-white text-left flex flex-col justify-between space-y-4 relative"
            >
              <MessageSquareQuote size={32} className="text-[#C86D51]/20 absolute top-6 right-6" />

              <div className="space-y-3.5">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl terracotta-gradient text-white font-serif font-extrabold text-base flex items-center justify-center shadow-md border border-white/20">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#2B2A27] text-base leading-snug tracking-tight">
                      {msg.name}
                    </h4>
                    <span className="text-[10px] text-[#5B6E4E] font-extrabold uppercase tracking-wider block mt-0.5">
                      Presentou: {msg.giftTitle || 'Carinho Especial'}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#2B2A27]/85 italic leading-relaxed pt-1 font-normal">
                  "{msg.message}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3.5 border-t border-[#EFE6D5] flex items-center justify-between text-[11px] text-[#2B2A27]/60">
                <span className="flex items-center gap-1.5 text-[#C86D51] font-extrabold">
                  <Heart size={13} className="fill-[#C86D51]" /> R$ {msg.amount.toFixed(2)}
                </span>
                <span className="font-medium font-mono">{msg.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
