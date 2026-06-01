import { FaBullseye, FaEye } from 'react-icons/fa';
import './about-mision-style.css';

function AboutMision() {
  return (
    <>
      {/* Banner full-width entre Historia y Misión */}
      <div className="about-banner">
        <img
          src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=1600&h=480&fit=crop"
          alt="Artista tatuando en Sloth Tattoo"
          className="about-banner__img"
          loading="lazy"
        />
        <div className="about-banner__overlay" />
      </div>

      {/* Misión / Visión */}
      <section className="about-mision">
        <div className="about-mision__inner">
          <div className="mision-card reveal reveal--left">
            <div className="mision-card__icon">
              <FaBullseye />
            </div>
            <h3 className="mision-card__title">MISIÓN</h3>
            <p className="mision-card__body">
              Brindar experiencias de tatuaje únicas y personalizadas, combinando técnica
              impecable con un ambiente seguro y acogedor. Nos comprometemos a hacer
              realidad la visión de cada cliente con la más alta calidad artística.
            </p>
          </div>

          <div className="mision-card reveal reveal--right">
            <div className="mision-card__icon">
              <FaEye />
            </div>
            <h3 className="mision-card__title">VISIÓN</h3>
            <p className="mision-card__body">
              Ser el estudio de tatuajes de referencia en la región, reconocido por la
              excelencia artística, la innovación continua y el respeto profundo por el
              arte del tatuaje como expresión cultural y personal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMision;
