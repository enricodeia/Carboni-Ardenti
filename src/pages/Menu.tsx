
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuHero from '../components/MenuHero';
import MenuList from '../components/MenuList';
import ScrollToTop from '../components/ScrollToTop';

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <MenuHero />
        <div id="menu-list" className="container max-w-[70vw] mx-auto">
          <MenuList />
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Menu;
