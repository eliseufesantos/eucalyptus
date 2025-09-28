import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PremiumAccordion } from './Accordion';

const Authority: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Testimonials data
  const testimonials = [
    {
      name: "Dr. Maria Silva",
      clinic: "Clínica Estética Premium",
      text: "A Eucalyptus revolucionou completamente nossa gestão. Em 3 meses, aumentamos nossa eficiência em 60% e nossos clientes estão muito mais satisfeitos.",
      rating: 5
    },
    {
      name: "Dr. Carlos Mendes",
      clinic: "Instituto de Beleza & Saúde",
      text: "Finalmente encontramos uma solução que realmente funciona. Os processos automatizados nos permitiram focar no que realmente importa: nossos pacientes.",
      rating: 5
    },
    {
      name: "Dra. Ana Costa",
      clinic: "Clínica de Estética Avançada",
      text: "A implementação foi impecável. A equipe da Eucalyptus nos acompanhou em cada passo e os resultados superaram todas as expectativas.",
      rating: 5
    },
    {
      name: "Dr. Roberto Lima",
      clinic: "Centro de Excelência Estética",
      text: "Nossa produtividade triplicou desde que implementamos o sistema. É impressionante como tudo funciona de forma integrada e inteligente.",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="about" className="relative py-32 lg:py-40 bg-gradient-to-br from-charcoal via-charcoal to-slate-800 text-cream">

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: window.innerWidth < 768 ? 0.4 : 0.8 
              }}
              className="space-y-6"
            >
              
              <motion.h2 
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cream via-gold to-cream bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: window.innerWidth < 768 ? 0.5 : 1, 
                  delay: window.innerWidth < 768 ? 0.1 : 0.2, 
                  ease: "easeOut" 
                }}
              >
                Autoridade e Exclusividade
              </motion.h2>
              
              <motion.div 
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div 
                  className="w-16 h-px bg-gradient-to-r from-transparent to-gold"
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.div 
                  className="w-3 h-3 bg-gold rounded-full rotate-45"
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 45 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
                />
                <motion.div 
                  className="w-16 h-px bg-gradient-to-l from-transparent to-gold"
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </motion.div>
              
            </motion.div>

            {/* Main Content */}
            <motion.div 
              className="space-y-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p 
                className="text-xl lg:text-2xl leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Na Eucalyptus, trabalhamos com{' '}
                <motion.span 
                  className="text-gold font-semibold bg-gold/10 px-2 py-1 rounded"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 150 }}
                >
                  poucas clínicas por vez
                </motion.span>.
              </motion.p>
              
              <motion.p 
                className="text-lg lg:text-xl text-cream/80 leading-relaxed font-light max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Isso significa que cada projeto recebe atenção personalizada, 
                com setup exclusivo e acompanhamento estratégico.
              </motion.p>
            </motion.div>
          </div>

          {/* Testimonials Carousel */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h3 
                className="text-2xl lg:text-3xl font-bold text-gold mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Depoimentos de Nossos Clientes
              </motion.h3>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Testimonial Card */}
              <div className="relative">
                {/* Luxury Background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-gold/10 via-cream/5 to-terracotta/10 rounded-3xl blur-xl"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Glass Effect - Dark Frosted */}
                <div className="relative bg-gradient-to-br from-charcoal/40 via-charcoal/60 to-charcoal/40 backdrop-blur-xl border border-charcoal/30 rounded-3xl p-8 lg:p-12 shadow-2xl">
                  {/* Glass texture overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 rounded-3xl pointer-events-none" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="relative text-center space-y-6 z-10"
                    >
                      {/* Quote Icon */}
                      <div className="text-6xl text-gold/30 font-serif">"</div>
                      
                      {/* Testimonial Text */}
                      <p className="text-lg lg:text-xl text-cream/95 leading-relaxed font-light italic max-w-3xl mx-auto">
                        {testimonials[currentTestimonial].text}
                      </p>
                      
                      {/* Rating */}
                      <div className="flex justify-center gap-1">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                            className="text-gold text-xl"
                          >
                            ★
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Author */}
                      <div className="pt-4 border-t border-gold/30">
                        <h4 className="text-xl font-semibold text-gold">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-cream/80 font-light">
                          {testimonials[currentTestimonial].clinic}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentTestimonial 
                        ? 'bg-gold scale-125' 
                        : 'bg-gold/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>


          {/* Premium Membership Accordion */}
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Section Header */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h3 
                className="text-2xl lg:text-3xl font-bold text-gold mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Junte-se ao Grupo Exclusivo
              </motion.h3>
              <motion.p 
                className="text-cream/70 font-light max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Seja uma das primeiras clínicas a experimentar nossa nova abordagem de automação inteligente
              </motion.p>
            </motion.div>

            {/* Premium Accordion */}
            <PremiumAccordion
              isExpanded={isExpanded}
              onToggle={toggleExpansion}
              title="Condição exclusiva para clínicas pioneiras"
              subtitle="Participe do grupo que está moldando o futuro das clínicas inteligentes."
              badge="EXCLUSIVO"
              className="relative"
            >
              <p className="text-base text-charcoal leading-relaxed mb-8 text-center font-medium drop-shadow-sm">
                Torne-se um dos primeiros cases da Eucalyptus e tenha acesso a vantagens especiais na validação do nosso novo modelo.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <motion.div 
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: 'linear-gradient(145deg, #f4e4bc, #d4c4a8)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-terracotta rounded-full flex items-center justify-center text-cream text-xl font-bold shadow-lg flex-shrink-0">
                      🎯
                    </div>
                    <span className="text-charcoal font-semibold">Condições comerciais diferenciadas</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: 'linear-gradient(145deg, #f4e4bc, #d4c4a8)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-terracotta rounded-full flex items-center justify-center text-cream text-xl font-bold shadow-lg flex-shrink-0">
                      🚀
                    </div>
                    <span className="text-charcoal font-semibold">Acesso antecipado a melhorias e integrações</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: 'linear-gradient(145deg, #f4e4bc, #d4c4a8)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-terracotta rounded-full flex items-center justify-center text-cream text-xl font-bold shadow-lg flex-shrink-0">
                      ✨
                    </div>
                    <span className="text-charcoal font-semibold">Destaque nos nossos materiais e apresentações</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: 'linear-gradient(145deg, #f4e4bc, #d4c4a8)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-terracotta rounded-full flex items-center justify-center text-cream text-xl font-bold shadow-lg flex-shrink-0">
                      📣
                    </div>
                    <span className="text-charcoal font-semibold">Consultoria estratégica bônus</span>
                  </motion.div>
                </div>

                {/* Call to Action */}
                  <motion.div 
                    className="text-center p-6 rounded-xl"
                    style={{
                      background: 'linear-gradient(145deg, #f4e4bc, #d4c4a8)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
                    }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <p className="text-sm text-charcoal font-bold mb-2">
                    Vagas limitadas • Aplicação sujeita à aprovação
                  </p>
                    <p className="text-xs text-charcoal font-medium">
                      Entre em contato conosco para saber mais sobre as condições especiais
                    </p>
                  </motion.div>
            </PremiumAccordion>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Authority;