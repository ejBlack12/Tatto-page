import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import './our-services-style.css';

/* ── SVG icon paths (social & feature icons) ── */
const svgPaths = {
  // Heart / Pasión
  p261b2200: "M25.3333 18.6667C27.32 16.72 29.3333 14.3867 29.3333 11.3333C29.3333 9.38841 28.5607 7.52315 27.1855 6.14788C25.8102 4.77262 23.9449 4 22 4C19.6533 4 18 4.66667 16 6.66667C14 4.66667 12.3467 4 10 4C8.05508 4 6.18982 4.77262 4.81455 6.14788C3.43928 7.52315 2.66667 9.38841 2.66667 11.3333C2.66667 14.4 4.66667 16.7333 6.66667 18.6667L16 28L25.3333 18.6667Z",
  // Star / Experiencia
  p3ceb9d80: "M20.636 17.1867L22.656 28.5547C22.6786 28.6885 22.6598 28.8261 22.6022 28.949C22.5445 29.0719 22.4507 29.1743 22.3332 29.2424C22.2158 29.3105 22.0804 29.3412 21.9451 29.3303C21.8098 29.3194 21.681 29.2674 21.576 29.1813L16.8027 25.5987C16.5722 25.4265 16.2923 25.3335 16.0047 25.3335C15.717 25.3335 15.4371 25.4265 15.2067 25.5987L10.4253 29.18C10.3204 29.2659 10.1918 29.3178 10.0567 29.3287C9.9215 29.3396 9.78623 29.3091 9.66888 29.2412C9.55154 29.1732 9.4577 29.0711 9.39989 28.9484C9.34208 28.8258 9.32305 28.6884 9.34533 28.5547L11.364 17.1867",
  p3fb33600: "M16 18.6667C20.4183 18.6667 24 15.0849 24 10.6667C24 6.24839 20.4183 2.66667 16 2.66667C11.5817 2.66667 8 6.24839 8 10.6667C8 15.0849 11.5817 18.6667 16 18.6667Z",
  // People / Compromiso
  p27a3200: "M21.3333 28V25.3333C21.3333 23.9188 20.7714 22.5623 19.7712 21.5621C18.771 20.5619 17.4145 20 16 20H8C6.58551 20 5.22896 20.5619 4.22876 21.5621C3.22857 22.5623 2.66667 23.9188 2.66667 25.3333V28",
  p2ee517c0: "M12 14.6667C14.9455 14.6667 17.3333 12.2789 17.3333 9.33333C17.3333 6.38781 14.9455 4 12 4C9.05448 4 6.66667 6.38781 6.66667 9.33333C6.66667 12.2789 9.05448 14.6667 12 14.6667Z",
  p18f42980: "M29.3333 28V25.3333C29.3325 24.1516 28.9391 23.0037 28.2152 22.0698C27.4912 21.1358 26.4775 20.4688 25.3333 20.1733",
  p37b568c0: "M21.3333 4.17333C22.4806 4.46707 23.4974 5.13427 24.2235 6.06975C24.9497 7.00523 25.3438 8.15577 25.3438 9.34C25.3438 10.5242 24.9497 11.6748 24.2235 12.6103C23.4974 13.5457 22.4806 14.2129 21.3333 14.5067",
};

/* ── Feature card ── */
function FeatureCard({ icon, title, description, delay }) {
  return (
    <motion.div
      className="os-feature-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05, borderColor: '#2DD1C0' }}
    >
      <div className="os-feature-card__icon">{icon}</div>
      <p className="os-feature-card__title">{title}</p>
      <p className="os-feature-card__desc">{description}</p>
    </motion.div>
  );
}

/* ── About / intro section ── */
function About() {
  return (
    <section className="os-about">
      <motion.div
        className="os-about__text"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="os-about__label">El arte en tu piel es tu historia…</p>
        <h2 className="os-about__title">Cada trazo cuenta</h2>
        <p className="os-about__body">
          Sloth Ink nace de la pasión por crecer en el arte del tatuaje y brindar el mejor servicio
          a cada cliente. Nuestro estudio, ubicado en San Carlos, Costa Rica, es un espacio donde la
          creatividad se fusiona con la técnica más refinada para garantizar la mejor calidad en cada
          trabajo.
        </p>
      </motion.div>

      <div className="os-about__cards">
        <FeatureCard
          delay={0.2}
          icon={
            <svg fill="none" viewBox="0 0 32 32" className="os-feature-card__svg">
              <path d={svgPaths.p261b2200} stroke="#2DD1C0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
            </svg>
          }
          title="Pasión"
          description="Cada diseño es una obra de arte única creada con dedicación"
        />
        <FeatureCard
          delay={0.4}
          icon={
            <svg fill="none" viewBox="0 0 32 32" className="os-feature-card__svg">
              <path d={svgPaths.p3ceb9d80} stroke="#2DD1C0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
              <path d={svgPaths.p3fb33600} stroke="#2DD1C0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
            </svg>
          }
          title="Experiencia"
          description="Más de 10 años perfeccionando nuestro arte y técnica"
        />
        <FeatureCard
          delay={0.6}
          icon={
            <svg fill="none" viewBox="0 0 32 32" className="os-feature-card__svg">
              <path d={svgPaths.p27a3200} stroke="#2DD1C0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
              <path d={svgPaths.p2ee517c0} stroke="#2DD1C0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
              <path d={svgPaths.p18f42980} stroke="#2DD1C0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
              <path d={svgPaths.p37b568c0} stroke="#2DD1C0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
            </svg>
          }
          title="Compromiso"
          description="Tu satisfacción y seguridad son nuestra prioridad"
        />
      </div>
    </section>
  );
}

