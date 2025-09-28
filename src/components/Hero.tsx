import React from 'react';
import { motion } from 'framer-motion';
import { ProjectIcons } from '../utils/icons';
import { redirectToExternalForm } from '../utils/externalForm';

const Hero: React.FC = () => {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="relative min-h-screen bg-gradient-to-br from-cream via-cream/95 to-taupe/10 flex items-center justify-center pt-24 pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, theme('colors.gold') 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, theme('colors.terracotta') 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }} />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Main Heading */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: window.innerWidth < 768 ? 0.4 : 0.8, 
              ease: "easeOut" 
            }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-[1.1] tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
            >
              <motion.span 
                className="block font-extralight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                  delay: window.innerWidth < 768 ? 0.1 : 0.2 
                }}
              >
                Sua clínica já encanta.
              </motion.span>
              <motion.span 
                className="block font-medium text-terracotta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                  delay: window.innerWidth < 768 ? 0.2 : 0.4 
                }}
              >
                Agora é hora de crescer com inteligência.
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Subheading */}
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: window.innerWidth < 768 ? 0.4 : 0.8, 
              delay: window.innerWidth < 768 ? 0.3 : 0.6 
            }}
          >
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-charcoal/80 leading-relaxed font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              CRM, automações e inteligência digital para clínicas que querem crescer com{' '}
              <motion.span 
                className="text-terracotta font-medium"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                leveza
              </motion.span> e{' '}
              <motion.span 
                className="text-gold font-medium"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                clareza
              </motion.span>.
            </motion.p>
          </motion.div>
          
          {/* CTA Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: window.innerWidth < 768 ? 0.4 : 0.8, 
              delay: window.innerWidth < 768 ? 0.4 : 0.8 
            }}
          >
            {/* Main CTA Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                delay: window.innerWidth < 768 ? 0.5 : 1.0 
              }}
            >
              <motion.button 
                onClick={redirectToExternalForm}
                className="group relative bg-gradient-to-r from-terracotta to-gold text-cream px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium shadow-lg focus:outline-none focus:ring-4 focus:ring-terracotta/20"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1, ease: "easeInOut" }
                }}
              >
                <motion.span 
                  className="flex items-center gap-3"
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  Quero entender como estruturar minha clínica
                  <motion.div
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <ProjectIcons.HeroArrow />
                  </motion.div>
                </motion.span>
              </motion.button>
            </motion.div>
            
            {/* Authority Seal */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                delay: window.innerWidth < 768 ? 0.6 : 1.2 
              }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-charcoal/10 rounded-full px-4 py-2 shadow-sm"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <motion.div 
                  className="flex -space-x-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                    delay: window.innerWidth < 768 ? 0.7 : 1.2 
                  }}
                >
                  {[...Array(4)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="w-6 h-6 bg-gradient-to-br from-gold to-terracotta rounded-full border-2 border-white shadow-sm flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: window.innerWidth < 768 ? 0.4 : 0.6, 
                        delay: window.innerWidth < 768 ? 0.8 + (i * 0.05) : 1.4 + (i * 0.1),
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        transition: { duration: 0.2, ease: "easeInOut" }
                      }}
                    >
                      <ProjectIcons.HeroUsers />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.span 
                  className="text-sm font-medium text-charcoal/70"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                    delay: window.innerWidth < 768 ? 0.9 : 1.6 
                  }}
                >
                  +12 clínicas já estruturadas com a Eucalyptus
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-gold/10 to-terracotta/10 rounded-full blur-3xl opacity-60"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-terracotta/10 to-gold/10 rounded-full blur-2xl opacity-40"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </motion.section>
  );
};

export default Hero;