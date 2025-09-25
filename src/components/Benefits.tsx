import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Mais controle',
      description: 'sobre a operação',
    },
    {
      icon: '📈',
      title: 'Mais vendas',
      description: 'sem aumentar equipe',
    },
    {
      icon: '✨',
      title: 'Pacientes encantados',
      description: 'desde o primeiro contato',
    },
    {
      icon: '⏰',
      title: 'Tempo para cuidar',
      description: 'da clínica e da própria vida',
    },
  ];

  return (
    <section id="benefits" className="py-24 lg:py-32 bg-gradient-to-br from-gold/20 to-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal animate-fadeInUp">
              Benefícios Tangíveis
            </h2>
            <p className="text-xl text-taupe animate-fadeInUp animation-delay-200">
              O sonho realizado
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-cream rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fadeInUp"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-taupe text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center animate-fadeInUp animation-delay-800">
            <div className="inline-block bg-charcoal text-cream px-8 py-6 rounded-2xl">
              <p className="text-xl font-medium">
                Crescer com clareza e leveza é possível
              </p>
              <p className="text-lg opacity-90 mt-2">
                — e é isso que entregamos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;