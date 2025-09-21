import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-md z-50 py-3 transition-all duration-300 border-b border-secondary/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <a href="#" className="text-2xl sm:text-3xl font-semibold text-secondary tracking-tight">
          Eucalyptus
        </a>
        <a 
          href="#contato" 
          className="bg-secondary text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium hover:bg-secondary/90 hover:scale-105 transition-all duration-200 shadow-sm"
        >
          Quero uma Consultoria
        </a>
      </div>
    </header>
  );
};

export default Header;