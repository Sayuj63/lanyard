'use client';

import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/lib/types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          WHAT OUR CUSTOMERS SAY
        </h2>
        
        {/* 3-Column Layout for Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="border border-gray-200 rounded-sm p-6 bg-ln-gray hover:shadow-md transition-shadow duration-200"
            >
              {/* Customer Photo and Rating */}
              <div className="flex items-start mb-4">
                {testimonial.customerPhoto ? (
                  <Image
                    src={testimonial.customerPhoto}
                    alt={testimonial.customerName}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                ) : (
                  <div className="w-16 h-16 bg-ln-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.customerName.charAt(0)}
                  </div>
                )}
                
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {testimonial.customerName}
                  </h3>
                  
                  <div className="flex items-center">
                    {/* Star Rating */}
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Organization Details */}
              <div className="mb-4">
                <p className="font-semibold text-gray-700">
                  {testimonial.organizationType}, {testimonial.location}
                </p>
                <p className="text-ln-blue italic">
                  {testimonial.orderDetails}
                </p>
              </div>
              
              {/* Testimonial Quote */}
              <blockquote className="text-gray-700 italic">
                {'"' + testimonial.quote + '"'}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;