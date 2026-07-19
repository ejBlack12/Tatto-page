import { FaChevronDown } from 'react-icons/fa';
import './home-hero-style.css';

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__overlay" />

      <div className="home-hero__content">
        <h1 className="home-hero__title fade-in-up">
          <span className="home-hero__title-line">SLOTH</span>
          <span className="home-hero__title-line">TATTOO</span>
        </h1>

        <p className="home-hero__subtitle fade-in-up" style={{ animationDelay: '0.3s' }}>
          ART ON YOUR SKIN
        </p>

        <p className="home-hero__description fade-in-up" style={{ animationDelay: '0.5s' }}>
          Transformamos tus ideas en arte permanente. Cada tatuaje es una historia única.
        </p>

        <button
          type="button"
          className="home-hero__cta fade-in-up pulse-glow"
          style={{ animationDelay: '0.7s' }}
        >
          Reserva tu Cita
        </button>

        <a href="#servicios" className="home-hero__scroll" aria-label="Scroll abajo">
          <FaChevronDown />
        </a>
      </div>
    </section>
  );
}

export default HomeHero;
