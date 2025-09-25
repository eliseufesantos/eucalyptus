import React from 'react';

interface CTAProps {
  onOpenForm: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenForm }) => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-cream to-gold/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6 animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal">
              Você já tem excelência e pacientes.
            </h2>
            <p className="text-2xl text-terracotta font-semibold animate-fadeInUp animation-delay-200">
              Agora é hora de ter estrutura.
            </p>
          </div>

          {/* CTA Content */}
          <div className="space-y-8 animate-fadeInUp animation-delay-400">
            <p className="text-xl text-taupe leading-relaxed">
              Responda ao nosso formulário de pré-diagnóstico e descubra 
              se sua clínica está pronta para crescer com inteligência e leveza.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={onOpenForm}
                className="group relative bg-terracotta text-cream px-10 py-5 rounded-full text-lg font-semibold hover:bg-terracotta/90 transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl">
                <span className="relative z-10">Preencher Formulário de Diagnóstico</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold to-terracotta rounded-full opacity-0 group-hover:opacity-30 transition-opacity" />
              </button>
            </div>

            <p className="text-sm text-taupe/80 italic animate-fadeInUp animation-delay-600">
              Se for o momento certo, nossa equipe entrará em contato 
              para um diagnóstico gratuito e personalizado.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative mt-16 animate-fadeInUp animation-delay-800">
            <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 to-gold/20 blur-3xl" />
            <div className="relative bg-charcoal text-cream rounded-2xl p-8 lg:p-10">
              <p className="text-2xl font-bold mb-2">Eucalyptus</p>
              <p className="text-lg opacity-90">
                A inteligência que sua clínica precisa para crescer com leveza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;