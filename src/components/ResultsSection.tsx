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
    <section className="bg-mist py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 bg-electric rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-metallic rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pattern Interruption */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-electric/20 text-electric px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-electric/30">
            🎯 Benefícios Tangíveis para sua Clínica
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-abyssal mb-3 sm:mb-4 tracking-tight">
            O que sua clínica{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-metallic">
              ganha
            </span> com o Eucalyptus
          </h2>
          
          <p className="text-base sm:text-lg text-abyssal/70 max-w-2xl mx-auto leading-relaxed">
            Resultados concretos e mensuráveis que transformam sua clínica em uma máquina de vendas digital
          </p>
        </div>

        {/* Estatísticas de Resultados */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {results.map((result, index) => (
            <div key={index} className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group border border-metallic/20">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-electric mb-1 group-hover:scale-110 transition-transform duration-300">
                {result.number}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-abyssal/70 font-medium">{result.label}</div>
            </div>
          ))}
        </div>

        {/* Benefícios Detalhados */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-metallic/20">
              <div className="w-12 h-12 bg-gradient-to-r from-electric to-metallic rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xl group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-abyssal mb-2 sm:mb-3 text-center">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-abyssal/70 leading-relaxed text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA dos Benefícios */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-electric to-abyssal rounded-xl p-6 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Pronto para ter esses benefícios na sua clínica?
            </h3>
            <p className="text-base mb-4 opacity-90">
              Transforme sua clínica em uma máquina de vendas digital
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Quero%20ter%20esses%20benefícios%20na%20minha%20clínica%20com%20o%20Eucalyptus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-electric px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
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