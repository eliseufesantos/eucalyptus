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
    <section id="solucao" className="bg-gradient-to-br from-accent/10 to-tertiary/20 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pattern Interruption */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/30">
            💡 A revolução digital chegou às clínicas de harmonização facial
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 tracking-tight">
            Enquanto sua concorrência ainda faz{' '}
            <span className="text-secondary">marketing manual</span>,{' '}
            <span className="text-accent">você pode escalar</span> com IA
          </h2>
          
          <p className="text-lg sm:text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Grandes empresas já usam <strong>inteligência artificial e automação</strong> para crescer exponencialmente. 
            Agora é a vez das clínicas de harmonização facial entrarem nessa revolução.
          </p>
        </div>

        {/* Estatísticas de Oportunidade */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {opportunityStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-accent/20">
              <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">{stat.number}</div>
              <div className="text-sm sm:text-base text-primary/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Comparação Visual */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {comparisonData.map((item, index) => (
            <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${
              item.color === 'red' ? 'border-accent/30' : 'border-secondary/30'
            }`}>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4 ${
                  item.color === 'red' ? 'bg-accent/20' : 'bg-secondary/20'
                }`}>
                  {item.icon}
                </div>
                <h3 className={`text-2xl font-bold ${
                  item.color === 'red' ? 'text-accent' : 'text-secondary'
                }`}>
                  {item.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {item.problems.map((problem, problemIndex) => (
                  <li key={problemIndex} className={`flex items-start ${
                    item.color === 'red' ? 'text-primary/70' : 'text-primary/70'
                  }`}>
                    <span className={`mr-3 font-bold ${
                      item.color === 'red' ? 'text-accent' : 'text-secondary'
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
        <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Sua clínica pode ser a próxima a escalar no digital
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Não fique para trás enquanto sua concorrência cresce com tecnologia
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Quero%20transformar%20minha%20clínica%20com%20IA%20e%20automação"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            💬 Quero escalar minha clínica agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;