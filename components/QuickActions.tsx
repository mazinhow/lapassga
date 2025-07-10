'use client';

export default function QuickActions() {
  const actions = [
    { icon: 'ri-shopping-bag-line', label: 'Shopping', color: 'bg-blue-50' },
    { icon: 'ri-group-line', label: 'Club', color: 'bg-purple-50' },
    { icon: 'ri-coin-line', label: 'Buy Miles', color: 'bg-green-50' },
    { icon: 'ri-gift-line', label: 'Rewards', color: 'bg-orange-50' },
  ];

  return (
    <div className="px-6 mb-6">
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`${action.color} rounded-xl p-4 min-w-[80px] flex flex-col items-center space-y-2 shadow-sm`}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <i className={`${action.icon} text-gray-700 text-xl`}></i>
            </div>
            <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}