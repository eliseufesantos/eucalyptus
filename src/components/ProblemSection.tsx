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
    <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Pattern Interruption */}
        <div className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/30">
          ⚠️ O problema não é você... é a forma ultrapassada de fazer marketing
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 tracking-tight">
          Você reconhece essas{' '}
          <span className="text-secondary">dores</span> na sua clínica?
        </h2>
        
        <p className="text-lg sm:text-xl text-primary/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          A maioria das clínicas de harmonização facial perde <strong>milhares de reais</strong> todos os meses 
          por não ter um sistema digital eficiente. Você não está sozinho nessa luta.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group border border-accent/20"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent" />
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">{problem.title}</h3>
              <p className="text-sm sm:text-base text-primary/70 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        
        {/* Transição para Oportunidade */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-accent/20">
          <p className="text-xl font-semibold text-primary mb-4">
            💡 Mas e se sua clínica pudesse funcionar como uma startup de crescimento acelerado?
          </p>
          <p className="text-primary/70 leading-relaxed">
            Grandes empresas já usam <strong>IA + automações</strong> para escalar. 
            Enquanto isso, clínicas ainda fazem marketing manual e perdem oportunidades todos os dias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;