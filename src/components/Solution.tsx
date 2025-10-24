import React from 'react';
import { useScrollAnimation, useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

interface Phase {
  letter: string;
  name: string;
  duration: string;
  items: string[];
  color: string;
}

const Solution: React.FC = () => {
  const sectionRef = useScrollAnimation(0.1, 'animate-on-scroll');
  const phasesRefs = useScrollAnimationMultiple(5, 0.1, 200);

  const phases: Phase[] = [
    {
      letter: 'R',
      name: 'Reconhecimento',
      duration: '2 semanas',
      items: [
        'Diagnóstico de Faturamento Perdido (45 min)',
        'CRM Kommo configurado',
        'Integrações WhatsApp + Instagram',
        'Migração de contatos existentes',
      ],
      color: 'from-terracotta to-terracotta/80',
    },
    {
      letter: 'A',
      name: 'Automação',
      duration: '2 semanas',
      items: [
        'IA conversacional 24/7',
        'Follow-up automático estruturado',
        'Cobrança inteligente por risco',
        'Análise de Google Meu Negócio com insights',
      ],
      color: 'from-gold to-gold/80',
    },
    {
      letter: 'D',
      name: 'Desenvolvimento',
      duration: '2 semanas',
      items: [
        'Treinamento metodológico (SpinSell)',
        'Análise de IA para vendas com feedback',
        'Ritual de gestão semanal',
        'Base de conhecimento no Notion',
      ],
      color: 'from-taupe to-taupe/80',
    },
    {
      letter: 'I',
      name: 'Integração',
      duration: 'Pós-entrega',
      items: [
        '60 dias de suporte dedicado',
        'Ajustes finos baseados em dados',
        'Evolução contínua do sistema',
      ],
      color: 'from-charcoal to-charcoal/80',
    },
    {
      letter: 'X',
      name: 'eXponencial',
      duration: 'Contínuo',
      items: [
        'Clínica autônoma e escalável',
        'Previsibilidade de faturamento',
        'Base para crescimento exponencial',
      ],
      color: 'from-gold to-terracotta',
    },
  ];

  return (
    <section
      id="solution"
      className="py-24 lg:py-32 bg-gradient-to-br from-cream via-cream/95 to-gold/5 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #edd08c 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #b87353 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div ref={sectionRef} className="text-center mb-20">
            <div className="inline-block bg-terracotta text-cream px-5 py-2 rounded-full text-sm font-semibold mb-6">
              Sistema Completo
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Método RADIX™
            </h2>
            <p className="text-xl text-taupe max-w-2xl mx-auto font-light italic">
              Raízes fortes constroem crescimento duradouro
            </p>
          </div>

          {/* Timeline Vertical */}
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-8 md:left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-terracotta via-gold to-charcoal opacity-20" />

            {/* Phases */}
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) phasesRefs.current[index] = el;
                  }}
                  className="relative flex gap-6 md:gap-8 items-start opacity-0"
                >
                  {/* Letter Circle */}
                  <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-3xl md:text-4xl font-bold text-cream">{phase.letter}</span>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 glass-card rounded-2xl p-6 md:p-8 shadow-premium card-hover">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">{phase.name}</h3>
                      <span className="text-sm font-medium text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-gold mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-charcoal/80 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 animate-on-scroll delay-500">
            <div className="inline-block glass-card rounded-2xl p-8 shadow-xl max-w-2xl">
              <p className="text-2xl font-bold text-charcoal mb-3">
                6 semanas para transformar sua clínica
              </p>
              <p className="text-taupe text-lg">
                Do improviso à máquina de crescimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
