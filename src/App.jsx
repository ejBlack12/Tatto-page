import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import HomePage from './pages/pages-home/HomePage';
import AboutPage from './pages/pages-about/AboutPage';
import ContactPage from './pages/pages-contact/ContactPage';
import PortfolioPage from './pages/portfolio/PortfolioPage';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
