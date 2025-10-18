import React from 'react';
import { redirectToExternalForm } from '../utils/externalForm';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-charcoal/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <nav className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2.5">
            <img 
              src="/assets/eucalyptus-logo-padrao.svg" 
              alt="Eucalyptus Logo" 
              className="h-12 sm:h-14 lg:h-16 w-auto animate-fadeIn"
            />
            <span className="text-xl sm:text-xl lg:text-2xl font-medium text-charcoal animate-fadeIn">EUCALYPTUS</span>
          </div>
          
          {/* Navigation - Hidden on mobile */}
          <ul className="hidden lg:flex items-center space-x-8 text-base">
            <li><a href="#solution" className="text-charcoal font-medium">Solução</a></li>
            <li><a href="#benefits" className="text-charcoal font-medium">Benefícios</a></li>
            <li><a href="#calculadora-roi" className="text-charcoal font-medium">Calculadora ROI</a></li>
            <li><a href="#about" className="text-charcoal font-medium">Sobre</a></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-charcoal p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* CTA Button - Desktop */}
          <button 
            onClick={redirectToExternalForm}
            className="hidden lg:block bg-terracotta text-cream px-7 py-3 rounded-full text-base font-medium animate-fadeIn hover:bg-terracotta/90 transition-colors">
            Diagnóstico Gratuito
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-18 left-0 right-0 bg-cream/95 backdrop-blur-lg border-b border-charcoal/10 animate-fadeInDown">
            <ul className="flex flex-col space-y-5 p-6">
              <li><a href="#solution" onClick={() => setIsMenuOpen(false)} className="text-charcoal text-base font-medium">Solução</a></li>
              <li><a href="#benefits" onClick={() => setIsMenuOpen(false)} className="text-charcoal text-base font-medium">Benefícios</a></li>
              <li><a href="#calculadora-roi" onClick={() => setIsMenuOpen(false)} className="text-charcoal text-base font-medium">Calculadora ROI</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="text-charcoal text-base font-medium">Sobre</a></li>
              <li>
                <button 
                  onClick={() => {
                    redirectToExternalForm();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-terracotta text-cream px-7 py-3.5 rounded-full text-base font-medium hover:bg-terracotta/90 transition-colors">
                  Diagnóstico Gratuito
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