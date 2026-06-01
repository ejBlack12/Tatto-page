import './about-estudio-style.css';

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1562159286-ca86e67985a2?w=500&h=380&fit=crop',
    alt: 'Estudio Sloth Tattoo - área de trabajo',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1576700117786-e6ee3fb28c0f?w=500&h=380&fit=crop',
    alt: 'Estudio Sloth Tattoo - proceso de tatuaje',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1598212624191-9c79f6b93a81?w=500&h=380&fit=crop',
    alt: 'Estudio Sloth Tattoo - ambiente',
  },
];

function AboutEstudio() {
  return (
    <section className="about-estudio">
      <div className="about-estudio__inner">
        <div className="about-estudio__header">
          <h2 className="about-estudio__title reveal">
            EN EL <span className="about-estudio__title-accent">ESTUDIO</span>
          </h2>
          <div className="about-estudio__divider reveal" />
          <p className="about-estudio__subtitle reveal reveal-delay-1">
            Un espacio diseñado para tu comodidad y la perfección del arte
          </p>
        </div>

        <div className="about-estudio__grid">
          {photos.map((photo, idx) => (
            <div
              key={photo.id}
              className={`estudio-photo reveal reveal--zoom reveal-delay-${idx + 1}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="estudio-photo__img"
                loading="lazy"
              />
              <div className="estudio-photo__overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutEstudio;
