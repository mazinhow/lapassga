'use client';

import { useState } from 'react';
import BottomNavigation from '../../components/BottomNavigation';

export default function Statement() {
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const transactions = [
    { date: '15/12/2024', description: 'Voo São Paulo - Rio', miles: '+2,500', type: 'earn' },
    { date: '12/12/2024', description: 'Compra Amazon', miles: '+850', type: 'earn' },
    { date: '10/12/2024', description: 'Resgate Upgrade', miles: '-5,000', type: 'redeem' },
    { date: '08/12/2024', description: 'Uber', miles: '+120', type: 'earn' },
    { date: '05/12/2024', description: 'Voo Rio - Buenos Aires', miles: '+3,200', type: 'earn' },
    { date: '03/12/2024', description: 'iFood', miles: '+75', type: 'earn' },
    { date: '01/12/2024', description: 'Compra Milhas', miles: '+10,000', type: 'earn' },
  ];

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'ganhos', label: 'Ganhos' },
    { id: 'resgates', label: 'Resgates' },
  ];

  const copyClientId = () => {
    navigator.clipboard.writeText('123456789');
    setShowCopySuccess(true);
    setTimeout(() => setShowCopySuccess(false), 2000);
  };

  const filteredTransactions = transactions.filter(transaction => {
    if (selectedFilter === 'ganhos') return transaction.type === 'earn';
    if (selectedFilter === 'resgates') return transaction.type === 'redeem';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-[#1D1A3B] px-6 py-8 text-white">
        <h1 className="text-2xl font-bold mb-4">Extrato de Milhas</h1>
        
        {/* Client ID */}
        <div className="bg-white/10 rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90">Nº do cliente</p>
            <p className="font-semibold">123.456.789</p>
          </div>
          <button 
            onClick={copyClientId}
            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded"
          >
            <i className="ri-file-copy-line"></i>
          </button>
        </div>
        
        {showCopySuccess && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg z-50">
            ID copiado!
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedFilter === filter.id
                    ? 'bg-[#E8006B] text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm pr-8"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>

      {/* Transactions List */}
      <div className="px-6 py-4">
        <div className="space-y-3">
          {filteredTransactions.map((transaction, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`font-semibold ${
                    transaction.type === 'earn' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.miles}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className={`${
                      transaction.type === 'earn' ? 'ri-arrow-down-line text-green-600' : 'ri-arrow-up-line text-red-600'
                    }`}></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}