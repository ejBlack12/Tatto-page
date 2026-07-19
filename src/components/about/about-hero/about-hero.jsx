import './about-hero-style.css';

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__overlay" />
      <div className="about-hero__content">
        <p className="about-hero__eyebrow fade-in-up">Sloth Tattoo Studio</p>
        <h1 className="about-hero__title fade-in-up" style={{ animationDelay: '0.2s' }}>
          About us
        </h1>
      </div>
    </section>
  );
}

export default AboutHero;
