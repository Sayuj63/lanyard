'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          BEST SELLERS - READY TO SHIP
        </h2>
        
        {/* Horizontal scroll container */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex space-x-6 min-w-max">
            {products.map((product) => (
              <div 
                key={product.id}
                className="flex-shrink-0 bg-white border border-gray-300 rounded-sm"
                style={{ width: '200px' }}
              >
                {/* Product Image */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={product.images[0] || '/images/placeholder-product.jpg'}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-3">
                  <h3 className="font-semibold text-sm text-gray-800 mb-1 truncate">
                    {product.name}
                  </h3>
                  
                  <p className="text-ln-red font-bold text-sm mb-2">
                    ${product.basePrice.toFixed(2)}
                  </p>
                  
                  <button className="w-full bg-ln-blue text-white text-xs font-bold py-2 hover:bg-blue-700 transition-colors duration-200">
                    Customize
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;