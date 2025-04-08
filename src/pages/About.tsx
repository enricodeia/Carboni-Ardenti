
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutDetail from '../components/AboutDetail';
import CTASection from '../components/CTASection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <AboutHero />
        <AboutDetail />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
