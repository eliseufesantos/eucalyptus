import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-charcoal to-gray-800 text-cream border-t border-cream/10">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <img 
                src="/assets/eucalyptus-logo-padrao.svg" 
                alt="Eucalyptus Logo" 
                className="w-16 h-16"
              />
              <div>
                <h3 className="text-2xl font-bold tracking-wide">EUCALYPTUS</h3>
                <div className="h-0.5 w-12 bg-gradient-to-r from-cream to-cream/50 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="text-cream/70 text-sm font-medium mt-3">
              Inteligência digital para clínicas premium
            </p>
          </div>

          {/* Center - Copyright */}
          <div className="text-center order-first lg:order-none">
            <div className="bg-white/5 rounded-full px-6 py-3 border border-white/10">
              <p className="text-sm text-cream/50 font-medium">
                © {new Date().getFullYear()} Eucalyptus. Todos os direitos reservados.
              </p>
            </div>
          </div>

          {/* Right Side - Partnership */}
          <div className="text-center">
            <div className="relative group">
              {/* Glassmorphism Container - True Blue */}
              <div className="relative bg-[#0F1B4A]/60 backdrop-blur-lg rounded-2xl border border-[#1E3A8A]/40 shadow-2xl hover:shadow-[#1E3A8A]/30 transition-all duration-500 hover:scale-105 overflow-hidden">
                {/* Glassmorphism Overlay - True Blue */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B4A]/70 via-[#1E3A8A]/50 to-[#0F1B4A]/60"></div>
                
                {/* Content */}
                <div className="relative z-10 p-2">
                  {/* Partnership Badge - Golden */}
                  <div className="mb-2">
                    <span className="text-xs font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-wider uppercase drop-shadow-lg">
                      Parceiro Oficial
                    </span>
                  </div>
                  
                  {/* Kommo Badge - Full Focus */}
                  <div className="relative">
                    <img 
                      src="/assets/Badge dark.svg" 
                      alt="Selo Oficial de Parceria Kommo" 
                      className="h-16 w-auto mx-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;