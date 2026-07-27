import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
	const location = useLocation();

	useEffect(() => {
		// Si la URL trae parámetros de búsqueda (ej. ?category=X desde el carrusel),
		// la página destino controla su propio scroll hacia la sección correspondiente.
		if (location.search) return;
		window.scrollTo(0, 0);
	}, [location]);

	return null;
}

export default ScrollToTop;
