'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCT_CATEGORIES, INDUSTRIES, COMPANY_INFO } from '@/lib/constants';

const MegaFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* 4-Column Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Products Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-ln-yellow">Products</h3>
            <ul className="space-y-2">
              {PRODUCT_CATEGORIES.map((category, index) => (
                <li key={index}>
                  <Link 
                    href={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-ln-yellow transition-colors duration-200"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Industries Served Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-ln-yellow">Industries Served</h3>
            <ul className="space-y-2">
              {INDUSTRIES.map((industry, index) => (
                <li key={index}>
                  <Link 
                    href={`/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-ln-yellow transition-colors duration-200"
                  >
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-ln-yellow">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-ln-yellow transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-ln-yellow transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-ln-yellow transition-colors duration-200">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-300 hover:text-ln-yellow transition-colors duration-200">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/bulk-orders" className="text-gray-300 hover:text-ln-yellow transition-colors duration-200">
                  Bulk Orders
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-ln-yellow">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-ln-yellow transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-ln-yellow transition-colors duration-200">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="text-gray-300 hover:text-ln-yellow transition-colors duration-200">
                  Request Quote
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-ln-yellow transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-ln-yellow transition-colors duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Strip with Trust Badges and Legal */}
        <div className="pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {COMPANY_INFO.NAME}. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="text-gray-400 text-sm">Trust Badges:</span>
              <span className="text-gray-300 text-sm">Norton Secured</span>
              <span className="text-gray-300 text-sm">|</span>
              <span className="text-gray-300 text-sm">BBB A+</span>
              <span className="text-gray-300 text-sm">|</span>
              <span className="text-gray-300 text-sm">SSL</span>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="flex flex-col items-center md:items-end">
                <p className="text-gray-400 text-sm">
                  Call for Bulk Orders: <span className="text-ln-yellow font-bold">{COMPANY_INFO.PHONE_DISPLAY}</span>
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Email: sales@lanyardnation.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center text-gray-500 text-xs">
            <p>
              {COMPANY_INFO.NAME} - Your trusted partner for custom lanyards, ID cards, wristbands, and promotional products since {COMPANY_INFO.ESTABLISHED.replace('EST. ', '')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MegaFooter;