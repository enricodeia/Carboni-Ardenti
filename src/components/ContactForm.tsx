
import React, { useState } from 'react';
import { Send, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Messaggio inviato",
      description: "Ti risponderemo al più presto. Grazie!",
      variant: "default",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-charcoal-800">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Column */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="bg-charcoal-900 p-8 rounded-lg border border-charcoal-700 shadow-xl">
              <h2 className="section-subtitle mb-6">Invia un messaggio</h2>
              
              <div className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nome e Cognome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-md focus:outline-none focus:ring-2 focus:ring-ember-500 text-slate-200 transition-all"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-md focus:outline-none focus:ring-2 focus:ring-ember-500 text-slate-200 transition-all"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Telefono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-md focus:outline-none focus:ring-2 focus:ring-ember-500 text-slate-200 transition-all"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Messaggio</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-md focus:outline-none focus:ring-2 focus:ring-ember-500 text-slate-200 transition-all resize-none"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary py-3 px-6 w-full flex items-center justify-center gap-2">
                  <Send size={18} /> Invia Messaggio
                </button>
              </div>
            </form>
          </div>
          
          {/* Info Column */}
          <div className="order-1 lg:order-2">
            <h2 className="section-title mb-8">Informazioni</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ember-500 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white mb-1">Telefono</h3>
                  <p className="text-slate-300 mb-1">Chiama per prenotare un tavolo</p>
                  <a href="tel:+393470671839" className="text-ember-400 hover:text-ember-500 transition-colors">+39 347 067 1839</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ember-500 rounded-full text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white mb-1">Indirizzo</h3>
                  <p className="text-slate-300 mb-1">Vieni a trovarci</p>
                  <a 
                    href="https://maps.app.goo.gl/sGVZz7TkM8ZSLMKF7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-ember-400 hover:text-ember-500 transition-colors"
                  >
                    Via G. Falcone - P. Borsellino, 4, 07046 Porto Torres SS
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ember-500 rounded-full text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white mb-1">Orari</h3>
                  <p className="text-slate-300 mb-1">Aperto tutti i giorni</p>
                  <p className="text-ember-400">Fino alle 23:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-charcoal-900 p-4 rounded-lg border border-charcoal-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7810382510647!2d8.3967!3d40.6452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12dc4596c4296385%3A0x8fc5e9ebb7db2be!2sBraceria%20Carboni%20Ardenti!5e0!3m2!1sit!2sit!4v1688046656987!5m2!1sit!2sit" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Braceria Carboni Ardenti Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
