import { forwardRef, useEffect, useState } from 'react';

const FILTERS = ['Todos', 'Minimalista', 'Geometrico', 'Blackwork', 'Tradicional', 'Acuarela', 'Realismo'];

// Categorías asignadas revisando el contenido visual real de cada foto
const portfolioItems = [
  { id: 1, src: '/images/sloth-tattoo-artwork-00.png', category: 'Realismo' },
  { id: 2, src: '/images/sloth-tattoo-artwork-02.png', category: 'Realismo' },
  { id: 3, src: '/images/sloth-tattoo-artwork-07.png', category: 'Realismo' },
  { id: 4, src: '/images/sloth-tattoo-detail-06.png', category: 'Realismo' },
  { id: 5, src: '/images/sloth-tattoo-detail-10.png', category: 'Realismo' },
  { id: 6, src: '/images/sloth-tattoo-artwork-01.png', category: 'Acuarela' },
  { id: 7, src: '/images/sloth-tattoo-artwork-08.png', category: 'Acuarela' },
  { id: 8, src: '/images/sloth-tattoo-detail-04.png', category: 'Acuarela' },
  { id: 9, src: '/images/sloth-tattoo-detail-08.png', category: 'Acuarela' },
  { id: 10, src: '/images/sloth-tattoo-detail-14.png', category: 'Acuarela' },
  { id: 11, src: '/images/sloth-tattoo-detail-01.png', category: 'Tradicional' },
  { id: 12, src: '/images/sloth-tattoo-detail-09.png', category: 'Tradicional' },
  { id: 13, src: '/images/sloth-tattoo-artwork-05.png', category: 'Geometrico' },
  { id: 14, src: '/images/sloth-tattoo-detail-15.png', category: 'Geometrico' },
  { id: 15, src: '/images/sloth-tattoo-artwork-09.png', category: 'Blackwork' },
  { id: 16, src: '/images/sloth-tattoo-artwork-11.png', category: 'Blackwork' },
  { id: 17, src: '/images/sloth-tattoo-detail-07.png', category: 'Blackwork' },
  { id: 18, src: '/images/sloth-tattoo-artwork-10.png', category: 'Minimalista' },
  { id: 19, src: '/images/sloth-tattoo-artwork-12.png', category: 'Minimalista' },
];

// initialFilter permite llegar pre-filtrado desde ?category=X (ver home-gallery)
const Portfolio = forwardRef(function Portfolio({ initialFilter = 'Todos' }, ref) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    setActiveFilter(initialFilter);
  }, [initialFilter]);

  const visible =
    activeFilter === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio-gallery" ref={ref} className="bg-ink-black w-full py-16 sm:py-20 lg:py-32">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-[100px]">
        {/* Section header */}
        <div className="mb-10 sm:mb-14 lg:mb-[60px]">
          <p className="font-inter text-[14px] sm:text-[16px] leading-6 text-neon-green mb-6 sm:mb-10">
            Portfolio
          </p>
          <h2 className="font-poppins font-black text-[28px] sm:text-[36px] lg:text-[45px] text-[#fdfdfe] uppercase tracking-[3.15px] leading-none mb-4 sm:mb-5">
            Nuestros trabajos
          </h2>
          <p className="font-inter text-[15px] sm:text-[16px] lg:text-[18px] leading-7 text-[#abb9d2]">
            Cada pieza cuenta una historia única. Explora nuestra galería.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-14 lg:mb-[86px]">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                type="button"
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 sm:px-[25px] sm:py-[9px] text-[13px] sm:text-[14px] font-inter leading-5 transition-colors duration-200 border ${
                  isActive
                    ? 'bg-neon-green border-neon-green text-black'
                    : 'bg-transparent border-white/10 text-neon-green hover:border-neon-green/40'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Image grid — responsive columns, square items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {visible.map((item) => (
            <div
              key={item.id}
              className="aspect-square overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.category}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
