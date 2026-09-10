import React from 'react';
import { Heart, MessageSquareQuote, Sparkles } from 'lucide-react';

export default function MessagesWall({ messages }) {
  return (
    <section id="mural" className="py-16 bg-[#EFE6D5]/30 relative text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C86D51]/10 text-[#C86D51] text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} /> Carinho das Amigas
          </div>
          <h2 className="font-serif text-3xl font-extrabold text-[#2B2A27]">
            Recados para Bru & Cat ❤️
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2A27]/80">
            Mensagens cheias de carinho enviadas para a Bru's House!
          </p>
        </div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="glass-panel p-5 rounded-3xl shadow-xs hover:shadow-md transition-all border border-white text-left flex flex-col justify-between space-y-3 relative"
            >
              <MessageSquareQuote size={24} className="text-[#C86D51]/30 absolute top-4 right-4" />

              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full terracotta-gradient text-white font-serif font-bold text-sm flex items-center justify-center shadow-xs">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#2B2A27] text-sm leading-snug">
                      {msg.name}
                    </h4>
                    <span className="text-[10px] text-[#5B6E4E] font-medium block">
                      Presentou: {msg.giftTitle || 'Carinho Especial'}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#2B2A27]/85 italic leading-relaxed pt-1">
                  "{msg.message}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-2 border-t border-[#EFE6D5] flex items-center justify-between text-[11px] text-[#2B2A27]/60">
                <span className="flex items-center gap-1 text-[#C86D51] font-bold">
                  <Heart size={12} className="fill-[#C86D51]" /> R$ {msg.amount.toFixed(2)}
                </span>
                <span>{msg.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
