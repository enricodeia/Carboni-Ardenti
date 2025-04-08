
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-charcoal-800">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title mb-6">La Nostra Storia</h2>
            <p className="text-slate-300 mb-6 text-lg">
              Braceria Carboni Ardenti nasce da un'idea di Gianni Carboni e dalla sua lunga esperienza nel campo della ristorazione. 
            </p>
            <p className="text-slate-300 mb-6 text-lg">
              La braceria offre le migliori carni nostrane, italiane e internazionali, cucinate alla brace e condite con i migliori ingredienti della nostra terra. 
              Ampia offerta di vini, birre, bevande e dolci di produzione propria.
            </p>
            <p className="text-slate-300 text-lg">
              Il nostro obiettivo è quello di offrire ai nostri clienti un'esperienza culinaria unica, dove tradizione e innovazione si fondono per creare piatti indimenticabili.
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://i.pinimg.com/736x/f2/c3/1c/f2c31c0e98b91b1d8856002451ded7c1.jpg" 
                alt="Carboni Ardenti cucina" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 p-4 bg-charcoal-900 rounded-lg shadow-xl border border-charcoal-700 hidden md:block">
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
