'use client';

import React from 'react';
import Image from 'next/image';

interface CategoryItem {
    id: string;
    name: string;
    image: string;
    link: string;
}

interface CategoryScrollProps {
    categories: CategoryItem[];
}

const CategoryScroll: React.FC<CategoryScrollProps> = ({ categories }) => {
    return (
        <section className="py-8 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Shop by Category
                </h2>

                {/* Horizontal scrollable container */}
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-6 pb-4">
                        {categories.map((category) => (
                            <a
                                key={category.id}
                                href={category.link}
                                className="flex flex-col items-center min-w-[120px] group"
                            >
                                {/* Circular image container */}
                                <div className="relative w-24 h-24 mb-3 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-ln-red transition-all duration-300 shadow-md group-hover:shadow-lg">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        sizes="96px"
                                    />
                                </div>

                                {/* Category name */}
                                <span className="text-sm font-medium text-gray-700 text-center group-hover:text-ln-red transition-colors duration-200 max-w-[120px]">
                                    {category.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};

export default CategoryScroll;
