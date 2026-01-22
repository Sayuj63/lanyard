'use client';

import { MainHeaderProps } from '@/lib/types';
import { COMPANY_INFO, SEARCH_PLACEHOLDER } from '@/lib/constants';

interface MainHeaderComponentProps {
  logoText?: string;
  searchPlaceholder?: string;
  cartItemCount?: number;
  phoneNumber?: string;
}

export default function MainHeader({
  logoText = COMPANY_INFO.NAME,
  searchPlaceholder = SEARCH_PLACEHOLDER,
  cartItemCount = 0,
  phoneNumber = COMPANY_INFO.PHONE_DISPLAY,
}: MainHeaderComponentProps) {
  return (
    <header className="bg-white border-b border-border-gray" style={{ height: '80px' }}>
      <div className="max-w-container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="text-ln-red font-bold text-2xl">
              {logoText}
            </div>
            <div className="ml-2 text-sm text-gray-600">
              {COMPANY_INFO.ESTABLISHED}
            </div>
          </div>

          {/* Search Bar Section */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="w-full px-4 py-2 border border-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-ln-blue focus:border-transparent"
                onFocus={(e) => e.target.focus()}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-ln-blue">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-6">
            {/* Live Chat */}
            <button className="flex items-center text-ln-blue hover:text-ln-red transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-medium">Live Chat</span>
            </button>

            {/* Phone Number */}
            <a href={`tel:${phoneNumber}`} className="flex items-center text-ln-blue hover:text-ln-red transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-medium">{phoneNumber}</span>
            </a>

            {/* Shopping Cart */}
            <button className="flex items-center text-ln-blue hover:text-ln-red transition-colors relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-ln-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount > 99 ? '99+' : cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}