'use client';

import React, { useState } from 'react';
import { CalculatorProduct, PriceCalculation } from '@/lib/types';

interface BulkCalculatorProps {
  products: CalculatorProduct[];
}

const BulkCalculator: React.FC<BulkCalculatorProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<string>(products[0]?.id || '');
  const [quantity, setQuantity] = useState<number>(1000);
  const [printingType, setPrintingType] = useState<string>('full-color');
  const [calculationResult, setCalculationResult] = useState<PriceCalculation | null>(null);
  
  const currentProduct = products.find(p => p.id === selectedProduct) || products[0];
  
  const calculatePrice = (): PriceCalculation => {
    if (!currentProduct) {
      return {
        totalPrice: 0,
        unitPrice: 0,
        quantity: 0,
        includesSetup: true,
        includesShipping: true,
      };
    }
    
    // Find the appropriate price break based on quantity
    let unitPrice = currentProduct.basePrice;
    const sortedBreaks = [...currentProduct.priceBreaks].sort((a, b) => b.minQuantity - a.minQuantity);
    
    for (const priceBreak of sortedBreaks) {
      if (quantity >= priceBreak.minQuantity) {
        unitPrice = priceBreak.unitPrice;
        break;
      }
    }
    
    const totalPrice = unitPrice * quantity;
    
    return {
      totalPrice,
      unitPrice,
      quantity,
      includesSetup: true,
      includesShipping: true,
    };
  };
  
  const handleCalculate = React.useCallback(() => {
    const result = calculatePrice();
    setCalculationResult(result);
  }, [calculatePrice, selectedProduct, quantity, printingType]);
  
  // Calculate initial result
  React.useEffect(() => {
    handleCalculate();
  }, [handleCalculate]);
  
  return (
    <section className="py-12 bg-ln-gray">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
          INSTANT BULK PRICING CALCULATOR
        </h2>
        
        <div className="bg-white p-8 rounded-sm shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Product Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Product
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-sm focus:ring-ln-red focus:border-ln-red"
              >
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Quantity Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                className="w-full p-3 border border-gray-300 rounded-sm focus:ring-ln-red focus:border-ln-red"
              />
            </div>
            
            {/* Printing Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Printing Type
              </label>
              <select
                value={printingType}
                onChange={(e) => setPrintingType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-sm focus:ring-ln-red focus:border-ln-red"
              >
                <option value="full-color">Full Color Printing</option>
                <option value="single-color">Single Color</option>
                <option value="embossed">Embossed</option>
                <option value="debossed">Debossed</option>
              </select>
            </div>
          </div>
          
          {/* Calculation Result */}
          {calculationResult && (
            <div className="mb-8 p-6 bg-ln-gray rounded-sm">
              <div className="text-xl font-bold text-gray-800 mb-2">
                {quantity.toLocaleString()} {currentProduct?.name || 'Selected Product'} = ${calculationResult.totalPrice.toFixed(2)} (${calculationResult.unitPrice.toFixed(2)}/unit)
              </div>
              <div className="text-green-600 font-bold">
                Includes setup & shipping
              </div>
            </div>
          )}
          
          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-ln-red text-white px-8 py-3 font-bold hover:bg-red-700 transition-colors duration-200">
              GET EXACT QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkCalculator;