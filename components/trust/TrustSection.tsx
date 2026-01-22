'use client';

import React from 'react';
import Image from 'next/image';
import { TRUST_SIGNAL_DATA, TRUSTED_ORGANIZATIONS, COMPANY_INFO } from '@/lib/constants';

const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-ln-gray">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          WHY SCHOOLS & CORPORATES CHOOSE LANYARD NATION
        </h2>
        
        {/* Trust Pillars - 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {TRUST_SIGNAL_DATA.map((signal) => (
            <div key={signal.id} className="text-center bg-white p-6 rounded-sm shadow-sm">
              {/* Icon */}
              <div className="text-4xl mb-4">
                {signal.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                {signal.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-3">
                {signal.description}
              </p>
              
              {/* Metric */}
              <p className="text-ln-red font-bold text-sm">
                {signal.metric}
              </p>
            </div>
          ))}
        </div>
        
        {/* Trusted Organizations Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            TRUSTED BY {COMPANY_INFO.ORGANIZATIONS_SERVED} ORGANIZATIONS
          </h3>
          
          {/* Organization Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
            {TRUSTED_ORGANIZATIONS.map((org, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200 w-24 h-16 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={org.logo}
                    alt={`${org.name} logo`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                    sizes="96px"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Trust Statement */}
          <p className="text-gray-600 mt-8 text-lg">
            Join thousands of satisfied customers who trust us with their bulk orders
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;