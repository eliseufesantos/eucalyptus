import React from 'react';

const Authority: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-charcoal text-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold animate-fadeInUp">
            Autoridade e Exclusividade
          </h2>

          {/* Main Content */}
          <div className="space-y-8 animate-fadeInUp animation-delay-200">
            <p className="text-xl leading-relaxed">
              Na Eucalyptus, trabalhamos com{' '}
              <span className="text-gold font-semibold">poucas clínicas por vez</span>.
            </p>
            
            <p className="text-lg text-cream/80 leading-relaxed">
              Isso significa que cada projeto recebe atenção personalizada, 
              com setup exclusivo e acompanhamento estratégico.
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gold mx-auto animate-fadeInUp animation-delay-400" />

          {/* Promise */}
          <div className="space-y-6 animate-fadeInUp animation-delay-600">
            <p className="text-xl font-medium">
              Não vendemos promessas fáceis.
            </p>
            
            <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
              <p className="text-2xl font-semibold text-gold mb-4">
                Entregamos domínio inteligente:
              </p>
              <p className="text-lg text-cream/90 leading-relaxed">
                a sensação de estar no controle de tudo, com processos 
                que funcionam mesmo quando você não está olhando.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto animate-fadeInUp animation-delay-800">
            <div className="h-2 bg-gold/30 rounded-full" />
            <div className="h-2 bg-gold/60 rounded-full" />
            <div className="h-2 bg-gold rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;