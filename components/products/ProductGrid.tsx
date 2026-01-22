'use client';

import React from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  link?: string;
}

interface ProductGridProps {
  products?: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  // Default products if none provided
  const defaultProducts: Product[] = [
    { id: '1', name: 'Custom Lanyards', price: 0.89, image: '/images/products/lanyard-1.jpg', link: '/products/lanyards' },
    { id: '2', name: 'ID Card Holders', price: 0.45, image: '/images/products/id-card-1.jpg', link: '/products/id-cards' },
    { id: '3', name: 'Silicone Wristbands', price: 0.35, image: '/images/products/wristband-1.jpg', link: '/products/wristbands' },
    { id: '4', name: 'Can Coolers', price: 1.25, image: '/images/products/cooler-1.jpg', link: '/products/can-coolers' },
    { id: '5', name: 'Custom Patches', price: 1.89, image: '/images/products/patch-1.jpg', link: '/products/patches' },
    { id: '6', name: 'Tote Bags', price: 2.45, image: '/images/products/tote-1.jpg', link: '/products/tote-bags' },
    { id: '7', name: 'Lapel Pins', price: 1.15, image: '/images/products/pin-1.jpg', link: '/products/lapel-pins' },
    { id: '8', name: 'Badge Accessories', price: 0.35, image: '/images/products/accessory-1.jpg', link: '/products/accessories' },
    { id: '9', name: 'Custom Lanyards Pro', price: 1.29, image: '/images/products/lanyard-1.jpg', link: '/products/lanyards-pro' },
  ];

  const displayProducts = products || defaultProducts;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
          Featured Products
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Browse our most popular promotional products
        </p>

        {/* Traditional E-commerce Grid: 3 columns on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {displayProducts.map((product) => (
            <a
              key={product.id}
              href={product.link || '#'}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-square bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                  {product.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-ln-red font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 text-sm">
                    /unit
                  </span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-ln-blue text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors duration-200 text-sm">
                  View Details
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;