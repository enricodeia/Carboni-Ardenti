
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-24 bg-charcoal-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-charcoal-800 to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#CC4140]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#CC4140]/5 rounded-full blur-3xl"></div>
      
      <div className="container max-w-[70vw] relative z-10">
        <div className="text-center mb-16">
          <div>
            <h2 className="section-title mb-2 after:bg-[#CC4140] after:left-1/2 after:-translate-x-1/2">Le Nostre Specialità</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {specialities.map((item) => (
            <div 
              key={item.id} 
              className="group bg-charcoal-800 overflow-hidden shadow-xl border border-charcoal-700 hover:border-[#CC4140]/50 transition-all duration-500 rounded-3xl"
              style={{ borderRadius: '2rem' }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent opacity-60"></div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-serif text-2xl text-white mb-1 group-hover:text-[#CC4140] transition-colors">{item.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-300 mb-4">{item.description}</p>
                <Link to="/menu" className="text-[#CC4140] hover:text-[#b33937] flex items-center gap-2 transition-all group-hover:gap-3">
                  Scopri di più <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
