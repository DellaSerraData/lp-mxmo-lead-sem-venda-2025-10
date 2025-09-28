
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-azul-petroleo border-t border-dourado-fosco/20">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-areia-creme">
        <p className="temple-text text-xl mb-2">MXMO</p>
        <p>&copy; {currentYear} MXMO. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
