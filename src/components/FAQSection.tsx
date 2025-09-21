import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Preciso entender de tecnologia para aplicar?',
      answer: 'Não! Nosso método foi desenvolvido para ser simples e intuitivo. Nós fazemos toda a implementação técnica e treinamos sua equipe para usar o sistema. Você só precisa focar no que faz de melhor: cuidar dos seus pacientes.'
    },
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'Os primeiros resultados aparecem em 30-60 dias, com aumento significativo de agendamentos. Em 90 dias, você já terá um sistema rodando de forma autônoma, gerando leads e pacientes automaticamente.'
    },
    {
      question: 'Funciona só para harmonização facial ou para toda odontologia estética?',
      answer: 'Nosso sistema foi desenvolvido especificamente para clínicas de harmonização facial, mas pode ser adaptado para outras especialidades da odontologia estética como implantes, clareamento, ortodontia, etc.'
    },
    {
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Sim! Se por qualquer motivo você não estiver 100% satisfeito com nosso serviço, basta solicitar o cancelamento do contrato em 30 dias. Sem burocracias, sem complicações.'
    },
    {
      question: 'Vocês garantem resultado?',
      answer: 'Garantimos um serviço de alta qualidade e suporte completo. O resultado é consequência do nosso trabalho dedicado. Já ajudamos empreendedores a escalar em mais de 10x o faturamento, e você pode ser o próximo.'
    },
    {
      question: 'Quanto devo investir em tráfego?',
      answer: 'Recomendamos um investimento mínimo de R$ 60 por dia para os testes iniciais. À medida que você for obtendo resultados, pode aumentar o investimento mensal. Nós otimizamos cada real investido para maximizar o retorno.'
    },
    {
      question: 'Vocês fazem site também?',
      answer: 'Sim! Temos um time completo de UX Writing, UI Design e Desenvolvimento que cria sites e landing pages de alta conversão, especificamente otimizados para clínicas de harmonização facial.'
    },
    {
      question: 'Como funciona o suporte?',
      answer: 'Oferecemos suporte técnico dedicado via WhatsApp, e-mail e telefone. Além disso, incluímos consultoria estratégica mensal para garantir que você esteja sempre no caminho certo para o crescimento.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pattern Interruption */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ❓ Dúvidas Frequentes
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 tracking-tight">
            Quebrando{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              objeções
            </span> comuns
          </h2>
          
          <p className="text-lg sm:text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
            As perguntas mais comuns que recebemos de dentistas e donos de clínicas
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-primary pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Fale diretamente com nossos especialistas e tire todas as suas dúvidas
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Tenho%20dúvidas%20sobre%20o%20Eucalyptus%20e%20gostaria%20de%20falar%20com%20um%20especialista"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              💬 Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
