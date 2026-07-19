import useScrollReveal from '../../hooks/useScrollReveal';
import ContactFaq from '../../components/contact/contact-faq/contact-faq';
import ContactInfo from '../../components/contact/contact-info/contact-info';
import './ContactPage.css';

function ContactPage() {
  const ref = useScrollReveal();

  return (
    <div className="contact-page" ref={ref}>
      <ContactFaq />
      <ContactInfo />
    </div>
  );
}

export default ContactPage;
