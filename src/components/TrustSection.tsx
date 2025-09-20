import React from 'react';

const TrustSection: React.FC = () => {
  const trustItems = [
    { icon: '🦷', text: '+150 Clínicas Atendidas' },
    { icon: '📈', text: '+300% Crescimento Médio' },
    { icon: '⚡', text: '80% Menos Tempo Administrativo' },
    { icon: '💰', text: 'R$ 2.3M+ Gerados' }
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-semibold text-purple-950 mb-8 opacity-80">
          Clínicas que já transformaram seus resultados:
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                {item.icon}
              </div>
              <span className="text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;