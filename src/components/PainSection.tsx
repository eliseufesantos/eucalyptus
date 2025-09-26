import React from 'react';

const PainSection: React.FC = () => {
  const painPoints = [
    { icon: '💬', text: 'Leads se perdem no WhatsApp' },
    { icon: '😰', text: 'A equipe fica sobrecarregada' },
    { icon: '🔄', text: 'Falta de processos trava o crescimento' },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#8d837c' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-cream animate-fadeInUp">
              A Dor Compartilhada
            </h2>
            <p className="text-xl text-cream/90 leading-relaxed animate-fadeInUp animation-delay-200">
              Você investiu anos em formação, equipamentos e atendimento impecável.
              <br />
              Hoje, sua clínica já tem movimento, mas…
            </p>
          </div>

          {/* Pain Points */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-cream/95 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fadeInUp"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{point.icon}</div>
                <p className="text-charcoal font-medium">{point.text}</p>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="text-center space-y-4 animate-fadeInUp animation-delay-800">
            <p className="text-2xl font-semibold text-gold">
              O resultado?
            </p>
            <p className="text-xl text-cream">
              Mais esforço, menos retorno.
            </p>
            <p className="text-lg text-cream/80 italic">
              E a sensação de que falta uma peça para tudo fluir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;