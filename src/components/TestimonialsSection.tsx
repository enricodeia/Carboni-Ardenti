
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Marco R.",
    text: "Bellissima braceria con un'ottima carne rosa, le bistecche Irlandesi e Spagnole sono eccezionali. Servizio impeccabile e ambiente accogliente.",
    rating: 5,
    image: "https://i.pinimg.com/736x/6b/89/67/6b8967f9f29e3c42ddad9d73fa81e8cd.jpg"
  },
  {
    id: 2,
    name: "Giulia T.",
    text: "La miglior carne che abbia mai mangiato a Porto Torres. Il tomahawk è spettacolare e la picanha cotta alla perfezione. Da provare assolutamente.",
    rating: 5,
    image: "https://i.pinimg.com/736x/42/af/65/42af6530c3d37b93c8196869a089f67a.jpg"
  },
  {
    id: 3,
    name: "Andrea M.",
    text: "Vasta scelta di carni di alta qualità, personale attento e cordiale. I dolci fatti in casa sono la ciliegina sulla torta di un'esperienza gastronomica eccellente.",
    rating: 5,
    image: "https://i.pinimg.com/736x/f8/29/d5/f829d5065ed303e44b97979b4c885dc6.jpg"
  },
  {
    id: 4,
    name: "Claudia V.",
    text: "Ogni volta che vengo qui rimango stupita dalla qualità delle carni e dalla presentazione dei piatti. Il servizio è attento e professionale. I tagli argentini sono superbi.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Francesco P.",
    text: "Un'esperienza culinaria straordinaria. La T-bone è stata cotta alla perfezione e il vino consigliato era l'abbinamento perfetto. Locale elegante e atmosfera rilassante.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    name: "Alessia M.",
    text: "Fantastiche le carni selezionate e ottima la cottura alla brace. L'ambiente è raffinato ma accogliente. Il personale è cordiale e competente. Consigliato!",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-charcoal-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#CC4140]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#CC4140]/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6 after:bg-[#CC4140] after:left-1/2 after:-translate-x-1/2">Le Opinioni dei Clienti</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="bg-charcoal-900 rounded-lg p-8 border border-charcoal-700 shadow-lg hover:border-[#CC4140]/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#CC4140]/30">
                  <img 
                    src={item.image} 
                    alt={`${item.name} avatar`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">{item.name}</div>
                  <div className="flex">
                    {Array.from({ length: item.rating }, (_, i) => (
                      <Star key={i} size={16} className="fill-[#CC4140] text-[#CC4140]" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-slate-300 mb-4 italic font-light">
                "{item.text}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
