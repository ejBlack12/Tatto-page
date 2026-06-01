import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import PortfolioPage from './pages/portfolio/PortfolioPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
