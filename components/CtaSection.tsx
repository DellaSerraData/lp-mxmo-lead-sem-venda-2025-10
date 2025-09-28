
import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-azul-petroleo py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Receba seu Diagnóstico de Funil de Receita.
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-areia-creme">
          Em uma chamada estratégica de 30 minutos, um especialista irá analisar a jornada do seu cliente, mapear os pontos de atrito entre Marketing e Vendas e apresentar um plano de ação inicial.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-block bg-dourado-fosco text-white font-bold text-xl px-10 py-4 rounded-md shadow-lg transform hover:scale-105 hover:bg-yellow-700 transition-all duration-300 ease-in-out"
          >
            AGENDAR MINHA SESSÃO ESTRATÉGICA
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
