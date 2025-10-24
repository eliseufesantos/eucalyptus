import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { redirectToExternalForm } from '../utils/externalForm';

const Authority: React.FC = () => {
  const sectionRef = useScrollAnimation(0.1, 'animate-on-scroll');

  return (
    <section
      ref={sectionRef}
      id="authority"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-charcoal via-taupe/20 to-charcoal overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Convite Exclusivo - Design integrado */}
          <div className="text-center space-y-12">

            {/* Badge + Título integrados */}
            <div className="space-y-6 animate-on-scroll">
              <div className="inline-flex items-center gap-3 border border-gold/30 text-gold px-6 py-2 rounded-full backdrop-blur-sm bg-charcoal/50">
                <div className="w-1.5 h-1.5 bg-gold rounded-full animate-glow-soft" />
                <span className="text-sm tracking-wider uppercase">Programa Beta</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-cream leading-tight">
                Seja um dos
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-terracotta to-gold">
                  3 Primeiros
                </span>
              </h2>

              <p className="text-xl text-cream/60 max-w-2xl mx-auto leading-relaxed">
                Condições especiais para clínicas que querem ser referência de mercado
              </p>
            </div>

            {/* Benefícios - Lista compacta e elegante */}
            <div className="max-w-2xl mx-auto space-y-4 animate-on-scroll delay-200">
              {[
                'Implementação completa RADIX',
                '60 dias suporte dedicado',
                'Prioridade total',
                'Seu case vira referência',
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 text-left group">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform" />
                  <span className="text-lg text-cream/80 group-hover:text-cream transition-colors">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Em troca + Skin in the Game - Integrados */}
            <div className="max-w-3xl mx-auto space-y-8 animate-on-scroll delay-300">
              {/* Em troca */}
              <div className="border-t border-b border-gold/10 py-6">
                <p className="text-sm text-cream/40 uppercase tracking-wider mb-2">Em troca</p>
                <p className="text-lg text-cream/80">
                  Depoimento em vídeo + permissão para usar como case
                </p>
              </div>

              {/* Skin in the Game - Quote elegante */}
              <div className="relative">
                <div className="absolute -left-4 top-0 text-6xl text-gold/10 font-serif">"</div>
                <blockquote className="text-xl lg:text-2xl text-cream/90 italic leading-relaxed pl-8">
                  Nós usamos esse mesmo ecossistema para rodar a Eucalyptus.
                  <br />
                  Se não funcionasse, não venderia para você.
                </blockquote>
                <p className="text-gold font-medium mt-4 pl-8">— Equipe Eucalyptus Solutions</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 animate-on-scroll delay-400">
              <button
                onClick={redirectToExternalForm}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-terracotta to-gold text-cream px-12 py-5 rounded-full text-lg font-semibold shadow-2xl hover-lift transition-smooth focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-charcoal"
              >
                Quero Ser Cliente Beta
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <p className="mt-4 text-sm text-cream/40">
                Após 3 clientes, programa encerra e preço aumenta
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
