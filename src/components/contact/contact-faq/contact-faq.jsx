import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import './contact-faq-style.css';

const faqs = [
  {
    q: '¿Precio de las sesiones?',
    a: 'Una sesión consiste en un lapso determinado de tres horas con un valor de 40.000 colones por sesión concluida.',
  },
  {
    q: '¿Horario de atención por sesión?',
    a: 'Un día se divide en tres sesiones: de 9 am a 12 md, de 1 pm a 4 pm o de 5 pm a 8 pm.',
  },
  {
    q: '¿Precio por cromo, fine line o minimalista?',
    a: 'En este concepto depende mucho del estilo, tamaño o técnica. Normalmente los precios van desde los 10.000 colones en adelante dependiendo del diseño.',
  },
  {
    q: '¿Trabajan días feriados o domingos?',
    a: 'Sí, trabajamos con previo aviso de tres días acompañado con un depósito del 20% del valor total del trabajo.',
  },
  {
    q: '¿Trabajan a domicilio?',
    a: 'En algunas ocasiones se hacen excepciones si el cliente tiene alguna discapacidad o en caso de que sean varias personas que quieran ser atendidas en un lugar específico.',
  },
  {
    q: '¿Cubren trabajos de hace años o mal hechos (cover up)?',
    a: 'Sí, en algunos casos es cuestión de analizar si se puede rescatar la idea original del cliente. De ser así se rectifican líneas, sombras o color. En caso contrario se aplica la técnica "white over" que consiste en neutralizar tonos fuertes para facilitar una correcta cobertura sobre el tatuaje a tapar.',
  },
  {
    q: '¿Cuántos días antes puedo hacer una reservación?',
    a: 'Se puede hacer una reservación como mínimo tres días antes, aunque si está disponible algún espacio se puede atender el mismo día de la cotización.',
  },
  {
    q: '¿Se pueden tatuar menores de edad?',
    a: 'Sí se puede, siempre y cuando cuente con el consentimiento del papá, mamá o encargado como tutor legal. Solo se debe solicitarnos un formulario el cual debe ser firmado por el encargado del menor, acompañado con una fotocopia de la cédula del menor y del encargado, además de ser acompañado con un mayor de edad el día de la cita acordada.',
  },
  {
    q: '¿Se puede tatuar una mujer embarazada o persona con algún padecimiento?',
    a: 'Sí se puede, ya que el procedimiento no interviene con tejido interno de la piel, debido a que la profundidad que interviene la aguja llega hasta la segunda capa de la piel (dermis).',
  },
  {
    q: '¿Cuánto tiempo dura un tatuaje en sanar?',
    a: 'Normalmente son 8 días a partir del día en que se realizó el procedimiento, teniendo en cuenta que durante ese lapso debe evitar el contacto directo con el sol, evitar contacto directo con mascotas o áreas contaminadas ya sea química o biológica.',
  },
];

function ContactFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="contact-faq">
      <div className="contact-faq__image-col">
        <img
          src="/images/tatuajes-realistas 1.png"
          alt="Artista de tatuajes Sloth Ink"
          className="contact-faq__img"
        />
      </div>

      <div className="contact-faq__content-col">
        <p className="contact-faq__eyebrow reveal">Preguntas frecuentes</p>
        <h2 className="contact-faq__title reveal reveal-delay-1">
          Preguntas y respuestas frecuentes
        </h2>

        <div className="contact-faq__list">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item reveal">
              <button
                className={`faq-item__btn ${openIndex === idx ? 'faq-item__btn--open' : ''}`}
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="faq-item__question">{faq.q}</span>
                <HiChevronDown
                  className={`faq-item__icon ${openIndex === idx ? 'faq-item__icon--rotated' : ''}`}
                />
              </button>
              <div
                className={`faq-item__answer-wrap ${openIndex === idx ? 'faq-item__answer-wrap--open' : ''}`}
              >
                <p className="faq-item__answer">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactFaq;
