import NotificationBar from '@/components/header/NotificationBar';
import MainHeader from '@/components/header/MainHeader';
import MegaMenuWrapper from '@/components/header/MegaMenuWrapper';
import HeroSlider from '@/components/hero/HeroSlider';
import ProductGrid from '@/components/products/ProductGrid';
import TrustSection from '@/components/trust/TrustSection';
import FeaturedProducts from '@/components/products/FeaturedProducts';
import BulkCalculator from '@/components/products/BulkCalculator';
import Testimonials from '@/components/trust/Testimonials';
import MegaFooter from '@/components/footer/MegaFooter';
import {
  HERO_SLIDES,
  HERO_SLIDER_CONFIG,
  PRODUCT_CATEGORY_DATA,
  TRUST_SIGNAL_DATA,
  TRUSTED_ORGANIZATIONS,
  COMPANY_INFO,
  MEGA_MENU_PRODUCTS,
  PRODUCT_CATEGORIES,
  NOTIFICATION_MESSAGE
} from '@/lib/constants';

// Mock data for components
const mockProducts = [
  { id: 'fp-1', name: 'Custom Lanyards', price: 0.89, image: '/images/products/lanyard-1.jpg' },
  { id: 'fp-2', name: 'ID Cards', price: 0.45, image: '/images/products/id-card-1.jpg' },
  { id: 'fp-3', name: 'Wristbands', price: 0.35, image: '/images/products/wristband-1.jpg' },
  { id: 'fp-4', name: 'Can Coolers', price: 1.25, image: '/images/products/cooler-1.jpg' },
  { id: 'fp-5', name: 'Patches', price: 1.89, image: '/images/products/patch-1.jpg' },
  { id: 'fp-6', name: 'Tote Bags', price: 2.45, image: '/images/products/tote-1.jpg' },
  { id: 'fp-7', name: 'Lapel Pins', price: 1.15, image: '/images/products/pin-1.jpg' },
  { id: 'fp-8', name: 'Accessories', price: 0.35, image: '/images/products/accessory-1.jpg' },
];

const mockCalculatorProducts = [
  { 
    id: 'calc-1', 
    name: 'Custom Lanyards', 
    basePrice: 0.89, 
    priceBreaks: [
      { minQuantity: 100, unitPrice: 0.89 },
      { minQuantity: 500, unitPrice: 0.79 },
      { minQuantity: 1000, unitPrice: 0.69 },
      { minQuantity: 5000, unitPrice: 0.59 },
    ]
  },
  { 
    id: 'calc-2', 
    name: 'ID Cards', 
    basePrice: 0.45, 
    priceBreaks: [
      { minQuantity: 100, unitPrice: 0.45 },
      { minQuantity: 500, unitPrice: 0.39 },
      { minQuantity: 1000, unitPrice: 0.35 },
      { minQuantity: 5000, unitPrice: 0.30 },
    ]
  }
];

const mockTestimonials = [
  {
    id: 'test-1',
    customerName: 'Sarah Johnson',
    organizationType: 'University',
    location: 'Chicago, IL',
    rating: 5,
    quote: 'Outstanding quality and service. Our university lanyards turned out perfect!',
    orderDetails: '1,500 Custom Lanyards',
    customerPhoto: '/images/testimonials/sarah.jpg'
  },
  {
    id: 'test-2',
    customerName: 'Michael Chen',
    organizationType: 'Tech Company',
    location: 'Austin, TX',
    rating: 5,
    quote: 'Fast turnaround and great communication. Will definitely reorder.',
    orderDetails: '2,000 Silicone Wristbands',
    customerPhoto: '/images/testimonials/michael.jpg'
  },
  {
    id: 'test-3',
    customerName: 'Emily Rodriguez',
    organizationType: 'Healthcare',
    location: 'Miami, FL',
    rating: 5,
    quote: 'Professional service from design to delivery. Highly recommend!',
    orderDetails: '800 ID Cards & Holders',
    customerPhoto: '/images/testimonials/emily.jpg'
  }
];

