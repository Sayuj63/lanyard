'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NotificationBar from '@/components/header/NotificationBar';
import MainHeader from '@/components/header/MainHeader';
import MegaFooter from '@/components/footer/MegaFooter';
import { NOTIFICATION_MESSAGE, COMPANY_INFO } from '@/lib/constants';

const tradeShowProducts = [
    {
        id: 'ts-1',
        name: 'Retractable Banners',
        description: 'Professional pop-up banners for trade shows, events, and presentations',
        image: '/images/products/trade-show.png',
        basePrice: 89.00,
        priceBreaks: [
            { minQuantity: 1, unitPrice: 89.00 },
            { minQuantity: 5, unitPrice: 79.00 },
            { minQuantity: 10, unitPrice: 69.00 },
            { minQuantity: 25, unitPrice: 59.00 },
        ],
        features: [
            '33" x 79" standard size',
            'High-resolution printing',
            'Lightweight aluminum stand',
            'Carrying case included',
            'Easy setup in seconds',
            'Replaceable graphics'
        ]
    },
    {
        id: 'ts-2',
        name: 'Table Covers',
        description: 'Custom printed table covers for professional booth presentation',
        image: '/images/products/trade-show.png',
        basePrice: 125.00,
        priceBreaks: [
            { minQuantity: 1, unitPrice: 125.00 },
            { minQuantity: 5, unitPrice: 115.00 },
            { minQuantity: 10, unitPrice: 105.00 },
            { minQuantity: 25, unitPrice: 95.00 },
        ],
        features: [
            'Fits 6ft or 8ft tables',
            'Full color dye sublimation',
            'Wrinkle-resistant fabric',
            'Machine washable',
            'Flame retardant certified',
            'Professional appearance'
        ]
    },
    {
        id: 'ts-3',
        name: 'Promotional Kits',
        description: 'Complete trade show kits with lanyards, badges, bags, and more',
        image: '/images/products/trade-show.png',
        basePrice: 4.95,
        priceBreaks: [
            { minQuantity: 100, unitPrice: 4.95 },
            { minQuantity: 500, unitPrice: 4.45 },
            { minQuantity: 1000, unitPrice: 3.95 },
            { minQuantity: 5000, unitPrice: 3.45 },
        ],
        features: [
            'Custom lanyard included',
            'Badge holder and badge',
            'Branded tote bag',
            'Promotional items',
            'Fully customizable',
            'Bulk discounts available'
        ]
    }
];

