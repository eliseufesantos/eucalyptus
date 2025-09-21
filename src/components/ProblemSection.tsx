import React from 'react';

interface Problem {
  icon: string;
  title: string;
  description: string;
}

const ProblemSection: React.FC = () => {
  const problems: Problem[] = [
    {
      icon: '😰',
      title: 'Dependência de Indicações',
      description: 'Sua clínica vive na incerteza, dependendo apenas do boca a boca para conseguir novos pacientes. Um mês bom, outro ruim.'
    },
    {
      icon: '💸',
      title: 'Gastos em Anúncios sem Retorno',
      description: 'Você investe em marketing digital, mas não vê resultados. Dinheiro jogado fora em campanhas que não convertem.'
    },
    {
      icon: '🤯',
      title: 'Sem Estrutura de Acompanhamento',
      description: 'Pacientes que não retornam, sem sistema de fidelização, perdendo oportunidades de vendas recorrentes.'
    },
    {
      icon: '⏰',
      title: 'Tempo Perdido com Tarefas Manuais',
      description: 'Horas preciosas gastas com agendamentos, confirmações e tarefas que poderiam ser automatizadas.'
    }
  ];

  return (
    <section className="bg-abyssal py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-24 h-24 bg-electric rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-metallic rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Pattern Interruption */}
        <div className="inline-flex items-center bg-electric/20 text-electric px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-electric/30">
          ⚠️ O problema não é você... é a forma ultrapassada de fazer marketing
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
          Você reconhece essas{' '}
          <span className="text-electric">dores</span> na sua clínica?
        </h2>
        
        <p className="text-base sm:text-lg text-mist mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          A maioria das clínicas de harmonização facial perde <strong>milhares de reais</strong> todos os meses 
          por não ter um sistema digital eficiente. Você não está sozinho nessa luta.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-abyssal/50 backdrop-blur-sm p-4 sm:p-5 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group border border-electric/20"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric to-metallic" />
              <div className="w-12 h-12 bg-electric/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xl group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{problem.title}</h3>
              <p className="text-xs sm:text-sm text-mist leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        
        {/* Transição para Oportunidade */}
        <div className="bg-metallic/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-metallic/20">
          <p className="text-lg font-semibold text-white mb-3">
            💡 Mas e se sua clínica pudesse funcionar como uma startup de crescimento acelerado?
          </p>
          <p className="text-mist text-sm leading-relaxed">
            Grandes empresas já usam <strong>IA + automações</strong> para escalar. 
            Enquanto isso, clínicas ainda fazem marketing manual e perdem oportunidades todos os dias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;