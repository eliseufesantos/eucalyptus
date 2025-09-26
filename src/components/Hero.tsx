import React from 'react';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-cream/95 to-taupe/10 flex items-center justify-center pt-24 pb-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, theme('colors.gold') 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, theme('colors.terracotta') 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }} />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-[1.1] tracking-tight">
              <span className="block font-extralight opacity-0 animate-fadeInUp animation-delay-200">
                Sua clínica já encanta.
              </span>
              <span className="block font-medium text-terracotta opacity-0 animate-fadeInUp animation-delay-400">
                Agora é hora de crescer com inteligência.
              </span>
            </h1>
          </div>
          
          {/* Subheading */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-charcoal/80 leading-relaxed font-light tracking-wide opacity-0 animate-fadeInUp animation-delay-600">
              CRM, automações e inteligência digital para clínicas que querem crescer com{' '}
              <span className="text-terracotta font-medium">leveza</span> e{' '}
              <span className="text-gold font-medium">clareza</span>.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="space-y-8 opacity-0 animate-fadeInUp animation-delay-800">
            {/* Main CTA Button */}
            <div className="flex justify-center">
              <button 
                onClick={onOpenForm}
                className="group relative bg-gradient-to-r from-terracotta to-gold text-cream px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-terracotta/20"
              >
                <span className="flex items-center gap-3">
                Quero entender como estruturar minha clínica
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
            
            {/* Authority Seal */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-charcoal/10 rounded-full px-4 py-2 shadow-sm">
                <div className="flex -space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-6 h-6 bg-gradient-to-br from-gold to-terracotta rounded-full border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-charcoal/70">
                  +12 clínicas já estruturadas com a Eucalyptus
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-gold/10 to-terracotta/10 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-terracotta/10 to-gold/10 rounded-full blur-2xl opacity-40" />
    </section>
  );
};

export default Hero;