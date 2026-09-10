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
    <section id="presentes" className="py-16 bg-[#F9F6F0] relative text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C86D51]/10 text-[#C86D51] text-xs font-bold uppercase tracking-wider">
            <Gift size={14} /> Mimos para a Casa Nova
          </div>
          <h2 className="font-serif text-3xl font-extrabold text-[#2B2A27]">
            Escolha o seu mimo 🎁
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2A27]/80">
            Clique no presente que deseja nos enviar. Os itens maiores foram divididos em cotas de até R$ 400!
          </p>
        </div>

        {/* Categories Pills (Centered) */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'terracotta-gradient text-white shadow-sm scale-105'
                  : 'bg-white text-[#2B2A27]/80 hover:bg-[#EFE6D5] border border-[#EFE6D5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Centered Gift Cards Grid (Mobile-First 1 or 2 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {filteredGifts.map((gift) => (
            <div
              key={gift.id}
              className={`group glass-panel rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between border text-left ${
                gift.isCustom
                  ? 'border-2 border-[#C86D51] bg-gradient-to-b from-white to-[#F9F6F0]'
                  : 'border-[#EFE6D5] hover:border-[#D4A373]'
              }`}
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFE6D5]">
                  <img
                    src={gift.image}
                    alt={gift.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {gift.badge && (
                    <span className="absolute top-3 left-3 bg-[#C86D51] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                      {gift.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 space-y-1.5">
                  <h3 className="font-serif text-base font-bold text-[#2B2A27] group-hover:text-[#C86D51] transition-colors leading-snug">
                    {gift.title}
                  </h3>
                  <p className="text-xs text-[#2B2A27]/75 leading-relaxed">
                    {gift.description}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-4 pt-0 mt-auto flex items-center justify-between border-t border-[#EFE6D5]/60">
                <div>
                  <span className="text-[10px] text-[#5B6E4E] font-semibold uppercase block">Valor</span>
                  <span className="font-serif text-base font-bold text-[#C86D51]">
                    {gift.isCustom
                      ? 'Você Escolhe'
                      : `R$ ${gift.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                  </span>
                </div>

                <button
                  onClick={() => onSelectGift(gift)}
                  className={`px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1 shadow-sm cursor-pointer ${
                    gift.isCustom
                      ? 'terracotta-gradient text-white hover:scale-105'
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
