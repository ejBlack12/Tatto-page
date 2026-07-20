import useScrollReveal from '../../hooks/useScrollReveal';
import AboutHero from '../../components/about/about-hero/about-hero';
import AboutHistoria from '../../components/about/about-historia/about-historia';
import AboutMision from '../../components/about/about-mision/about-mision';
import AboutEquipo from '../../components/about/about-equipo/about-equipo';
import AboutEstudio from '../../components/about/about-estudio/about-estudio';
import AboutCta from '../../components/about/about-cta/about-cta';
import './AboutPage.css';

function AboutPage() {
  const ref = useScrollReveal();

  return (
    <div className="about-page" ref={ref}>
      <AboutHero />
      <AboutHistoria />
      <AboutMision />
      <AboutEquipo />
      <AboutEstudio />
      <AboutCta />
    </div>
  );
}

export default AboutPage;
