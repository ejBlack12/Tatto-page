import Navbar from '../components/navbar/navbar';
import Techniques from '../components/portfolio/Techniques';
import Portfolio from '../components/portfolio/Portfolio';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-ink-black">
      <Navbar />
      <main className="flex-1">
        <Techniques />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
