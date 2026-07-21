import { useNavigate } from 'react-router-dom';
import './home-contact-style.css';

function HomeContact() {
  const navigate = useNavigate();

  const goToContact = () => navigate('/contact');

  return (
    <section className="home-contact">
      {/* Bloque claro: Solicita Más Información */}
      <div className="home-contact__light">
        <p className="home-contact__eyebrow reveal">
          MEJORA TU ESTILO PARA UN FUTURO MEJOR
        </p>
        <h2 className="home-contact__title reveal reveal-delay-1">
          Solicita Más Información
        </h2>
        <p className="home-contact__desc reveal reveal-delay-2">
          Estamos aquí para ayudarte a hacer realidad tu próximo tatuaje.
          <br />
          Contáctanos para una consulta gratuita.
        </p>
        <button
          type="button"
          className="home-contact__cta reveal reveal-delay-3"
          onClick={() => navigate('/contact#contact-info')}
        >
          Contáctanos
        </button>
      </div>
    </section>
  );
}

export default HomeContact;
