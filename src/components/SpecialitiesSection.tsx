
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const SpecialitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && titleRef.current) {
          titleRef.current.classList.add('in-view');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-charcoal-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-charcoal-800 to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-ember-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-ember-500/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16" ref={titleRef}>
          <div className="stagger-children">
            <span className="inline-block text-ember-400 font-serif text-lg mb-2">Il Meglio delle Nostre</span>
            <h2 className="section-title mb-2 after:left-1/2 after:-translate-x-1/2">Le Nostre Specialità</h2>
            <p className="section-subtitle">Solo il meglio per i nostri clienti</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {specialities.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="group bg-charcoal-800 rounded-lg overflow-hidden shadow-xl border border-charcoal-700 hover:border-ember-500/50 transition-all duration-500"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent opacity-60"></div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-serif text-2xl text-white mb-1 group-hover:text-ember-400 transition-colors">{item.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-300 mb-4">{item.description}</p>
                <Link to="/menu" className="text-ember-400 hover:text-ember-500 flex items-center gap-2 transition-all group-hover:gap-3">
                  Scopri di più <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
