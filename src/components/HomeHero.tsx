
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AshParticles from './AshParticles';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomeHero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Background image subtle zoom
    gsap.from(imageRef.current, {
      scale: 1.2,
      duration: 2,
      ease: "power2.out"
    });

    // Staggered text reveal animation for title
    const titleWords = document.querySelectorAll('.title-word');
    titleWords.forEach(word => {
      const chars = word.textContent?.split('') || [];
      word.textContent = '';
      
      chars.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.className = 'char inline-block opacity-0';
        word.appendChild(span);
      });
      
      gsap.to(word.querySelectorAll('.char'), {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        delay: 0.5,
        ease: "power3.out",
        duration: 0.5
      });
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollTop = window.scrollY;
        const translateY = scrollTop * 0.3;
        imageRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

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
          <div ref={titleRef} className="overflow-visible mb-6">
            <h1 className="font-serif text-[6vw] md:text-[5.5vw] lg:text-[4.5vw] font-medium text-white leading-tight tracking-wide">
              <div className="title-word overflow-hidden mb-2">
                L'arte della <span className="text-highlight text-[#CC4140]">brace</span>,
              </div>
              <div className="title-word overflow-hidden">
                la passione per la <span className="text-highlight text-[#CC4140]">carne</span>
              </div>
            </h1>
          </div>
          
          <p ref={subtitleRef} className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl">
            Le migliori carni nostrane, italiane e internazionali, cucinate alla brace e condite con i migliori ingredienti della nostra terra.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-5">
            <Link to="/menu" className="btn bg-[#CC4140] text-white py-4 px-10 text-base font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#b33937] active:translate-y-0.5 active:shadow-inner">
              Scopri il Menù
            </Link>
            <a href="tel:+393470671839" className="btn py-4 px-10 text-base flex items-center justify-center gap-2 border-2 border-black bg-black text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:bg-black/90 active:translate-y-0.5 active:shadow-inner">
              <Phone size={18} /> 
              <span>Prenota un Tavolo</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center cursor-pointer hover:scale-110 transition-transform duration-300 z-20" onClick={scrollToContent}>
        <span className="text-sm font-medium mb-2 text-[#CC4140]">Scopri di più</span>
        <ChevronDown size={24} className="text-[#CC4140] animate-bounce" />
      </div>
    </div>
  );
};

export default HomeHero;
