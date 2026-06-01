import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/pages-home/HomePage';
import PortfolioPage from './pages/portfolio/PortfolioPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
