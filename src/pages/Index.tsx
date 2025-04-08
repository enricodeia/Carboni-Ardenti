
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import AboutSection from '../components/AboutSection';
import SpecialitiesSection from '../components/SpecialitiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ScrollToTop from '../components/ScrollToTop';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  // Set up GSAP animations for sections
  useEffect(() => {
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Create animations for each section
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      });
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <HomeHero />
        <AboutSection />
        <SpecialitiesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
