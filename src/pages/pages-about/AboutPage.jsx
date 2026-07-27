import AboutCta from "../../components/about/about-cta/about-cta";
import AboutEquipo from "../../components/about/about-equipo/about-equipo";
import AboutHero from "../../components/about/about-hero/about-hero";
import AboutHistoria from "../../components/about/about-historia/about-historia";
import AboutMision from "../../components/about/about-mision/about-mision";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./AboutPage.css";

function AboutPage() {
	const ref = useScrollReveal();

	return (
		<div className="about-page" ref={ref}>
			<AboutHero />
			<AboutHistoria />
			<AboutMision />
			<AboutEquipo />
			<AboutCta />
		</div>
	);
}

export default AboutPage;
