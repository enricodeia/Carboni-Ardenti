
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const HomeHero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/44/25/d6/4425d68e062d66a1f07393d7ed1fed43.jpg)',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-4">
            L'arte della <span className="text-ember-400">brace</span>, la passione per la <span className="text-ember-400">carne</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
            Le migliori carni nostrane, italiane e internazionali, cucinate alla brace e condite con i migliori ingredienti della nostra terra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu" className="btn btn-primary py-3 px-6 text-base">
              Scopri il Menù
            </Link>
            <a href="tel:+393470671839" className="btn btn-secondary py-3 px-6 text-base flex items-center justify-center gap-2">
              <Phone size={18} /> Prenota un Tavolo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
