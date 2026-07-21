import './about-historia-style.css';

function AboutHistoria() {
  return (
    <section className="about-historia">
      <div className="about-historia__inner">
        <div className="about-historia__text reveal reveal--left">
          <h2 className="about-historia__title">
            MI <span className="about-historia__title-accent">HISTORIA</span>
          </h2>
          <div className="about-historia__divider" />
          <p className="about-historia__body">
            Desde que era un niño el dibujo y el arte siempre me llamaron la atención.
            Tuve mi primer acercamiento a una máquina de tatuar a los{' '}
            <span className="about-historia__highlight">10 años</span>, y con el paso del
            tiempo ese interés inicial se fue transformando en una verdadera pasión.
          </p>
          <p className="about-historia__body">
            Con el tiempo tomé la decisión de formarme de manera profesional, dedicando un
            año completo a perfeccionar la técnica hasta culminar mis estudios en{' '}
            <span className="about-historia__highlight">2017</span>. Ese fue el punto de
            partida de todo lo que hoy es Sloth Tattoo.
          </p>
          <p className="about-historia__body">
            Hoy somos un equipo de artistas apasionados que compartimos un mismo propósito:
            transformar tus ideas en obras de arte permanentes que llevarás con orgullo
            toda la vida.
          </p>
          <span className="about-historia__badge">Formación profesional · 2017</span>
        </div>

        <div className="about-historia__image-wrap reveal reveal--right">
          <img
            src="/images/sloth-tattoo-artwork-02.png"
            alt="Sesión de tatuaje en Sloth Tattoo"
            className="about-historia__img"
            loading="lazy"
          />
          <div className="about-historia__img-overlay" />
        </div>
      </div>
    </section>
  );
}

export default AboutHistoria;
