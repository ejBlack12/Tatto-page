import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Si la URL trae parámetros de búsqueda (ej. ?category=X desde el carrusel),
    // la página destino controla su propio scroll hacia la sección correspondiente.
    if (search) return;
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

export default ScrollToTop;
