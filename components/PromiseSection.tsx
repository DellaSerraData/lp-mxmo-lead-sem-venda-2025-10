
import React from 'react';
import TrendingUpIcon from './icons/TrendingUpIcon';
import ZapIcon from './icons/ZapIcon';
import CheckCircleIcon from './icons/CheckCircleIcon';

const benefits = [
  {
    icon: <TrendingUpIcon />,
    title: "Pipeline Qualificado",
    description: "Substitua o volume pela qualidade. Atraia, eduque e entregue para Vendas apenas os leads com maior probabilidade de conversão."
  },
  {
    icon: <ZapIcon />,
    title: "Eficiência Comercial",
    description: "Reduza seu ciclo de vendas e aumente a produtividade do seu time, que passará a focar em fechar negócios, não em qualificar contatos."
  },
  {
    icon: <CheckCircleIcon />,
    title: "Atribuição Clara de ROI",
    description: "Tenha uma visão completa da performance, entendendo exatamente como cada campanha de marketing impacta o resultado final de vendas."
  }
];

const PromiseSection: React.FC = () => {
  return (
    <section className="bg-areia-creme text-azul-petroleo py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Projete uma Máquina de Receita Unificada.
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl">
          Com o <strong className="font-bold">Growth Design</strong>, nós quebramos os silos. Desenhamos um único sistema coeso que abrange desde o primeiro clique até a assinatura do contrato, garantindo que cada esforço de marketing se traduza em pipeline qualificado e receita previsível.
        </p>
        <div className="mt-20 grid md:grid-cols-3 gap-12 text-left">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white/50 p-8 rounded-lg shadow-lg">
               <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="text-dourado-fosco">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-azul-petroleo">{benefit.title}</h3>
              </div>
              <p className="mt-4 text-azul-petroleo/90">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
