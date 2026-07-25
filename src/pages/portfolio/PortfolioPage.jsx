import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Techniques from '../../components/portfolio/Techniques';
import Portfolio from '../../components/portfolio/Portfolio';
import './PortfolioPage.css';

const FILTERS = ['Todos', 'Minimalista', 'Geometrico', 'Blackwork', 'Tradicional', 'Acuarela', 'Realismo'];

function PortfolioPage() {
  const [searchParams] = useSearchParams();
  const { hash } = useLocation();
  const galleryRef = useRef(null);

  // Leer ?category=X de la URL y normalizarlo contra los filtros existentes
  const activeCategory = useMemo(() => {
    const param = searchParams.get('category');
    if (!param) return 'Todos';
    const match = FILTERS.find((f) => f.toLowerCase() === param.toLowerCase());
    return match || 'Todos';
  }, [searchParams]);

  // Cuando la URL trae ?category=X (navegación desde carrusel), hacer scroll a la galería
  useEffect(() => {
    if (!searchParams.get('category')) return;
    if (!galleryRef.current) return;

    const id = setTimeout(() => {
      const NAVBAR_HEIGHT = 80;
      const elementTop = galleryRef.current.offsetTop;
      window.scrollTo({
        top: elementTop - NAVBAR_HEIGHT,
        behavior: 'smooth',
      });
    }, 500);

    return () => clearTimeout(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className="portfolio-page">
      <Techniques />
      <Portfolio ref={galleryRef} initialFilter={activeCategory} />
    </div>
  );
}

export default PortfolioPage;
