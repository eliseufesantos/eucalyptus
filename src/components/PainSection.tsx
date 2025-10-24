import React from 'react';
import { useScrollAnimation, useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

interface Dor {
  icone: string;
  titulo: string;
  problema: string;
  numero: string;
  solucao: string;
}

const PainSection: React.FC = () => {
  const sectionRef = useScrollAnimation(0.1, 'animate-on-scroll');
  const cardsRefs = useScrollAnimationMultiple(4, 0.1, 150);

  const dores: Dor[] = [
    {
      icone: '⏱️',
      titulo: 'Atendimento Lento Perdendo Leads',
      problema: '40min-1h para responder WhatsApp. Ninguém atende à noite/fins de semana.',
      numero: '30% dos leads morrem esperando',
      solucao: 'IA responde em segundos, 24/7',
    },
    {
      icone: '💔',
      titulo: 'Profissionais Que Não Sabem Vender',
      problema: 'São técnicos excelentes, não vendedores. Cada um atende de um jeito.',
      numero: 'Conversão de 3-4 a cada 10 consultas',
      solucao: 'Treinamento SpinSell + análise de IA',
    },
    {
      icone: '📱',
      titulo: 'Zero Follow-up de Resgate',
      problema: 'Lead não fecha → morre ali. "Vou pensar", "sem grana agora".',
      numero: 'R$ 20-50k/mês na mesa',
      solucao: 'Follow-up automático personalizado',
    },
    {
      icone: '💸',
      titulo: 'Retorno Baixo de Pacientes',
      problema: 'Ninguém lembra paciente de voltar. Botox dura 4-6 meses.',
      numero: '28% retornam (ideal: 60%+)',
      solucao: 'Lembretes automáticos inteligentes',
    },
  ];

  return (
    <section
      id="pain-section"
      className="py-24 lg:py-32 bg-gradient-to-br from-charcoal via-taupe to-cream relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #edd08c 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #b87353 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            backgroundPosition: '0 0, 40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div ref={sectionRef} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Por Que Sua Clínica Está{' '}
              <span className="text-gold">Perdendo Dinheiro</span>
            </h2>
            <p className="text-xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
              Dores silenciosas que custam R$ 40k+/mês
            </p>
          </div>

          {/* Grid 2×2 de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {dores.map((dor, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRefs.current[index] = el;
                }}
                className="glass-dark rounded-2xl p-8 shadow-premium card-hover opacity-0"
              >
                {/* Ícone */}
                <div className="text-5xl mb-4">{dor.icone}</div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-gold mb-4 leading-tight">
                  {dor.titulo}
                </h3>

                {/* Problema */}
                <p className="text-cream/80 text-base leading-relaxed mb-4">
                  {dor.problema}
                </p>

                {/* Número chocante - Destaque */}
                <div className="bg-terracotta/20 border-l-4 border-terracotta rounded-lg p-4 mb-4">
                  <p className="text-terracotta font-bold text-lg">{dor.numero}</p>
                </div>

                {/* Solução */}
                <div className="flex items-start gap-2">
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
                  <p className="text-cream font-medium text-base">{dor.solucao}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA de transição */}
          <div className="text-center mt-16 animate-on-scroll delay-400">
            <div className="inline-block bg-gradient-to-r from-charcoal/80 to-taupe/80 backdrop-blur-md border border-gold/30 rounded-2xl p-8 shadow-xl max-w-2xl">
              <p className="text-2xl font-bold text-cream mb-4">
                E se você pudesse{' '}
                <span className="text-gold">resolver tudo isso</span>?
              </p>
              <p className="text-cream/80 text-lg">
                Sistema completo em 6 semanas. Sem mensalidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
