import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES, GIFTS_DATA } from '../data/gifts';

export default function GiftList({ onSelectGift }) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const gifts = GIFTS_DATA.filter((gift) => activeCategory === 'todos' || gift.category === activeCategory);

  const handleImageError = (event) => {
    event.currentTarget.hidden = true;
  };

  return (
    <section id="mimos" className="section gifts-section">
      <div className="section-heading">
        <h2>Mimos que viram casa.</h2>
        <p>Escolha um mimo e pague por PIX ou cartão.</p>
      </div>

      <div className="gift-filters" role="group" aria-label="Filtrar mimos">
        {CATEGORIES.map((category) => (
          <button
            type="button"
            key={category.id}
            className={category.id === activeCategory ? 'is-active' : ''}
            onClick={() => setActiveCategory(category.id)}
            aria-pressed={category.id === activeCategory}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="gift-grid">
        {gifts.map((gift) => (
          <article key={gift.id} className={`gift-card ${gift.isCustom ? 'gift-card-custom' : ''}`}>
            <button type="button" className="gift-card-action" onClick={() => onSelectGift(gift)} aria-label={`Escolher ${gift.title} e ver formas de pagamento`}>
              <span className="gift-card-media">
                <img
                  src={gift.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />
              </span>
              <span className="gift-card-copy">
                <span className="gift-card-title">{gift.title}</span>
                <span className="gift-card-description">{gift.description}</span>
                <span className="gift-card-bottom">
                  <strong>{gift.isCustom ? 'Você escolhe' : gift.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                  <span className="gift-card-icon"><ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" /></span>
                </span>
              </span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
