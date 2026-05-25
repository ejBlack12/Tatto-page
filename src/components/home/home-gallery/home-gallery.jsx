import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './home-gallery-style.css';

// Placeholders por ahora (luego se sustituyen por imágenes reales del estudio).
// Cada item agrupa 4 imágenes que se muestran al mismo tiempo en el slider.
const slides = [
  [
    { id: 1, label: 'Tattoo 1', color: '#1A2330' },
    { id: 2, label: 'Tattoo 2', color: '#1F6F76' },
    { id: 3, label: 'Tattoo 3', color: '#0F1620' },
    { id: 4, label: 'Tattoo 4', color: '#2DD1C0' },
  ],
  [
    { id: 5, label: 'Tattoo 5', color: '#2A2A2A' },
    { id: 6, label: 'Tattoo 6', color: '#1F6F76' },
    { id: 7, label: 'Tattoo 7', color: '#82D4D4' },
    { id: 8, label: 'Tattoo 8', color: '#1A2330' },
  ],
];

function HomeGallery() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section className="home-gallery">
      <div className="home-gallery__inner">
        <h2 className="home-gallery__title reveal">
          GALERÍA <span className="home-gallery__title-accent">DE TRABAJOS</span>
        </h2>
        <div className="home-gallery__divider reveal" />

        <div className="home-gallery__slider reveal">
          <button
            type="button"
            className="home-gallery__arrow home-gallery__arrow--left"
            onClick={prev}
            aria-label="Anterior"
          >
            <FaChevronLeft />
          </button>

          <div className="home-gallery__images">
            {slides[current].map((item, idx) => (
              <div
                key={item.id}
                className="gallery-item"
                style={{
                  backgroundColor: item.color,
                  animationDelay: `${idx * 0.08}s`,
                }}
              >
                <span className="gallery-item__label">{item.label}</span>
                <div className="gallery-item__overlay" />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="home-gallery__arrow home-gallery__arrow--right"
            onClick={next}
            aria-label="Siguiente"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="home-gallery__dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`home-gallery__dot ${idx === current ? 'home-gallery__dot--active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ver slide ${idx + 1}`}
            />
          ))}
        </div>

        <button type="button" className="home-gallery__cta reveal">
          VER TODAS LAS IMÁGENES
        </button>
      </div>
    </section>
  );
}

export default HomeGallery;
