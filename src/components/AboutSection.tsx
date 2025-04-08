
import React from 'react';
import { BookOpen, Award, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-charcoal-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-charcoal-900 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#CC4140]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#CC4140]/5 rounded-full blur-3xl"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative z-10">
            <span className="text-[#CC4140] uppercase tracking-wider font-medium mb-2 block">Dal 2010</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">La Nostra Storia</h2>
            
            <p className="text-slate-300 mb-8 text-lg">
              Braceria Carboni Ardenti nasce da un'idea di Gianni Carboni e dalla sua lunga esperienza nel campo della ristorazione. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-charcoal-900/50 p-6 rounded-lg border border-charcoal-700 hover:border-[#CC4140]/50 transition-all duration-300">
                <Award className="mb-4 text-[#CC4140]" size={28} />
                <h3 className="font-serif text-xl text-white mb-2">Qualità</h3>
                <p className="text-slate-300">Selezioniamo solo le migliori carni del mercato.</p>
              </div>
              
              <div className="bg-charcoal-900/50 p-6 rounded-lg border border-charcoal-700 hover:border-[#CC4140]/50 transition-all duration-300">
                <Utensils className="mb-4 text-[#CC4140]" size={28} />
                <h3 className="font-serif text-xl text-white mb-2">Tradizione</h3>
                <p className="text-slate-300">Tecniche di cottura tradizionali per esaltare i sapori.</p>
              </div>
              
              <div className="bg-charcoal-900/50 p-6 rounded-lg border border-charcoal-700 hover:border-[#CC4140]/50 transition-all duration-300">
                <BookOpen className="mb-4 text-[#CC4140]" size={28} />
                <h3 className="font-serif text-xl text-white mb-2">Esperienza</h3>
                <p className="text-slate-300">Oltre 20 anni di esperienza nella ristorazione.</p>
              </div>
            </div>
            
            <p className="text-slate-300 text-lg mb-8">
              Il nostro obiettivo è quello di offrire ai nostri clienti un'esperienza culinaria unica, dove tradizione e innovazione si fondono per creare piatti indimenticabili.
            </p>
            
            <Link to="/about" className="btn bg-transparent border border-[#CC4140] text-[#CC4140] py-3 px-8 rounded-md transition-all duration-300 hover:bg-[#CC4140] hover:text-white font-medium inline-flex items-center">
              Scopri di più
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <img 
                src="https://i.pinimg.com/736x/f2/c3/1c/f2c31c0e98b91b1d8856002451ded7c1.jpg" 
                alt="Carboni Ardenti cucina" 
                className="w-full h-auto rounded-lg shadow-xl z-10 relative"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#CC4140]/30 z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#CC4140]/30 z-0"></div>
              
              {/* Small decorative image */}
              <div className="absolute -bottom-10 -right-10 z-20 hidden lg:block">
                <img 
                  src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Carne alla brace" 
                  className="w-32 h-32 object-cover rounded-lg shadow-xl border-4 border-charcoal-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
