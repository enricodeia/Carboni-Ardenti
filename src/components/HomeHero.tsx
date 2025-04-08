
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
    // GSAP animations
    const tl = gsap.timeline();
    
    // Background image subtle zoom
    tl.from(imageRef.current, {
      scale: 1.2,
      duration: 2,
      ease: "power2.out"
    });
    
    // Hero title animation with letter stagger
    const titleWords = titleRef.current?.querySelectorAll('.title-word');
    tl.from(titleWords, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=1.5");
    
    // Special text highlight animation
    const highlights = document.querySelectorAll('.text-highlight');
    tl.from(highlights, {
      color: "#ffffff",
      duration: 1.5,
      ease: "power2.inOut"
    }, "-=0.8");
    
    // Subtitle animation
    tl.from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=1");
    
    // Buttons animation with stagger
    tl.from(buttonsRef.current?.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=0.6");

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
        <div className="max-w-3xl overflow-visible">
          <div ref={titleRef} className="overflow-visible mb-6">
            <h1 className="font-serif text-[6vw] md:text-[5.5vw] lg:text-[4.5vw] font-medium text-white leading-tight tracking-wide">
              <div className="title-word overflow-hidden mb-2">
                <span className="block">
                  L'arte della <span className="text-highlight text-[#CC4140]">brace</span>,
                </span>
              </div>
              <div className="title-word overflow-hidden">
                <span className="block">
                  la passione per la <span className="text-highlight text-[#CC4140]">carne</span>
                </span>
              </div>
            </h1>
          </div>
          
          <p ref={subtitleRef} className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
            Le migliori carni nostrane, italiane e internazionali, cucinate alla brace e condite con i migliori ingredienti della nostra terra.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-5">
            <Link to="/menu" className="btn bg-[#CC4140] text-white py-4 px-10 text-base font-medium rounded-md group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#CC4140]/20 transform hover:translate-y-[-3px]">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#CC4140]/0 via-white/20 to-[#CC4140]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative z-10">Scopri il Menù</span>
            </Link>
            <a href="tel:+393470671839" className="btn py-4 px-10 text-base flex items-center justify-center gap-2 border-2 border-[#CC4140] text-[#CC4140] rounded-md transition-all duration-300 relative overflow-hidden group hover:bg-[#CC4140]/5 transform hover:translate-y-[-3px]">
              <span className="absolute inset-0 w-0 bg-[#CC4140]/10 group-hover:w-full transition-all duration-300 ease-out"></span>
              <Phone size={18} className="animate-pulse relative z-10" /> 
              <span className="relative z-10">Prenota un Tavolo</span>
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
