import React from 'react';

const TrustSection: React.FC = () => {
  const trustStats = [
    { number: '350+', label: 'Clientes turbinados', icon: '🦷' },
    { number: 'R$ 225M+', label: 'Faturamento gerado', icon: '💰' },
    { number: 'R$ 41M+', label: 'Investido em mídias', icon: '📊' },
    { number: '7.135+', label: 'Criativos produzidos', icon: '🎨' }
  ];

  const testimonials = [
    {
      name: 'Dr. André (Jui)',
      clinic: 'Clínica Jui',
      specialty: 'Harmonização Facial',
      result: '+300% agendamentos',
      testimonial: 'O Eucalyptus transformou completamente nossa clínica. Em 3 meses já tínhamos agenda lotada e fila de espera.',
      avatar: '👨‍⚕️'
    },
    {
      name: 'Dra. Juliana',
      clinic: 'Vertebra Mov',
      specialty: 'Odontologia Estética',
      result: '+200% faturamento',
      testimonial: 'Nunca imaginei que IA pudesse fazer tanta diferença no nosso negócio. Crescimento sustentável e previsível.',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Dr. Lucas',
      clinic: 'Solvee',
      specialty: 'Harmonização Facial',
      result: '-60% custo por lead',
      testimonial: 'O investimento se pagou em 2 meses. Agora temos um sistema que funciona 24/7 para nossa clínica.',
      avatar: '👨‍⚕️'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-accent/5 to-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pattern Interruption */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/30">
            🏆 Prova Social e Autoridade
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 tracking-tight">
            O que os{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              clientes
            </span> estão dizendo
          </h2>
          
          <p className="text-lg sm:text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Resultados reais de clínicas que já transformaram seus negócios com o Eucalyptus
          </p>
        </div>

        {/* Estatísticas de Autoridade */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {trustStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center border border-accent/20">
              <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">{stat.number}</div>
              <div className="text-sm sm:text-base text-primary/70 font-medium">{stat.label}</div>
              <div className="text-2xl mt-2">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-2xl text-white mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-primary/70">{testimonial.clinic}</p>
                  <p className="text-xs text-secondary font-semibold">{testimonial.specialty}</p>
                </div>
              </div>
              
              <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                {testimonial.result}
              </div>
              
              <p className="text-primary/70 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA de Prova Social */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Quer ser o próximo a ter esses resultados?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Junte-se a centenas de clínicas que já transformaram seus negócios
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Quero%20ser%20o%20próximo%20a%20ter%20esses%20resultados%20com%20o%20Eucalyptus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              💬 Quero ser o próximo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;