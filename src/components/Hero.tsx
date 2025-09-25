import React from 'react';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-gold/20" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight animate-fadeInDown">
            Sua clínica cresce em pacientes,
            <br className="hidden sm:block" />
            <span className="text-terracotta">mas perde em organização?</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-taupe max-w-3xl mx-auto animate-fadeInUp animation-delay-200 px-4 sm:px-0">
            Chegou a hora de transformar o caos em clareza: mais estrutura, mais inteligência e mais leveza para escalar.
          </p>
          
          {/* CTA */}
          <div className="pt-6 sm:pt-8 animate-fadeInUp animation-delay-400">
            <button 
              onClick={onOpenForm}
              className="group relative bg-charcoal text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-charcoal/90 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
              <span className="relative z-10">Preencha nosso formulário de pré-diagnóstico</span>
              <div className="absolute inset-0 bg-gradient-to-r from-terracotta to-gold rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
            <p className="mt-4 text-sm text-taupe px-4 sm:px-0">
              Descubra se sua clínica está pronta para dar o próximo passo
            </p>
          </div>
        </div>
        
        {/* Visual element placeholder */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-96 opacity-10">
          <div className="w-full h-full bg-gradient-to-t from-charcoal/20 to-transparent rounded-t-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;