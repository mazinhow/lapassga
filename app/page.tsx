'use client';

import BottomNavigation from '../components/BottomNavigation';
import StatusCard from '../components/StatusCard';
import QuickActions from '../components/QuickActions';
import PartnersGrid from '../components/PartnersGrid';
import BonusSection from '../components/BonusSection';
import GlobalAccountBanner from '../components/GlobalAccountBanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1D1A3B] pb-20">
      {/* Hero Section with Marriott Promo */}
      <div className="relative h-80 bg-gradient-to-r from-purple-900 to-purple-700 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20hotel%20room%20with%20person%20in%20white%20bathrobe%20standing%20by%20large%20windows%20overlooking%20lush%20green%20mountains%2C%20elegant%20interior%20design%2C%20modern%20minimalist%20style%2C%20natural%20lighting%2C%20peaceful%20morning%20atmosphere%2C%20high-end%20hospitality%20experience&width=400&height=320&seq=hero1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">12:10</span>
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              </div>
              <i className="ri-wifi-line"></i>
              <span className="text-sm bg-white text-black px-1 rounded">82</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm opacity-90 mb-2">Rede Marriott Bonvoy®</p>
            <h1 className="text-2xl font-bold mb-4">
              Cadastre-se no programa e ganhe<br />
              500 Milhas LATAM Pass!
            </h1>
            <button className="bg-[#E8006B] px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 whitespace-nowrap">
              <span>Cadastre-se já!</span>
              <i className="ri-external-link-line"></i>
            </button>
          </div>
          
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-[#E8006B] rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-white rounded-t-3xl -mt-6 relative z-20">
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-800">Olá, Aurimar!</h2>
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-notification-line text-gray-600"></i>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Você tem: <span className="font-bold text-[#E8006B]">95.898 milhas</span>
          </p>

          {/* Status Card Carousel */}
          <div className="mb-6">
            <StatusCard />
            <div className="flex justify-center space-x-2 mt-4">
              <div className="w-2 h-2 bg-[#E8006B] rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Global Account Banner */}
        <GlobalAccountBanner />

        {/* Quick Actions */}
        <QuickActions />

        {/* Bonus Section */}
        <BonusSection />

        {/* Partners */}
        <PartnersGrid />

        {/* Benefits Section */}
        <div className="px-6 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Seus benefícios</h3>
                <p className="text-sm text-gray-600">Benefícios exclusivos da categoria Gold</p>
              </div>
              <button className="bg-[#E8006B] text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                Embarque
              </button>
            </div>
          </div>
        </div>

        {/* Promo Banners */}
        <div className="px-6 space-y-4">
          <div className="relative h-32 rounded-xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20credit%20card%20mockup%20with%20blue%20gradient%20background%2C%20financial%20services%20design%2C%20premium%20banking%20product%2C%20clean%20minimalist%20style%2C%20professional%20lighting%2C%20high-end%20fintech%20branding&width=350&height=128&seq=promo1&orientation=landscape')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
            </div>
          </div>
          
          <div className="relative h-32 rounded-xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Shopping%20rewards%20and%20cashback%20concept%2C%20modern%20e-commerce%20illustration%2C%20digital%20payment%20benefits%2C%20colorful%20gradient%20background%2C%20online%20shopping%20experience%2C%20retail%20technology&width=350&height=128&seq=promo2&orientation=landscape')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-teal-900/80"></div>
            </div>
          </div>
        </div>

        <div className="h-6"></div>
      </div>

      <BottomNavigation />
    </div>
  );
}