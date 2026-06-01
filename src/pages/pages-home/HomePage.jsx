import useScrollReveal from '../../hooks/useScrollReveal';
import Navbar from '../../components/navbar/navbar';
import HomeHero from '../../components/home/home-hero/home-hero';
import HomeServices from '../../components/home/home-services/home-services';
import HomeGallery from '../../components/home/home-gallery/home-gallery';
import HomeQuote from '../../components/home/home-quote/home-quote';
import HomeContact from '../../components/home/home-contact/home-contact';
import Footer from '../../components/Footer';
import './HomePage.css';

function HomePage() {
  const ref = useScrollReveal();

  return (
    <>
      <Navbar />
      <div className="home-page" ref={ref}>
        <HomeHero />
        <HomeServices />
        <HomeGallery />
        <HomeQuote />
        <HomeContact />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
