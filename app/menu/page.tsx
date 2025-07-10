'use client';

import BottomNavigation from '../../components/BottomNavigation';

export default function Menu() {
  const menuSections = [
    {
      title: 'Minha Conta',
      items: [
        { icon: 'ri-user-line', label: 'Perfil', badge: null },
        { icon: 'ri-settings-line', label: 'Configurações', badge: null },
        { icon: 'ri-notification-line', label: 'Notificações', badge: '3' },
        { icon: 'ri-lock-line', label: 'Privacidade', badge: null },
      ]
    },
    {
      title: 'Milhas & Benefícios',
      items: [
        { icon: 'ri-coin-line', label: 'Comprar Milhas', badge: null },
        { icon: 'ri-exchange-line', label: 'Transferir Milhas', badge: null },
        { icon: 'ri-gift-line', label: 'Resgatar Prêmios', badge: null },
        { icon: 'ri-vip-crown-line', label: 'Status Gold', badge: 'ATIVO' },
      ]
    },
    {
      title: 'Serviços',
      items: [
        { icon: 'ri-customer-service-line', label: 'Atendimento', badge: null },
        { icon: 'ri-question-line', label: 'Ajuda', badge: null },
        { icon: 'ri-feedback-line', label: 'Feedback', badge: null },
        { icon: 'ri-information-line', label: 'Sobre o App', badge: null },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-[#1D1A3B] px-6 py-8 text-white">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold">A</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Aurimar</h1>
            <p className="text-white/80">Membro Gold • 95.898 milhas</p>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">5</p>
            <p className="text-xs opacity-80">Voos este ano</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">2</p>
            <p className="text-xs opacity-80">Anos Gold</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs opacity-80">Resgates</p>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-6 py-6 space-y-6">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">{section.title}</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  className={`w-full flex items-center space-x-4 p-4 hover:bg-gray-50 ${
                    itemIndex !== section.items.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <i className={`${item.icon} text-gray-600`}></i>
                  </div>
                  <div className="flex-1 text-left">
                    <span className="font-medium text-gray-800">{item.label}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.badge && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.badge === 'ATIVO' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-[#E8006B] text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    <i className="ri-arrow-right-s-line text-gray-400"></i>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* App Info */}
      <div className="px-6 pb-8">
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">LATAM Pass App</p>
          <p className="text-xs text-gray-400">Versão 3.2.1</p>
          <button className="text-[#E8006B] text-sm font-medium whitespace-nowrap">
            Sair da Conta
          </button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}