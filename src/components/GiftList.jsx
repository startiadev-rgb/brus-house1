import React, { useState } from 'react';
import { CATEGORIES, GIFTS_DATA } from '../data/gifts';
import { Gift, Heart, Sparkles } from 'lucide-react';

export default function GiftList({ onSelectGift }) {
  const [activeCategory, setActiveCategory] = useState('todos');

  // Filter gifts
  const filteredGifts = GIFTS_DATA.filter((item) => {
    return activeCategory === 'todos' || item.category === activeCategory;
  });

  return (
    <section id="presentes" className="py-20 bg-[#F9F6F0] relative text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C86D51]/10 text-[#C86D51] text-xs font-extrabold uppercase tracking-widest border border-[#C86D51]/20">
            <Gift size={14} /> Mimos para a Casa Nova
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2B2A27] tracking-tight">
            Escolha o seu mimo
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2A27]/75 font-medium">
            Clique no presente que deseja nos enviar. Os itens maiores foram divididos em cotas de até R$ 400!
          </p>
        </div>

        {/* Categories Pills (Centered) */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 ease-spring cursor-pointer uppercase tracking-wider ${
                activeCategory === cat.id
                  ? 'terracotta-gradient text-white shadow-md scale-105 border border-white/20'
                  : 'bg-white text-[#2B2A27]/80 hover:bg-[#EFE6D5] border border-[#EFE6D5] hover:border-[#D4A373]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Centered Gift Cards Grid (Mobile-First 1 or 2 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-4xl mx-auto">
          {filteredGifts.map((gift) => (
            <div
              key={gift.id}
              className={`group glass-panel rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-spring flex flex-col justify-between border text-left ${
                gift.isCustom
                  ? 'border-2 border-[#C86D51] bg-gradient-to-b from-white via-white to-[#F9F6F0]'
                  : 'border-[#EFE6D5] hover:border-[#D4A373]/60'
              }`}
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFE6D5]">
                  <img
                    src={gift.image}
                    alt={gift.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {gift.badge && (
                    <span className="absolute top-3.5 left-3.5 bg-[#C86D51] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                      {gift.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#2B2A27] group-hover:text-[#C86D51] transition-colors leading-snug tracking-tight">
                    {gift.title}
                  </h3>
                  <p className="text-xs text-[#2B2A27]/75 leading-relaxed font-normal">
                    {gift.description}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-[#EFE6D5]/60 pt-4">
                <div>
                  <span className="text-[10px] text-[#5B6E4E] font-bold uppercase tracking-wider block">Valor</span>
                  <span className="font-serif text-lg font-extrabold text-[#C86D51]">
                    {gift.isCustom
                      ? 'Você Escolhe'
                      : `R$ ${gift.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                  </span>
                </div>

                <button
                  onClick={() => onSelectGift(gift)}
                  className={`px-5 py-2.5 rounded-2xl font-extrabold text-xs transition-all duration-300 ease-spring flex items-center gap-1.5 shadow-md hover:shadow-lg active:scale-98 cursor-pointer uppercase tracking-wider ${
                    gift.isCustom
                      ? 'terracotta-gradient text-white hover:scale-105 border border-white/20'
                      : 'bg-[#5B6E4E] hover:bg-[#445439] text-white'
                  }`}
                >
                  <Heart size={14} className="fill-white" />
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
