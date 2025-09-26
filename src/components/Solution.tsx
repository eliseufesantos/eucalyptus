import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Solution: React.FC = () => {
  const deliverables = [
    {
      title: 'CRM Kommo personalizado',
      description: 'para o seu fluxo específico',
      image: '/assets/kommo-crm.png',
    },
    {
      title: 'Automação inteligente',
      description: 'de follow-ups e agendamentos, sem esforço manual',
      image: '/assets/n8n-atuomaco.webp',
    },
    {
      title: 'Landing pages que convertem',
      description: 'e formulários inteligentes que já filtram os leads certos',
      image: '/assets/landing-page-pc.jpg',
    },
    {
      title: 'Consultoria estratégica premium',
      description: 'imagem, marketing e presença digital — exclusiva para quem busca diferenciação de alto padrão',
      image: '/assets/camera-profissional-em-um-desfocado.jpg',
    },
  ];

  return (
    <section 
      id="solution" 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #f5f3f0 0%, #f0ede8 20%, #e8dcc6 40%, #d4c4a8 60%, #8b7d6b 75%, #5a5a5a 90%, #2c2c2c 100%)'
      }}
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
          <div className="mb-20 animate-fadeInUp animation-delay-300">
            <div className="max-w-4xl mx-auto glass-card-light rounded-3xl glow-warm overflow-hidden glow-warm-hover">
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
                className="glass-card-light p-8 lg:p-12 min-h-[500px] relative"
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
                <div className="text-center space-y-8 mb-12 relative z-10">
                  <h3 className="text-premium-large text-charcoal">
                    A Solução
                  </h3>
                  <p className="text-premium-subtitle text-gold font-semibold">
                    Um ecossistema digital inteligente.
                  </p>
                  <p className="text-xl lg:text-2xl text-charcoal/80 leading-relaxed max-w-4xl mx-auto text-premium">
                    Transformamos sua rotina com automações inteligentes, processos simples e tecnologia que respeita seu tempo e seu jeito.
                  </p>
                </div>

                {/* Image Section with Enhanced Effects */}
                <div className="text-center relative z-10">
                  <div className="relative inline-block group">
                    <img
                      src="/assets/bela-jovem-posando-sobre-parede-cinza-e-segurando-o-tablet-nas-maos.jpg"
                      alt="Profissional utilizando tecnologia digital para gestão eficiente"
                      className="w-[400px] max-w-3xl mx-auto h-80 lg:h-[280px] rounded-2xl shadow-premium transition-all duration-300"
                    />
                    {/* Warm Golden Glow Effect - Only on Hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-500"
                      style={{
                        background: 'linear-gradient(45deg, rgba(229, 207, 176, 0.4), rgba(245, 220, 180, 0.3), rgba(212, 196, 168, 0.4))',
                        filter: 'blur(20px)',
                        transform: 'scale(1.05)'
                      }}
                    ></div>
                  </div>
                </div>
                
                {/* Small Notification - Below Image */}
                <div className="text-center mt-6">
                  <div className="inline-block">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 shadow-lg">
                      <p className="text-charcoal/90 text-sm font-medium flex items-center gap-2">
                        <span className="text-red-500 text-lg">⚠️</span>
                        A Eucalyptus não é uma agência de marketing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Swiper Carousel with Multiple Cards */}
          <div className="space-y-6">
            <h3 className="text-premium-subtitle text-cream text-center mb-12 animate-fadeInUp animation-delay-400 font-semibold drop-shadow-lg">
              O que entregamos:
            </h3>

            <div className="swiper-container">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 50,
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
                    <div className="group relative glass-card rounded-3xl shadow-premium-hover fat-square-card w-full h-[460px] animate-float-subtle">
                      {/* Animated Background Gradient with Warm Colors */}
                      <div 
                        className="absolute inset-0 animate-gradient-wave opacity-15 rounded-3xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(229, 207, 176, 0.2) 0%, rgba(212, 196, 168, 0.15) 50%, rgba(245, 220, 180, 0.2) 100%)'
                        }}
                      ></div>
                      
                      <div className="relative z-10 flex flex-col justify-between h-full p-6">
                        {/* Image Area */}
                        <div className="relative mb-4 flex-shrink-0">
                          <div className="w-full h-40 rounded-2xl overflow-hidden shadow-lg bg-white/20 backdrop-blur-sm">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          <div 
                            className="absolute inset-0 rounded-2xl animate-pulse-glow opacity-30"
                            style={{
                              background: 'radial-gradient(circle, rgba(229, 207, 176, 0.4) 0%, transparent 70%)'
                            }}
                          ></div>
                        </div>
                        
                        {/* Content Area */}
                        <div className="text-center flex-1 flex flex-col justify-center">
                          <h4 className="text-premium text-gray-800 mb-3 text-lg lg:text-xl font-bold leading-tight drop-shadow-sm">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 text-sm lg:text-base leading-relaxed font-medium">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Enhanced Warm Hover Effect */}
                      <div 
                        className="absolute inset-0 animate-gradient-flow opacity-0 group-hover:opacity-25 transition-all duration-500 rounded-3xl pointer-events-none"
                        style={{
                          background: 'linear-gradient(45deg, rgba(229, 207, 176, 0.15), rgba(245, 220, 180, 0.1), rgba(212, 196, 168, 0.15), rgba(229, 207, 176, 0.1))'
                        }}
                      />
                      
                      {/* Warm Border Glow */}
                      <div 
                        className="absolute inset-0 rounded-3xl border transition-all duration-300 pointer-events-none"
                        style={{
                          borderColor: 'rgba(229, 207, 176, 0.3)'
                        }}
                      ></div>
                      <div 
                        className="absolute inset-0 rounded-3xl border opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                        style={{
                          borderColor: 'rgba(229, 207, 176, 0.6)'
                        }}
                      ></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev-custom"></div>
              <div className="swiper-button-next-custom"></div>
              
              {/* Custom Pagination */}
              <div className="swiper-pagination-custom swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;