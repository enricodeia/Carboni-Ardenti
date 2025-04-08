
import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative h-[40vh] min-h-[300px] flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/d6/11/1c/d6111c2d94ecbf34138aafd410687724.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900"></div>
      </div>
      
      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-4">
            Chi <span className="text-ember-400">Siamo</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            La passione per la carne e l'arte della brace, la nostra storia
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
