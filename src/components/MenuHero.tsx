
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AshParticles from './AshParticles';

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
    
    // Staggered text reveal animation
    const titleText = titleRef.current?.querySelector('.staggered-text');
    if (titleText) {
      const chars = titleText.textContent?.split('') || [];
      titleText.textContent = '';
      
      chars.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.className = 'char inline-block opacity-0';
        titleText.appendChild(span);
      });
      
      gsap.to(titleText.querySelectorAll('.char'), {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        delay: 0.5,
        ease: "power3.out",
        duration: 0.5
      });
    }
    
    // Subtitle animation
    tl.from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");
  }, []);

  return (
    <div className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
      {/* Ash Particles Effect */}
      <AshParticles />
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105" 
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/42/af/65/42af6530c3d37b93c8196869a089f67a.jpg)'
        }}
      >
        <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-charcoal-900/95 via-charcoal-900/80 to-charcoal-900"></div>
      </div>
      
      <div className="container relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 ref={titleRef} className="font-serif text-[5vw] md:text-[4.5vw] lg:text-[4vw] font-medium text-white leading-tight mb-6 tracking-wide">
            Il Nostro <span className="text-[#CC4140] staggered-text">Menù</span>
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Selezione delle migliori carni cotte alla brace, accompagnate da contorni freschi e vini pregiati
          </p>
          {/* Removed the "Scopri il Menù" button */}
        </div>
      </div>
    </div>
  );
};

export default MenuHero;
