import { useState } from 'react';
import { HOUSE_IMAGES } from '../data/house';

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="top" className="hero" aria-label="Conheca a nova Bru's House">
      <div className="hero-images" aria-hidden="true">
        {HOUSE_IMAGES.map((image, index) => (
          <div
            key={image.id}
            className={`hero-slide ${index === activeImage ? 'is-active' : ''}`}
          >
            <div className="hero-backdrop" style={{ backgroundImage: `url(${image.blur})` }} />
            <div className="hero-photo-card">
              <img
                src={image.src}
                alt=""
                width="1024"
                height="571"
                style={{ objectPosition: image.position }}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </div>
          </div>
        ))}
      </div>
      <span className="sr-only" aria-live="polite">Ambiente exibido: {HOUSE_IMAGES[activeImage].label}</span>
      <div className="hero-scrim" />
      <div className="hero-content">
        <h1>A casa nova está quase pronta.</h1>
        <p>Agora só faltam os detalhes, os amigos e uma boa desculpa para inaugurar.</p>
        <div className="hero-switcher" aria-label="Escolher ambiente">
          {HOUSE_IMAGES.map((image, index) => (
            <button
              type="button"
              key={image.id}
              onClick={() => setActiveImage(index)}
              aria-pressed={index === activeImage}
            >
              <span>{image.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
