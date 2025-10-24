import React, { useState } from 'react';
import { FileText, Users, Clock, Shield, Zap } from 'lucide-react';
import { FAQAccordion } from './Accordion';
import { redirectToExternalForm } from '../utils/externalForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const CTA: React.FC = () => {
  const sectionRef = useScrollAnimation(0.1, 'animate-on-scroll');
  const [openFAQ, setOpenFAQ] = useState<string>('');

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Como funciona o processo de implementação?",
      answer: "Começamos com um diagnóstico completo da sua clínica, identificando pontos de melhoria. Em seguida, implementamos o CRM personalizado, configuramos as automações e treinamos sua equipe. Todo o processo leva entre 30-45 dias.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      id: 2,
      question: "Qual o investimento necessário?",
      answer: "O investimento varia conforme o tamanho e necessidades da sua clínica. Oferecemos pacotes personalizados que incluem CRM, automações, landing pages e consultoria estratégica. Entre em contato para uma proposta personalizada.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 3,
      question: "Vocês oferecem suporte após a implementação?",
      answer: "Sim! Oferecemos suporte completo por 90 dias após a implementação, incluindo treinamentos adicionais, ajustes no sistema e consultoria estratégica contínua. Cada manutenção, após os 90 dias, é paga separadamente.",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 4,
      question: "A Eucalyptus é adequada para clínicas pequenas?",
      answer: "Absolutamente! Nossa solução é escalável e se adapta a clínicas de todos os tamanhos. Para clínicas menores, focamos em automações essenciais e CRM simplificado. Para clínicas maiores, oferecemos soluções mais robustas e personalizadas.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 5,
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados aparecem já nas primeiras semanas após a implementação, com melhor organização e automação de processos. Resultados mais significativos em conversão e retenção de pacientes são observados em 2-3 meses.",
      icon: <FileText className="w-5 h-5" />
    }
  ];

  const handleFAQChange = (value: string) => {
    setOpenFAQ(value);
  };

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-br from-cream via-cream/95 to-taupe/10 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #edd08c 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #b87353 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Main CTA Section */}
          <div className="mb-20 animate-on-scroll">
            <div className="text-center space-y-8">
              {/* Header */}
              <div className="space-y-6 animate-on-scroll delay-100">
                <h2 className="text-3xl md:text-5xl font-bold text-charcoal">
                  Você já tem excelência e pacientes.
                </h2>
                <p className="text-2xl text-terracotta font-semibold">
                  Agora é hora de ter estrutura.
                </p>
              </div>

              {/* CTA Content */}
              <div className="space-y-8 animate-on-scroll delay-200">
                {/* macOS Glass Window */}
                <div className="relative max-w-4xl mx-auto">
                  <div className="relative bg-gradient-to-br from-charcoal/95 via-charcoal to-slate-900/90 rounded-3xl shadow-3xl overflow-hidden border border-gold/20">

                    {/* macOS Title Bar */}
                    <div className="relative bg-gradient-to-r from-charcoal/80 to-slate-800/80 backdrop-blur-xl px-6 py-4 flex items-center space-x-3 border-b border-gold/20">
                      {/* Traffic Light Buttons (macOS reference - allowed) */}
                      <div className="flex space-x-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg ring-1 ring-red-400/30"></div>
                        <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg ring-1 ring-yellow-400/30"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg ring-1 ring-green-400/30"></div>
                      </div>
                      <div className="flex-1"></div>
                    </div>

                    {/* Window Content */}
                    <div className="relative p-8 lg:p-12">
                      <div className="text-center space-y-10">
                        <div className="animate-on-scroll delay-300">
                          <p className="text-2xl lg:text-3xl font-semibold leading-relaxed text-cream max-w-4xl mx-auto">
                            Responda ao nosso formulário e se prepare para crescer com inteligência e leveza.
                          </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6 animate-on-scroll delay-400">
                          <button
                            onClick={redirectToExternalForm}
                            className="group relative bg-gradient-to-r from-terracotta to-gold text-cream px-12 lg:px-20 py-6 lg:py-7 rounded-full text-xl font-bold shadow-3xl border border-gold/30 hover-lift transition-smooth focus:outline-none focus:ring-4 focus:ring-gold/30"
                          >
                            <span className="relative z-10 flex items-center gap-4">
                              Preencher Formulário
                            </span>
                          </button>
                        </div>

                        <div className="animate-on-scroll delay-500">
                          <p className="text-lg text-gold/90 italic max-w-3xl mx-auto font-medium">
                            Se for o momento certo, nossa equipe entrará em contato
                            para um diagnóstico gratuito e personalizado.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16 animate-on-scroll delay-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Perguntas Frequentes
              </h3>
              <p className="text-lg text-taupe max-w-2xl mx-auto">
                Tire suas dúvidas sobre como a Eucalyptus pode transformar sua clínica
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-on-scroll delay-300">
              <FAQAccordion
                items={faqData}
                value={openFAQ}
                onValueChange={handleFAQChange}
                className="space-y-4"
              />
            </div>
          </div>

          {/* Bottom Visual Element */}
          <div className="text-center animate-on-scroll delay-400">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 to-gold/20 blur-3xl rounded-3xl" />
              <div className="relative glass-card-light rounded-2xl p-8 lg:p-10 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <img
                    src="/assets/eucalyptus-logo-padrao.svg"
                    alt="Eucalyptus Logo"
                    className="w-12 h-12"
                    loading="lazy"
                  />
                  <h4 className="text-2xl font-bold text-charcoal">Eucalyptus</h4>
                </div>
                <p className="text-lg text-taupe">
                  A inteligência que sua clínica precisa para crescer com leveza.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative elements - static */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-gold/10 to-terracotta/10 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-terracotta/10 to-gold/10 rounded-full blur-2xl opacity-40" />
    </section>
  );
};

export default CTA;
