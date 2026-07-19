export default function ServicesSection() {
  const services = [
    {
      id: 1,
      name: 'Minimalista',
      image: 'https://images.unsplash.com/photo-1600723173208-8eee0a1e5c83?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Geométrico',
      image: 'https://images.unsplash.com/photo-1598212624191-9c79f6b93a81?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Blackwork',
      image: 'https://images.unsplash.com/photo-1574391166629-51fa65a93b47?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Tradicional',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section id="services" className="bg-gray-950 text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 text-sm font-semibold mb-2">Servicios</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">TECNICAS QUE DOMINAMOS</h2>
          <p className="text-gray-400 max-w-2xl">
            Cada estilo requiere técnica especializada. Nuestro equipo está capacitado para llevar tu visión a la realidad.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group overflow-hidden rounded-lg h-64 md:h-80 cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
