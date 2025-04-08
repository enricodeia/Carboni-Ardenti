
import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { gsap } from 'gsap';
import { 
  Card,
  CardContent
} from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Marco R.",
    text: "Bellissima braceria con un'ottima carne rosa, le bistecche Irlandesi e Spagnole sono eccezionali. Servizio impeccabile e ambiente accogliente.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Giulia T.",
    text: "La miglior carne che abbia mai mangiato a Porto Torres. Il tomahawk è spettacolare e la picanha cotta alla perfezione. Da provare assolutamente.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Andrea M.",
    text: "Vasta scelta di carni di alta qualità, personale attento e cordiale. I dolci fatti in casa sono la ciliegina sulla torta di un'esperienza gastronomica eccellente.",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
    image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    name: "Alessia M.",
    text: "Fantastiche le carni selezionate e ottima la cottura alla brace. L'ambiente è raffinato ma accogliente. Il personale è cordiale e competente. Consigliato!",
    rating: 5,
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 7,
    name: "Roberto C.",
    text: "Ho festeggiato il mio anniversario qui e non potevo scegliere meglio. Carne di ottima qualità, servizio impeccabile e un'atmosfera perfetta. Grazie!",
    rating: 5,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 8,
    name: "Sofia B.",
    text: "La bistecca fiorentina è semplicemente sublime, cotta alla perfezione. Un locale che cura ogni dettaglio, dall'accoglienza ai contorni. Bravi!",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 9,
    name: "Lorenzo M.",
    text: "Primo posto in classifica per qualità della carne. Ho provato la Black Angus ed era eccezionale. Il personale è competente e i vini sono ottimi.",
    rating: 5,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 10,
    name: "Valentina S.",
    text: "Esperienza indimenticabile! La carne è tenera e saporita, il servizio veloce e cortese. Tornerò sicuramente con amici e parenti!",
    rating: 5,
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 11,
    name: "Matteo D.",
    text: "Eccellente selezione di carni e cottura impeccabile. Il servizio è professionale e attento. Ambiente elegante ma informale. Consigliato per una cena speciale.",
    rating: 5,
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 12,
    name: "Elisa V.",
    text: "La carne più buona della zona! Cottura perfetta e sapori intensi. Il personale è gentile e preparato. Tornerò sicuramente!",
    rating: 5,
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-charcoal-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#CC4140]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#CC4140]/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="font-serif text-4xl md:text-5xl font-medium text-white mb-6 relative inline-block">
            Le Opinioni dei Clienti
            <span className="absolute -bottom-2 left-1/2 w-1/3 h-0.5 bg-[#CC4140] -translate-x-1/2"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <Card 
              key={item.id} 
              className="bg-charcoal-900 border-charcoal-700 hover:border-[#CC4140]/50 transition-all duration-500 h-full shadow-lg overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#CC4140]/40">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
