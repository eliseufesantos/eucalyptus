import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { redirectToExternalForm } from '../utils/externalForm';

const Hero: React.FC = () => {
  const heroRef = useScrollAnimation(0.1, 'animate-fade-in');

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-b from-charcoal via-charcoal/95 to-taupe/20 flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Subtle light rays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-gold/30 via-gold/10 to-transparent opacity-40" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-terracotta/30 via-terracotta/10 to-transparent opacity-30" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-gold/20 via-gold/5 to-transparent opacity-20" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 z-10">
        <div className="max-w-6xl mx-auto">

          {/* Badge - Minimalista */}
          <div className="flex justify-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-3 border border-gold/30 text-gold px-6 py-2 rounded-full backdrop-blur-sm bg-charcoal/50">
              <div className="w-1.5 h-1.5 bg-gold rounded-full animate-glow-soft" />
              <span className="text-sm tracking-wider uppercase font-medium">Método RADIX™</span>
              <span className="text-xs text-gold/60">•</span>
              <span className="text-sm tracking-wider uppercase font-medium">3 Vagas</span>
            </div>
          </div>

          {/* Headline - Tipografia como protagonista */}
          <div className="text-center space-y-8 mb-16 animate-on-scroll delay-100">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-cream leading-[0.95] tracking-tight">
              Do improviso
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-terracotta to-gold">
                à máquina de crescimento
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cream/70 leading-relaxed max-w-3xl mx-auto font-light">
              Sistema de automação inteligente para clínicas de estética premium
              <br />
              que sabem que estão perdendo faturamento
            </p>
          </div>

          {/* Stats - Integrados e elegantes */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-16 animate-on-scroll delay-200">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-terracotta mb-2">30%</div>
              <div className="text-sm text-cream/60 uppercase tracking-wider">Leads desperdiçados</div>
            </div>

            <div className="hidden md:block w-px h-16 bg-gold/20" />

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gold mb-2">R$ 40k+</div>
              <div className="text-sm text-cream/60 uppercase tracking-wider">Perdidos mensalmente</div>
            </div>

            <div className="hidden md:block w-px h-16 bg-gold/20" />

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-terracotta mb-2">15 dias</div>
              <div className="text-sm text-cream/60 uppercase tracking-wider">Payback médio</div>
            </div>
          </div>

          {/* CTA - Minimalista e elegante */}
          <div className="text-center space-y-6 animate-on-scroll delay-300">
            <button
              onClick={redirectToExternalForm}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-terracotta to-gold text-cream px-12 py-5 rounded-full text-lg font-semibold shadow-2xl hover-lift transition-smooth focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-charcoal"
            >
              Descubra Quanto Você Está Perdendo
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <p className="text-sm text-cream/50">
              Diagnóstico gratuito • 45 minutos • Sem compromisso
            </p>
          </div>

          {/* Trust - Minimalista */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-sm text-cream/40 animate-on-scroll delay-400">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gold rounded-full" />
              <span>Usado pela própria Eucalyptus</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gold rounded-full" />
              <span>Sem mensalidades</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gold rounded-full" />
              <span>Resultados em 45 dias</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
};

export default Hero;
