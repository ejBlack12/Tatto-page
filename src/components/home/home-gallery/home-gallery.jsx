import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './home-gallery-style.css';

// Imagen placeholder mientras llegan las fotos reales del estudio.
const PLACEHOLDER = '/images/tatuajes-realistas 1.png';

// Cada slide agrupa 4 imágenes que se muestran al mismo tiempo.
const slides = [
  [
    { id: 1, src: PLACEHOLDER, alt: 'Trabajo de tatuaje 1', artStyle: 'Realismo' },
    { id: 2, src: PLACEHOLDER, alt: 'Trabajo de tatuaje 2', artStyle: 'Tradicional' },
    { id: 3, src: PLACEHOLDER, alt: 'Trabajo de tatuaje 3', artStyle: 'Blackwork' },
    { id: 4, src: PLACEHOLDER, alt: 'Trabajo de tatuaje 4', artStyle: 'Cover-up' },
  ],
  [
    { id: 5, src: PLACEHOLDER, alt: 'Trabajo de tatuaje 5', artStyle: 'Fine line' },
    { id: 6, src: PLACEHOLDER, alt: 'Trabajo de tatuaje 6', artStyle: 'Realismo' },
    { id: 7, src: PLACEHOLDER, alt: 'Trabajo de tatuaje 7', artStyle: 'Blackwork' },
    { id: 8, src: PLACEHOLDER, alt: 'Trabajo de tatuaje 8', artStyle: 'Tradicional' },
  ],
];

function HomeGallery() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  // Navegar al portafolio con la categoría del item clickeado
  const handleImageClick = (artStyle) => {
    navigate(`/portfolio?category=${encodeURIComponent(artStyle)}`);
  };

  // Navegar al portafolio sin filtro (mostrar todos)
  const handleVerTodas = () => {
    navigate('/portfolio?category=Todos');
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
                onClick={() => handleImageClick(item.artStyle)}
                title={`Ver más trabajos de ${item.artStyle}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleImageClick(item.artStyle);
                  }
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="gallery-item__img"
                  loading="lazy"
                />
                <div className="gallery-item__overlay" />
                <span className="gallery-item__style-label">{item.artStyle}</span>
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

        <button type="button" className="home-gallery__cta reveal" onClick={handleVerTodas}>
          VER TODAS LAS IMÁGENES
        </button>
      </div>
    </section>
  );
}

export default HomeGallery;
