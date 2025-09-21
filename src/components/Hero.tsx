import React from 'react';
import DashboardMockup from './DashboardMockup';

// Grid pattern SVG for background decoration
// Creates a subtle grid pattern with secondary color lines for visual depth
const GRID_PATTERN_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23c521f4' stroke-width='0.3' opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E`;

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-abyssal flex items-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("${GRID_PATTERN_SVG}")`,
          animation: 'float 6s ease-in-out infinite'
        }} />
      </div>

      {/* Pattern Interruption Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-24 h-24 bg-electric rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-metallic rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-mist rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="text-center lg:text-left animate-fadeInUp">
          {/* Pattern Interruption Badge */}
          <div className="inline-flex items-center bg-electric/20 text-electric px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-electric/30">
            🚀 Cresça sua clínica de harmonização facial sem depender de sorte ou indicações
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight tracking-tight">
            Sua clínica pode funcionar como uma{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-metallic">
              startup de crescimento acelerado
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-mist mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Aplicamos <strong>inteligência artificial e automação</strong> para encher sua agenda de pacientes — 
            com previsibilidade e baixo custo.
          </p>
          
          {/* CTA Principal para WhatsApp */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
            <a 
              href="https://wa.me/5511999999999?text=Quero%20conhecer%20o%20método%20Eucalyptus%20para%20minha%20clínica"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-electric to-abyssal hover:from-abyssal hover:to-electric text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-h-11"
            >
              💬 Quero conhecer o método
            </a>
            <a 
              href="#solucao" 
              className="bg-transparent text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium border-2 border-metallic hover:bg-metallic/10 hover:scale-105 transition-all duration-200"
            >
              Ver Como Funciona
            </a>
          </div>
          
          {/* Frase de Impacto */}
          <div className="bg-metallic/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-metallic/20">
            <p className="text-base font-semibold text-white mb-2">
              Tecnologia que valoriza Beleza e Multiplica resultados
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-xs text-mist">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-electric rounded-full mr-2"></span>
                IA + Automação
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-metallic rounded-full mr-2"></span>
                Crescimento Previsível
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-mist rounded-full mr-2"></span>
                Baixo Custo
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center mt-8 lg:mt-0">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};

export default Hero;