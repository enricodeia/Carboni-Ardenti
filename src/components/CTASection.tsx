
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-charcoal-900 relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/6b/89/67/6b8967f9f29e3c42ddad9d73fa81e8cd.jpg)' 
        }}
      ></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">Prenota il Tuo Tavolo</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Vieni a scoprire la nostra selezione di carni pregiate e vivi un'esperienza gastronomica unica. Prenota ora per assicurarti un tavolo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+393470671839" 
              className="btn btn-primary py-3 px-6 text-base flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Chiama Ora
            </a>
            <Link to="/menu" className="btn btn-secondary py-3 px-6 text-base">
              Scopri il Menù
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
