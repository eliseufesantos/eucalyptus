import React from 'react';
import { redirectToExternalForm } from '../utils/externalForm';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/85 backdrop-blur-md border-b border-charcoal/10 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/eucalyptus-logo-padrao.svg" 
              alt="Eucalyptus Logo" 
              className="h-12 sm:h-14 lg:h-16 w-auto animate-fadeIn transition-transform duration-200 hover:scale-105"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-charcoal animate-fadeIn tracking-tight">
              EUCALYPTUS
            </span>
          </div>
          
          {/* Navigation - Hidden on mobile */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <a 
                href="#solution" 
                className="text-charcoal text-base font-medium hover:text-terracotta transition-colors duration-200 relative group"
              >
                Solução
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all duration-200 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#benefits" 
                className="text-charcoal text-base font-medium hover:text-terracotta transition-colors duration-200 relative group"
              >
                Como Funciona?
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all duration-200 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#authority" 
                className="text-charcoal text-base font-medium hover:text-terracotta transition-colors duration-200 relative group"
              >
                Cases
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all duration-200 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-charcoal p-2 rounded-md hover:bg-charcoal/5 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* CTA Button - Desktop */}
          <button 
            onClick={redirectToExternalForm}
            className="hidden lg:block bg-gradient-to-r from-terracotta to-terracotta/90 text-cream px-8 py-3 rounded-full text-sm font-bold hover:from-terracotta/90 hover:to-terracotta transition-all duration-300 animate-fadeIn shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden group">
            <span className="relative z-10">Diagnóstico Gratuito</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-cream/95 backdrop-blur-md border-b border-charcoal/10 shadow-sm animate-fadeInDown">
            <ul className="flex flex-col space-y-4 p-6">
              <li>
                <a 
                  href="#solution" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-charcoal text-lg font-medium hover:text-terracotta transition-colors duration-200 block py-2"
                >
                  Solução
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-charcoal text-lg font-medium hover:text-terracotta transition-colors duration-200 block py-2"
                >
                  Como Funciona?
                </a>
              </li>
              <li>
                <a 
                  href="#authority" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-charcoal text-lg font-medium hover:text-terracotta transition-colors duration-200 block py-2"
                >
                  Cases
                </a>
              </li>
              <li className="pt-2">
                <button 
                  onClick={() => {
                    redirectToExternalForm();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-terracotta to-terracotta/90 text-cream px-8 py-4 rounded-full text-base font-bold hover:from-terracotta/90 hover:to-terracotta transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">Diagnóstico Gratuito</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;