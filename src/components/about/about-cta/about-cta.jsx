import './about-cta-style.css';

function AboutCta() {
  return (
    <section className="about-cta">
      <div className="about-cta__overlay" />
      <div className="about-cta__content">
        <h2 className="about-cta__title reveal">
          ¿Listo para tu próximo <span className="about-cta__title-accent">tatuaje?</span>
        </h2>
        <p className="about-cta__desc reveal reveal-delay-1">
          Reserva una consulta gratuita y hablemos de tu próxima obra de arte.
        </p>
        <a
          href="https://wa.me/50661571777?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita"
          target="_blank"
          rel="noopener noreferrer"
          className="about-cta__btn reveal reveal-delay-2"
        >
          Reserva tu Cita
        </a>
      </div>
    </section>
  );
}

export default AboutCta;
