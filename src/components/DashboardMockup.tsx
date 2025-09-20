import React from 'react';

const DashboardMockup: React.FC = () => {
  return (
    <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 animate-float">
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/10 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-purple-400">+187%</div>
          <div className="text-sm text-gray-300 opacity-80">Conversão</div>
        </div>
        <div className="bg-white/10 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-purple-400">+245</div>
          <div className="text-sm text-gray-300 opacity-80">Leads/Mês</div>
        </div>
        <div className="bg-white/10 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-purple-400">R$ 89k</div>
          <div className="text-sm text-gray-300 opacity-80">Faturamento</div>
        </div>
        <div className="bg-white/10 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-purple-400">4.8★</div>
          <div className="text-sm text-gray-300 opacity-80">Satisfação</div>
        </div>
      </div>
      
      <div className="h-16 bg-gradient-to-r from-purple-500 to-purple-500/30 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>
    </div>
  );
};

export default DashboardMockup;