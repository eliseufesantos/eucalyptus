import React from 'react';

interface HeaderProps {
  onOpenForm: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenForm }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-charcoal/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo placeholder */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-terracotta to-gold rounded-full animate-fadeIn" />
            <span className="text-lg sm:text-xl font-medium text-charcoal animate-fadeIn">Eucalyptus</span>
          </div>
          
          {/* Navigation - Hidden on mobile */}
          <ul className="hidden lg:flex items-center space-x-8 text-sm">
            <li><a href="#solution" className="text-charcoal hover:text-terracotta transition-colors">Solução</a></li>
            <li><a href="#benefits" className="text-charcoal hover:text-terracotta transition-colors">Benefícios</a></li>
            <li><a href="#about" className="text-charcoal hover:text-terracotta transition-colors">Sobre</a></li>
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
            onClick={onOpenForm}
            className="hidden lg:block bg-terracotta text-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-terracotta/90 transition-all transform hover:scale-105 animate-fadeIn">
            Diagnóstico Gratuito
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-cream/95 backdrop-blur-lg border-b border-charcoal/10 animate-fadeInDown">
            <ul className="flex flex-col space-y-4 p-6">
              <li><a href="#solution" onClick={() => setIsMenuOpen(false)} className="text-charcoal hover:text-terracotta transition-colors">Solução</a></li>
              <li><a href="#benefits" onClick={() => setIsMenuOpen(false)} className="text-charcoal hover:text-terracotta transition-colors">Benefícios</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="text-charcoal hover:text-terracotta transition-colors">Sobre</a></li>
              <li>
                <button 
                  onClick={() => {
                    onOpenForm();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-terracotta text-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-terracotta/90 transition-all">
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