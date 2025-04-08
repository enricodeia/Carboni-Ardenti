
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import AshParticles from './AshParticles';

const HomeHero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Ash Particles Effect */}
      <AshParticles />
      
      {/* Background image with overlay */}
      <div 
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/44/25/d6/4425d68e062d66a1f07393d7ed1fed43.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/70 to-charcoal-900"></div>
      </div>
      
      <div className="container relative z-20">
        <div className="max-w-[55vw] overflow-visible">
          <div ref={titleRef} className="mb-6">
            <h1 className="font-serif text-[6vw] md:text-[5.5vw] lg:text-[4.5vw] font-medium text-white leading-tight tracking-wide">
              L'arte della <span className="text-highlight text-[#CC4140]">brace</span>,<br />
              la passione per la <span className="text-highlight text-[#CC4140]">carne</span>
            </h1>
          </div>
          
          <p ref={subtitleRef} className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl">
            Le migliori carni nostrane, italiane e internazionali, cucinate alla brace e condite con i migliori ingredienti della nostra terra.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-5">
            <Link to="/menu" className="btn bg-[#CC4140] text-white py-4 px-10 text-base font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#b33937] active:translate-y-0.5 active:shadow-inner">
              Scopri il Menù
            </Link>
            <a href="tel:+393470671839" className="btn py-4 px-10 text-base flex items-center justify-center gap-2 border-2 border-black bg-black text-white rounded-md transition-all duration-300 shadow-md hover:bg-black/90 active:translate-y-0.5 active:shadow-inner">
              <Phone size={18} /> 
              <span>Prenota un Tavolo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
