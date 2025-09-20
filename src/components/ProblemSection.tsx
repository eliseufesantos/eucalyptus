import React from 'react';

interface Problem {
  icon: string;
  title: string;
  description: string;
}

const ProblemSection: React.FC = () => {
  const problems: Problem[] = [
    {
      icon: '📉',
      title: 'Agenda Sempre Vazia',
      description: 'Dificuldade para atrair novos pacientes e manter a agenda lotada, dependendo apenas do boca a boca.'
    },
    {
      icon: '⏰',
      title: 'Tempo Perdido com Tarefas Manuais',
      description: 'Horas gastas com agendamentos, confirmações e tarefas administrativas que poderiam ser automatizadas.'
    },
    {
      icon: '💸',
      title: 'Marketing que não Converte',
      description: 'Investimento em marketing digital sem estratégia, gerando poucos leads qualificados e baixo ROI.'
    },
    {
      icon: '📱',
      title: 'Presença Digital Inexistente',
      description: 'Concorrência sempre um passo à frente no digital enquanto você fica para trás sem uma estratégia online.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-purple-950 mb-6">
          Sua clínica ainda enfrenta esses desafios?
        </h2>
        <p className="text-xl text-purple-950 opacity-80 mb-12 max-w-2xl mx-auto">
          A maioria das clínicas de harmonização facial perde milhares de reais todos os meses por não ter um sistema digital eficiente
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-700" />
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-purple-950 mb-4">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;