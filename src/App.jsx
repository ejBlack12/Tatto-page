import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import HomePage from './pages/pages-home/HomePage';
import ContactPage from './pages/pages-contact/ContactPage';
import PortfolioPage from './pages/portfolio/PortfolioPage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
      </main>
    </div>
  );
}

export default App;
