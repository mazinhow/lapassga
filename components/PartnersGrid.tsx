'use client';

export default function PartnersGrid() {
  const partners = [
    { name: 'Amazon', rate: 'R$ 1 = 1 milha', logo: 'ri-amazon-line' },
    { name: 'Itaú', rate: 'R$ 2 = 1 milha', logo: 'ri-bank-line' },
    { name: 'Uber', rate: 'R$ 3 = 1 milha', logo: 'ri-taxi-line' },
    { name: 'iFood', rate: 'R$ 2 = 1 milha', logo: 'ri-restaurant-line' },
  ];

  return (
    <div className="px-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Parceiros</h2>
      <div className="grid grid-cols-2 gap-4">
        {partners.map((partner, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <i className={`${partner.logo} text-gray-600 text-xl`}></i>
              </div>
              <span className="font-medium text-gray-800">{partner.name}</span>
            </div>
            <p className="text-sm text-[#E8006B] font-semibold">{partner.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}