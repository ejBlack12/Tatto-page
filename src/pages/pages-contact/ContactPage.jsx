import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import ContactFaq from '../../components/contact/contact-faq/contact-faq';
import ContactInfo from '../../components/contact/contact-info/contact-info';
import './ContactPage.css';

function ContactPage() {
  const ref = useScrollReveal();
  const { hash } = useLocation();

  // Si llegamos con un hash (p. ej. desde "Reserva tu Cita"), saltar directo a esa sección.
  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    target?.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  return (
    <div className="contact-page" ref={ref}>
      <ContactFaq />
      <ContactInfo />
    </div>
  );
}

export default ContactPage;
