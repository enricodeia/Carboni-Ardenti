
import React from 'react';

const specialities = [
  {
    id: 1,
    name: "Tomahawk",
    description: "Un taglio pregiato che prende il nome dalla caratteristica forma dell'ascia indiana",
    image: "https://i.pinimg.com/736x/bb/e9/bf/bbe9bf91c9a85381a5cad0e1b98a94e9.jpg"
  },
  {
    id: 2,
    name: "Bistecca Argentina",
    description: "Il meglio dell'allevamento argentino, tenera e saporita",
    image: "https://images.pexels.com/photos/8477347/pexels-photo-8477347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Picanha",
    description: "Il taglio brasiliano per eccellenza, ricco di sapore e con il giusto equilibrio tra carne e grasso",
    image: "https://images.pexels.com/photos/29095933/pexels-photo-29095933/free-photo-of-raw-ribeye-steak-held-with-gloved-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const SpecialitiesSection = () => {
  return (
    <section className="py-20 bg-charcoal-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-2">Le Nostre Specialità</h2>
          <p className="section-subtitle">Solo il meglio per i nostri clienti</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialities.map((item) => (
            <div 
              key={item.id} 
              className="group bg-charcoal-800 rounded-lg overflow-hidden shadow-lg border border-charcoal-700"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-white mb-2">{item.name}</h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
