'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: 'ri-home-line', label: 'Home' },
    { href: '/trips', icon: 'ri-flight-takeoff-line', label: 'Viagens' },
    { href: '/offers', icon: 'ri-gift-line', label: 'Ofertas' },
    { href: '/account', icon: 'ri-bank-card-line', label: 'Conta' },
    { href: '/menu', icon: 'ri-menu-line', label: 'Menu' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center space-y-1 px-2 py-1 ${
              pathname === item.href ? 'text-[#E8006B]' : 'text-gray-500'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={item.icon}></i>
            </div>
            <span className="text-xs whitespace-nowrap">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}