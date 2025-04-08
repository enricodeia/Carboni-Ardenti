
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && contentRef.current) {
          contentRef.current.classList.add('in-view');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-charcoal-900 relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/6b/89/67/6b8967f9f29e3c42ddad9d73fa81e8cd.jpg)' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900/90 to-charcoal-900"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-ember-500/10 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-ember-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-ember-500/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center" ref={contentRef}>
          <div className="stagger-children">
            <span className="inline-block text-ember-400 font-serif text-lg mb-2">Ti aspettiamo</span>
            <h2 className="section-title mb-6 after:left-1/2 after:-translate-x-1/2">Prenota il Tuo Tavolo</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Vieni a scoprire la nostra selezione di carni pregiate e vivi un'esperienza gastronomica unica. 
              Prenota ora per assicurarti un tavolo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+393470671839" 
                className="btn btn-primary py-3 px-6 text-base flex items-center justify-center gap-2 group"
              >
                <Phone size={18} /> 
                <span className="relative z-10">Chiama Ora</span>
                <span className="absolute inset-0 w-0 bg-ember-600 group-hover:w-full transition-all duration-300 ease-out rounded-md"></span>
              </a>
              <Link to="/contact" className="btn btn-secondary py-3 px-6 text-base flex items-center gap-2 hover:gap-3 transition-all">
                <span>Contattaci</span> <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="mt-12 p-6 bg-charcoal-800/50 backdrop-blur-sm rounded-lg border border-charcoal-700 inline-block">
              <div className="flex items-center gap-3 text-ember-400">
                <Calendar size={20} />
                <span className="text-slate-200">Aperto tutti i giorni fino alle 23:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
