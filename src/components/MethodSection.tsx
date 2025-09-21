import React from 'react';

interface MethodPillar {
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

const MethodSection: React.FC = () => {
  const pillars: MethodPillar[] = [
    {
      number: '01',
      title: 'Infraestrutura Pronta',
      description: 'Softwares já configurados e integrados para sua clínica',
      features: [
        'Sistema de agendamento inteligente',
        'Automação de WhatsApp e e-mail',
        'Dashboard de gestão completo',
        'Integração com redes sociais'
      ],
      icon: '🏗️'
    },
    {
      number: '02',
      title: 'Implementação e Ensino',
      description: 'Capacitamos sua equipe para dominar a tecnologia',
      features: [
        'Treinamento completo da equipe',
        'Configuração personalizada',
        'Suporte técnico dedicado',
        'Manual de operação'
      ],
      icon: '🎓'
    },
    {
      number: '03',
      title: 'Acompanhamento Estratégico',
      description: 'Consultoria growth contínua para maximizar resultados',
      features: [
        'Consultoria mensal estratégica',
        'Otimização de campanhas',
        'Análise de performance',
        'Ajustes baseados em dados'
      ],
      icon: '📈'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pattern Interruption */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/30">
            🎯 Método Swas aplicado ao Growth em Odonto
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 tracking-tight">
            Transformamos o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              abstrato em concreto
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Nosso método em 3 pilares fáceis de memorizar e implementar na sua clínica
          </p>
        </div>

        {/* Funil Visual */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-accent/10 to-tertiary/20 rounded-2xl p-8 border border-accent/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Como funciona o processo</h3>
              <p className="text-primary/70">Da implementação ao crescimento sustentável</p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex flex-col items-center text-center flex-1">
                  <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-3xl text-white mb-4 shadow-lg">
                    {pillar.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{pillar.number}</div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{pillar.title}</h4>
                  <p className="text-sm text-primary/70 mb-4">{pillar.description}</p>
                  
                  {index < pillars.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 transform translate-x-8 w-16 h-0.5 bg-gradient-to-r from-secondary to-accent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detalhamento dos Pilares */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-gradient-to-br from-accent/5 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
                  {pillar.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{pillar.number}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{pillar.title}</h3>
                <p className="text-primary/70 leading-relaxed">{pillar.description}</p>
              </div>
              
              <ul className="space-y-3">
                {pillar.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-primary/70">
                    <span className="text-secondary mr-3 font-bold text-lg">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA do Método */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Pronto para implementar o método na sua clínica?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Agende uma sessão estratégica gratuita para entender como aplicar IA e Growth na sua clínica
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Quero%20agendar%20uma%20sessão%20estratégica%20gratuita%20para%20entender%20o%20método%20Eucalyptus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              💬 Agendar Sessão Estratégica Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
