import React, { useState } from 'react';
import { CATEGORIES, GIFTS_DATA } from '../data/gifts';
import { Gift, Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function GiftList({ onSelectGift }) {
  const [activeCategory, setActiveCategory] = useState('todos');

  // Filter gifts
  const filteredGifts = GIFTS_DATA.filter((item) => {
    return activeCategory === 'todos' || item.category === activeCategory;
  });

  return (
    <section id="presentes" className="py-24 bg-[#F9F6F0] relative text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-[#C86D51]/10 text-[#C86D51] text-xs font-extrabold uppercase tracking-widest border border-[#C86D51]/20">
            <Gift size={15} /> Mimos para a Casa Nova
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#2B2A27] tracking-tight">
            Escolha o seu mimo
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2A27]/75 font-medium leading-relaxed max-w-xl mx-auto">
            Clique no presente que deseja nos enviar. Os itens maiores foram divididos em cotas de até R$ 400!
          </p>
        </div>

        {/* Categories Pills (Centered) */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer uppercase tracking-widest ${
                activeCategory === cat.id
                  ? 'terracotta-gradient text-white shadow-lg scale-105 border border-white/20'
                  : 'bg-white text-[#2B2A27]/80 hover:bg-[#EFE6D5] border border-[#EFE6D5] hover:border-[#D4A373]/50 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Centered Gift Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {filteredGifts.map((gift) => (
            <div
              key={gift.id}
              className={`group luxury-glass rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between border text-left ${
                gift.isCustom
                  ? 'border-2 border-[#C86D51] bg-gradient-to-b from-white via-white to-[#F9F6F0]'
                  : 'border-[#EFE6D5] hover:border-[#D4A373]/70'
              }`}
            >
              <div>
                {/* Image Container with Hover Scale */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFE6D5]">
                  <img
                    src={gift.image}
                    alt={gift.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {gift.badge && (
                    <span className="absolute top-4 left-4 bg-[#C86D51] text-white text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-md border border-white/20">
                      {gift.badge}
                    </span>
                  )}
                  {gift.room && (
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10">
                      {gift.room}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-2.5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2B2A27] group-hover:text-[#C86D51] transition-colors leading-snug tracking-tight">
                    {gift.title}
                  </h3>
                  <p className="text-xs text-[#2B2A27]/75 leading-relaxed font-normal">
                    {gift.description}
                  </p>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-[#EFE6D5]/70 pt-4">
                <div>
                  <span className="text-[10px] text-[#5B6E4E] font-extrabold uppercase tracking-widest block">Valor</span>
                  <span className="font-serif text-xl font-extrabold text-[#C86D51]">
                    {gift.isCustom
                      ? 'Você Escolhe'
                      : `R$ ${gift.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                  </span>
                </div>

                <button
                  onClick={() => onSelectGift(gift)}
                  className={`px-5 py-3 rounded-2xl font-extrabold text-xs transition-all duration-300 flex items-center gap-1.5 shadow-md hover:shadow-xl active:scale-95 cursor-pointer uppercase tracking-wider ${
                    gift.isCustom
                      ? 'terracotta-gradient text-white hover:scale-105 border border-white/20'
                      : 'bg-[#5B6E4E] hover:bg-[#445439] text-white'
                  }`}
                >
                  <Heart size={15} className="fill-white" />
                  <span>Presentear</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
