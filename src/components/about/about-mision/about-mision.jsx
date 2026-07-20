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
              Crecer constantemente en el arte del tatuaje, con el propósito de brindar el
              mejor servicio a cada uno de nuestros clientes y garantizar la más alta
              calidad en cada trabajo que realizamos.
            </p>
          </div>

          <div className="mision-card reveal reveal--right">
            <div className="mision-card__icon">
              <FaEye />
            </div>
            <h3 className="mision-card__title">VISIÓN</h3>
            <p className="mision-card__body">
              Hacer renombre y consolidarnos como un referente del tatuaje, expandiendo
              nuestro alcance más allá de la ciudad hasta dejar huella a nivel internacional.
            </p>
            <div className="mision-card__scope">
              <span className="mision-card__scope-item">Regional</span>
              <span className="mision-card__scope-dot" />
              <span className="mision-card__scope-item">Provincial</span>
              <span className="mision-card__scope-dot" />
              <span className="mision-card__scope-item">Internacional</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMision;
