import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './home-gallery-style.css';

// artStyle debe coincidir con los valores de FILTERS en Portfolio.jsx para que el enlace por categoría funcione.
const slides = [
  [
    { id: 1, src: '/images/sloth-tattoo-artwork-00.png', alt: 'Tatuaje realista de Buda en antebrazo', artStyle: 'Realismo' },
    { id: 2, src: '/images/sloth-tattoo-detail-01.png', alt: 'Tatuaje tradicional de búho y calavera', artStyle: 'Tradicional' },
    { id: 3, src: '/images/sloth-tattoo-artwork-09.png', alt: 'Tatuaje blackwork de mariposa', artStyle: 'Blackwork' },
    { id: 4, src: '/images/sloth-tattoo-detail-15.png', alt: 'Tatuaje geométrico flor de la vida en pierna', artStyle: 'Geometrico' },
  ],
  [
    { id: 5, src: '/images/sloth-tattoo-artwork-12.png', alt: 'Tatuaje minimalista de flores en espalda', artStyle: 'Minimalista' },
    { id: 6, src: '/images/sloth-tattoo-artwork-07.png', alt: 'Tatuaje realista de retrato con tocado de tigre', artStyle: 'Realismo' },
    { id: 7, src: '/images/sloth-tattoo-detail-07.png', alt: 'Tatuaje blackwork de oso y rostro nativo', artStyle: 'Blackwork' },
    { id: 8, src: '/images/sloth-tattoo-artwork-08.png', alt: 'Tatuaje acuarela de estrellas', artStyle: 'Acuarela' },
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
          {slides.map((slide, idx) => (
            <button
              key={slide[0].id}
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
