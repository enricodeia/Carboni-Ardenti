
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MenuHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    
    // Overlay animation
    tl.fromTo(overlayRef.current, 
      { opacity: 1 },
      { opacity: 0.7, duration: 1.2, ease: "power2.out" }
    );
    
    // Menu title animation with letter staggering
    const titleLetters = titleRef.current?.querySelectorAll('.letter');
    tl.from(titleLetters, {
      opacity: 0,
      y: 50,
      rotation: 5,
      stagger: 0.04,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.2
    });
    
    // Subtitle animation
    tl.from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");
  }, []);

  // Split text into letters for animation
  const splitText = (text: string) => {
    return text.split('').map((letter, index) => (
      <span key={index} className="letter inline-block">{letter}</span>
    ));
  };

  return (
    <div className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105" 
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/f8/29/d5/f829d5065ed303e44b97979b4c885dc6.jpg)'
        }}
      >
        <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-charcoal-900/95 via-charcoal-900/80 to-charcoal-900"></div>
      </div>
      
      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 ref={titleRef} className="font-serif text-[5vw] md:text-[4.5vw] lg:text-[4vw] font-medium text-white leading-tight mb-6 tracking-wide">
            Il Nostro <span className="text-[#CC4140]">{splitText("Menù")}</span>
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Selezione delle migliori carni cotte alla brace, accompagnate da contorni freschi e vini pregiati
          </p>
          <div className="mt-8 flex justify-center">
            <a href="#menu-list" className="btn bg-[#CC4140] text-white px-8 py-3 rounded-md group relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#CC4140]/0 via-white/20 to-[#CC4140]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative z-10 font-medium">Scopri il Menù</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHero;
