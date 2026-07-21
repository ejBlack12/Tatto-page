// Nombres alineados con los valores de FILTERS en Portfolio.jsx/PortfolioPage.jsx
const techniques = [
  { name: 'Acuarela', image: '/images/sloth-tattoo-detail-08.png' },
  { name: 'Geometrico', image: '/images/sloth-tattoo-detail-15.png' },
  { name: 'Blackwork', image: '/images/sloth-tattoo-detail-07.png' },
  { name: 'Tradicional', image: '/images/sloth-tattoo-detail-01.png' },
];

function TechniqueCard({ name, image }) {
  return (
    <div className="relative overflow-hidden bg-ink-black border border-white/10 h-[400px]">
      {/* Background image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom-to-top dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/60 to-transparent" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
        <p className="font-inter text-[24px] leading-8 text-[#f5f5f5] font-normal">
          {name}
        </p>
      </div>
    </div>
  );
}

export default function Techniques() {
  return (
    <section className="bg-ink-dark w-full py-[128px]">
      <div className="max-w-[1480px] mx-auto px-[100px]">
        {/* Section header */}
        <div className="mb-[60px]">
          <p className="font-inter text-[16px] leading-6 text-neon-green mb-10">
            Servicios
          </p>
          <h2 className="font-poppins font-black text-[45px] text-[#fdfdfe] uppercase tracking-[3.15px] leading-none mb-6">
            Tecnicas que dominamos
          </h2>
          <p className="font-inter text-[18px] leading-7 text-[#a0a0a0] max-w-[768px]">
            Cada estilo requiere técnica especializada. Nuestro equipo está capacitado para llevar tu
            visión a la realidad.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-2 gap-6">
          {techniques.map((t) => (
            <TechniqueCard key={t.name} name={t.name} image={t.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
