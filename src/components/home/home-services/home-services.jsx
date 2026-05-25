import './home-services-style.css';

const services = [
  {
    number: '1',
    title: 'Tatuajes Personalizados',
    description: 'Diseños únicos creados específicamente para ti.',
  },
  {
    number: '2',
    title: 'Cover-Ups',
    description: 'Transformamos tatuajes antiguos en nuevas obras de arte.',
  },
  {
    number: '3',
    title: 'Tatuajes Tradicionales',
    description: 'Estilos clásicos con técnicas modernas.',
  },
  {
    number: '4',
    title: 'Realismo',
    description: 'Detalles fotográficos en tu piel.',
  },
];

function HomeServices() {
  return (
    <section id="servicios" className="home-services">
      <div className="home-services__inner">
        <h2 className="home-services__title reveal">
          NUESTROS <span className="home-services__title-accent">SERVICIOS</span>
        </h2>
        <div className="home-services__divider reveal" />

        <div className="home-services__grid">
          {services.map((service, idx) => (
            <article
              key={service.number}
              className={`service-card reveal reveal--zoom reveal-delay-${idx + 1}`}
            >
              <div className="service-card__badge">{service.number}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
