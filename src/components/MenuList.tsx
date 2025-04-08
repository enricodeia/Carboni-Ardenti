
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { id: 4, name: 'Tomahawk', description: 'Costata di manzo con osso, 800g circa. Servita con sale grosso e rosmarino', price: '32', featured: true },
    { id: 5, name: 'Picanha', description: 'Taglio brasiliano ricco di sapore, servito con sale affumicato', price: '26', featured: true },
    { id: 6, name: 'Bistecca Argentina', description: 'Controfiletto di manzo argentino, 350g', price: '28', featured: true },
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const MenuList = () => {
  const [activeCategory, setActiveCategory] = useState('carni');
  const [filterFeatured, setFilterFeatured] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setFilterFeatured(false);
    setSearchQuery('');
  };

  // Filter menu items
  const filteredMenuItems = () => {
    let items = menuItems[activeCategory as keyof typeof menuItems];
    
    // Apply featured filter if enabled
    if (filterFeatured) {
      items = items.filter((item: any) => item.featured);
    }
    
    // Apply search filter if query exists
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      items = items.filter((item: any) => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
    }
    
    return items;
  };

  // Scroll to menu when category changes
  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeCategory]);

  return (
    <section ref={menuRef} className="py-20 bg-charcoal-900">
      <div className="container">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {menuCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`font-serif text-lg px-6 py-3 rounded-md transition-colors ${
                activeCategory === category.id 
                  ? 'bg-ember-500 text-white' 
                  : 'bg-charcoal-800 text-slate-300 hover:bg-charcoal-700'
              }`}
              onClick={() => handleCategoryChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 max-w-4xl mx-auto">
          <h2 className="section-title mb-4 md:mb-0 text-center">
            {menuCategories.find(cat => cat.id === activeCategory)?.name}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {activeCategory === 'carni' && (
              <button
                className={`px-4 py-2 rounded-md text-sm transition ${
                  filterFeatured 
                    ? 'bg-ember-500 text-white' 
                    : 'bg-charcoal-800 text-slate-300 hover:bg-charcoal-700'
                }`}
                onClick={() => setFilterFeatured(!filterFeatured)}
              >
                {filterFeatured ? 'Tutte le Carni' : 'Solo Specialità'}
              </button>
            )}
            
            <div className="relative">
              <input
                type="text"
                placeholder="Cerca nel menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 pr-10 py-2 bg-charcoal-800 border border-charcoal-700 rounded-md focus:outline-none focus:ring-2 focus:ring-ember-500 text-slate-200 placeholder-slate-400 w-full sm:w-64"
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + (filterFeatured ? '-featured' : '') + searchQuery}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid gap-6"
            >
              {filteredMenuItems().length > 0 ? (
                filteredMenuItems().map((item: any) => (
                  <motion.div 
                    key={item.id} 
                    className={`menu-item grid grid-cols-1 md:grid-cols-[1fr,auto] gap-4 ${
                      item.featured ? 'relative overflow-hidden' : ''
                    }`}
                    variants={itemVariants}
                  >
                    {item.featured && (
                      <div className="absolute -right-12 top-0 bg-ember-500 text-white px-10 py-1 rotate-45 text-xs">
                        Speciale
                      </div>
                    )}
                    <div>
                      <h3 className="font-serif text-xl text-white mb-1">{item.name}</h3>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                    <div className="font-serif text-xl text-ember-400 md:text-right">
                      €{item.price}
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  className="text-center py-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-slate-400 text-lg">Nessun risultato trovato</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MenuList;
