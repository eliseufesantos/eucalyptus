import React from 'react';

const Solution: React.FC = () => {
  const deliverables = [
    {
      title: 'CRM Kommo personalizado',
      description: 'para o seu fluxo específico',
    },
    {
      title: 'Automação inteligente',
      description: 'de follow-ups e agendamentos, sem esforço manual',
    },
    {
      title: 'Landing pages que convertem',
      description: 'e formulários inteligentes que já filtram os leads certos',
    },
    {
      title: 'Consultoria estratégica premium',
      description: 'imagem, marketing e presença digital — exclusiva para quem busca diferenciação de alto padrão',
    },
  ];

  return (
    <section id="solution" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal animate-fadeInUp">
              A Solução Premium
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl text-terracotta font-semibold animate-fadeInUp animation-delay-200">
                A Eucalyptus não é uma agência de marketing.
              </p>
              <p className="text-lg text-taupe animate-fadeInUp animation-delay-300">
                Somos especialistas em estruturar a inteligência digital da sua clínica, 
                para que cada contato se transforme em oportunidade real.
              </p>
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-charcoal text-center mb-12 animate-fadeInUp animation-delay-400">
              O que entregamos:
            </h3>
            
            <div className="grid gap-6 lg:gap-8">
              {deliverables.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-r from-cream to-gold/10 rounded-2xl p-8 lg:p-10 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-xl animate-fadeInUp"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-terracotta rounded-full mt-2.5" />
                    <div>
                      <h4 className="text-xl font-semibold text-charcoal mb-2">
                        {item.title}
                      </h4>
                      <p className="text-taupe">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-terracotta/5 to-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;