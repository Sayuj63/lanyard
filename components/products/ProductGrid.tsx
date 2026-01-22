'use client';

import React from 'react';
import Image from 'next/image';
import { ProductGridProps } from '@/lib/types';

const ProductGrid: React.FC<ProductGridProps> = ({ categories, gridColumns = 3 }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Shop by Category
        </h2>
        
        {/* 3x4 Grid Layout for 12 categories - Centered and full width */}
        <div 
          className="grid gap-6 justify-items-center"
          style={{
            gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-gray-300 hover:shadow-md transition-shadow duration-200 w-full max-w-xs"
              style={{ height: '250px' }}
            >
              {/* Product Image */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-4 flex flex-col justify-between h-32">
                <div>
                  {/* Category Name */}
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  
                  {/* Starting Price */}
                  <p className="text-ln-red font-bold text-lg mb-2">
                    Starting at ${category.startingPrice.toFixed(2)}/unit
                  </p>
                  
                  {/* Features with checkmarks */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {category.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <svg 
                          className="w-4 h-4 text-green-500 mr-1 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* VIEW PRODUCTS Button */}
                <a
                  href={category.ctaLink}
                  className="bg-ln-blue text-white px-4 py-2 text-sm font-bold hover:bg-blue-700 transition-colors duration-200 text-center block"
                >
                  {category.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;