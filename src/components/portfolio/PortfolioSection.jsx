import { useState } from 'react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Minimalista', 'Geométrico', 'Blackwork', 'Tradicional', 'Acuarela', 'Realismo'];

  const portfolioItems = [
    {
      id: 1,
      category: 'Minimalista',
      image: 'https://images.unsplash.com/photo-1600723173208-8eee0a1e5c83?w=300&h=300&fit=crop',
    },
    {
      id: 2,
      category: 'Geométrico',
      image: 'https://images.unsplash.com/photo-1598212624191-9c79f6b93a81?w=300&h=300&fit=crop',
    },
    {
      id: 3,
      category: 'Blackwork',
      image: 'https://images.unsplash.com/photo-1574391166629-51fa65a93b47?w=300&h=300&fit=crop',
    },
    {
      id: 4,
      category: 'Tradicional',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop',
    },
    {
      id: 5,
      category: 'Acuarela',
      image: 'https://images.unsplash.com/photo-1600723173208-8eee0a1e5c83?w=300&h=300&fit=crop',
    },
    {
      id: 6,
      category: 'Realismo',
      image: 'https://images.unsplash.com/photo-1598212624191-9c79f6b93a81?w=300&h=300&fit=crop',
    },
    {
      id: 7,
      category: 'Minimalista',
      image: 'https://images.unsplash.com/photo-1574391166629-51fa65a93b47?w=300&h=300&fit=crop',
    },
    {
      id: 8,
      category: 'Blackwork',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop',
    },
  ];

  const filteredItems = activeFilter === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 text-sm font-semibold mb-2">Portafolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">NUESTROS TRABAJOS</h2>
          <p className="text-gray-400">
            Cada pieza cuenta una historia única. Explora nuestra galería.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeFilter === filter
                  ? 'bg-cyan-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid de Portafolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg h-48 md:h-56 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
