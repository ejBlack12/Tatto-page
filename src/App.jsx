import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import OurServicesPage from './pages/our-services/OurServicesPage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<OurServicesPage />} />
          <Route path="/services" element={<OurServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
