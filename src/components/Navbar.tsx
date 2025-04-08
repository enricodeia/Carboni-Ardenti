
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg ${scrolled ? 'bg-charcoal-900/95 py-6 shadow-lg' : 'bg-charcoal-900/80 py-8'}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="https://cdn.prod.website-files.com/61b74db330d7740923e4176b/67f58e1bc906500b3542c77c_Braceria.png" 
            alt="Carboni Ardenti Logo" 
            className="h-14 md:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link 
            to="/" 
            className={`text-white hover:text-[#CC4140] transition-colors py-2 text-base font-medium relative group ${location.pathname === '/' ? 'text-[#CC4140]' : ''}`}
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CC4140] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/menu" 
            className={`text-white hover:text-[#CC4140] transition-colors py-2 text-base font-medium relative group ${location.pathname === '/menu' ? 'text-[#CC4140]' : ''}`}
          >
            Menu
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CC4140] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/about" 
            className={`text-white hover:text-[#CC4140] transition-colors py-2 text-base font-medium relative group ${location.pathname === '/about' ? 'text-[#CC4140]' : ''}`}
          >
            Chi Siamo
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CC4140] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/contact" 
            className={`text-white hover:text-[#CC4140] transition-colors py-2 text-base font-medium relative group ${location.pathname === '/contact' ? 'text-[#CC4140]' : ''}`}
          >
            Contatti
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CC4140] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="hidden md:block">
          <a 
            href="tel:+393470671839" 
            className="flex items-center gap-2 bg-[#CC4140] hover:bg-[#CC4140]/90 text-white px-5 py-3 rounded-md transition-all duration-300 relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#CC4140]/0 via-white/20 to-[#CC4140]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <Phone size={18} className="relative z-10" />
            <span className="relative z-10 font-medium">Prenota ora</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-charcoal-900/95 backdrop-blur-xl transition-all duration-300 overflow-hidden shadow-lg ${isOpen ? 'max-h-screen opacity-100 py-5' : 'max-h-0 opacity-0'}`}>
        <div className="container flex flex-col space-y-5 px-6">
          <Link 
            to="/" 
            className={`text-white hover:text-[#CC4140] transition-colors py-3 text-lg font-medium border-b border-white/10 ${location.pathname === '/' ? 'text-[#CC4140]' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={`text-white hover:text-[#CC4140] transition-colors py-3 text-lg font-medium border-b border-white/10 ${location.pathname === '/menu' ? 'text-[#CC4140]' : ''}`}
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className={`text-white hover:text-[#CC4140] transition-colors py-3 text-lg font-medium border-b border-white/10 ${location.pathname === '/about' ? 'text-[#CC4140]' : ''}`}
          >
            Chi Siamo
          </Link>
          <Link 
            to="/contact" 
            className={`text-white hover:text-[#CC4140] transition-colors py-3 text-lg font-medium border-b border-white/10 ${location.pathname === '/contact' ? 'text-[#CC4140]' : ''}`}
          >
            Contatti
          </Link>
          <div className="pt-3 pb-2">
            <a 
              href="tel:+393470671839" 
              className="flex items-center gap-2 bg-[#CC4140] hover:bg-[#CC4140]/90 text-white px-4 py-3 rounded-md w-full justify-center transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#CC4140]/0 via-white/20 to-[#CC4140]/0 transform -translate-x-full hover:translate-x-full transition-transform duration-700"></span>
              <Phone size={18} className="relative z-10" />
              <span className="relative z-10 font-medium">Prenota ora</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
