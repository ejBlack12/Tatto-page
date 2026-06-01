import Navbar from '../../components/navbar/navbar';
import Techniques from '../../components/portfolio/Techniques';
import Portfolio from '../../components/portfolio/Portfolio';
import Footer from '../../components/Footer';
import './PortfolioPage.css';

function PortfolioPage() {
  return (
    <>
      <Navbar />
      <div className="portfolio-page">
        <Techniques />
        <Portfolio />
      </div>
      <Footer />
    </>
  );
}

export default PortfolioPage;
