'use client';

export default function StatusCard() {
  return (
    <div className="bg-gradient-to-r from-[#BDB080] to-[#D4C896] rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <i className="ri-vip-crown-line text-white text-xl"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Categoria</h3>
            <p className="text-2xl font-bold">Gold</p>
          </div>
        </div>
        <button className="bg-white/20 px-4 py-2 rounded-full flex items-center space-x-2 whitespace-nowrap">
          <span className="text-sm font-medium">Conferir</span>
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
      
      <div className="mb-4">
        <p className="text-sm opacity-90 mb-1">Expira em: 31/03/2027</p>
        <p className="text-sm opacity-90 mb-3">Confira seu progresso:</p>
        <div className="bg-white/20 rounded-full h-2 mb-2">
          <div className="bg-white rounded-full h-2 w-3/5"></div>
        </div>
        <div className="flex justify-between text-sm">
          <span>Gold</span>
          <span>Platinum</span>
        </div>
      </div>
    </div>
  );
}