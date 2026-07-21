import { Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import './styles/App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import OurServicesPage from './pages/our-services/OurServicesPage';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import HomePage from './pages/pages-home/HomePage';
import AboutPage from './pages/pages-about/AboutPage';
import ContactPage from './pages/pages-contact/ContactPage';
import PortfolioPage from './pages/portfolio/PortfolioPage';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<OurServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
