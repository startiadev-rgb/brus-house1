import React from 'react';
import { Heart, MessageSquareQuote } from 'lucide-react';

export default function MessagesWall({ messages }) {
  return (
    <section id="mural" className="py-20 bg-[#F6F3EC] text-[#22201D] border-b border-[#DCD2C3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#22201D]">
            Recados dos Amigos
          </h2>
          <p className="text-xs sm:text-sm text-[#22201D]/70 font-normal">
            Mensagens enviadas com carinho para abençoar a Bru's House!
          </p>
        </div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white p-6 rounded-sm border border-[#DCD2C3] flex flex-col justify-between space-y-4 relative shadow-xs"
            >
              <MessageSquareQuote size={24} className="text-[#C86D51]/20 absolute top-5 right-5" />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-[#C86D51] text-white font-mono font-bold text-sm flex items-center justify-center">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#22201D] text-base leading-snug">
                      {msg.name}
                    </h4>
                    <span className="text-[10px] font-mono text-[#5B6E4E] font-bold uppercase tracking-wider block">
                      Presentou: {msg.giftTitle || 'Carinho Especial'}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#22201D]/80 italic leading-relaxed pt-1">
                  "{msg.message}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-[#DCD2C3] flex items-center justify-between text-[11px] text-[#22201D]/60 font-mono">
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