const mockCategories = [
  {
    id: 'cat-1',
    name: 'Lanyards',
    image: '/images/categories/lanyards.jpg',
    startingPrice: 0.89,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/lanyards'
  },
  {
    id: 'cat-2',
    name: 'ID Cards',
    image: '/images/categories/id-cards.jpg',
    startingPrice: 0.45,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/id-cards'
  },
  {
    id: 'cat-3',
    name: 'Wristbands',
    image: '/images/categories/wristbands.jpg',
    startingPrice: 0.35,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/wristbands'
  },
  {
    id: 'cat-4',
    name: 'Can Coolers',
    image: '/images/categories/cooler.jpg',
    startingPrice: 1.25,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/can-coolers'
  },
  {
    id: 'cat-5',
    name: 'Patches',
    image: '/images/categories/patches.jpg',
    startingPrice: 1.89,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/patches'
  },
  {
    id: 'cat-6',
    name: 'Tote Bags',
    image: '/images/categories/tote-bags.jpg',
    startingPrice: 2.45,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/tote-bags'
  },
  {
    id: 'cat-7',
    name: 'Lapel Pins',
    image: '/images/categories/lapel-pins.jpg',
    startingPrice: 1.15,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/lapel-pins'
  },
  {
    id: 'cat-8',
    name: 'Accessories',
    image: '/images/categories/accessories.jpg',
    startingPrice: 0.35,
    features: ['Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/accessories'
  },
  {
    id: 'cat-9',
    name: 'Event Kits',
    image: '/images/categories/event-kits.jpg',
    startingPrice: 4.99,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/event-kits'
  },
  {
    id: 'cat-10',
    name: 'Branding Suite',
    image: '/images/categories/branding-suite.jpg',
    startingPrice: 9.99,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/branding-suite'
  },
  {
    id: 'cat-11',
    name: 'Trade Show',
    image: '/images/categories/trade-show.jpg',
    startingPrice: 2.50,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/trade-show'
  },
  {
    id: 'cat-12',
    name: 'Corporate',
    image: '/images/categories/corporate.jpg',
    startingPrice: 1.25,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/corporate'
  }
];

export default function Home() {
  
  const menuCategories = [
    { id: 'all-products', name: 'All Products', hasDropdown: true },
    { id: 'lanyards', name: 'Lanyards', hasDropdown: true },
    { id: 'id-cards', name: 'ID Cards', hasDropdown: true },
    { id: 'wristbands', name: 'Wristbands', hasDropdown: true },
    { id: 'can-coolers', name: 'Can Coolers', hasDropdown: true },
    { id: 'patches', name: 'Patches', hasDropdown: true },
    { id: 'tote-bags', name: 'Tote Bags', hasDropdown: true },
    { id: 'lapel-pins', name: 'Lapel Pins', hasDropdown: true },
    { id: 'trade-show', name: 'Trade Show & Events', hasDropdown: true },
    { id: 'bulk-orders', name: 'Bulk Orders', hasDropdown: false },
    { id: 'request-quote', name: 'Request Quote', hasDropdown: false },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Section */}
      <header>
        {/* Notification Bar */}
        <NotificationBar 
          message={NOTIFICATION_MESSAGE} 
          backgroundColor="bg-black" 
          textColor="text-ln-yellow" 
        />
        
        {/* Main Header */}
        <MainHeader 
          logoText={COMPANY_INFO.NAME}
          searchPlaceholder="Search 1000+ Products, Styles, SKUs..."
          cartItemCount={0}
          phoneNumber={COMPANY_INFO.PHONE_DISPLAY}
        />
        
        {/* Mega Menu */}
        <MegaMenuWrapper 
          categories={menuCategories}
        />
      </header>
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Slideshow */}
        <HeroSlider 
          slides={HERO_SLIDES}
          autoRotateInterval={HERO_SLIDER_CONFIG.AUTO_ROTATE_INTERVAL}
          showDots={HERO_SLIDER_CONFIG.SHOW_DOTS}
        />
        
        {/* Product Grid */}
        <ProductGrid categories={mockCategories} gridColumns={3} />
        
        {/* Trust Section */}
        <TrustSection />
        
        {/* Featured Products */}
        <FeaturedProducts products={mockProducts.map(p => ({
          id: p.id,
          name: p.name,
          category: 'Sample',
          basePrice: p.price,
          images: [p.image],
          features: ['Sample feature'],
          customizable: true,
          bulkDiscounts: [],
          specifications: {}
        }))} />
        
        {/* Bulk Calculator */}
        <BulkCalculator products={mockCalculatorProducts} />
        
        {/* Testimonials */}
        <Testimonials testimonials={mockTestimonials} />
      </main>
      
      {/* Footer */}
      <MegaFooter />
    </div>
  )
}