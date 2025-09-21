import React, { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  clinic: string;
  email: string;
  phone: string;
  city: string;
  specialty: string;
  message: string;
}

const CTASection: React.FC = () => {
  return (
    <section id="contato" className="bg-gradient-to-br from-gray-900 to-blue-900 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pattern Interruption */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 Última oportunidade de transformar sua clínica
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Sua clínica pode crescer como as{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              grandes empresas
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            O próximo passo é seu. Agende uma <strong>Sessão Estratégica Gratuita</strong> e descubra 
            como aplicar IA e Growth na sua clínica.
          </p>
        </div>

        {/* Garantia de Risco Zero */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl mr-4">
              🛡️
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Garantia de Risco Zero
            </h3>
          </div>
          <p className="text-lg text-white/90 mb-6">
            Se na sessão você não enxergar clareza e oportunidades, não seguimos — 
            <strong> sem custo e sem compromisso</strong>.
          </p>
        </div>

        {/* CTAs Principais */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <a 
            href="https://wa.me/5511999999999?text=Quero%20agendar%20uma%20Sessão%20Estratégica%20Gratuita%20para%20entender%20como%20aplicar%20IA%20e%20Growth%20na%20minha%20clínica"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💬</div>
            <h3 className="text-xl font-bold mb-2">Sessão Estratégica Gratuita</h3>
            <p className="text-green-100 mb-4">
              Descubra como aplicar IA e Growth na sua clínica
            </p>
            <div className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full inline-block">
              Agendar Agora
            </div>
          </a>

          <a 
            href="https://wa.me/5511999999999?text=Quero%20falar%20sobre%20os%20planos%20e%20investimento%20do%20Eucalyptus%20para%20minha%20clínica"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💰</div>
            <h3 className="text-xl font-bold mb-2">Falar sobre Investimento</h3>
            <p className="text-blue-100 mb-4">
              Conheça os planos e valores do Eucalyptus
            </p>
            <div className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full inline-block">
              Ver Planos
            </div>
          </a>
        </div>

        {/* Frase Final Inspiracional */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
              "Sua clínica pode crescer como as grandes empresas. O próximo passo é seu."
            </p>
            <p className="text-lg text-gray-300">
              Não fique para trás enquanto sua concorrência escala com tecnologia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;