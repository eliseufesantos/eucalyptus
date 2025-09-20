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

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-purple-950 mb-6">
          Resultados Comprovados
        </h2>
        <p className="text-xl text-purple-950 opacity-80 mb-12 max-w-2xl mx-auto">
          Números reais de clínicas que já transformaram seus negócios com o Eucalyptus
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {results.map((result, index) => (
            <div key={index} className="p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text mb-2">
                {result.number}
              </div>
              <div className="text-lg text-purple-950 opacity-80">{result.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;