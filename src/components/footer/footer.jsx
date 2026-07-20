import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import './footer-style.css';

const WHATSAPP_URL =
  'https://wa.me/50661571777?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita';

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
            <a href="https://www.facebook.com/p/Sloth-Ink-Tattoo-Studio-100057197209777/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social"><FaFacebookF /></a>
            <a href="https://www.instagram.com/eliecer_perez2433?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social"><FaInstagram /></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer__social"><FaWhatsapp /></a>
  
          </div>
        </div>

        {/* Columna 2 — Enlaces útiles */}
        <div className="footer__col">
          <h4 className="footer__col-title">Enlaces Útiles</h4>
          <ul className="footer__list">
            <li><Link to="/">Principal</Link></li>
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
            <li><FaClock className="footer__list-icon" /><span>Lunes a sábado · 9 am – 8 pm</span></li>
          </ul>
        </div>

        {/* Columna 4 — Información de contacto */}
        <div className="footer__col">
          <h4 className="footer__col-title">Información de Contacto</h4>
          <ul className="footer__list footer__list--contact">
            <li><FaMapMarkerAlt className="footer__list-icon" /><span>En el cruce de los Chiles de Aguas Zarcas, costado norte del Super Todo #2</span></li>
            <li><FaEnvelope className="footer__list-icon" /><span>eliecerperez2433@gmail.com</span></li>
            <li><FaPhone className="footer__list-icon" /><span>+506 6157 1777 / +506 8608 4424</span></li>
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
