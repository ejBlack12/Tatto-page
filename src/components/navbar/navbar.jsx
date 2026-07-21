import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import './navbar-style.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <ul className="navbar__links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
            >
              Sobre Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
              Contáctanos
            </NavLink>
          </li>
        </ul>

        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img
            src="/images/logo (Sloth Tattoo).png"
            alt="Sloth Tattoo"
            className="navbar__logo-img"
          />
        </Link>

        <div className="navbar__socials">
          <a href="#" aria-label="Facebook" className="navbar__social"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram" className="navbar__social"><FaInstagram /></a>
          <a href="#" aria-label="Twitter" className="navbar__social"><FaTwitter /></a>
          <a href="#" aria-label="TikTok" className="navbar__social"><FaTiktok /></a>
        </div>

        <button type="button" className="navbar__toggle" aria-label="Abrir menú" onClick={() => setIsOpen((p) => !p)}>
          {isOpen ? <IoClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      <div className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}>
        <NavLink to="/" onClick={closeMenu} className="navbar__mobile-link">
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu} className="navbar__mobile-link">
          Sobre Nosotros
        </NavLink>
        <NavLink to="/services" onClick={closeMenu} className="navbar__mobile-link">
          Services
        </NavLink>
        <NavLink to="/portfolio" onClick={closeMenu} className="navbar__mobile-link">
          Portfolio
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className="navbar__mobile-link">
          Contáctanos
        </NavLink>
        <div className="navbar__mobile-socials">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="TikTok"><FaTiktok /></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
