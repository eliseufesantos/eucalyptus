import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, GraduationCap, BarChart3, ChevronDown } from 'lucide-react';

const Benefits: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  

  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Estratégico',
      shortDescription: 'Analisamos sua rotina e gargalos',
      fullDescription: 'Analisamos sua rotina, funil de atendimento, canais de entrada e os gargalos que você muitas vezes nem percebe. Você começa a enxergar com clareza onde está perdendo tempo, energia e oportunidades de crescimento.',
      benefit: 'Uma visão prática e estratégica — sem achismos, só o que realmente precisa ser ajustado para sua clínica evoluir.',
      icon: Search,
      color: 'from-charcoal to-charcoal/80'
    },
    {
      number: '02',
      title: 'Setup do Ecossistema',
      shortDescription: 'Configuramos CRM e automações',
      fullDescription: 'Configuramos o seu CRM Kommo com automações sob medida, fluxos de atendimento otimizados e formulários inteligentes que já filtram os leads certos. Se necessário, também criamos landing pages e funis personalizados para captação e qualificação — tudo integrado aos seus canais atuais: WhatsApp, Instagram, site e mais.',
      benefit: 'Mais organização, menos tarefas manuais e uma jornada digital fluida do lead ao agendamento.',
      icon: Settings,
      color: 'from-terracotta to-terracotta/80'
    },
    {
      number: '03',
      title: 'Treinamento + IA',
      shortDescription: 'Equipe treinada e inteligente',
      fullDescription: 'Sua equipe aprende, na prática, como operar o sistema com leveza, eficiência e segurança. E você ainda recebe aulas práticas sobre como aplicar Inteligência Artificial na rotina da sua clínica, para elevar o nível da operação e tomar decisões com mais autonomia.',
      benefit: 'Um time mais confiante, uma operação mais previsível — e você no controle de uma estrutura moderna e inteligente.',
      icon: GraduationCap,
      color: 'from-gold to-gold/80'
    },
    {
      number: '04',
      title: 'Monitoramento Contínuo',
      shortDescription: 'Acompanhamento e consultorias',
      fullDescription: 'Você passa a acompanhar tudo por dashboards e relatórios claros. Seguimos do seu lado com acompanhamento contínuo e consultorias especializadas, incluindo orientação em marketing, social media e fotografia — para fortalecer também sua imagem e posicionamento no digital.',
      benefit: 'Crescimento sustentável, presença digital mais forte e evolução contínua, dentro e fora da operação.',
      icon: BarChart3,
      color: 'from-taupe to-taupe/80'
    }
  ];

  const toggleStep = useCallback((index: number) => {
    // Garante que apenas um card esteja ativo por vez
    setActiveStep(prevActiveStep => {
      // Se o card clicado já está ativo, fecha ele
      if (prevActiveStep === index) {
        return null;
      }
      // Caso contrário, abre apenas o card clicado (fecha qualquer outro)
      return index;
    });
  }, []);

  return (
    <section id="benefits" className="relative py-24 lg:py-32 bg-gradient-to-br from-cream via-cream/95 to-taupe/10" style={{ overflow: 'visible', clipPath: 'none' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, theme('colors.gold') 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, theme('colors.terracotta') 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }} />
      </div>
      
      {/* Floating Elements - Static to prevent flickering */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-gold/10 to-terracotta/10 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-terracotta/10 to-gold/10 rounded-full blur-2xl opacity-40" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-taupe/10 to-charcoal/10 rounded-full blur-xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10" style={{ overflow: 'visible' }}>
        <div className="max-w-6xl mx-auto" style={{ overflow: 'visible' }}>
          {/* Header */}
          <motion.div 
            className="text-center mb-20 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-charcoal cursor-default">
              Como Funciona?
            </h2>
            <motion.p 
              className="text-lg sm:text-xl text-taupe max-w-2xl mx-auto cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Nosso processo em 4 etapas estratégicas para transformar sua clínica
            </motion.p>
          </motion.div>

          {/* Steps Grid - Responsive Layout */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 pt-6 md:pt-8 px-2 md:px-4 pb-4" 
            style={{ 
              alignItems: 'start',
              gridAutoRows: 'min-content'
            }}
          >
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;
              
              // Garante que apenas o card ativo seja renderizado com conteúdo
              const shouldRenderContent = isActive;
              
              return (
                <div key={index} className="relative">
                  {/* Step Number Badge - Outside Card Container */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-cream font-bold text-lg shadow-lg z-10`}>
                    {step.number}
                  </div>
                  
                  <motion.div
                    className="group relative glass-card rounded-3xl overflow-hidden shadow-premium border-2"
                    style={{ 
                      alignSelf: 'start'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: isClient && window.innerWidth < 768 ? 0.4 : 0.8, 
                      delay: isClient && window.innerWidth < 768 ? index * 0.1 : index * 0.15,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -4,
                      boxShadow: "0 12px 48px 0 rgba(229, 207, 176, 0.5), 0 4px 8px -2px rgba(229, 207, 176, 0.4), 0 32px 64px -16px rgba(229, 207, 176, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.5)",
                      borderColor: "rgba(229, 207, 176, 0.8)",
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >

                  {/* Clickable Header */}
                  <button
                    className={`w-full p-6 md:p-8 text-left ${
                      isActive 
                        ? 'bg-gradient-to-r from-gold/10 to-terracotta/10' 
                        : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleStep(index);
                    }}
                    role="button"
                    aria-expanded={isActive}
                    aria-controls={`step-content-${index}`}
                    id={`step-trigger-${index}`}
                    type="button"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {/* Icon */}
                          <div 
                            className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 md:mb-6`}
                          >
                            <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-cream" />
                          </div>

                          {/* Title */}
                          <h3 
                            className="text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3 leading-tight"
                          >
                            {step.title}
                          </h3>

                          {/* Short Description */}
                          <p 
                            className="text-taupe text-sm leading-relaxed mb-3 md:mb-4"
                          >
                            {step.shortDescription}
                          </p>

                        {/* Expand/Collapse Indicator */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-taupe/70 font-medium">
                            {isActive ? 'Ver menos' : 'Ver detalhes'}
                          </span>
                          <motion.div
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-taupe/60"
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expandable Content - Only render when active */}
                  {shouldRenderContent && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                          duration: isClient && window.innerWidth < 768 ? 0.4 : 0.8, 
                          ease: "easeOut"
                        }}
                      className="overflow-hidden"
                      role="region"
                      id={`step-content-${index}`}
                      aria-labelledby={`step-trigger-${index}`}
                      aria-hidden={false}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                        <div className="border-t border-taupe/20 pt-4 md:pt-6 space-y-4 md:space-y-6">
                            <div>
                              <h4 className="text-sm font-semibold text-charcoal mb-3">O que fazemos:</h4>
                              <p className="text-taupe text-sm leading-relaxed">
                                {step.fullDescription}
                              </p>
                            </div>
                            <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-4 rounded-xl border border-gold/20">
                            <h4 className="text-sm font-semibold text-charcoal mb-2 flex items-center">
                              <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                              Benefício:
                            </h4>
                            <p className="text-charcoal/80 text-sm leading-relaxed">
                              {step.benefit}
                            </p>
                            </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
                </div>
              );
            })}
          </div>

          {/* Bottom Message */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: isClient && window.innerWidth < 768 ? 0.4 : 0.8, 
              delay: isClient && window.innerWidth < 768 ? 0.3 : 0.6,
              ease: "easeOut"
            }}
          >
            <div className="inline-block glass-dark text-cream px-6 md:px-12 py-6 md:py-8 rounded-3xl shadow-2xl cursor-default">
              <p className="text-lg md:text-2xl font-semibold mb-2">
                Tudo com acompanhamento consultivo
              </p>
              <p className="text-base md:text-lg opacity-90">
                Linguagem acessível e foco na leveza da sua experiência
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;