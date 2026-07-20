import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './home-gallery-style.css';

// Cada slide agrupa 4 imágenes reales de trabajos del estudio.
const slides = [
  [
    { id: 1, src: '/images/sloth-tattoo-artwork-01.png', alt: 'Trabajo de tatuaje 1' },
    { id: 2, src: '/images/sloth-tattoo-artwork-02.png', alt: 'Trabajo de tatuaje 2' },
    { id: 3, src: '/images/sloth-tattoo-artwork-03.png', alt: 'Trabajo de tatuaje 3' },
    { id: 4, src: '/images/sloth-tattoo-artwork-09.png', alt: 'Trabajo de tatuaje 4' },
  ],
  [
    { id: 5, src: '/images/sloth-tattoo-artwork-05.png', alt: 'Trabajo de tatuaje 5' },
    { id: 6, src: '/images/sloth-tattoo-artwork-06.png', alt: 'Trabajo de tatuaje 6' },
    { id: 7, src: '/images/sloth-tattoo-artwork-07.png', alt: 'Trabajo de tatuaje 7' },
    { id: 8, src: '/images/sloth-tattoo-artwork-08.png', alt: 'Trabajo de tatuaje 8' },
  ],
];

function HomeGallery() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  // Navegar al portafolio completo (sin filtro) directo a la galería de trabajos
  const goToPortfolio = () => {
    navigate('/portfolio#portfolio-gallery');
  };

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
                className="gallery-item gallery-item--clickable"
                style={{ animationDelay: `${idx * 0.08}s` }}
                onClick={goToPortfolio}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && goToPortfolio()}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="gallery-item__img"
                  loading="lazy"
                />
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

        <button type="button" className="home-gallery__cta reveal" onClick={goToPortfolio}>
          VER TODAS LAS IMÁGENES
        </button>
      </div>
    </section>
  );
}

export default HomeGallery;
