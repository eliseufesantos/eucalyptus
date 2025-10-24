import React from 'react';
import { useScrollAnimation, useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

interface Dor {
  numero: string;
  titulo: string;
  solucao: string;
}

const PainSection: React.FC = () => {
  const sectionRef = useScrollAnimation(0.1, 'animate-on-scroll');
  const itemsRefs = useScrollAnimationMultiple(4, 0.1, 150);

  const dores: Dor[] = [
    {
      numero: '30%',
      titulo: 'Atendimento lento perdendo leads',
      solucao: 'IA responde em segundos, 24/7',
    },
    {
      numero: '3/10',
      titulo: 'Conversão baixa por falta de método',
      solucao: 'Treinamento SpinSell + análise IA',
    },
    {
      numero: 'R$ 40k+',
      titulo: 'Sem follow-up estruturado',
      solucao: 'Automação personalizada de resgate',
    },
    {
      numero: '28%',
      titulo: 'Retorno de pacientes muito baixo',
      solucao: 'Lembretes inteligentes',
    },
  ];

  return (
    <section
      id="dores"
      className="py-20 lg:py-24 bg-gradient-to-b from-charcoal via-charcoal/98 to-charcoal relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Title */}
          <div ref={sectionRef} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream mb-4 leading-tight">
              Por Que Você Está
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta via-gold to-terracotta">
                Perdendo Dinheiro
              </span>
            </h2>
          </div>

          {/* Timeline vertical - Layout criativo */}
          <div className="relative max-w-3xl mx-auto">
            {/* Linha conectora */}
            <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-terracotta/30 to-gold/30" />

            {/* Dores */}
            <div className="space-y-12">
              {dores.map((dor, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) itemsRefs.current[index] = el;
                  }}
                  className="relative flex items-start gap-8 opacity-0"
                >
                  {/* Número grande como protagonista */}
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-terracotta to-gold">
                      {dor.numero}
                    </div>
                  </div>

                  {/* Dot na linha */}
                  <div className="absolute left-12 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-terracotta to-gold shadow-lg" />

                  {/* Conteúdo */}
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl lg:text-2xl font-semibold text-cream mb-3 leading-tight">
                      {dor.titulo}
                    </h3>
                    <div className="flex items-start gap-2 text-cream/60">
                      <svg className="w-4 h-4 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-base">{dor.solucao}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA de transição - Compacto */}
          <div className="text-center mt-20 animate-on-scroll delay-400">
            <div className="inline-block border border-gold/20 backdrop-blur-sm bg-charcoal/50 rounded-2xl px-8 py-6 max-w-2xl">
              <p className="text-xl lg:text-2xl font-semibold text-cream">
                E se você pudesse <span className="text-gold">resolver tudo isso</span>?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
