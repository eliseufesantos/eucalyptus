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
    <section className="bg-mist py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-24 h-24 bg-electric rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-metallic rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pattern Interruption */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-electric/20 text-electric px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-electric/30">
            🎯 Método Swas aplicado ao Growth em Odonto
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-abyssal mb-3 sm:mb-4 tracking-tight">
            Transformamos o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-metallic">
              abstrato em concreto
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-abyssal/70 max-w-2xl mx-auto leading-relaxed">
            Nosso método em 3 pilares fáceis de memorizar e implementar na sua clínica
          </p>
        </div>

        {/* Funil Visual */}
        <div className="mb-12">
          <div className="bg-white rounded-xl p-6 border border-metallic/20">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-abyssal mb-2">Como funciona o processo</h3>
              <p className="text-abyssal/70 text-sm">Da implementação ao crescimento sustentável</p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex flex-col items-center text-center flex-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-electric to-metallic rounded-full flex items-center justify-center text-2xl text-white mb-3 shadow-md">
                    {pillar.icon}
                  </div>
                  <div className="text-xl font-bold text-abyssal mb-1">{pillar.number}</div>
                  <h4 className="text-base font-semibold text-abyssal mb-1">{pillar.title}</h4>
                  <p className="text-xs text-abyssal/70 mb-3">{pillar.description}</p>
                  
                  {index < pillars.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 transform translate-x-8 w-16 h-0.5 bg-gradient-to-r from-secondary to-accent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detalhamento dos Pilares */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-metallic/20">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-electric to-metallic rounded-full flex items-center justify-center text-xl text-white mx-auto mb-3">
                  {pillar.icon}
                </div>
                <div className="text-2xl font-bold text-abyssal mb-1">{pillar.number}</div>
                <h3 className="text-lg font-bold text-abyssal mb-2">{pillar.title}</h3>
                <p className="text-abyssal/70 text-sm leading-relaxed">{pillar.description}</p>
              </div>
              
              <ul className="space-y-2">
                {pillar.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-abyssal/70">
                    <span className="text-electric mr-2 font-bold text-base">✓</span>
                    <span className="text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA do Método */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-electric to-abyssal rounded-xl p-6 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Pronto para implementar o método na sua clínica?
            </h3>
            <p className="text-base mb-4 opacity-90">
              Agende uma sessão estratégica gratuita para entender como aplicar IA e Growth na sua clínica
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Quero%20agendar%20uma%20sessão%20estratégica%20gratuita%20para%20entender%20o%20método%20Eucalyptus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-electric px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
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
