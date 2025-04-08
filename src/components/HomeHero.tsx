
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    
    // Hero title animation
    tl.from(titleRef.current?.querySelectorAll('.title-line span'), {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
    
    // Subtitle animation
    tl.from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");
    
    // Buttons animation
    tl.from(buttonsRef.current?.children, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out"
    }, "-=0.3");

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
    <div className="relative h-screen min-h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div 
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/44/25/d6/4425d68e062d66a1f07393d7ed1fed43.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/70 to-charcoal-900"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl overflow-visible">
          <div ref={titleRef} className="overflow-visible">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-white leading-tight mb-6">
              <div className="title-line overflow-hidden mb-2">
                <span className="block">
                  L'arte della <span className="text-[#CC4140]">brace</span>,
                </span>
              </div>
              <div className="title-line overflow-hidden">
                <span className="block">
                  la passione per la <span className="text-[#CC4140]">carne</span>
                </span>
              </div>
            </h1>
          </div>
          
          <p ref={subtitleRef} className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
            Le migliori carni nostrane, italiane e internazionali, cucinate alla brace e condite con i migliori ingredienti della nostra terra.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu" className="btn bg-[#CC4140] hover:bg-[#CC4140]/90 text-white py-3 px-8 text-base group">
              <span className="relative z-10">Scopri il Menù</span>
            </Link>
            <a href="tel:+393470671839" className="btn btn-secondary py-3 px-8 text-base flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
              <Phone size={18} className="animate-pulse" /> Prenota un Tavolo
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center animate-bounce cursor-pointer" onClick={scrollToContent}>
        <ChevronDown size={24} className="text-[#CC4140]" />
      </div>
    </div>
  );
};

export default HomeHero;
