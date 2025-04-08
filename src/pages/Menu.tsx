
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuHero from '../components/MenuHero';
import MenuList from '../components/MenuList';
import CTASection from '../components/CTASection';
import ScrollToTop from '../components/ScrollToTop';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  
  // Function to add elements to the sectionsRef array
  const addToSectionsRef = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // Set up GSAP animations for sections
  useEffect(() => {
    // Create animations for each section in the ref array
    sectionsRef.current.forEach((section, index) => {
      // Stagger effect based on index
      const delay = index * 0.2;
      
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: delay,
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
        <MenuHero />
        <div id="menu-list" ref={addToSectionsRef}>
          <MenuList />
        </div>
        <div ref={addToSectionsRef}>
          <CTASection />
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Menu;
