import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { redirectToExternalForm } from '../utils/externalForm';
import { ProjectIcons } from '../utils/icons';

const Hero: React.FC = () => {
  const heroRef = useScrollAnimation(0.1, 'animate-fade-in');

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-cream via-cream/95 to-gold/5 flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #edd08c 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #b87353 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px',
          }}
        />
      </div>

      {/* Decorative floating orbs - static opacity */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-gold/10 to-terracotta/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-terracotta/10 to-gold/10 rounded-full blur-2xl opacity-30" />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Badge com urgência */}
          <div className="flex justify-center animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-terracotta to-gold text-cream px-5 py-2.5 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-cream rounded-full animate-glow-soft" />
              <span className="font-semibold text-sm sm:text-base tracking-wide">
                Método RADIX™ • 3 Vagas Beta Restantes
              </span>
            </div>
          </div>

          {/* Headline impactante */}
          <div className="space-y-4 animate-on-scroll delay-100">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1] tracking-tight">
              A diferença entre uma clínica
              <br />
              que trabalha no{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-terracotta">improviso</span>
                <div className="absolute bottom-1 left-0 w-full h-3 bg-terracotta/20 -z-0 transform -rotate-1" />
              </span>
              <br />
              e uma{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gold">máquina de crescimento</span>
                <div className="absolute bottom-1 left-0 w-full h-3 bg-gold/20 -z-0 transform rotate-1" />
              </span>
            </h1>
          </div>

          {/* Subheadline explicativa */}
          <div className="animate-on-scroll delay-200">
            <p className="text-lg sm:text-xl md:text-2xl text-charcoal/80 leading-relaxed max-w-3xl mx-auto font-light">
              Sistema completo de automação inteligente para clínicas de estética
              <br />
              que já vendem bem, mas sabem que{' '}
              <span className="font-semibold text-terracotta">estão perdendo faturamento</span>
            </p>
          </div>

          {/* Stats visuais com números chocantes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 max-w-4xl mx-auto animate-on-scroll delay-300">
            {/* Stat 1 */}
            <div className="glass-card rounded-2xl p-6 card-hover">
              <div className="text-4xl sm:text-5xl font-bold text-terracotta mb-2">30%</div>
              <div className="text-sm sm:text-base text-charcoal/70 font-medium">
                dos leads desperdiçados
              </div>
            </div>

            {/* Stat 2 - Destaque */}
            <div className="glass-card rounded-2xl p-6 border-2 border-gold shadow-premium card-hover">
              <div className="text-4xl sm:text-5xl font-bold text-gold mb-2">R$ 40k+</div>
              <div className="text-sm sm:text-base text-charcoal/70 font-medium">
                perdidos/mês (média)
              </div>
              <div className="mt-3 inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-semibold">
                Recuperável
              </div>
            </div>

            {/* Stat 3 */}
            <div className="glass-card rounded-2xl p-6 card-hover">
              <div className="text-4xl sm:text-5xl font-bold text-terracotta mb-2">15 dias</div>
              <div className="text-sm sm:text-base text-charcoal/70 font-medium">
                para payback
              </div>
            </div>
          </div>

          {/* CTA principal */}
          <div className="flex flex-col items-center gap-4 mt-12 animate-on-scroll delay-400">
            <button
              onClick={redirectToExternalForm}
              className="group relative bg-gradient-to-r from-terracotta to-gold text-cream px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-lg sm:text-xl font-bold shadow-xl hover-lift cta-pulse transition-smooth focus:outline-none focus:ring-4 focus:ring-terracotta/30"
            >
              <span className="flex flex-col items-center gap-2">
                <span className="flex items-center gap-2">
                  Descubra Quanto Você Está Perdendo
                  <ProjectIcons.HeroArrow />
                </span>
                <span className="text-sm font-normal text-cream/90">
                  Diagnóstico Gratuito • 45 minutos
                </span>
              </span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-charcoal/60 mt-8 animate-on-scroll delay-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Usado pela própria Eucalyptus</span>
            </div>

            <div className="hidden sm:block w-1 h-1 bg-charcoal/30 rounded-full" />

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Sem mensalidades</span>
            </div>

            <div className="hidden sm:block w-1 h-1 bg-charcoal/30 rounded-full" />

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Resultados em 45 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
