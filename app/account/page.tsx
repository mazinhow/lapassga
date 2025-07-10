'use client';

import BottomNavigation from '../../components/BottomNavigation';
import CurrencyCarousel from './CurrencyCarousel';
import QuickActionsGrid from './QuickActionsGrid';
import RecentActivity from './RecentActivity';

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-[#1D1A3B] pb-20">
      {/* Header */}
      <div className="bg-[#1D1A3B] pt-12 pb-8 px-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-white">Minha Conta Global</h1>
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-more-line text-white"></i>
          </div>
        </div>
        <p className="text-gray-300">Gerencie suas moedas</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-t-3xl -mt-6 relative z-20 min-h-screen">
        <div className="pt-8">
          {/* Currency Balances Carousel */}
          <div className="mb-8">
            <div className="px-6 mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Seus saldos</h2>
            </div>
            <CurrencyCarousel />
          </div>

          {/* Quick Actions Grid */}
          <div className="px-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Ações rápidas</h2>
            <QuickActionsGrid />
          </div>

          {/* Recent Activity */}
          <div className="px-6">
            <RecentActivity />
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}