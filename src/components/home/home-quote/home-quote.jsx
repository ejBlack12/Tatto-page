import { FaQuoteLeft } from 'react-icons/fa';
import './home-quote-style.css';

function HomeQuote() {
  return (
    <section className="home-quote">
      <div className="home-quote__bg" />
      <div className="home-quote__overlay" />

      <div className="home-quote__content">
        <FaQuoteLeft className="home-quote__marks" aria-hidden="true" />

        <p className="home-quote__text">
          Los tatuajes tienen su propio poder y magia única.
          <br />
          No solo embellecen el cuerpo, sino también el alma.
        </p>

        <button type="button" className="home-quote__cta">
          Mira Nuestra Historia
        </button>
      </div>
    </section>
  );
}

export default HomeQuote;
