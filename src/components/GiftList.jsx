import { useState } from 'react';
import { ArrowUpRight, Plus, ShoppingBag } from 'lucide-react';
import { CATEGORIES, GIFTS_DATA } from '../data/gifts';

export default function GiftList({ onSelectGift, onAddToCart, cartQuantities }) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [lastAdded, setLastAdded] = useState('');
  const gifts = GIFTS_DATA.filter((gift) => activeCategory === 'todos' || gift.category === activeCategory);

  const handleImageError = (event) => {
    event.currentTarget.hidden = true;
  };

  const handleGift = (gift) => {
    if (gift.isCustom) {
      onSelectGift(gift);
      return;
    }
    onAddToCart(gift);
    setLastAdded(`${gift.title} adicionado ao carrinho.`);
  };

  return (
    <section id="mimos" className="section gifts-section">
      <div className="section-heading">
        <h2>Mimos que viram casa.</h2>
        <p>Escolha um ou combine vários. No fim, um PIX só e pronto.</p>
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
            <button type="button" className="gift-card-action" onClick={() => handleGift(gift)} aria-label={gift.isCustom ? `Escolher ${gift.title}` : `Adicionar ${gift.title} ao carrinho`}>
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
                  <span className={`gift-card-icon ${cartQuantities[gift.id] ? 'has-items' : ''}`}>
                    {gift.isCustom ? <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" /> : cartQuantities[gift.id] ? <><ShoppingBag size={15} strokeWidth={2} aria-hidden="true" /><b>{cartQuantities[gift.id]}</b></> : <Plus size={17} strokeWidth={2} aria-hidden="true" />}
                  </span>
                </span>
              </span>
            </button>
          </article>
        ))}
      </div>
      <span className="sr-only" role="status" aria-live="polite">{lastAdded}</span>
    </section>
  );
}
