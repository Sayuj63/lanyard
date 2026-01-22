'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MegaMenuProps, MenuCategory, ProductPreview } from '@/lib/types';
import { NAVIGATION_CATEGORIES, MEGA_MENU_PRODUCTS } from '@/lib/constants';

// Create menu categories with dropdown data
const createMenuCategories = (): MenuCategory[] => {
  return NAVIGATION_CATEGORIES.map((categoryName) => {
    const categoryKey = categoryName.toLowerCase().replace(/\s+/g, '-').replace('&', '');
    let products: readonly ProductPreview[] = [];
    let hasDropdown = false;

    // Map categories to product data - most categories have dropdowns except special action items
    switch (categoryKey) {
      case 'all-products':
        // All Products shows a general overview
        products = [
          ...MEGA_MENU_PRODUCTS.lanyards.slice(0, 2),
          ...MEGA_MENU_PRODUCTS.wristbands.slice(0, 2),
        ];
        hasDropdown = true;
        break;
      case 'lanyards':
        products = MEGA_MENU_PRODUCTS.lanyards;
        hasDropdown = true;
        break;
      case 'id-cards':
        products = MEGA_MENU_PRODUCTS['id-cards'];
        hasDropdown = true;
        break;
      case 'wristbands':
        products = MEGA_MENU_PRODUCTS.wristbands;
        hasDropdown = true;
        break;
      case 'can-coolers':
        products = MEGA_MENU_PRODUCTS['can-coolers'];
        hasDropdown = true;
        break;
      case 'patches':
        products = MEGA_MENU_PRODUCTS.patches;
        hasDropdown = true;
        break;
      case 'tote-bags':
        products = MEGA_MENU_PRODUCTS['tote-bags'];
        hasDropdown = true;
        break;
      case 'lapel-pins':
        products = MEGA_MENU_PRODUCTS['lapel-pins'];
        hasDropdown = true;
        break;
      case 'trade-show--events':
        // Trade show category has dropdown but different products
        products = [
          { id: 'ts1', name: 'Trade Show Displays', image: '/images/products/trade-show-displays.jpg', link: '/products/trade-show-displays' },
          { id: 'ts2', name: 'Event Badges', image: '/images/products/event-badges.jpg', link: '/products/event-badges' },
          { id: 'ts3', name: 'Banner Stands', image: '/images/products/banner-stands.jpg', link: '/products/banner-stands' },
          { id: 'ts4', name: 'Table Throws', image: '/images/products/table-throws.jpg', link: '/products/table-throws' },
        ];
        hasDropdown = true;
        break;
      case 'bulk-orders':
        // Bulk Orders is a special page, no dropdown
        hasDropdown = false;
        break;
      case 'request-quote':
        // Request Quote is a special action, no dropdown
        hasDropdown = false;
        break;
      default:
        hasDropdown = false;
    }

    return {
      id: categoryKey,
      name: categoryName,
      hasDropdown,
      products: hasDropdown ? products : undefined,
    };
  });
};

interface MegaMenuComponentProps {
  categories?: MenuCategory[];
  onCategoryHover?: (categoryId: string) => void;
}

export default function MegaMenu({
  categories = createMenuCategories(),
  onCategoryHover,
}: MegaMenuComponentProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleCategoryHover = (categoryId: string) => {
    setActiveDropdown(categoryId);
    onCategoryHover?.(categoryId);
  };

  const handleMenuLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white border-b border-border-gray relative" onMouseLeave={handleMenuLeave}>
      <div className="max-w-container mx-auto px-4">
        <div className="flex items-center">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative"
              onMouseEnter={() => handleCategoryHover(category.id)}
            >
              {/* Navigation Item */}
              <a
                href={category.hasDropdown ? '#' : `/categories/${category.id}`}
                className={`
                  block px-4 py-4 text-sm font-medium transition-all duration-0
                  ${activeDropdown === category.id && category.hasDropdown 
                    ? 'bg-gray-100 text-ln-blue border-b-2 border-ln-blue' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-ln-blue hover:border-b-2 hover:border-ln-blue'
                  }
                `}
                onClick={(e) => {
                  if (category.hasDropdown) {
                    e.preventDefault();
                  }
                }}
              >
                {category.name}
              </a>

              {/* Dropdown Menu */}
              {category.hasDropdown && category.products && activeDropdown === category.id && (
                <div className="absolute top-full left-0 z-50 bg-white border border-border-gray shadow-lg rounded-b-md min-w-80">
                  <div className="p-6">
                    {/* Products Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {category.products.map((product) => (
                        <a
                          key={product.id}
                          href={product.link}
                          className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50 transition-colors"
                        >
                          {/* Product Image */}
                          <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover rounded"
                              onError={(e) => {
                                // Fallback to placeholder if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = `
                                  <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                `;
                              }}
                            />
                          </div>
                          {/* Product Name */}
                          <span className="text-sm text-gray-700 hover:text-ln-blue">
                            {product.name}
                          </span>
                        </a>
                      ))}
                    </div>

                    {/* View All Link */}
                    <div className="border-t border-border-gray pt-4">
                      <a
                        href={`/categories/${category.id}`}
                        className="inline-flex items-center text-ln-blue hover:text-ln-red font-medium text-sm transition-colors"
                      >
                        VIEW ALL {category.name.toUpperCase()}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}