import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ProjectIcons } from '../utils/icons';

const Solution: React.FC = () => {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const deliverables = [
    {
      title: 'CRM Kommo personalizado',
      description: 'para o seu fluxo específico',
      image: '/assets/kommo-crm.png',
      icon: ProjectIcons.SolutionDatabase,
    },
    {
      title: 'Automação inteligente',
      description: 'de follow-ups e agendamentos, sem esforço manual',
      image: '/assets/n8n-atuomaco.webp',
      icon: ProjectIcons.SolutionZap,
    },
    {
      title: 'Landing pages que convertem',
      description: 'e formulários inteligentes que já filtram os leads certos',
      image: '/assets/landing-page-pc.jpg',
      icon: ProjectIcons.SolutionMonitor,
    },
    {
      title: 'Consultoria estratégica premium',
      description: 'imagem, marketing e presença digital — exclusiva para quem busca diferenciação de alto padrão',
      image: '/assets/camera-profissional-em-um-desfocado.jpg',
      icon: ProjectIcons.SolutionCamera,
    },
  ];

  return (
    <motion.section 
      id="solution" 
      className="pt-24 pb-8 lg:pt-32 lg:pb-12 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #f5f3f0 0%, #f0ede8 20%, #e8dcc6 40%, #d4c4a8 60%, #8b7d6b 75%, #5a5a5a 90%, #2c2c2c 100%)'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Animated Background Gradient - Light to Dark starting from title */}
      <div 
        className="absolute inset-0 animate-gradient-flow opacity-25"
        style={{
          background: 'linear-gradient(180deg, rgba(245, 243, 240, 0.2) 0%, rgba(240, 237, 232, 0.15) 20%, rgba(232, 220, 198, 0.2) 40%, rgba(212, 196, 168, 0.3) 60%, rgba(139, 125, 107, 0.4) 75%, rgba(90, 90, 90, 0.5) 90%, rgba(44, 44, 44, 0.7) 100%)'
        }}
      ></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* macOS-style Card with Glassmorphism - Light Version */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: window.innerWidth < 768 ? 0.4 : 0.8 
              }}
            >
            <motion.div 
              className="max-w-4xl mx-auto glass-card-light rounded-3xl glow-warm overflow-hidden glow-warm-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: window.innerWidth < 768 ? 0.4 : 0.8 
              }}
              whileHover={{ scale: 1.01 }}
            >
              {/* macOS Title Bar with Light Glass Effect */}
              <div className="macos-glass-tab px-6 py-4 flex items-center space-x-3">
                {/* Traffic Light Buttons - Enhanced */}
                <div className="flex space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                </div>
                {/* Title */}
                <div className="flex-1 text-center">
                </div>
              </div>

              {/* Web Page Content with Light Glass Effect */}
              <div 
                className="glass-card-light p-6 sm:p-6 lg:p-8 min-h-[420px] sm:min-h-[380px] lg:min-h-[420px] relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(245, 243, 240, 0.3) 50%, rgba(255, 255, 255, 0.2) 100%)'
                }}
              >
                {/* Animated Background Pattern */}
                <div 
                  className="absolute inset-0 animate-gradient-wave opacity-20"
                  style={{
                    background: 'radial-gradient(circle at 20% 50%, rgba(229, 207, 176, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212, 196, 168, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(245, 243, 240, 0.1) 0%, transparent 50%)'
                  }}
                ></div>
                
                {/* Text Content with Premium Typography */}
                <motion.div 
                  className="text-center space-y-3 sm:space-y-4 lg:space-y-6 mb-4 sm:mb-6 lg:mb-8 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: window.innerWidth < 768 ? 0.4 : 0.8 
                  }}
                >
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-charcoal font-bold">
                    A Solução
                  </h3>
                  <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-terracotta font-medium">
                    Um ecossistema digital inteligente.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-charcoal/80 leading-relaxed max-w-4xl mx-auto font-light px-2">
                    Transformamos sua rotina com automações inteligentes, processos simples e tecnologia que respeita seu tempo e seu jeito.
                  </p>
                </motion.div>

                {/* Image Section with Enhanced Effects */}
                <motion.div 
                  className="text-center relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: window.innerWidth < 768 ? 0.4 : 0.8 
                  }}
                >
                  <motion.div 
                    className="relative inline-block group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src="/assets/elegante-jovem-moderna-segurando-o-celular.jpg"
                      alt="Profissional utilizando tecnologia digital para gestão eficiente"
                      className="w-full max-w-[240px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[320px] mx-auto h-44 sm:h-40 md:h-44 lg:h-48 rounded-2xl shadow-premium object-cover object-center"
                    />
                    {/* Warm Golden Glow Effect - Only on Hover */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'linear-gradient(45deg, rgba(229, 207, 176, 0.4), rgba(245, 220, 180, 0.3), rgba(212, 196, 168, 0.4))',
                        filter: 'blur(20px)',
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.4 }}
                    ></motion.div>
                  </motion.div>
                </motion.div>
                
                {/* Small Notification - Below Image */}
                <motion.div 
                  className="text-center mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: window.innerWidth < 768 ? 0.4 : 0.8 
                  }}
                >
                  <motion.div 
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1.5 shadow-lg">
                      <p className="text-charcoal/90 text-xs sm:text-sm font-normal flex items-center gap-2">
                        <ProjectIcons.Alert />
                        A Eucalyptus não é uma agência de marketing.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Swiper Carousel with Multiple Cards */}
            <motion.div 
              className="space-y-6 mt-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: window.innerWidth < 768 ? 0.4 : 0.8 
              }}
            >
            <motion.h3 
              className="text-2xl sm:text-3xl lg:text-4xl text-center mb-12 font-semibold text-charcoal relative"
              style={{
                textShadow: '0 0 20px rgba(237, 208, 140, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: window.innerWidth < 768 ? 0.4 : 0.8 
              }}
            >
              O que entregamos:
            </motion.h3>

            <div className="swiper-container">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroup={1}
                initialSlide={0}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                    spaceBetween: 15,
                    centeredSlides: false,
                    slidesPerGroup: 1,
                  },
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                    centeredSlides: false,
                    slidesPerGroup: 1,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    centeredSlides: false,
                    slidesPerGroup: 1,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                    centeredSlides: false,
                    slidesPerGroup: 1,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides: false,
                    slidesPerGroup: 1,
                  },
                }}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination-custom',
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="mySwiper"
                style={{
                  width: '100%',
                  height: 'auto'
                }}
              >
                {deliverables.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div 
                      className="group relative glass-card rounded-3xl shadow-premium fat-square-card w-full h-[380px] sm:h-[420px] lg:h-[450px]"
                    >
                      {/* Animated Background Gradient with Warm Colors */}
                      <div 
                        className="absolute inset-0 animate-gradient-wave opacity-15 rounded-3xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(229, 207, 176, 0.2) 0%, rgba(212, 196, 168, 0.15) 50%, rgba(245, 220, 180, 0.2) 100%)'
                        }}
                      ></div>
                      
                      <div className="relative z-10 flex flex-col justify-between h-full p-3 sm:p-4 lg:p-6">
                        {/* Image Area */}
                        <div className="relative mb-3 sm:mb-4 lg:mb-5 flex-shrink-0">
                          <div className="w-full h-36 sm:h-40 lg:h-44 rounded-2xl overflow-hidden shadow-xl bg-white/20 backdrop-blur-sm">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          <div 
                            className="absolute inset-0 rounded-2xl animate-pulse-glow opacity-40"
                            style={{
                              background: 'radial-gradient(circle, rgba(229, 207, 176, 0.5) 0%, transparent 70%)'
                            }}
                          ></div>
                        </div>
                        
                        {/* Content Area */}
                        <div className="text-center flex-1 flex flex-col justify-center min-h-0">
                          <div className="flex justify-center mb-2 sm:mb-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-terracotta to-gold rounded-full flex items-center justify-center shadow-lg">
                              <item.icon />
                            </div>
                          </div>
                          <h4 className="text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold leading-tight drop-shadow-sm line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-tight font-normal px-1 line-clamp-3 overflow-hidden">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Enhanced Warm Hover Effect */}
                      <div 
                        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0"
                        style={{
                          background: 'linear-gradient(45deg, rgba(229, 207, 176, 0.15), rgba(245, 220, 180, 0.1), rgba(212, 196, 168, 0.15), rgba(229, 207, 176, 0.1))'
                        }}
                      />
                      
                      {/* Warm Border Glow */}
                      <div 
                        className="absolute inset-0 rounded-3xl border pointer-events-none border-[rgba(229,207,176,0.3)]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Pagination */}
              <div className="swiper-pagination-custom swiper-pagination mt-4"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Solution;