export default function TradeShowPage() {
    const [selectedProduct, setSelectedProduct] = useState(tradeShowProducts[0]);
    const [quantity, setQuantity] = useState(selectedProduct.priceBreaks[0].minQuantity);

    const getCurrentPrice = () => {
        const priceBreak = [...selectedProduct.priceBreaks].reverse().find(pb => quantity >= pb.minQuantity);
        return priceBreak ? priceBreak.unitPrice : selectedProduct.basePrice;
    };

    const currentPrice = getCurrentPrice();
    const totalPrice = currentPrice * quantity;

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <div className="fixed top-0 left-0 right-0 z-50 bg-white">
                <NotificationBar message={NOTIFICATION_MESSAGE} backgroundColor="bg-black" textColor="text-ln-yellow" />
                <div style={{ paddingTop: '40px' }}>
                    <MainHeader logoText={COMPANY_INFO.NAME} searchPlaceholder="Search 1000+ Products, Styles, SKUs..." cartItemCount={0} phoneNumber={COMPANY_INFO.PHONE_DISPLAY} />
                </div>
            </div>

            <div style={{ height: '120px' }}></div>

            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-ln-blue transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-ln-blue transition-colors">Products</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Trade Show & Events</span>
                    </div>
                </div>
            </div>

            <main className="flex-grow">
                <section className="bg-gradient-to-br from-ln-blue to-blue-700 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">Trade Show & Event Solutions</h1>
                                <p className="text-xl text-blue-100 mb-6">
                                    Complete solutions for trade shows, conferences, and corporate events
                                </p>
                                <ul className="space-y-3 text-blue-50">
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-ln-yellow" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Professional booth displays</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-ln-yellow" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Complete promotional kits</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-ln-yellow" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Fast turnaround for events</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                                <Image src="/images/products/trade-show.png" alt="Trade Show Solutions" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">Trade Show Products</h2>
                        <p className="text-center text-gray-600 mb-12">Everything you need for a successful event</p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {tradeShowProducts.map((product) => (
                                <div
                                    key={product.id}
                                    onClick={() => {
                                        setSelectedProduct(product);
                                        setQuantity(product.priceBreaks[0].minQuantity);
                                    }}
                                    className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 ${selectedProduct.id === product.id ? 'ring-4 ring-ln-blue shadow-xl scale-105' : 'border-2 border-gray-200 hover:border-ln-blue hover:shadow-lg'}`}
                                >
                                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                                    <div className="mb-4">
                                        <span className="text-2xl font-bold text-ln-red">${product.basePrice.toFixed(2)}</span>
                                        <span className="text-gray-500 text-sm ml-1">/unit</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {product.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold mb-2 text-gray-900">Calculate Your Price</h2>
                            <p className="text-gray-600 mb-8">Selected: <span className="font-semibold text-ln-blue">{selectedProduct.name}</span></p>

                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Quantity</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                                    {selectedProduct.priceBreaks.map((pb) => (
                                        <button
                                            key={pb.minQuantity}
                                            onClick={() => setQuantity(pb.minQuantity)}
                                            className={`py-3 px-4 rounded-lg font-semibold transition-all ${quantity === pb.minQuantity ? 'bg-ln-blue text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                        >
                                            {pb.minQuantity}
                                        </button>
                                    ))}
                                </div>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(selectedProduct.priceBreaks[0].minQuantity, parseInt(e.target.value) || selectedProduct.priceBreaks[0].minQuantity))}
                                    min={selectedProduct.priceBreaks[0].minQuantity}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-ln-blue focus:outline-none"
                                    placeholder="Enter custom quantity"
                                />
                            </div>

                            <div className="bg-ln-blue text-white rounded-xl p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-lg">Unit Price:</span>
                                    <span className="text-2xl font-bold">${currentPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-6 pb-6 border-b border-blue-400">
                                    <span className="text-lg">Quantity:</span>
                                    <span className="text-2xl font-bold">{quantity.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-xl font-semibold">Total Price:</span>
                                    <span className="text-4xl font-bold">${totalPrice.toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-ln-yellow text-gray-900 py-4 px-6 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg">
                                    Get Free Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                            Why Choose Us for Your Event?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: '🎯',
                                    title: 'One-Stop Shop',
                                    description: 'Everything you need for your event in one place'
                                },
                                {
                                    icon: '⚡',
                                    title: 'Fast Turnaround',
                                    description: 'Rush production available for urgent events'
                                },
                                {
                                    icon: '💎',
                                    title: 'Premium Quality',
                                    description: 'Professional-grade materials and printing'
                                },
                                {
                                    icon: '🤝',
                                    title: 'Expert Support',
                                    description: 'Dedicated event specialists to help you'
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
                                    <div className="text-5xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gradient-to-r from-ln-blue to-blue-700 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-4">Ready to Make Your Event a Success?</h2>
                        <p className="text-xl text-blue-100 mb-8">Get a free quote or speak with our event specialists</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-ln-yellow text-gray-900 py-4 px-8 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg">
                                Get Free Quote
                            </button>
                            <a href={`tel:${COMPANY_INFO.PHONE}`} className="bg-white text-ln-blue py-4 px-8 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                                Call {COMPANY_INFO.PHONE_DISPLAY}
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <MegaFooter />
        </div>
    );
}
