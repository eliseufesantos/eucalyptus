import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-purple-950/95 backdrop-blur-lg z-50 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8">
        <a href="#" className="text-3xl font-bold text-purple-400">
          Eucalyptus
        </a>
        <a 
          href="#contato" 
          className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-full font-bold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
        >
          Quero uma Consultoria
        </a>
      </div>
    </header>
  );
};

export default Header;