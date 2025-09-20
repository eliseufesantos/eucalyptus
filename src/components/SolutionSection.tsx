import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

const SolutionSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '🤖',
      title: 'Automação Inteligente',
      description: 'Automatize 80% das tarefas repetitivas da sua clínica e foque no que realmente importa: seus pacientes.',
      benefits: [
        'Agendamento automático 24/7',
        'Confirmações e lembretes via WhatsApp',
        'Formulários de triagem inteligentes'
      ]
    },
    {
      icon: '📱',
      title: 'Marketing Digital Estratégico',
      description: 'Campanhas de alta conversão desenvolvidas especificamente para clínicas de harmonização facial.',
      benefits: [
        'Anúncios segmentados no Facebook e Instagram',
        'Landing pages de alta conversão',
        'Remarketing para pacientes'
      ]
    },
    {
      icon: '📊',
      title: 'Gestão Completa',
      description: 'Dashboard intuitivo com todas as métricas e indicadores que você precisa para tomar decisões estratégicas.',
      benefits: [
        'Relatórios em tempo real',
        'Análise de ROI por campanha',
        'Métricas de satisfação do paciente'
      ]
    },
    {
      icon: '🚀',
      title: 'Suporte e Consultoria',
      description: 'Time especializado em clínicas odontológicas estéticas para garantir seu sucesso digital.',
      benefits: [
        'Consultoria estratégica mensal',
        'Suporte técnico dedicado',
        'Treinamento para sua equipe'
      ]
    }
  ];

  return (
    <section id="solucao" className="bg-purple-950 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Conheça o Ecossistema Digital Eucalyptus
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sistema completo que integra automação, marketing e gestão para transformar sua clínica em uma máquina de vendas digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-purple-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 text-3xl text-white">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="text-gray-300 opacity-80 flex items-start">
                    <span className="text-purple-400 mr-2 font-bold">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;