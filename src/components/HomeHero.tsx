
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';

const HomeHero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollTop = window.scrollY;
        const translateY = scrollTop * 0.3;
        imageRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    // Load image animation
    if (imageRef.current) {
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.classList.add('loaded');
        }
      }, 500);
    }

    // Add text reveal animation
    if (textRef.current) {
      const children = textRef.current.querySelectorAll('.animate-text');
      children.forEach((child, index) => {
        (child as HTMLElement).style.animationDelay = `${0.3 + index * 0.1}s`;
        (child as HTMLElement).classList.add('animate-fade-in', 'opacity-0');
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen min-h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div 
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat image-reveal"
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/44/25/d6/4425d68e062d66a1f07393d7ed1fed43.jpg)',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900"></div>
      </div>
      
      <div className="container relative z-10">
        <div ref={textRef} className="max-w-3xl">
          <div className="overflow-hidden mb-1">
            <span className="block animate-text text-ember-400 font-serif text-lg md:text-xl font-medium transform translate-y-full opacity-0 transition-transform duration-700 delay-300">Braceria Carboni Ardenti</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-white leading-tight mb-6">
            <div className="overflow-hidden">
              <span className="block animate-text transform translate-y-full opacity-0 transition-transform duration-700 delay-400">
                L'arte della <span className="text-ember-400">brace</span>,
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="block animate-text transform translate-y-full opacity-0 transition-transform duration-700 delay-500">
                la passione per la <span className="text-ember-400">carne</span>
              </span>
            </div>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl animate-text opacity-0">
            Le migliori carni nostrane, italiane e internazionali, cucinate alla brace e condite con i migliori ingredienti della nostra terra.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-text opacity-0">
            <Link to="/menu" className="btn btn-primary py-3 px-8 text-base group">
              <span className="relative z-10">Scopri il Menù</span>
              <span className="absolute inset-0 w-0 bg-ember-600 group-hover:w-full transition-all duration-300 ease-out rounded-md"></span>
            </Link>
            <a href="tel:+393470671839" className="btn btn-secondary py-3 px-8 text-base flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
              <Phone size={18} className="animate-pulse" /> Prenota un Tavolo
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center animate-bounce cursor-pointer" onClick={scrollToContent}>
        <span className="mb-2 text-sm font-light">Scopri di più</span>
        <ChevronDown size={24} className="text-ember-400" />
      </div>
    </div>
  );
};

export default HomeHero;
