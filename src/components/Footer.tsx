import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { redirectToExternalForm } from '../utils/externalForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-charcoal to-gray-800 text-cream border-t border-cream/10">
      {/* CTA Section - Top */}
      <div className="container mx-auto px-6 lg:px-12 py-10 text-center border-b border-cream/10">
        <h3 className="text-xl md:text-2xl font-bold text-cream mb-3">
          Pronto para recuperar os leads que está perdendo?
        </h3>
        <p className="text-cream/70 text-base mb-5">
          Agende um diagnóstico gratuito de 30 minutos
        </p>
        <button 
          onClick={redirectToExternalForm}
          className="bg-terracotta text-cream px-7 py-3 rounded-full text-base font-medium hover:bg-terracotta/90 transition-colors">
          Agendar Diagnóstico Gratuito
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Top Row - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          
          {/* Left - Logo Eucalyptus */}
          <div className="flex justify-center md:justify-start">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                <img 
                  src="/assets/eucalyptus-logo-padrao.svg" 
                  alt="Eucalyptus Logo" 
                  className="w-14 h-14"
                />
                <div>
                  <h3 className="text-xl font-bold tracking-wide">EUCALYPTUS</h3>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-cream to-cream/50 rounded-full mt-1"></div>
                </div>
              </div>
              <p className="text-cream/70 text-sm font-medium">
                Inteligência digital para clínicas premium
              </p>
            </div>
          </div>

          {/* Center - Contact Info + Social */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-3 text-cream/70 text-sm bg-white/5 px-8 py-4 rounded-2xl border border-cream/10">
              
              {/* Email */}
              <div className="flex items-center gap-2">
                <span className="text-base">📧</span>
                <span>contato@eucalyptus.solutions</span>
              </div>
              
              {/* Location */}
              <div className="flex items-center gap-2">
                <span className="text-base">📍</span>
                <span>São Paulo, SP</span>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-1">
                <a 
                  href="#" 
                  className="text-cream/70 hover:text-terracotta transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-cream/70 hover:text-terracotta transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Kommo Badge */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* Glassmorphism Container - True Blue */}
              <div className="relative bg-[#0F1B4A]/60 backdrop-blur-lg rounded-2xl border border-[#1E3A8A]/40 shadow-2xl hover:shadow-[#1E3A8A]/30 transition-all duration-500 hover:scale-105 overflow-hidden">
                {/* Glassmorphism Overlay - True Blue */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B4A]/70 via-[#1E3A8A]/50 to-[#0F1B4A]/60"></div>
                
                {/* Content */}
                <div className="relative z-10 p-2">
                  {/* Partnership Badge - Golden */}
                  <div className="mb-2 text-center">
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

        {/* Bottom Row - Links */}
        <div className="flex items-center justify-center mt-6">
          {/* Navigation Links */}
          <div className="flex items-center gap-4 text-cream/70 text-sm">
            <a href="#sobre" className="hover:text-terracotta transition">Sobre</a>
            <span className="text-cream/30">•</span>
            <a href="#solucao" className="hover:text-terracotta transition">Solução</a>
            <span className="text-cream/30">•</span>
            <a href="#calculadora" className="hover:text-terracotta transition">ROI</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright & Legal */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-cream/70">
            <p>
              © 2025 Eucalyptus Solutions. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="/privacidade" className="hover:text-terracotta transition">
                Política de Privacidade
              </a>
              <a href="/termos" className="hover:text-terracotta transition">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;