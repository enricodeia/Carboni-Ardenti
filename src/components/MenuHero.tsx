
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MenuHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    
    // Menu title animation
    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.3
    });
    
    // Subtitle animation
    tl.from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");
  }, []);

  return (
    <div className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110" 
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/f8/29/d5/f829d5065ed303e44b97979b4c885dc6.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900"></div>
      </div>
      
      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 ref={titleRef} className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-4">
            Il Nostro <span className="text-[#CC4140]">Menù</span>
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Selezione delle migliori carni cotte alla brace, accompagnate da contorni freschi e vini pregiati
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuHero;
