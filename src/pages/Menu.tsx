
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuHero from '../components/MenuHero';
import MenuList from '../components/MenuList';
import CTASection from '../components/CTASection';

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <MenuHero />
        <MenuList />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;
