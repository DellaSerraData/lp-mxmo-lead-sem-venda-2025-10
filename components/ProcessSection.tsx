
import React from 'react';

const steps = [
    {
        step: 1,
        title: "Diagnóstico e Mapeamento",
        description: "Analisamos sua operação atual, entrevistamos stakeholders de Marketing e Vendas e mapeamos a jornada completa do cliente para identificar os pontos de atrito e oportunidades."
    },
    {
        step: 2,
        title: "Desenho da Estratégia de Receita",
        description: "Desenhamos um funil unificado com SLAs claros, automações inteligentes para nutrição e um modelo de atribuição que conecta os investimentos de marketing diretamente aos resultados de vendas."
    },
    {
        step: 3,
        title: "Implementação e Otimização",
        description: "Implementamos as ferramentas e processos necessários, treinamos suas equipes e acompanhamos os resultados, otimizando continuamente para garantir a máxima eficiência e ROI."
    }
];

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-areia-creme text-azul-petroleo py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Sua jornada para a receita unificada.</h2>
        </div>
        <div className="mt-20 max-w-3xl mx-auto space-y-12">
            {steps.map((item, index) => (
                 <div key={item.step} className="relative pl-16">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-dourado-fosco text-white font-bold text-2xl">
                        {item.step}
                    </div>
                    {index < steps.length - 1 && (
                        <div className="absolute left-6 top-14 h-full w-px bg-dourado-fosco/50"></div>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-lg text-azul-petroleo/90">{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
