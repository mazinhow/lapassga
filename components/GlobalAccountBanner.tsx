'use client';

import Link from 'next/link';

export default function GlobalAccountBanner() {
  return (
    <div className="mx-6 mb-6">
      <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <i className="ri-bank-card-line text-white text-lg"></i>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full font-medium">
                Novidade
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 leading-tight">
              Sua conta global grátis chegou.
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Gerencie múltiplas moedas em uma só conta. Zero taxas de manutenção.
            </p>
          </div>
        </div>
        
        <Link href="/account">
          <button className="w-full bg-[#EF4444] hover:bg-[#DC2626] transition-colors px-6 py-3 rounded-lg font-semibold text-center whitespace-nowrap">
            Ativar minha conta
          </button>
        </Link>
      </div>
    </div>
  );
}