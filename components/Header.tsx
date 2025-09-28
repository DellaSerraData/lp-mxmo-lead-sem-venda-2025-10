
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-azul-petroleo sticky top-0 z-50 shadow-md shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-start h-20">
          <div className="flex-shrink-0">
            <span className="text-white text-3xl temple-text">MXMO</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
