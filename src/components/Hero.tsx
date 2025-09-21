import React from 'react';
import DashboardMockup from './DashboardMockup';

// Grid pattern SVG for background decoration
// Creates a subtle grid pattern with secondary color lines for visual depth
const GRID_PATTERN_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23c521f4' stroke-width='0.3' opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E`;

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-primary flex items-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("${GRID_PATTERN_SVG}")`,
          animation: 'float 6s ease-in-out infinite'
        }} />
      </div>

      {/* Pattern Interruption Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-tertiary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="text-center lg:text-left animate-fadeInUp">
          {/* Pattern Interruption Badge */}
          <div className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/30">
            🚀 Cresça sua clínica de harmonização facial sem depender de sorte ou indicações
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
            Sua clínica pode funcionar como uma{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              startup de crescimento acelerado
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-tertiary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Aplicamos <strong>inteligência artificial e automação</strong> para encher sua agenda de pacientes — 
            com previsibilidade e baixo custo.
          </p>
          
          {/* CTA Principal para WhatsApp */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
            <a 
              href="https://wa.me/5511999999999?text=Quero%20conhecer%20o%20método%20Eucalyptus%20para%20minha%20clínica"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              💬 Quero conhecer o método
            </a>
            <a 
              href="#solucao" 
              className="bg-transparent text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium border-2 border-accent hover:bg-accent/10 hover:scale-105 transition-all duration-200"
            >
              Ver Como Funciona
            </a>
          </div>
          
          {/* Frase de Impacto */}
          <div className="bg-accent/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-accent/20">
            <p className="text-lg font-semibold text-white mb-2">
              Tecnologia que valoriza Beleza e Multiplica resultados
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-tertiary">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                IA + Automação
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Crescimento Previsível
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-tertiary rounded-full mr-2"></span>
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