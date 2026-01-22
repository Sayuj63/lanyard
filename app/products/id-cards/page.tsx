'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NotificationBar from '@/components/header/NotificationBar';
import MainHeader from '@/components/header/MainHeader';
import MegaFooter from '@/components/footer/MegaFooter';
import { NOTIFICATION_MESSAGE, COMPANY_INFO } from '@/lib/constants';

// ID Card product variants
const idCardVariants = [
    {
        id: 'id-1',
        name: 'Standard PVC ID Cards',
        description: 'Durable plastic cards perfect for employee badges, student IDs, and membership cards',
        image: '/images/products/id-card-1.jpg',
        basePrice: 0.45,
        priceBreaks: [
            { minQuantity: 100, unitPrice: 0.45 },
            { minQuantity: 500, unitPrice: 0.39 },
            { minQuantity: 1000, unitPrice: 0.35 },
            { minQuantity: 5000, unitPrice: 0.30 },
        ],
        features: [
            'CR80 standard credit card size (3.375" x 2.125")',
            '30 mil thickness',
            'Full color printing',
            'Glossy or matte finish',
            'Optional magnetic stripe',
            'Optional barcode/QR code'
        ]
    },
    {
        id: 'id-2',
        name: 'Premium Proximity Cards',
        description: 'RFID-enabled cards for secure access control systems',
        image: '/images/products/id-card-1.jpg',
        basePrice: 1.25,
        priceBreaks: [
            { minQuantity: 100, unitPrice: 1.25 },
            { minQuantity: 500, unitPrice: 1.15 },
            { minQuantity: 1000, unitPrice: 1.05 },
            { minQuantity: 5000, unitPrice: 0.95 },
        ],
        features: [
            '125 kHz proximity technology',
            'Compatible with most access systems',
            'Full color custom printing',
            'Durable PVC construction',
            'Sequential numbering available',
            'Photo-quality printing'
        ]
    },
    {
        id: 'id-3',
        name: 'Smart Card (Chip Embedded)',
        description: 'Advanced security cards with embedded microchip technology',
        image: '/images/products/id-card-1.jpg',
        basePrice: 2.50,
        priceBreaks: [
            { minQuantity: 100, unitPrice: 2.50 },
            { minQuantity: 500, unitPrice: 2.30 },
            { minQuantity: 1000, unitPrice: 2.10 },
            { minQuantity: 5000, unitPrice: 1.90 },
        ],
        features: [
            'Contact or contactless chip options',
            'High security encryption',
            'Multi-application capable',
            'Full color printing',
            'Scratch-resistant overlay',
            'ISO 7816 compliant'
        ]
    }
];

// Accessories for ID cards
const accessories = [
    {
        id: 'acc-1',
        name: 'Badge Holders',
        price: 0.25,
        image: '/images/products/accessory-1.jpg',
        description: 'Clear vinyl holders in vertical or horizontal orientation'
    },
    {
        id: 'acc-2',
        name: 'Lanyards',
        price: 0.89,
        image: '/images/products/lanyard-1.jpg',
        description: 'Custom printed lanyards to display your ID cards'
    },
    {
        id: 'acc-3',
        name: 'Badge Reels',
        price: 0.45,
        image: '/images/products/accessory-1.jpg',
        description: 'Retractable badge reels for easy access'
    },
    {
        id: 'acc-4',
        name: 'Clips & Straps',
        price: 0.15,
        image: '/images/products/accessory-1.jpg',
        description: 'Various attachment options for your badges'
    }
];

