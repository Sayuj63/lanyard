'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import NotificationBar from '@/components/header/NotificationBar';
import MainHeader from '@/components/header/MainHeader';
import MegaFooter from '@/components/footer/MegaFooter';
import { NOTIFICATION_MESSAGE, COMPANY_INFO } from '@/lib/constants';

// Mock product data - in real app, this would come from API/database
const productData: any = {
    'lanyards': {
        'polyester-lanyards': {
            name: 'Polyester Lanyards',
            category: 'Lanyards',
            description: 'Most popular choice - durable, comfortable, and affordable for any event or organization',
            images: [
                '/images/products/lanyard-1.jpg',
                '/images/products/lanyard-1.jpg',
                '/images/products/lanyard-1.jpg',
            ],
            basePrice: 0.89,
            priceBreaks: [
                { minQuantity: 100, unitPrice: 0.89 },
                { minQuantity: 500, unitPrice: 0.79 },
                { minQuantity: 1000, unitPrice: 0.69 },
                { minQuantity: 5000, unitPrice: 0.59 },
            ],
            features: [
                '5/8" or 3/4" width options',
                'Screen printed or dye sublimated',
                'Multiple attachment options',
                'Smooth, comfortable material',
                'Vibrant, long-lasting colors',
                'Custom logo and text'
            ],
            specifications: {
                'Material': '100% Polyester',
                'Width Options': '5/8" or 3/4"',
                'Printing': 'Screen Print or Dye Sublimation',
                'Turnaround': '7-10 business days',
                'Minimum Order': '100 units',
                'Colors Available': 'Unlimited'
            }
        }
    },
    'id-cards': {
        'standard-pvc-cards': {
            name: 'Standard PVC ID Cards',
            category: 'ID Cards',
            description: 'Durable plastic cards perfect for employee badges, student IDs, and membership cards',
            images: [
                '/images/products/id-card-1.jpg',
                '/images/products/id-card-1.jpg',
                '/images/products/id-card-1.jpg',
            ],
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
            ],
            specifications: {
                'Material': 'PVC Plastic',
                'Size': '3.375" x 2.125" (CR80)',
                'Thickness': '30 mil',
                'Printing': 'Full Color CMYK',
                'Turnaround': '5-7 business days',
                'Minimum Order': '100 units'
            }
        }
    }
};

export default function ProductDetailPage() {
    const params = useParams();
    const category = params?.category as string;
    const productId = params?.productId as string;

    // Get product data or use defaults
    const product = productData[category]?.[productId] || {
        name: 'Product Not Found',
        category: 'Unknown',
        description: 'This product could not be found.',
        images: ['/images/products/lanyard-1.jpg'],
        basePrice: 0.00,
        priceBreaks: [],
        features: [],
        specifications: {}
    };

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(100);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const getCurrentPrice = () => {
        if (product.priceBreaks.length === 0) return product.basePrice;
        const priceBreak = [...product.priceBreaks]
            .reverse()
            .find((pb: any) => quantity >= pb.minQuantity);
        return priceBreak ? priceBreak.unitPrice : product.basePrice;
    };

    const currentPrice = getCurrentPrice();
    const totalPrice = currentPrice * quantity;

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
                        <Link href={`/products/${category}`} className="hover:text-ln-blue transition-colors capitalize">
                            {product.category}
                        </Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow">
                {/* Product Detail Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Image Gallery */}
                            <div>
                                {/* Main Image */}
                                <div className="relative h-96 md:h-[500px] bg-gray-100 rounded-xl overflow-hidden mb-4 shadow-lg">
                                    <Image
                                        src={product.images[selectedImage]}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Thumbnail Images */}
                                <div className="grid grid-cols-3 gap-4">
                                    {product.images.map((image: string, idx: number) => (
                                        <div
                                            key={idx}
                                            onClick={() => setSelectedImage(idx)}
                                            className={`relative h-24 bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-all ${selectedImage === idx
                                                ? 'ring-4 ring-ln-blue'
                                                : 'hover:ring-2 hover:ring-gray-300'
                                                }`}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${product.name} ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                    {product.name}
                                </h1>
                                <p className="text-xl text-gray-600 mb-6">
                                    {product.description}
                                </p>

                                {/* Price */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                    <div className="flex items-baseline gap-3 mb-2">
                                        <span className="text-4xl font-bold text-ln-red">
                                            ${currentPrice.toFixed(2)}
                                        </span>
                                        <span className="text-gray-500 text-lg">/unit</span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Price decreases with quantity
                                    </p>
                                </div>

                                {/* Quantity Selector */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Quantity
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                                        {product.priceBreaks.map((pb: any) => (
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

                                {/* Features */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Key Features</h3>
                                    <ul className="space-y-2">
                                        {product.features.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                                                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Total Price & CTA */}
                                <div className="bg-ln-blue text-white rounded-xl p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg">Total Price:</span>
                                        <span className="text-3xl font-bold">${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <button className="w-full bg-ln-yellow text-gray-900 py-4 px-6 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg mb-3">
                                        Get Free Quote
                                    </button>
                                    <a
                                        href={`tel:${COMPANY_INFO.PHONE}`}
                                        className="block w-full bg-white text-ln-blue py-4 px-6 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg text-center"
                                    >
                                        Call {COMPANY_INFO.PHONE_DISPLAY}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specifications */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                            Product Specifications
                        </h2>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
                            <table className="w-full">
                                <tbody>
                                    {Object.entries(product.specifications).map(([key, value], idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                            <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">
                                                {key}
                                            </td>
                                            <td className="px-6 py-4 text-gray-700">
                                                {value as string}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                            You May Also Like
                        </h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                                    <div className="relative h-48 bg-gray-100">
                                        <Image
                                            src="/images/products/lanyard-1.jpg"
                                            alt="Related Product"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">Related Product {item}</h3>
                                        <div className="flex items-baseline gap-2 mb-3">
                                            <span className="text-ln-red font-bold text-lg">
                                                $0.89
                                            </span>
                                            <span className="text-gray-500 text-sm">/unit</span>
                                        </div>
                                        <button className="w-full bg-ln-blue text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors text-sm">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <MegaFooter />
        </div>
    );
}
