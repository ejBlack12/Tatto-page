import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
	const { search } = useLocation();

	useEffect(() => {
		// Si la URL trae parámetros de búsqueda (ej. ?category=X desde el carrusel),
		// la página destino controla su propio scroll hacia la sección correspondiente.
		if (search) return;
		window.scrollTo(0, 0);
	}, [search]);

	return null;
}

export default ScrollToTop;
