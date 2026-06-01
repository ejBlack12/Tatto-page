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
            En 2015, Sloth Tattoo abrió sus puertas como un sueño hecho realidad: ofrecer
            arte permanente de calidad en un ambiente acogedor y profesional. Lo que comenzó
            como un pequeño estudio se ha convertido en un referente del tatuaje artístico
            en la ciudad.
          </p>
          <p className="about-historia__body">
            Nuestro nombre lo dice todo: la pereza del perezoso es en realidad sabiduría.
            Nos tomamos el tiempo necesario para que cada tatuaje sea perfecto. No
            apresuramos el arte. Cada línea, cada sombra, cada detalle cuenta.
          </p>
          <p className="about-historia__body">
            Hoy somos un equipo de artistas apasionados que compartimos un mismo propósito:
            transformar tus ideas en obras de arte permanentes que llevarás con orgullo
            toda la vida.
          </p>
        </div>

        <div className="about-historia__image-wrap reveal reveal--right">
          <img
            src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=700&h=580&fit=crop"
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
