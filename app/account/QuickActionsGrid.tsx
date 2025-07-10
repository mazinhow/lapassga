'use client';

export default function QuickActionsGrid() {
  const actions = [
    {
      id: 'deposit',
      title: 'Depositar',
      icon: 'ri-add-circle-line',
      color: 'text-blue-600'
    },
    {
      id: 'convert',
      title: 'Converter',
      icon: 'ri-exchange-line',
      color: 'text-green-600'
    },
    {
      id: 'send',
      title: 'Enviar',
      icon: 'ri-send-plane-line',
      color: 'text-purple-600'
    },
    {
      id: 'history',
      title: 'Histórico',
      icon: 'ri-history-line',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action) => (
        <button
          key={action.id}
          className="bg-white border-2 border-gray-200 rounded-xl p-4 flex flex-col items-center space-y-3 hover:border-[#E8006B] transition-colors"
        >
          <div className={`w-10 h-10 flex items-center justify-center ${action.color}`}>
            <i className={`${action.icon} text-2xl`}></i>
          </div>
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
            {action.title}
          </span>
        </button>
      ))}
    </div>
  );
}