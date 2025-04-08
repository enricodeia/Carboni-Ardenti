
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-charcoal-900/95 backdrop-blur-sm z-50 border-b border-charcoal-700">
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-wide text-white">
          Carboni <span className="text-ember-500">Ardenti</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-ember-400 transition-colors">
            Home
          </Link>
          <Link to="/menu" className="text-white hover:text-ember-400 transition-colors">
            Menu
          </Link>
          <Link to="/about" className="text-white hover:text-ember-400 transition-colors">
            Chi Siamo
          </Link>
          <div className="ml-4 flex items-center gap-4">
            <Link to="/menu" className="btn btn-secondary py-2 px-4">
              Menu
            </Link>
            <a href="tel:+393470671839" className="btn btn-primary py-2 px-4 flex items-center gap-2">
              <Phone size={16} /> Prenota
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-charcoal-800 border-t border-charcoal-700">
          <div className="container py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-white py-2 border-b border-charcoal-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="text-white py-2 border-b border-charcoal-700"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className="text-white py-2 border-b border-charcoal-700"
              onClick={() => setIsOpen(false)}
            >
              Chi Siamo
            </Link>
            <div className="flex flex-col gap-3 pt-2">
              <Link 
                to="/menu" 
                className="btn btn-secondary py-2 px-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Vedi il Menu
              </Link>
              <a 
                href="tel:+393470671839" 
                className="btn btn-primary py-2 px-4 flex items-center justify-center gap-2"
              >
                <Phone size={16} /> Prenota un Tavolo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
