import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-cream py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-3">
              <img 
                src="/assets/eucalyptus-logo-padrao.svg" 
                alt="Eucalyptus Logo" 
                className="w-14 h-14 sm:w-16 sm:h-16"
              />
              <span className="text-2xl sm:text-3xl font-medium">EUCALYPTUS</span>
            </div>
            <p className="text-sm text-cream/60">
              Inteligência digital para clínicas premium
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-cream/60">
              © {new Date().getFullYear()} Eucalyptus. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;