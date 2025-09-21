import React from 'react';

interface Result {
  number: string;
  label: string;
}

const ResultsSection: React.FC = () => {
  const results: Result[] = [
    { number: '+300%', label: 'Aumento em Agendamentos' },
    { number: '187%', label: 'Crescimento em Faturamento' },
    { number: '4.8/5', label: 'Satisfação dos Pacientes' },
    { number: '80%', label: 'Redução de Tempo Administrativo' }
  ];

  const benefits = [
    {
      icon: '📅',
      title: 'Mais Pacientes Agendados Automaticamente',
      description: 'Sistema inteligente que preenche sua agenda 24/7, sem depender de indicações'
    },
    {
      icon: '💰',
      title: 'Custo de Aquisição Mais Baixo',
      description: 'Marketing automatizado que reduz o custo por lead em até 60%'
    },
    {
      icon: '🏆',
      title: 'Diferenciação da Concorrência',
      description: 'Tecnologia de ponta que coloca sua clínica anos à frente da concorrência'
    },
    {
      icon: '📈',
      title: 'Previsibilidade de Crescimento',
      description: 'Crescimento sustentável e previsível com métricas em tempo real'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-accent/5 to-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pattern Interruption */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/30">
            🎯 Benefícios Tangíveis para sua Clínica
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 tracking-tight">
            O que sua clínica{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              ganha
            </span> com o Eucalyptus
          </h2>
          
          <p className="text-lg sm:text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Resultados concretos e mensuráveis que transformam sua clínica em uma máquina de vendas digital
          </p>
        </div>

        {/* Estatísticas de Resultados */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {results.map((result, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-accent/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
                {result.number}
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-primary/70 font-medium">{result.label}</div>
            </div>
          ))}
        </div>

        {/* Benefícios Detalhados */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-accent/20">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 text-center">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-primary/70 leading-relaxed text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA dos Benefícios */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Pronto para ter esses benefícios na sua clínica?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Transforme sua clínica em uma máquina de vendas digital
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Quero%20ter%20esses%20benefícios%20na%20minha%20clínica%20com%20o%20Eucalyptus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              💬 Quero esses benefícios agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;