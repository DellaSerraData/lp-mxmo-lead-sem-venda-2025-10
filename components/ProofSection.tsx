
import React from 'react';

const ProofSection: React.FC = () => {
  return (
    <section className="bg-azul-petroleo py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">A prova está na integração.</h2>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-areia-creme p-8 md:p-12 rounded-lg shadow-2xl text-azul-petroleo">
          <div className="text-center">
             <p className="text-lg font-semibold text-dourado-fosco uppercase tracking-wider">Case de Sucesso: Plataforma de BI</p>
             <p className="mt-4 text-5xl md:text-6xl font-bold text-azul-petroleo">
              Redução de 35% no ciclo de vendas
             </p>
             <p className="text-3xl md:text-4xl mt-2 text-azul-petroleo/80">em 4 meses</p>
          </div>
          <div className="mt-10 border-t-2 border-dourado-fosco pt-8">
            <blockquote className="text-xl md:text-2xl italic text-center">
              <p>"A MXMO nos forçou a sentar na mesma mesa. Eles não otimizaram o Marketing ou as Vendas, eles redesenharam nosso processo de receita. O resultado foi um pipeline mais limpo e um time comercial que finalmente confia nos leads que recebe."</p>
              <footer className="mt-6 not-italic">
                <p className="font-bold text-lg">CRO, Plataforma de BI</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
