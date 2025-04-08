
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <ContactHero />
        <ContactForm />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
