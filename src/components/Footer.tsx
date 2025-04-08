
import React from 'react';
import { Phone, Clock, MapPin, Facebook, Instagram, Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-800 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl text-white mb-4">Carboni <span className="text-ember-500">Ardenti</span></h3>
            <p className="text-slate-300 mb-4">
              Le migliori carni nostrane, italiane e internazionali, cucinate alla brace.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-white mb-4">Contatti</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone size={16} className="text-ember-400" />
                <a href="tel:+393470671839" className="hover:text-ember-400 transition-colors">
                  +39 347 067 1839
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin size={16} className="text-ember-400 mt-1" />
                <address className="not-italic">
                  Via G. Falcone - P. Borsellino, 4,<br />
                  07046 Porto Torres SS
                </address>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-white mb-4">Orari</h4>
            <div className="flex items-start gap-2 text-slate-300">
              <Clock size={16} className="text-ember-400 mt-1" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="mr-4">Lunedì</span>
                  <span>Chiuso</span>
                </div>
                <div className="flex justify-between">
                  <span className="mr-4">Martedì</span>
                  <span>Chiuso</span>
                </div>
                <div className="flex justify-between">
                  <span className="mr-4">Mercoledì</span>
                  <span>Chiuso</span>
                </div>
                <div className="flex justify-between">
                  <span className="mr-4">Giovedì</span>
                  <span>19.30–0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="mr-4">Venerdì</span>
                  <span>19.30–0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="mr-4">Sabato</span>
                  <span>19.30–0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="mr-4">Domenica</span>
                  <span>19.30–0.00</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-white mb-4">Social</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/braceriacarboniardenti/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal-700 hover:bg-ember-500 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/braceria_carboni_ardenti/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal-700 hover:bg-ember-500 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="text-center text-slate-400 text-sm">
          <p className="flex items-center justify-center gap-1">
            <Copyright size={14} />
            {new Date().getFullYear()} Braceria Carboni Ardenti. Tutti i diritti riservati.
          </p>
          <p className="mt-2">
            Designed by <a 
              href="https://www.enricodeismalana.design/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-ember-400 hover:text-ember-500 transition-colors"
            >
              Enrico Deiana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
