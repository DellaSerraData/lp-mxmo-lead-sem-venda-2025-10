
import React from 'react';
import BrokenLinkIcon from './icons/BrokenLinkIcon';
import ChartBarIcon from './icons/ChartBarIcon';
import ClockIcon from './icons/ClockIcon';

const painPoints = [
  {
    icon: <BrokenLinkIcon />,
    title: "Handoff Quebrado",
    description: "Leads qualificados se perdem na passagem de bastão, esfriam e nunca mais respondem. O SLA entre Marketing e Vendas é um acordo frágil, não um processo."
  },
  {
    icon: <ChartBarIcon />,
    title: "Métricas de Vaidade",
    description: "Marketing otimiza para MQLs, Vendas para fechamentos. Ninguém otimiza para a métrica que realmente importa: o Custo de Aquisição por Receita Gerada."
  },
  {
    icon: <ClockIcon />,
    title: "Ciclo de Vendas Interminável",
    description: "A falta de alinhamento e nutrição adequada resulta em um processo de vendas longo, caro e com baixa taxa de aproveitamento, esgotando seu time comercial."
  }
];

const HeroSection: React.FC = () => {
  return (
    <section className="bg-azul-petroleo text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Seu marketing gera leads que suas vendas não convertem. De quem é a culpa?
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-areia-creme">
          Você tem dois times, duas metas e um abismo entre eles. Marketing celebra o volume, Vendas reclama da qualidade e, no meio do caminho, seu pipeline de receita evapora.
        </p>
        <div className="mt-20 grid md:grid-cols-3 gap-12 text-left">
          {painPoints.map((point) => (
            <div key={point.title}>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="text-dourado-fosco">{point.icon}</div>
                <h3 className="text-2xl font-bold text-dourado-fosco">{point.title}</h3>
              </div>
              <p className="mt-4 text-white/90">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