export default function IDCardsPage() {
    const [selectedVariant, setSelectedVariant] = useState(idCardVariants[0]);
    const [quantity, setQuantity] = useState(100);
    const [selectedFinish, setSelectedFinish] = useState('glossy');
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    // Calculate price based on quantity
    const getCurrentPrice = () => {
        const priceBreak = [...selectedVariant.priceBreaks]
            .reverse()
            .find(pb => quantity >= pb.minQuantity);
        return priceBreak ? priceBreak.unitPrice : selectedVariant.basePrice;
    };

    const currentPrice = getCurrentPrice();
    const totalPrice = currentPrice * quantity;

    // Toggle options
    const toggleOption = (option: string) => {
        setSelectedOptions(prev =>
            prev.includes(option)
                ? prev.filter(o => o !== option)
                : [...prev, option]
        );
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white">
                <NotificationBar
                    message={NOTIFICATION_MESSAGE}
                    backgroundColor="bg-black"
                    textColor="text-ln-yellow"
                />
                <div style={{ paddingTop: '40px' }}>
                    <MainHeader
                        logoText={COMPANY_INFO.NAME}
                        searchPlaceholder="Search 1000+ Products, Styles, SKUs..."
                        cartItemCount={0}
                        phoneNumber={COMPANY_INFO.PHONE_DISPLAY}
                    />
                </div>
            </div>

            {/* Spacer */}
            <div style={{ height: '120px' }}></div>

            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-ln-blue transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-ln-blue transition-colors">Products</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">ID Cards</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-ln-blue to-blue-700 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    Custom ID Cards
                                </h1>
                                <p className="text-xl text-blue-100 mb-6">
                                    Professional identification cards for businesses, schools, events, and organizations
                                </p>
                                <ul className="space-y-3 text-blue-50">
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-ln-yellow" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Full color, photo-quality printing</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-ln-yellow" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Multiple security features available</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-ln-yellow" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Fast turnaround - 5-7 business days</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/products/id-card-1.jpg"
                                    alt="Custom ID Cards"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Variants */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
                            Choose Your Card Type
                        </h2>
                        <p className="text-center text-gray-600 mb-12">
                            Select the perfect ID card solution for your needs
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {idCardVariants.map((variant) => (
                                <div
                                    key={variant.id}
                                    onClick={() => setSelectedVariant(variant)}
                                    className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 ${selectedVariant.id === variant.id
                                            ? 'ring-4 ring-ln-blue shadow-xl scale-105'
                                            : 'border-2 border-gray-200 hover:border-ln-blue hover:shadow-lg'
                                        }`}
                                >
                                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                                        <Image
                                            src={variant.image}
                                            alt={variant.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{variant.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{variant.description}</p>
                                    <div className="mb-4">
                                        <span className="text-2xl font-bold text-ln-red">
                                            ${variant.basePrice.toFixed(2)}
                                        </span>
                                        <span className="text-gray-500 text-sm ml-1">/unit</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {variant.features.slice(0, 3).map((feature, idx) => (
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

                {/* Pricing Calculator */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold mb-2 text-gray-900">
                                Calculate Your Price
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Selected: <span className="font-semibold text-ln-blue">{selectedVariant.name}</span>
                            </p>

                            {/* Quantity Selector */}
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Quantity
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                                    {selectedVariant.priceBreaks.map((pb) => (
                                        <button
                                            key={pb.minQuantity}
                                            onClick={() => setQuantity(pb.minQuantity)}
                                            className={`py-3 px-4 rounded-lg font-semibold transition-all ${quantity === pb.minQuantity
                                                    ? 'bg-ln-blue text-white shadow-md'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            {pb.minQuantity}
                                        </button>
                                    ))}
                                </div>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(100, parseInt(e.target.value) || 100))}
                                    min="100"
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-ln-blue focus:outline-none"
                                    placeholder="Enter custom quantity"
                                />
                            </div>

                            {/* Finish Options */}
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Card Finish
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setSelectedFinish('glossy')}
                                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${selectedFinish === 'glossy'
                                                ? 'bg-ln-blue text-white shadow-md'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        Glossy
                                    </button>
                                    <button
                                        onClick={() => setSelectedFinish('matte')}
                                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${selectedFinish === 'matte'
                                                ? 'bg-ln-blue text-white shadow-md'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        Matte
                                    </button>
                                </div>
                            </div>

                            {/* Additional Options */}
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Additional Options
                                </label>
                                <div className="space-y-2">
                                    {['Magnetic Stripe', 'Barcode', 'QR Code', 'Sequential Numbering'].map((option) => (
                                        <label key={option} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                                            <input
                                                type="checkbox"
                                                checked={selectedOptions.includes(option)}
                                                onChange={() => toggleOption(option)}
                                                className="w-5 h-5 text-ln-blue rounded focus:ring-ln-blue"
                                            />
                                            <span className="text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Summary */}
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

                {/* Features Grid */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                            Why Choose Our ID Cards?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: '🎨',
                                    title: 'Custom Design',
                                    description: 'Full color printing with your logo, photos, and branding'
                                },
                                {
                                    icon: '🔒',
                                    title: 'Security Features',
                                    description: 'Holograms, UV printing, and RFID options available'
                                },
                                {
                                    icon: '⚡',
                                    title: 'Fast Production',
                                    description: '5-7 business days standard turnaround time'
                                },
                                {
                                    icon: '💎',
                                    title: 'Premium Quality',
                                    description: 'Durable PVC cards that last for years'
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

                {/* Accessories Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
                            Complete Your ID System
                        </h2>
                        <p className="text-center text-gray-600 mb-12">
                            Add these accessories to make your ID cards even more functional
                        </p>
                        <div className="grid md:grid-cols-4 gap-6">
                            {accessories.map((accessory) => (
                                <div key={accessory.id} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                                    <div className="relative h-48 bg-gray-100">
                                        <Image
                                            src={accessory.image}
                                            alt={accessory.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">{accessory.name}</h3>
                                        <p className="text-sm text-gray-600 mb-3">{accessory.description}</p>
                                        <div className="flex items-baseline gap-2 mb-3">
                                            <span className="text-ln-red font-bold text-lg">
                                                ${accessory.price.toFixed(2)}
                                            </span>
                                            <span className="text-gray-500 text-sm">/unit</span>
                                        </div>
                                        <button className="w-full bg-ln-blue text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors text-sm">
                                            Add to Quote
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-ln-blue to-blue-700 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-4">
                            Ready to Order Your Custom ID Cards?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Get a free quote or speak with our ID card specialists
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-ln-yellow text-gray-900 py-4 px-8 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg">
                                Get Free Quote
                            </button>
                            <a
                                href={`tel:${COMPANY_INFO.PHONE}`}
                                className="bg-white text-ln-blue py-4 px-8 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Call {COMPANY_INFO.PHONE_DISPLAY}
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <MegaFooter />
        </div>
    );
}
