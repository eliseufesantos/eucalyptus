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
    <section id="contato" className="bg-abyssal py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-24 h-24 bg-electric rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-metallic rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pattern Interruption */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-electric/20 text-electric px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-electric/30">
            🚀 Última oportunidade de transformar sua clínica
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Sua clínica pode crescer como as{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-metallic">
              grandes empresas
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-mist leading-relaxed max-w-2xl mx-auto mb-6">
            O próximo passo é seu. Agende uma <strong>Sessão Estratégica Gratuita</strong> e descubra 
            como aplicar IA e Growth na sua clínica.
          </p>
        </div>

        {/* Garantia de Risco Zero */}
        <div className="bg-gradient-to-r from-electric to-metallic rounded-xl p-6 mb-8 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl mr-3">
              🛡️
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Garantia de Risco Zero
            </h3>
          </div>
          <p className="text-base text-white/90 mb-4">
            Se na sessão você não enxergar clareza e oportunidades, não seguimos — 
            <strong> sem custo e sem compromisso</strong>.
          </p>
        </div>

        {/* CTAs Principais */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <a 
            href="https://wa.me/5511999999999?text=Quero%20agendar%20uma%20Sessão%20Estratégica%20Gratuita%20para%20entender%20como%20aplicar%20IA%20e%20Growth%20na%20minha%20clínica"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-electric to-metallic hover:from-metallic hover:to-electric text-white p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💬</div>
            <h3 className="text-lg font-bold mb-2">Sessão Estratégica Gratuita</h3>
            <p className="text-white/90 mb-3 text-sm">
              Descubra como aplicar IA e Growth na sua clínica
            </p>
            <div className="text-xs font-semibold bg-white/20 px-3 py-1.5 rounded-full inline-block">
              Agendar Agora
            </div>
          </a>

          <a 
            href="https://wa.me/5511999999999?text=Quero%20falar%20sobre%20os%20planos%20e%20investimento%20do%20Eucalyptus%20para%20minha%20clínica"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-metallic to-abyssal hover:from-abyssal hover:to-metallic text-white p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💰</div>
            <h3 className="text-lg font-bold mb-2">Falar sobre Investimento</h3>
            <p className="text-white/90 mb-3 text-sm">
              Conheça os planos e valores do Eucalyptus
            </p>
            <div className="text-xs font-semibold bg-white/20 px-3 py-1.5 rounded-full inline-block">
              Ver Planos
            </div>
          </a>
        </div>

        {/* Frase Final Inspiracional */}
        <div className="text-center">
          <div className="bg-metallic/10 backdrop-blur-sm rounded-xl p-6 border border-metallic/20">
            <p className="text-xl sm:text-2xl font-bold text-white mb-3">
              "Sua clínica pode crescer como as grandes empresas. O próximo passo é seu."
            </p>
            <p className="text-base text-mist">
              Não fique para trás enquanto sua concorrência escala com tecnologia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;