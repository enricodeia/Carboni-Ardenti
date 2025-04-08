
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import AboutSection from '../components/AboutSection';
import SpecialitiesSection from '../components/SpecialitiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  // Add smooth intersection observer animations for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all sections with stagger-children class
    document.querySelectorAll('.stagger-children').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.stagger-children').forEach((section) => {
        observer.unobserve(section);
      });
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
