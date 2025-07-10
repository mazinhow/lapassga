'use client';

import { useState } from 'react';
import BottomNavigation from '../../components/BottomNavigation';

export default function Trips() {
  const [activeTab, setActiveTab] = useState('flights');
  const [useMiles, setUseMiles] = useState(false);

  const tabs = [
    { id: 'flights', label: 'Voos', icon: 'ri-flight-takeoff-line' },
    { id: 'packages', label: 'Pacotes', icon: 'ri-suitcase-line' },
    { id: 'hotels', label: 'Hotéis', icon: 'ri-hotel-line' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-[#1D1A3B] px-6 py-8 text-white">
        <h1 className="text-2xl font-bold mb-6">Reservar Viagem</h1>
        
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-[#1D1A3B]'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className={tab.icon}></i>
              </div>
              <span className="font-medium whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search Form */}
      <div className="bg-white mx-6 -mt-4 rounded-xl shadow-lg p-6 relative z-10">
        {activeTab === 'flights' && (
          <div className="space-y-4">
            {/* Trip Type */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button className="flex-1 py-2 bg-white rounded-md shadow-sm font-medium text-sm whitespace-nowrap">
                Ida e volta
              </button>
              <button className="flex-1 py-2 font-medium text-gray-600 text-sm whitespace-nowrap">
                Somente ida
              </button>
            </div>

            {/* Origin and Destination */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Origem</label>
                  <input 
                    type="text" 
                    placeholder="São Paulo (SAO)" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm"
                  />
                </div>
                <button className="mt-6 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                  <i className="ri-arrow-left-right-line text-gray-600"></i>
                </button>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destino</label>
                  <input 
                    type="text" 
                    placeholder="Rio de Janeiro (GIG)" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ida</label>
                <input 
                  type="date" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Volta</label>
                <input 
                  type="date" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm"
                />
              </div>
            </div>

            {/* Passengers */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Passageiros</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm pr-8">
                <option>1 Adulto</option>
                <option>2 Adultos</option>
                <option>3 Adultos</option>
              </select>
            </div>

            {/* Miles + Money Toggle */}
            <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div>
                <p className="font-medium text-gray-800">Milhas + Dinheiro</p>
                <p className="text-sm text-gray-600">Use suas milhas para economizar</p>
              </div>
              <button
                onClick={() => setUseMiles(!useMiles)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  useMiles ? 'bg-[#E8006B]' : 'bg-gray-300'
                }`}
              >
                <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  useMiles ? 'translate-x-6' : 'translate-x-0.5'
                }`}></div>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'packages' && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-suitcase-line text-2xl text-gray-400"></i>
            </div>
            <p className="text-gray-600">Pacotes com a Decolar em breve</p>
          </div>
        )}

        {activeTab === 'hotels' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Destino</label>
              <input 
                type="text" 
                placeholder="Rio de Janeiro" 
                className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                <input 
                  type="date" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                <input 
                  type="date" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hóspedes</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm pr-8">
                <option>2 Adultos, 1 Quarto</option>
                <option>1 Adulto, 1 Quarto</option>
                <option>3 Adultos, 1 Quarto</option>
              </select>
            </div>
          </div>
        )}

        {/* Search Button */}
        <button className="w-full mt-6 bg-[#E8006B] text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 whitespace-nowrap">
          <i className="ri-search-line"></i>
          <span>Buscar</span>
        </button>
      </div>

      {/* Recent Searches */}
      <div className="px-6 mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Buscas Recentes</h2>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">São Paulo → Rio de Janeiro</p>
                <p className="text-sm text-gray-600">15 Jan - 22 Jan</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-[#E8006B]">R$ 459</p>
                <p className="text-xs text-gray-500">ou 28.000 milhas</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">São Paulo → Buenos Aires</p>
                <p className="text-sm text-gray-600">10 Fev - 17 Fev</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-[#E8006B]">R$ 1.299</p>
                <p className="text-xs text-gray-500">ou 65.000 milhas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}