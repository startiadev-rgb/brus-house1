import { HOUSE_IMAGES } from '../data/house';

export default function Hero() {
  return (
    <section id="top" className="hero" aria-label="Conheca a nova Bru's House">
      <div className="hero-content">
        <div className="hero-intro">
          <h1>A casa nova está quase pronta.</h1>
          <p>Agora só faltam os detalhes, os amigos e uma boa desculpa para inaugurar.</p>
        </div>

        <div className="house-grid" aria-label="Ambientes da casa">
          {HOUSE_IMAGES.map((image, index) => (
            <figure key={image.id} className={`house-card house-card-${image.id}`}>
              <img
                src={image.src}
                alt={`${image.label} da nova casa`}
                width="1024"
                height="571"
                style={{ objectPosition: image.position }}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
              <figcaption><span>{image.label}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
