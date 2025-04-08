
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Marco R.",
    text: "Bellissima braceria con un'ottima carne rosa, le bistecche Irlandesi e Spagnole sono eccezionali. Servizio impeccabile e ambiente accogliente.",
    rating: 5
  },
  {
    id: 2,
    name: "Giulia T.",
    text: "La miglior carne che abbia mai mangiato a Porto Torres. Il tomahawk è spettacolare e la picanha cotta alla perfezione. Da provare assolutamente.",
    rating: 5
  },
  {
    id: 3,
    name: "Andrea M.",
    text: "Vasta scelta di carni di alta qualità, personale attento e cordiale. I dolci fatti in casa sono la ciliegina sulla torta di un'esperienza gastronomica eccellente.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-charcoal-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-2">Le Opinioni dei Clienti</h2>
          <p className="section-subtitle">Recensioni da Google</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-charcoal-900 rounded-lg p-8 border border-charcoal-700 shadow-lg"
            >
              <div className="flex mb-4">
                {Array.from({ length: item.rating }, (_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 text-ember-500"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-300 mb-4 italic font-light">
                "{item.text}"
              </blockquote>
              <div className="font-medium text-slate-300">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
