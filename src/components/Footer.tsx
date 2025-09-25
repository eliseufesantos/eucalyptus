import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-cream py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-terracotta rounded-full" />
              <span className="text-xl font-medium">Eucalyptus</span>
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