'use client';

import BottomNavigation from '../../components/BottomNavigation';

export default function Offers() {
  const offers = [
    {
      title: 'Dobro de Milhas',
      description: 'Ganhe o dobro de milhas em voos nacionais',
      validity: 'Válido até 31/01/2025',
      category: 'Voos',
      color: 'bg-blue-500',
      icon: 'ri-flight-takeoff-line'
    },
    {
      title: '50% Off Upgrade',
      description: 'Upgrade para classe executiva com 50% de desconto',
      validity: 'Válido até 15/02/2025',
      category: 'Benefícios',
      color: 'bg-purple-500',
      icon: 'ri-vip-crown-line'
    },
    {
      title: 'Amazon 3x Milhas',
      description: 'Triple suas milhas em compras na Amazon',
      validity: 'Válido até 28/02/2025',
      category: 'Parceiros',
      color: 'bg-orange-500',
      icon: 'ri-shopping-bag-line'
    },
    {
      title: 'Transfer Bonus 30%',
      description: '30% de bônus ao transferir milhas de cartões',
      validity: 'Válido até 10/03/2025',
      category: 'Transferência',
      color: 'bg-green-500',
      icon: 'ri-exchange-line'
    },
    {
      title: 'Hotéis com Desconto',
      description: 'Até 40% de desconto em hotéis parceiros',
      validity: 'Válido até 20/04/2025',
      category: 'Hotéis',
      color: 'bg-teal-500',
      icon: 'ri-hotel-line'
    },
    {
      title: 'Primeira Compra',
      description: '5.000 milhas de bônus na primeira compra',
      validity: 'Válido até 30/06/2025',
      category: 'Novo Cliente',
      color: 'bg-pink-500',
      icon: 'ri-gift-line'
    }
  ];

  const categories = ['Todos', 'Voos', 'Parceiros', 'Benefícios', 'Hotéis'];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-[#1D1A3B] px-6 py-8 text-white">
        <h1 className="text-2xl font-bold mb-4">Ofertas Especiais</h1>
        <p className="text-white/80">Aproveite as melhores promoções para acumular mais milhas</p>
      </div>

      {/* Category Filters */}
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                index === 0
                  ? 'bg-[#E8006B] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Offer */}
      <div className="px-6 py-6">
        <div className="relative bg-gradient-to-r from-[#E8006B] to-pink-600 rounded-xl p-6 text-white overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Airplane%20taking%20off%20into%20colorful%20sunset%20sky%2C%20commercial%20aviation%2C%20travel%20and%20journey%20concept%2C%20modern%20aircraft%20silhouette%2C%20golden%20hour%20lighting%2C%20professional%20aviation%20photography%2C%20dynamic%20movement&width=350&height=200&seq=featured1&orientation=landscape')`
            }}
          ></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-fire-line text-white"></i>
              </div>
              <span className="text-sm font-medium">OFERTA ESPECIAL</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Weekend Sale</h2>
            <p className="mb-4 opacity-90">
              Voos nacionais a partir de 15.000 milhas + taxas
            </p>
            <button className="bg-white text-[#E8006B] px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="px-6">
        <div className="grid gap-4">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${offer.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <i className={`${offer.icon} text-white text-xl`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{offer.title}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full whitespace-nowrap">
                      {offer.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{offer.description}</p>
                  <p className="text-xs text-gray-500 mb-3">{offer.validity}</p>
                  <button className="text-[#E8006B] font-medium text-sm flex items-center space-x-1 whitespace-nowrap">
                    <span>Aproveitar</span>
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="px-6 py-8">
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-[#E8006B] rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-mail-line text-white text-xl"></i>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Não perca nenhuma oferta!</h3>
          <p className="text-gray-600 text-sm mb-4">
            Receba as melhores promoções direto no seu email
          </p>
          <button className="bg-[#E8006B] text-white px-6 py-3 rounded-lg font-medium whitespace-nowrap">
            Quero Receber Ofertas
          </button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}