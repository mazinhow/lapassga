'use client';

export default function RecentActivity() {
  const transactions = [
    {
      id: 1,
      type: 'Depósito USD',
      time: '2h',
      amount: '+$500,00',
      positive: true,
      icon: 'ri-arrow-down-line'
    },
    {
      id: 2,
      type: 'Conversão EUR→BRL',
      time: '1d',
      amount: '-€200,00',
      positive: false,
      icon: 'ri-exchange-line'
    },
    {
      id: 3,
      type: 'Envio BRL',
      time: '2d',
      amount: '-R$1.250,00',
      positive: false,
      icon: 'ri-send-plane-line'
    },
    {
      id: 4,
      type: 'Depósito BRL',
      time: '3d',
      amount: '+R$2.000,00',
      positive: true,
      icon: 'ri-arrow-down-line'
    },
    {
      id: 5,
      type: 'Conversão USD→EUR',
      time: '5d',
      amount: '-$300,00',
      positive: false,
      icon: 'ri-exchange-line'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Atividade recente</h2>
        <button className="text-[#E8006B] text-sm font-medium whitespace-nowrap">
          Ver tudo
        </button>
      </div>
      
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <i className={`${transaction.icon} text-gray-600`}></i>
              </div>
              <div>
                <p className="font-medium text-gray-800">{transaction.type}</p>
                <p className="text-sm text-gray-500">{transaction.time}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className={`font-semibold ${
                transaction.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}