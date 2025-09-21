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
            🏆 Prova Social e Autoridade
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-abyssal mb-3 sm:mb-4 tracking-tight">
            O que os{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-metallic">
              clientes
            </span> estão dizendo
          </h2>
          
          <p className="text-base sm:text-lg text-abyssal/70 max-w-2xl mx-auto leading-relaxed">
            Resultados reais de clínicas que já transformaram seus negócios com o Eucalyptus
          </p>
        </div>

        {/* Estatísticas de Autoridade */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {trustStats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center border border-metallic/20">
              <div className="text-2xl sm:text-3xl font-bold text-electric mb-1">{stat.number}</div>
              <div className="text-xs sm:text-sm text-abyssal/70 font-medium">{stat.label}</div>
              <div className="text-lg mt-1">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-metallic/20">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-electric to-metallic rounded-full flex items-center justify-center text-xl text-white mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-abyssal text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-abyssal/70">{testimonial.clinic}</p>
                  <p className="text-xs text-electric font-semibold">{testimonial.specialty}</p>
                </div>
              </div>
              
              <div className="bg-electric/20 text-electric px-2 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                {testimonial.result}
              </div>
              
              <p className="text-abyssal/70 text-sm leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA de Prova Social */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-electric to-abyssal rounded-xl p-6 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Quer ser o próximo a ter esses resultados?
            </h3>
            <p className="text-base mb-4 opacity-90">
              Junte-se a centenas de clínicas que já transformaram seus negócios
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Quero%20ser%20o%20próximo%20a%20ter%20esses%20resultados%20com%20o%20Eucalyptus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-electric px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
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