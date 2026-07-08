import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import './PortfolioPage.css';

function PortfolioPage() {
  const [searchParams] = useSearchParams();
  const galleryRef = useRef(null);

  const filters = ['Todos', 'Minimalista', 'Geométrico', 'Blackwork', 'Tradicional', 'Acuarela', 'Realismo'];

  // Leer ?category=X de la URL y normalizarlo contra los filtros existentes
  const getCategoryFromParams = () => {
    const param = searchParams.get('category');
    if (!param) return 'Todos';
    const match = filters.find(
      (f) => f.toLowerCase() === param.toLowerCase()
    );
    return match || 'Todos';
  };

  const [activeFilter, setActiveFilter] = useState(getCategoryFromParams);

  // Cuando la URL cambia (navegación desde carrusel), actualizar filtro y hacer scroll
  useEffect(() => {
    const category = getCategoryFromParams();
    setActiveFilter(category);

    // Scroll automático hacia la sección de galería con offset del navbar fijo
    if (galleryRef.current) {
      setTimeout(() => {
        const NAVBAR_HEIGHT = 80; // altura del navbar fijo
        const elementTop =
          galleryRef.current.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementTop - NAVBAR_HEIGHT,
          behavior: 'smooth',
        });
      }, 200); // 200ms para que el DOM esté pintado en móviles
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const techniques = [
    {
      id: 1,
      name: 'Minimalista',
      image: 'https://images.unsplash.com/photo-1600723173208-8eee0a1e5c83?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Geométrico',
      image: 'https://images.unsplash.com/photo-1598212624191-9c79f6b93a81?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Blackwork',
      image: 'https://images.unsplash.com/photo-1574391166629-51fa65a93b47?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Tradicional',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop',
    },
  ];

  const portfolioItems = [
    { id: 1, category: 'Minimalista', image: 'https://images.unsplash.com/photo-1600723173208-8eee0a1e5c83?w=300&h=300&fit=crop' },
    { id: 2, category: 'Geométrico', image: 'https://images.unsplash.com/photo-1598212624191-9c79f6b93a81?w=300&h=300&fit=crop' },
    { id: 3, category: 'Blackwork', image: 'https://images.unsplash.com/photo-1574391166629-51fa65a93b47?w=300&h=300&fit=crop' },
    { id: 4, category: 'Tradicional', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop' },
    { id: 5, category: 'Acuarela', image: 'https://images.unsplash.com/photo-1600723173208-8eee0a1e5c83?w=300&h=300&fit=crop' },
    { id: 6, category: 'Realismo', image: 'https://images.unsplash.com/photo-1598212624191-9c79f6b93a81?w=300&h=300&fit=crop' },
    { id: 7, category: 'Minimalista', image: 'https://images.unsplash.com/photo-1574391166629-51fa65a93b47?w=300&h=300&fit=crop' },
    { id: 8, category: 'Blackwork', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop' },
  ];

  const filteredItems = activeFilter === 'Todos'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* TECNICAS QUE DOMINAMOS */}
      <section className="portfolio-techniques">
        <div className="portfolio-container">
          <div className="portfolio-section-header">
            <p className="portfolio-label">Servicios</p>
            <h2 className="portfolio-title">TECNICAS QUE DOMINAMOS</h2>
            <p className="portfolio-description">
              Cada estilo requiere técnica especializada. Nuestro equipo está capacitado para llevar tu visión a la realidad.
            </p>
          </div>

          <div className="portfolio-techniques-grid">
            {techniques.map((tech) => (
              <div key={tech.id} className="portfolio-technique-card">
                <div className="portfolio-technique-image">
                  <img src={tech.image} alt={tech.name} />
                  <div className="portfolio-technique-overlay" />
                </div>
                <h3 className="portfolio-technique-name">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUESTROS TRABAJOS — id para scroll automático */}
      <section id="portfolio-gallery" className="portfolio-works" ref={galleryRef}>
        <div className="portfolio-container">
          <div className="portfolio-section-header">
            <p className="portfolio-label">Portafolio</p>
            <h2 className="portfolio-title">NUESTROS TRABAJOS</h2>
            <p className="portfolio-description">
              Cada pieza cuenta una historia única. Explora nuestra galería.
            </p>
          </div>

          {/* FILTROS */}
          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`portfolio-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* GRID DE PORTAFOLIO */}
          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="portfolio-item">
                <img src={item.image} alt={item.category} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;
