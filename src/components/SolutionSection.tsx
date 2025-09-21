import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

const SolutionSection: React.FC = () => {
  const opportunityStats = [
    { number: '300%', label: 'Aumento médio de consultas' },
    { number: '80%', label: 'Redução de tarefas manuais' },
    { number: 'R$ 50k+', label: 'Faturamento adicional mensal' },
    { number: '24/7', label: 'Agendamentos automáticos' }
  ];

  const comparisonData = [
    {
      title: 'Clínicas Tradicionais',
      icon: '😰',
      problems: [
        'Dependem apenas de indicações',
        'Marketing manual e ineficiente',
        'Agenda vazia nos finais de semana',
        'Sem sistema de fidelização'
      ],
      color: 'red'
    },
    {
      title: 'Clínicas com Eucalyptus',
      icon: '🚀',
      problems: [
        'Agenda sempre lotada com IA',
        'Marketing automatizado e inteligente',
        'Crescimento previsível e escalável',
        'Sistema completo de retenção'
      ],
      color: 'green'
    }
  ];

  return (
    <section id="solucao" className="bg-mist py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 bg-electric rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-metallic rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pattern Interruption */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-electric/20 text-electric px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-electric/30">
            💡 A revolução digital chegou às clínicas de harmonização facial
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-abyssal mb-3 sm:mb-4 tracking-tight">
            Enquanto sua concorrência ainda faz{' '}
            <span className="text-electric">marketing manual</span>,{' '}
            <span className="text-metallic">você pode escalar</span> com IA
          </h2>
          
          <p className="text-base sm:text-lg text-abyssal/70 max-w-2xl mx-auto leading-relaxed mb-6">
            Grandes empresas já usam <strong>inteligência artificial e automação</strong> para crescer exponencialmente. 
            Agora é a vez das clínicas de harmonização facial entrarem nessa revolução.
          </p>
        </div>

        {/* Estatísticas de Oportunidade */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {opportunityStats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 border border-metallic/20">
              <div className="text-2xl sm:text-3xl font-bold text-electric mb-1">{stat.number}</div>
              <div className="text-xs sm:text-sm text-abyssal/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Comparação Visual */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {comparisonData.map((item, index) => (
            <div key={index} className={`bg-white p-6 rounded-xl shadow-md border ${
              item.color === 'red' ? 'border-metallic/30' : 'border-electric/30'
            }`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl mr-3 ${
                  item.color === 'red' ? 'bg-metallic/20' : 'bg-electric/20'
                }`}>
                  {item.icon}
                </div>
                <h3 className={`text-lg font-bold ${
                  item.color === 'red' ? 'text-metallic' : 'text-electric'
                }`}>
                  {item.title}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {item.problems.map((problem, problemIndex) => (
                  <li key={problemIndex} className={`flex items-start text-sm ${
                    item.color === 'red' ? 'text-abyssal/70' : 'text-abyssal/70'
                  }`}>
                    <span className={`mr-2 font-bold ${
                      item.color === 'red' ? 'text-metallic' : 'text-electric'
                    }`}>
                      {item.color === 'red' ? '✗' : '✓'}
                    </span>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action da Oportunidade */}
        <div className="bg-gradient-to-r from-electric to-abyssal rounded-xl p-6 text-center text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Sua clínica pode ser a próxima a escalar no digital
          </h3>
          <p className="text-base mb-4 opacity-90">
            Não fique para trás enquanto sua concorrência cresce com tecnologia
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Quero%20transformar%20minha%20clínica%20com%20IA%20e%20automação"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-electric px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            💬 Quero escalar minha clínica agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;