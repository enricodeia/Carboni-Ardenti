
import React from 'react';

const AboutDetail = () => {
  return (
    <section className="py-20 bg-charcoal-900">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://i.pinimg.com/736x/42/af/65/42af6530c3d37b93c8196869a089f67a.jpg" 
              alt="Gianni Carboni" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="section-title mb-6">La Nostra Filosofia</h2>
            <p className="text-slate-300 mb-6 text-lg">
              Braceria Carboni Ardenti nasce da un'idea di Gianni Carboni e dalla sua lunga esperienza nel campo della ristorazione. La passione per la carne di qualità e la tradizione della cottura alla brace sono i pilastri del nostro ristorante.
            </p>
            <p className="text-slate-300 mb-6 text-lg">
              Selezioniamo con cura le migliori carni nostrane, italiane e internazionali, e le prepariamo utilizzando tecniche che ne esaltano il sapore naturale. I nostri tagli sono accompagnati da contorni freschi e conditi con i migliori ingredienti della nostra terra.
            </p>
            <p className="text-slate-300 text-lg">
              Completiamo l'esperienza con un'ampia offerta di vini locali e internazionali, birre artigianali e dolci di produzione propria, per garantire ai nostri clienti un'esperienza gastronomica completa e soddisfacente.
            </p>
          </div>
        </div>

        <div className="divider"></div>
        
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="section-title mb-8">La Nostra Missione</h2>
          <p className="text-slate-300 text-xl mb-8">
            "Offrire un'esperienza gastronomica autentica dove la qualità della materia prima e la perfezione della cottura sono la nostra priorità assoluta."
          </p>
          <p className="text-slate-300 text-lg">
            Vi aspettiamo per farvi vivere un viaggio culinario attraverso i migliori tagli di carne e i più raffinati sapori della tradizione.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDetail;
