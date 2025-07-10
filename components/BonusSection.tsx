'use client';

export default function BonusSection() {
  return (
    <div className="px-6 mb-6">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <i className="ri-gift-line text-blue-600 text-xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Bônus LATAM Pass</h3>
              <p className="text-sm text-gray-600">
                Acumule Pontos Qualificáveis e obtenha benefícios extras
              </p>
            </div>
          </div>
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-arrow-right-line text-gray-400"></i>
          </div>
        </div>
      </div>
    </div>
  );
}