/* ── Video player with animated play button ── */
function VideoPlayer({ videoSrc, posterSrc, playButtonDark = false }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleEnded = () => setPlaying(false);

  return (
    <div className="os-video">
      <video
        ref={videoRef}
        className="os-video__el"
        poster={posterSrc}
        onEnded={handleEnded}
        controls={playing}
        preload="none"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {!playing && (
        <motion.button
          className="os-video__play"
          aria-label="Reproducir video"
          onClick={handlePlay}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className={`os-video__play-circle ${playButtonDark ? 'os-video__play-circle--dark' : ''}`}
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <motion.span
            className={`os-video__play-icon ${playButtonDark ? 'os-video__play-icon--dark' : ''}`}
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            ▶
          </motion.span>
        </motion.button>
      )}
    </div>
  );
}

/* ── Contact button ── */
function ContactBtn() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link to="/contact" className="os-contact-btn">Contáctenos</Link>
    </motion.div>
  );
}

/* ── Feature list item ── */
function Feature({ text }) {
  return (
    <li className="os-feature-list__item">
      <span className="os-feature-list__check">✓</span>
      <span>{text}</span>
    </li>
  );
}

/* ── Service section: image on the LEFT ── */
function ServiceLeft({ title, subtitle, description, features, imageSrc, videoSrc, gradient = false }) {
  return (
    <motion.section
      className={`os-service ${gradient ? 'os-service--gradient' : 'os-service--solid'}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="os-service__media"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <VideoPlayer videoSrc={videoSrc} posterSrc={imageSrc} playButtonDark />
      </motion.div>

      <motion.div
        className="os-service__content"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="os-service__subtitle">{subtitle}</p>
        <h3 className="os-service__title">{title}</h3>
        <p className="os-service__desc">{description}</p>
        <ul className="os-feature-list">
          {features.map((f) => <Feature key={f} text={f} />)}
        </ul>
        <ContactBtn />
      </motion.div>
    </motion.section>
  );
}

/* ── Service section: image on the RIGHT ── */
function ServiceRight({ title, subtitle, description, features, imageSrc, videoSrc }) {
  return (
    <motion.section
      className="os-service os-service--solid"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="os-service__content"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="os-service__subtitle">{subtitle}</p>
        <h3 className="os-service__title">{title}</h3>
        <p className="os-service__desc">{description}</p>
        <ul className="os-feature-list">
          {features.map((f) => <Feature key={f} text={f} />)}
        </ul>
        <ContactBtn />
      </motion.div>

      <motion.div
        className="os-service__media"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <VideoPlayer videoSrc={videoSrc} posterSrc={imageSrc} />
      </motion.div>
    </motion.section>
  );
}

/* ── Main page ── */
export default function OurServicesPage() {
  return (
    <div className="our-services-page">
      <About />

      <ServiceLeft
        subtitle="Tatuaje Artístico"
        title="Realismo & Detalle"
        description="Dominio absoluto de la técnica realista: retratos, naturaleza, fauna y todo lo que imagines llevado a la piel con una precisión que asombra. Cada sesión comienza con una consulta sin costo para entender tu visión."
        features={['Consulta de diseño gratuita', 'Tinta de grado médico', 'Ambiente 100 % estéril']}
        imageSrc="/images/sloth-tattoo-artwork-01.png"
        videoSrc="/Videos/sloth-tattoo-video-01.mp4"
      />

      <ServiceRight
        subtitle="Estilo Exclusivo"
        title="Línea Fina & Minimalismo"
        description="La elegancia del trazo mínimo. Creamos diseños sutiles, geométricos o botánicos con agujas de precisión que garantizan líneas perfectas y una cicatrización impecable."
        features={['Trazo de ultra-precisión', 'Diseño personalizado al 100 %', 'Seguimiento post-tattoo']}
        imageSrc="/images/sloth-tattoo-artwork-04.png"
        videoSrc="/Videos/sloth-tattoo-video-02.mp4"
      />

      <ServiceLeft
        subtitle="Arte Oscuro"
        title="Blackwork & Blackout"
        description="Grandes áreas de tinta sólida o intrincados patrones geométricos que crean un impacto visual inmediato. Técnica avanzada con pigmentos de la más alta densidad para resultados duraderos y definidos."
        features={['Pigmento de alta densidad', 'Técnica de cobertura avanzada', 'Arte atemporal']}
        imageSrc="/images/sloth-tattoo-artwork-07.png"
        videoSrc="/Videos/sloth-tattoo-video-03.mp4"
        gradient
      />
    </div>
  );
}
