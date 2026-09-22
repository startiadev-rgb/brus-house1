import React, { useState } from 'react';
import { CATEGORIES, GIFTS_DATA } from '../data/gifts';
import { Gift, Heart } from 'lucide-react';

export default function GiftList({ onSelectGift }) {
  const [activeCategory, setActiveCategory] = useState('todos');

  // Filter gifts
  const filteredGifts = GIFTS_DATA.filter((item) => {
    return activeCategory === 'todos' || item.category === activeCategory;
  });

  return (
    <section id="presentes" className="py-20 bg-[#F6F3EC] text-[#22201D] border-b border-[#DCD2C3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left border-b border-[#DCD2C3] pb-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#22201D]">
              Lista de Mimos & Cotas
            </h2>
            <p className="text-xs sm:text-sm text-[#22201D]/70 font-normal">
              Escolha um item para o nosso lar. As cotas maiores foram divididas para facilitar o envio!
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#22201D] text-white'
                    : 'bg-white text-[#22201D]/70 hover:bg-[#EDE8DF] border border-[#DCD2C3]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento & Gift Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredGifts.map((gift) => (
            <div
              key={gift.id}
              className={`bg-white rounded-sm overflow-hidden border flex flex-col justify-between transition-all duration-300 ${
                gift.isCustom
                  ? 'border-2 border-[#C86D51] md:col-span-2 lg:col-span-1 shadow-md'
                  : 'border-[#DCD2C3] hover:border-[#C86D51]'
              }`}
            >
              <div>
                {/* Image Aspect Box */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EDE8DF]">
                  <img
                    src={gift.image}
                    alt={gift.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {gift.badge && (
                    <span className="absolute top-3 left-3 bg-[#C86D51] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-xs">
                      {gift.badge}
                    </span>
                  )}
                  {gift.room && (
                    <span className="absolute bottom-3 right-3 bg-[#121110]/80 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                      {gift.room}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#22201D] leading-snug">
                    {gift.title}
                  </h3>
                  <p className="text-xs text-[#22201D]/75 leading-relaxed font-normal">
                    {gift.description}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-[#DCD2C3]/60 pt-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#5B6E4E] uppercase tracking-wider block">Valor</span>
                  <span className="font-serif text-lg font-bold text-[#C86D51]">
                    {gift.isCustom
                      ? 'Você Escolhe'
                      : `R$ ${gift.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                  </span>
                </div>

                <button
                  onClick={() => onSelectGift(gift)}
                  className={`px-4 py-2.5 rounded-sm font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                    gift.isCustom
                      ? 'terracotta-gradient text-white hover:opacity-95'
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
