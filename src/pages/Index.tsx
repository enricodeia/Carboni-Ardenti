
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import AboutSection from '../components/AboutSection';
import SpecialitiesSection from '../components/SpecialitiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <HomeHero />
        <AboutSection />
        <SpecialitiesSection />
        <TestimonialsSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
