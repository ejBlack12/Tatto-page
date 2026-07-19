import { IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline } from 'react-icons/io5';
import './contact-info-style.css';

const details = [
  {
    Icon: IoLocationOutline,
    label: 'Dirección',
    value: 'En el cruce de los Chiles de Aguas Zarcas, costado norte del Super Todo #2',
  },
  {
    Icon: IoCallOutline,
    label: 'Teléfono',
    value: '+506 6157 1777 / +506 8608 4424',
  },
  {
    Icon: IoMailOutline,
    label: 'Email',
    value: 'eliecerperez2433@gmail.com',
  },
  {
    Icon: IoTimeOutline,
    label: 'Horario',
    value: 'Lunes a sábado · 9 am – 8 pm',
  },
];

const WHATSAPP_URL =
  'https://wa.me/50661571777?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita';

const MAP_SRC =
  'https://maps.google.com/maps?q=10.4063567,-84.336806&z=19&ie=UTF8&iwloc=&output=embed';

function ContactInfo() {
  return (
    <section className="contact-info">
      {/* Left: text content */}
      <div className="contact-info__content">
        <p className="contact-info__eyebrow reveal">Ubicación</p>
        <h2 className="contact-info__title reveal reveal-delay-1">
          Ven a Conocernos
        </h2>
        <p className="contact-info__desc reveal reveal-delay-2">
          Estamos más cerca de usted, listos para convertir tu idea en arte.
        </p>

        <div className="contact-info__details">
          {details.map(({ Icon, label, value }, idx) => (
            <div
              key={label}
              className={`contact-detail reveal reveal-delay-${Math.min(idx + 1, 5)}`}
            >
              <div className="contact-detail__icon-wrap">
                <Icon className="contact-detail__icon" />
              </div>
              <div className="contact-detail__text">
                <span className="contact-detail__label">{label}</span>
                <span className="contact-detail__value">{value}</span>
              </div>
            </div>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-info__cta reveal reveal-delay-5"
        >
          Reservar Cita
        </a>
      </div>

      {/* Right: Google Maps */}
      <div className="contact-info__map-col reveal reveal--right reveal-delay-2">
        <iframe
          src={MAP_SRC}
          title="Ubicación Sloth Tattoo"
          className="contact-info__map"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default ContactInfo;
