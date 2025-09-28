import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { redirectToExternalForm } from '../utils/externalForm';

const PainSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showTrailLine, setShowTrailLine] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  const trailSteps = [
    {
      id: 1,
      title: "O Começo Promissor",
      subtitle: "Você fez tudo certo: estudou, investiu, montou um espaço com carinho",
      description: "Sua clínica começou a atrair pacientes, o movimento cresceu e os elogios chegaram. Parecia que o sucesso tinha finalmente chegado.",
      image: "/assets/esteticista-aplicando-injecao-de-preenchimento-para-cliente.jpg", // Profissional em ação
      pain: null,
      color: "from-gold/20 to-terracotta/20",
      bgColor: "bg-gradient-to-br from-gold/10 to-terracotta/10"
    },
    {
      id: 2,
      title: "Os Sinais de Alerta",
      subtitle: "Com o aumento da demanda, surgem os primeiros ruídos",
      description: "Mensagens se acumulam, leads somem sem resposta, a equipe se atropela no atendimento. Você tenta resolver com planilhas, lembretes, jeitinhos.",
      image: "/assets/muitos-clientes-midias-sociais.webp", // Muitos clientes/mensagens acumuladas
      pain: null,
      color: "from-yellow-500/20 to-orange-500/20",
      bgColor: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10"
    },
    {
      id: 3,
      title: "O Caos Invisível",
      subtitle: "Quanto mais pacientes chegam, mais você se sente fora do controle",
      description: "As tarefas se multiplicam, a rotina vira incêndio atrás de incêndio. E o pior: ninguém vê de fora. Só você sente o peso. A dúvida aparece: \"Será que só comigo é assim?\"",
      image: "/assets/mulher-de-negocios-sobrecarregada.jpg", // Profissional sobrecarregada
      pain: null,
      color: "from-orange-500/20 to-red-500/20",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10"
    },
    {
      id: 4,
      title: "A Descoberta...",
      subtitle: "Você percebe que o problema não é falta de esforço, e sim de estrutura",
      description: "Falta um sistema. Uma inteligência nos bastidores. Algo que organize tudo — para que você possa liderar com leveza, não com sobrecarga.",
      image: "/assets/mulher-segurando-lampada-ideia.webp", // Ideia/realização - lâmpada da criatividade
      pain: null,
      color: "from-blue-500/20 to-purple-500/20",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const steps = document.querySelectorAll('.trail-step');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Control when trail line appears - when first card is visible with a small delay
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowTrailLine(true);
      }, 1500); // 1.5 second delay - enough time for first card to appear

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      id="pain-section"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #2c2c2c 0%, #5a5a5a 20%, #8b7d6b 40%, #d4c4a8 60%, #e8dcc6 80%, #f5f3f0 100%)'
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 animate-gradient-wave"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(229, 207, 176, 0.3) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, rgba(212, 196, 168, 0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            backgroundPosition: '0 0, 40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Title */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: window.innerWidth < 768 ? 0.4 : 0.8, 
              ease: "easeOut" 
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
              Você já passou por{' '}
              <span className="text-gold">isso?</span>
            </h2>
            <div className="text-xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
              <p>Uma sequência silenciosa que muitos profissionais da estética vivem.</p>
              <p className="text-gold font-semibold">Mas poucos falam sobre.</p>
            </div>
          </motion.div>

          {/* Trail Container */}
          <div className="relative">
            {/* Central Trail Line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold/30 via-terracotta/20 to-charcoal/30 rounded-full"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={showTrailLine ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
              transition={{ 
                duration: window.innerWidth < 768 ? 2.0 : 1.2, 
                ease: "easeOut" 
              }}
              style={{ transformOrigin: "top" }}
            />
            
            {/* Trail Steps */}
            <div className="space-y-24">
              {trailSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`trail-step relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-12`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                    delay: window.innerWidth < 768 ? index * 0.1 : index * 0.15, 
                    ease: "easeOut" 
                  }}
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg ${
                        index <= activeStep 
                          ? 'bg-gradient-to-br from-gold to-terracotta text-cream' 
                          : 'bg-cream/20 text-cream/60'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.id}
                    </motion.div>
                    
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="flex-1 max-w-2xl glass-dark rounded-2xl p-8 shadow-premium"
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Text Content */}
                      <div className={`space-y-4 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <motion.div
                          initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                            delay: window.innerWidth < 768 ? 0.1 : 0.2, 
                            ease: "easeOut" 
                          }}
                        >
                          <h3 className="text-2xl lg:text-3xl font-bold text-cream mb-3">
                            {step.title}
                          </h3>
                          <p className="text-lg text-gold font-semibold mb-3">
                            {step.subtitle}
                          </p>
                          <p className="text-base text-cream/80 leading-relaxed">
                            {step.description}
                          </p>
                        </motion.div>

                      </div>

                      {/* Image Content */}
                      <motion.div
                        className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                          delay: window.innerWidth < 768 ? 0.15 : 0.3, 
                          ease: "easeOut" 
                        }}
                      >
                        <div className="relative group">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-64 rounded-xl object-cover shadow-lg"
                          />
                          
                          {/* Hover Effect */}
                          <motion.div 
                            className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/20 to-terracotta/20 opacity-0"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bridge Section - Perfectly centered between pain and solution */}
          <div className="relative">
            {/* Dotted line connecting from last pain card to CTA */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-32 sm:h-40 md:h-44"
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: window.innerWidth < 768 ? 0.8 : 1.0, 
                delay: window.innerWidth < 768 ? 0.5 : 1.0 
              }}
              style={{ 
                transformOrigin: "top",
                background: "repeating-linear-gradient(to bottom, rgba(128, 128, 128, 1) 0px, rgba(128, 128, 128, 1) 8px, transparent 8px, transparent 16px)"
              }}
            />
            
            <motion.div 
              className="flex justify-center min-h-[50vh] relative z-10"
              style={{ alignItems: 'flex-end', paddingBottom: '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: window.innerWidth < 768 ? 0.25 : 0.5, 
                duration: window.innerWidth < 768 ? 0.4 : 0.8 
              }}
            >
              <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto px-4 sm:px-0">
                <motion.div
                  className="bg-gradient-to-br from-charcoal/80 to-slate-800/80 border border-gold/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      "0 10px 25px rgba(0, 0, 0, 0.3)",
                      "0 15px 35px rgba(229, 207, 176, 0.2)",
                      "0 10px 25px rgba(0, 0, 0, 0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <p className="text-base sm:text-lg lg:text-xl font-bold text-cream mb-4 sm:mb-6 leading-relaxed">
                    E se existisse uma forma de{' '}
                    <span className="text-gold">organizar tudo isso</span>?
                  </p>
                  
                  <div className="flex justify-center">
                    <motion.button
                      onClick={redirectToExternalForm}
                      className="bg-gradient-to-r from-gold to-terracotta text-cream px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base shadow-lg mb-3 sm:mb-4 w-full max-w-xs"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Faça Sua Avaliação Gratuita
                    </motion.button>
                  </div>
                  
                  {/* Time indicator below button */}
                  <div className="flex items-center justify-center gap-1 sm:gap-2 text-gold/80 text-xs sm:text-sm">
                    <svg 
                      className="w-3 h-3 sm:w-4 sm:h-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                    </svg>
                    <span className="font-medium">menos de 50 seg</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default PainSection;