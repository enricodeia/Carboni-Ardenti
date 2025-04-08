
import React, { useState } from 'react';

const menuCategories = [
  { id: 'antipasti', name: 'Antipasti' },
  { id: 'carni', name: 'Carni Selezionate' },
  { id: 'contorni', name: 'Contorni' },
  { id: 'dolci', name: 'Dolci' },
  { id: 'bevande', name: 'Bevande' }
];

const menuItems = {
  antipasti: [
    { id: 1, name: 'Tagliere di Salumi e Formaggi', description: 'Selezione di salumi artigianali e formaggi locali', price: '16' },
    { id: 2, name: 'Carpaccio di Manzo', description: 'Sottili fette di manzo crudo con rucola, scaglie di parmigiano e tartufo nero', price: '14' },
    { id: 3, name: 'Bruschette Miste', description: 'Quattro bruschette con diverse guarnizioni di stagione', price: '10' }
  ],
  carni: [
    { id: 4, name: 'Tomahawk', description: 'Costata di manzo con osso, 800g circa. Servita con sale grosso e rosmarino', price: '32' },
    { id: 5, name: 'Picanha', description: 'Taglio brasiliano ricco di sapore, servito con sale affumicato', price: '26' },
    { id: 6, name: 'Bistecca Argentina', description: 'Controfiletto di manzo argentino, 350g', price: '28' },
    { id: 7, name: 'Bistecca Irlandese', description: 'Controfiletto di Black Angus irlandese, 350g', price: '30' },
    { id: 8, name: 'Tagliata di Manzo', description: 'Con rucola, scaglie di parmigiano e riduzione balsamica', price: '24' }
  ],
  contorni: [
    { id: 9, name: 'Patate Arrosto', description: 'Con rosmarino e aglio', price: '6' },
    { id: 10, name: 'Verdure Grigliate', description: 'Melanzane, zucchine e peperoni di stagione', price: '8' },
    { id: 11, name: 'Insalata Mista', description: 'Con pomodorini, carote e olive', price: '6' }
  ],
  dolci: [
    { id: 12, name: 'Tiramisù', description: 'Fatto in casa secondo la ricetta tradizionale', price: '7' },
    { id: 13, name: 'Panna Cotta', description: 'Con coulis di frutti di bosco', price: '6' },
    { id: 14, name: 'Torta al Cioccolato', description: 'Con cuore caldo e gelato alla vaniglia', price: '8' }
  ],
  bevande: [
    { id: 15, name: 'Vino Rosso della Casa', description: 'Calice', price: '5' },
    { id: 16, name: 'Vino Rosso della Casa', description: 'Bottiglia', price: '20' },
    { id: 17, name: 'Birra Artigianale', description: 'Vari tipi, 33cl', price: '6' },
    { id: 18, name: 'Acqua', description: 'Naturale o frizzante, 1L', price: '3' }
  ]
};

const MenuList = () => {
  const [activeCategory, setActiveCategory] = useState('carni');

  return (
    <section className="py-20 bg-charcoal-900">
      <div className="container">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`font-serif text-lg px-4 py-2 rounded-md transition-colors ${
                activeCategory === category.id 
                  ? 'bg-ember-500 text-white' 
                  : 'bg-charcoal-800 text-slate-300 hover:bg-charcoal-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-8 text-center">{menuCategories.find(cat => cat.id === activeCategory)?.name}</h2>
          
          <div className="grid gap-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
              <div 
                key={item.id} 
                className="menu-item grid grid-cols-1 md:grid-cols-[1fr,auto] gap-4"
              >
                <div>
                  <h3 className="font-serif text-xl text-white mb-1">{item.name}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
                <div className="font-serif text-xl text-ember-400 md:text-right">
                  €{item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuList;
