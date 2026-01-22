'use client';

import React, { useState, useEffect } from 'react';
import { HeroSliderProps, SlideData } from '@/lib/types';

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  autoRotateInterval = 5000,
  showDots = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoRotateInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getThemeClasses = (theme: SlideData['backgroundTheme']) => {
    switch (theme) {
      case 'red':
        return 'bg-gradient-to-r from-red-600 to-red-700';
      case 'blue':
        return 'bg-gradient-to-r from-blue-600 to-blue-700';
      case 'green':
        return 'bg-gradient-to-r from-green-600 to-green-700';
      default:
        return 'bg-gradient-to-r from-red-600 to-red-700';
    }
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`min-w-full h-full flex items-center ${getThemeClasses(slide.backgroundTheme)}`}
          >
            <div className="container mx-auto px-4 flex items-center justify-between">
              {/* Left Content */}
              <div className="flex-1 text-white max-w-2xl">
                <h1 className="text-4xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl mb-4 opacity-90">
                  {slide.subtitle}
                </p>
                
                {/* Price Display */}
                <div className="text-2xl font-bold mb-6 text-yellow-300">
                  {slide.price}
                </div>

                {/* Trust Elements */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {slide.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center bg-white bg-opacity-20 px-3 py-2 rounded-md"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                  onClick={() => window.location.href = slide.ctaLink}
                >
                  {slide.ctaText}
                </button>
              </div>

              {/* Right Content - Product Collage */}
              <div className="flex-1 flex justify-end">
                <div className="relative max-w-md">
                  {/* Product Images with Badges */}
                  <div className="grid grid-cols-2 gap-4">
                    {slide.productImages.slice(0, 3).map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative ${imgIndex === 0 ? 'col-span-2' : ''}`}
                      >
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                          <div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center">
                            <span className="text-gray-500 text-sm">
                              Product Image {imgIndex + 1}
                            </span>
                          </div>
                        </div>
                        
                        {/* Badges */}
                        {imgIndex === 0 && (
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            BEST SELLER
                          </div>
                        )}
                        {imgIndex === 1 && (
                          <div className="absolute -top-2 -right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            MOST POPULAR
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide
                  ? 'bg-yellow-400'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Manual Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-colors duration-200"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-colors duration-200"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroSlider;