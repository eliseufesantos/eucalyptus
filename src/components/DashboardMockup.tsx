import React from 'react';

const DashboardMockup: React.FC = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-lg bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-secondary/20 animate-float">
      <div className="flex gap-2 mb-4 sm:mb-6">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
      </div>
      
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-white/5 p-3 sm:p-4 rounded-lg text-center">
          <div className="text-lg sm:text-2xl font-bold text-secondary">+187%</div>
          <div className="text-xs sm:text-sm text-tertiary/80">Conversão</div>
        </div>
        <div className="bg-white/5 p-3 sm:p-4 rounded-lg text-center">
          <div className="text-lg sm:text-2xl font-bold text-secondary">+245</div>
          <div className="text-xs sm:text-sm text-tertiary/80">Leads/Mês</div>
        </div>
        <div className="bg-white/5 p-3 sm:p-4 rounded-lg text-center">
          <div className="text-lg sm:text-2xl font-bold text-secondary">R$ 89k</div>
          <div className="text-xs sm:text-sm text-tertiary/80">Faturamento</div>
        </div>
        <div className="bg-white/5 p-3 sm:p-4 rounded-lg text-center">
          <div className="text-lg sm:text-2xl font-bold text-secondary">4.8★</div>
          <div className="text-xs sm:text-sm text-tertiary/80">Satisfação</div>
        </div>
      </div>
      
      <div className="h-12 sm:h-16 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>
    </div>
  );
};

export default DashboardMockup;