import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import './footer-style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Marca + redes */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-tattoo">TATTOO</span>
            <span className="footer__logo-sloth">SLOTH INK</span>
          </div>
          <p className="footer__tagline">
            Transformamos tus ideas en arte permanente.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook" className="footer__social">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="footer__social">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="footer__social">
              <FaTwitter />
            </a>
            <a href="#" aria-label="TikTok" className="footer__social">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div className="footer__nav">
          <h4 className="footer__title">Navegación</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contáctanos</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer__nav">
          <h4 className="footer__title">Contacto</h4>
          <ul>
            <li>San José, Costa Rica</li>
            <li>info@slothtattoo.cr</li>
            <li>+506 0000-0000</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Sloth Tattoo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
