
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import AshParticles from './AshParticles';

const AboutHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    
    // Title animation
    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
    
    // Text animation
    tl.from(textRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");
  }, []);

  return (
    <div className="relative h-[40vh] min-h-[300px] flex items-center">
      {/* Ash Particles Effect */}
      <AshParticles />
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/d6/11/1c/d6111c2d94ecbf34138aafd410687724.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900"></div>
      </div>
      
      <div className="container relative z-20 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 ref={titleRef} className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-4">
            Chi <span className="text-[#CC4140]">Siamo</span>
          </h1>
          <p ref={textRef} className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            La passione per la carne e l'arte della brace, la nostra storia
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
