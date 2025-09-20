import React from 'react';
import DashboardMockup from './DashboardMockup';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 to-purple-900 flex items-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23c521f4' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          animation: 'float 6s ease-in-out infinite'
        }} />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme sua{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Clínica de Harmonização Facial
            </span>{' '}
            em um Negócio Digital de Alto Faturamento
          </h1>
          <p className="text-xl text-gray-300 mb-8 opacity-90">
            Sistema completo de automação, marketing digital e gestão moderna para clínicas odontológicas estéticas. 
            Aumente suas consultas em até 300% e automatize 80% dos seus processos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#contato" 
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 animate-pulse"
            >
              Quero Transformar Minha Clínica
            </a>
            <a 
              href="#solucao" 
              className="bg-transparent text-white px-8 py-4 rounded-full text-lg font-bold border-2 border-purple-500 hover:bg-purple-500 hover:-translate-y-1 transition-all duration-300"
            >
              Ver Como Funciona
            </a>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};

export default Hero;