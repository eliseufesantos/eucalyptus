import React from 'react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  color: string;
}

const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Essencial',
      price: 'R$ 15.000',
      description: 'Perfeito para clínicas que estão começando no digital',
      features: [
        'Sistema de agendamento básico',
        'Automação de WhatsApp',
        'Landing page personalizada',
        'Dashboard de gestão',
        'Suporte por e-mail',
        'Relatórios mensais'
      ],
      cta: 'Começar com Essencial',
      color: 'blue'
    },
    {
      name: 'Pro',
      price: 'R$ 25.000',
      description: 'Ideal para clínicas que querem escalar rapidamente',
      features: [
        'Tudo do Essencial +',
        'Marketing automatizado completo',
        'Integração com redes sociais',
        'Sistema de fidelização',
        'Suporte prioritário',
        'Consultoria mensal',
        'Relatórios avançados',
        'Treinamento da equipe'
      ],
      cta: 'Escalar com Pro',
      popular: true,
      color: 'green'
    },
    {
      name: 'Premium',
      price: 'R$ 35.000',
      description: 'Para clínicas que querem dominar o mercado',
      features: [
        'Tudo do Pro +',
        'IA avançada para personalização',
        'Múltiplas campanhas simultâneas',
        'Suporte 24/7',
        'Consultoria semanal',
        'Análise de concorrência',
        'Estratégias exclusivas',
        'Garantia de resultados'
      ],
      cta: 'Dominar com Premium',
      color: 'purple'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-accent/5 to-tertiary/20 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pattern Interruption */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/30">
            💰 Investimento que se paga sozinho
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 tracking-tight">
            Escolha o plano{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              ideal
            </span> para sua clínica
          </h2>
          
          <p className="text-lg sm:text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Todos os planos incluem implementação completa e suporte especializado
          </p>
        </div>

        {/* Cards de Preços */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                plan.popular ? 'ring-2 ring-secondary scale-105 border-secondary/30' : 'border-accent/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    🏆 Mais Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.color === 'blue' ? 'text-accent' : 
                    plan.color === 'green' ? 'text-secondary' : 'text-purple-500'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                  <p className="text-primary/70">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-secondary mr-3 font-bold text-lg">✓</span>
                      <span className="text-primary/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`https://wa.me/5511999999999?text=Quero%20conhecer%20o%20plano%20${plan.name}%20do%20Eucalyptus`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.color === 'blue' 
                      ? 'bg-accent hover:bg-accent/80 text-white' 
                      : plan.color === 'green'
                      ? 'bg-secondary hover:bg-secondary/80 text-white'
                      : 'bg-purple-500 hover:bg-purple-600 text-white'
                  } hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  💬 {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Garantia */}
        <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            🛡️ Garantia de Risco Zero
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Se na sessão estratégica você não enxergar clareza e oportunidades, 
            não seguimos — sem custo e sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511999999999?text=Quero%20agendar%20uma%20sessão%20estratégica%20gratuita%20com%20garantia%20de%20risco%20zero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              💬 Agendar Sessão Gratuita
            </a>
            <a 
              href="https://wa.me/5511999999999?text=Quero%20falar%20sobre%20os%20planos%20e%20investimento%20do%20Eucalyptus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-secondary transition-all duration-300"
            >
              💬 Falar sobre Investimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
