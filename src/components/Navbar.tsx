
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import useMobile from '../hooks/use-mobile';

const Navbar = () => {
  const location = useLocation();
  const isMobile = useMobile();
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

    // GSAP animation for the navbar
    gsap.from(".navbar", { 
      y: -100, 
      opacity: 0, 
      duration: 1, 
      ease: "power3.out",
      delay: 0.5
    });

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
    <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal-900/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="https://cdn.prod.website-files.com/61b74db330d7740923e4176b/67f58e1bc906500b3542c77c_Braceria.png" 
            alt="Carboni Ardenti Logo" 
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-white hover:text-[#CC4140] transition-colors py-2 ${location.pathname === '/' ? 'text-[#CC4140]' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={`text-white hover:text-[#CC4140] transition-colors py-2 ${location.pathname === '/menu' ? 'text-[#CC4140]' : ''}`}
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className={`text-white hover:text-[#CC4140] transition-colors py-2 ${location.pathname === '/about' ? 'text-[#CC4140]' : ''}`}
          >
            Chi Siamo
          </Link>
          <Link 
            to="/contact" 
            className={`text-white hover:text-[#CC4140] transition-colors py-2 ${location.pathname === '/contact' ? 'text-[#CC4140]' : ''}`}
          >
            Contatti
          </Link>
        </div>

        {/* Call to Action */}
        <div className="hidden md:block">
          <a 
            href="tel:+393470671839" 
            className="flex items-center gap-2 bg-[#CC4140] hover:bg-[#CC4140]/90 text-white px-4 py-2 rounded transition-colors duration-300"
          >
            <Phone size={18} />
            <span>Prenota ora</span>
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
      <div className={`md:hidden absolute w-full bg-charcoal-900/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
        <div className="container flex flex-col space-y-4">
          <Link 
            to="/" 
            className={`text-white hover:text-[#CC4140] transition-colors py-2 ${location.pathname === '/' ? 'text-[#CC4140]' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={`text-white hover:text-[#CC4140] transition-colors py-2 ${location.pathname === '/menu' ? 'text-[#CC4140]' : ''}`}
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className={`text-white hover:text-[#CC4140] transition-colors py-2 ${location.pathname === '/about' ? 'text-[#CC4140]' : ''}`}
          >
            Chi Siamo
          </Link>
          <Link 
            to="/contact" 
            className={`text-white hover:text-[#CC4140] transition-colors py-2 ${location.pathname === '/contact' ? 'text-[#CC4140]' : ''}`}
          >
            Contatti
          </Link>
          <div className="pt-2">
            <a 
              href="tel:+393470671839" 
              className="flex items-center gap-2 bg-[#CC4140] hover:bg-[#CC4140]/90 text-white px-4 py-2 rounded w-full justify-center"
            >
              <Phone size={18} />
              <span>Prenota ora</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
