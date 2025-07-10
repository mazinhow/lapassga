'use client';

export default function CurrencyCarousel() {
  const currencies = [
    {
      code: 'BRL',
      symbol: 'R$',
      amount: '2.847,92',
      country: 'br',
      flag: '🇧🇷'
    },
    {
      code: 'USD',
      symbol: '$',
      amount: '1.235,50',
      country: 'us',
      flag: '🇺🇸'
    },
    {
      code: 'EUR',
      symbol: '€',
      amount: '892,15',
      country: 'eu',
      flag: '🇪🇺'
    }
  ];

  return (
    <div className="flex space-x-4 px-6 overflow-x-auto pb-2 scrollbar-hide">
      {currencies.map((currency, index) => (
        <div
          key={currency.code}
          className="flex-shrink-0 w-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{currency.flag}</span>
              <span className="text-sm font-medium text-gray-600">{currency.code}</span>
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-more-line text-gray-400"></i>
            </div>
          </div>
          
          <div className="mb-2">
            <p className="text-xs text-gray-500 mb-1">Saldo disponível</p>
            <p className="text-xl font-bold text-gray-800">
              {currency.symbol}{currency.amount}
            </p>
          </div>
          
          <div className="flex items-center text-xs text-green-600">
            <i className="ri-arrow-up-line mr-1"></i>
            <span>+2,3% este mês</span>
          </div>
        </div>
      ))}
    </div>
  );
}