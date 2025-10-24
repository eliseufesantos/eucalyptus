import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { redirectToExternalForm } from '../utils/externalForm';

const Authority: React.FC = () => {
  const sectionRef = useScrollAnimation(0.1, 'animate-on-scroll');

  const benefits = [
    'Implementação completa do Método RADIX',
    '60 dias de suporte dedicado',
    'Prioridade total no atendimento',
    'Seu case vira referência de mercado',
  ];

  return (
    <section
      ref={sectionRef}
      id="authority"
      className="relative py-32 lg:py-40 bg-gradient-to-br from-gold/20 via-cream to-terracotta/10"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #b87353 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #edd08c 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge exclusivo */}
          <div className="flex justify-center mb-8 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-terracotta to-gold text-cream px-5 py-2.5 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-cream rounded-full animate-glow-soft" />
              <span className="font-semibold text-sm tracking-wide">
                Programa Beta • 3 Vagas Restantes
              </span>
            </div>
          </div>

          {/* Título */}
          <div className="mb-12 animate-on-scroll delay-100">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Seja um dos{' '}
              <span className="text-terracotta">3 Primeiros</span>
            </h2>
            <p className="text-xl text-taupe max-w-2xl mx-auto leading-relaxed">
              Condições especiais para clínicas que querem ser referência de mercado com resultados comprovados
            </p>
          </div>

          {/* Grid de Benefícios */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto animate-on-scroll delay-200">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 flex items-center gap-4 card-hover"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-terracotta rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-cream" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-charcoal font-semibold text-left">{benefit}</span>
              </div>
            ))}
          </div>

          {/* O que pedimos */}
          <div className="mb-12 max-w-2xl mx-auto animate-on-scroll delay-300">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gold/30">
              <p className="text-sm font-semibold text-taupe uppercase tracking-wide mb-2">
                Em troca pedimos:
              </p>
              <p className="text-charcoal font-medium text-lg">
                Depoimento em vídeo + permissão para usar como case após resultados
              </p>
            </div>
          </div>

          {/* Skin in the Game */}
          <div className="mb-12 max-w-3xl mx-auto animate-on-scroll delay-400">
            <div className="bg-gradient-to-br from-charcoal/90 to-taupe/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gold/20">
              <div className="flex items-start gap-4 text-left">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gold to-terracotta rounded-full flex items-center justify-center text-2xl">
                  💪
                </div>
                <div className="flex-1">
                  <p className="text-cream/90 text-lg leading-relaxed italic mb-3">
                    "Nós usamos esse mesmo ecossistema para rodar a Eucalyptus.
                    Não é teoria — é o que funciona na prática todos os dias.
                    Se não funcionasse, não venderia para você."
                  </p>
                  <p className="text-gold font-semibold">
                    — Equipe Eucalyptus Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="animate-on-scroll delay-500">
            <button
              onClick={redirectToExternalForm}
              className="bg-gradient-to-r from-terracotta to-gold text-cream px-10 py-5 rounded-2xl text-xl font-bold shadow-xl hover-lift cta-pulse transition-smooth focus:outline-none focus:ring-4 focus:ring-terracotta/30"
            >
              Quero Ser Cliente Beta
            </button>
          </div>

          {/* Urgência sutil */}
          <p className="mt-6 text-sm text-taupe/70 animate-on-scroll delay-600">
            Após 3 clientes, programa Beta encerra e preço aumenta
          </p>
        </div>
      </div>
    </section>
  );
};

export default Authority;
