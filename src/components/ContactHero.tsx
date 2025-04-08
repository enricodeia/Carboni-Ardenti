
import React from 'react';
import { MapPin } from 'lucide-react';

const ContactHero = () => {
  return (
    <div className="relative h-[40vh] min-h-[300px] flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/6b/89/67/6b8967f9f29e3c42ddad9d73fa81e8cd.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900"></div>
      </div>
      
      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-4">
            <span className="text-ember-400">Contatta</span>ci
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Saremo lieti di rispondere alle tue domande e accoglierti nel nostro ristorante
          </p>
          <div className="flex items-center justify-center text-ember-400 gap-2">
            <MapPin size={20} />
            <span className="text-slate-200">Via G. Falcone - P. Borsellino, 4, 07046 Porto Torres SS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
