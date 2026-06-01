import { FaInstagram } from 'react-icons/fa';
import './about-equipo-style.css';

const team = [
  {
    id: 1,
    name: 'Laura Méndez',
    role: 'Tatuadora Principal',
    specialty: 'Realismo & Blackwork',
    image: 'https://images.unsplash.com/photo-1531746020798-e6ee3fb28c0f?w=400&h=420&fit=crop&face',
    instagram: '#',
  },
  {
    id: 2,
    name: 'Valeria Torres',
    role: 'Artista Tatuadora',
    specialty: 'Acuarela & Geométrico',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=420&fit=crop&face',
    instagram: '#',
  },
  {
    id: 3,
    name: 'Diego Ramírez',
    role: 'Artista Tatuador',
    specialty: 'Tradicional & Neo-Tradicional',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=420&fit=crop&face',
    instagram: '#',
  },
];

function AboutEquipo() {
  return (
    <section className="about-equipo">
      <div className="about-equipo__inner">
        <div className="about-equipo__header">
          <h2 className="about-equipo__title reveal">
            NUESTRO <span className="about-equipo__title-accent">EQUIPO</span>
          </h2>
          <div className="about-equipo__divider reveal" />
          <p className="about-equipo__subtitle reveal reveal-delay-1">
            Conoce a los artistas detrás de Sloth Ink
          </p>
        </div>

        <div className="about-equipo__grid">
          {team.map((member, idx) => (
            <article
              key={member.id}
              className={`team-card reveal reveal--zoom reveal-delay-${idx + 1}`}
            >
              <div className="team-card__image-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-card__img"
                  loading="lazy"
                />
                <div className="team-card__overlay">
                  <a
                    href={member.instagram}
                    className="team-card__social"
                    aria-label={`Instagram de ${member.name}`}
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div className="team-card__info">
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__specialty">{member.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutEquipo;
