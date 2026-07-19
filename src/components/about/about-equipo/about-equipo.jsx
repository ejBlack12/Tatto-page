import { FaInstagram } from 'react-icons/fa';
import './about-equipo-style.css';

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

const team = [
  {
    id: 1,
    name: 'Eliecer Antonio Perez Hernandez',
    role: 'Tatuador',
    specialty: 'Realismo',
    experience: '10 años de experiencia',
    bio: null,
    instagram: 'Eliecer Perez',
  },
  {
    id: 2,
    name: 'Anielka Perez',
    role: 'Tatuadora',
    specialty: 'Minimalista & Fine Line',
    experience: '5 años de experiencia',
    bio: null,
    instagram: null,
  },
  {
    id: 3,
    name: 'Fiorela Corrales',
    role: 'Tatuadora',
    specialty: 'Blackwork',
    experience: '10 años de experiencia',
    bio: null,
    instagram: null,
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
              <div className="team-card__avatar-wrap">
                <div className="team-card__avatar">{getInitials(member.name)}</div>
              </div>
              <div className="team-card__info">
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__specialty">{member.specialty}</p>
                <p className="team-card__experience">{member.experience}</p>
                {member.bio && <p className="team-card__bio">{member.bio}</p>}
                {member.instagram && (
                  <span className="team-card__instagram">
                    <FaInstagram />
                    {member.instagram}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutEquipo;
