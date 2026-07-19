import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import './footer-style.css';

function Footer() {
  return (
    <footer className="footer">

      {/* Four-column grid — todo unificado en un solo footer */}
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-tattoo">TATTOO</span>
            <span className="footer__logo-sloth">SLOTH INK</span>
          </div>
          <p className="footer__tagline">Transformamos tus ideas en arte permanente.</p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook" className="footer__social"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="footer__social"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="footer__social"><FaTwitter /></a>
            <a href="#" aria-label="TikTok" className="footer__social"><FaTiktok /></a>
          </div>
        </div>

        {/* Columna 2 — Enlaces útiles */}
        <div className="footer__col">
          <h4 className="footer__col-title">Enlaces Útiles</h4>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/portfolio">Portafolio</Link></li>
            <li><Link to="/contact">Contáctanos</Link></li>
          </ul>
        </div>

        {/* Columna 3 — Horario */}
        <div className="footer__col">
          <h4 className="footer__col-title">Horario de Trabajo</h4>
          <ul className="footer__list footer__list--schedule">
            <li><FaClock className="footer__list-icon" /><span>Lun – Vie: 10:00 – 19:00</span></li>
            <li><FaClock className="footer__list-icon" /><span>Sábado: 10:00 – 17:00</span></li>
            <li><FaClock className="footer__list-icon" /><span>Domingo: Cerrado</span></li>
          </ul>
        </div>

        {/* Columna 4 — Información de contacto */}
        <div className="footer__col">
          <h4 className="footer__col-title">Información de Contacto</h4>
          <ul className="footer__list footer__list--contact">
            <li><FaMapMarkerAlt className="footer__list-icon" /><span>San José, Costa Rica</span></li>
            <li><FaEnvelope className="footer__list-icon" /><span>info@slothtattoo.cr</span></li>
            <li><FaPhone className="footer__list-icon" /><span>+506 0000-0000</span></li>
          </ul>
        </div>

      </div>

      {/* Bottom copyright bar */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Sloth Tattoo. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#">Términos de servicio</a>
          <a href="#">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
