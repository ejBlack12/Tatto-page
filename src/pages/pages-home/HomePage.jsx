import HomeContact from "../../components/home/home-contact/home-contact";
import HomeGallery from "../../components/home/home-gallery/home-gallery";
import HomeHero from "../../components/home/home-hero/home-hero";
import HomeQuote from "../../components/home/home-quote/home-quote";
import HomeServices from "../../components/home/home-services/home-services";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./HomePage.css";

function HomePage() {
	const ref = useScrollReveal();

	return (
		<div className="home-page" ref={ref}>
			<HomeHero />
			<HomeServices />
			<HomeGallery />
			<HomeQuote />
			<HomeContact />
		</div>
	);
}

export default HomePage;
