// TypeScript interfaces for B2B E-commerce Website

// Notification Bar Types
export interface NotificationBarProps {
  message: string;
  backgroundColor: string;
  textColor: string;
  isScrolling?: boolean;
}

// Main Header Types
export interface MainHeaderProps {
  logoText: string;
  searchPlaceholder: string;
  cartItemCount: number;
  phoneNumber: string;
}

// Mega Menu Types
export interface MegaMenuProps {
  categories: MenuCategory[];
  onCategoryHover: (categoryId: string) => void;
}

export interface MenuCategory {
  id: string;
  name: string;
  hasDropdown: boolean;
  products?: readonly ProductPreview[];
}

export interface ProductPreview {
  id: string;
  name: string;
  image: string;
  link: string;
}

// Hero Slider Types
export interface HeroSliderProps {
  slides: readonly SlideData[];
  autoRotateInterval: number;
  showDots: boolean;
}

export interface SlideData {
  title: string;
  subtitle: string;
  price: string;
  features: readonly string[];
  ctaText: string;
  ctaLink: string;
  backgroundTheme: 'red' | 'blue' | 'green';
  productImages: readonly string[];
}

// Product Grid Types
export interface ProductGridProps {
  categories: ProductCategory[];
  gridColumns: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  image: string;
  startingPrice: number;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

// Bulk Calculator Types
export interface BulkCalculatorProps {
  products: CalculatorProduct[];
  onCalculate: (result: PriceCalculation) => void;
}

export interface CalculatorProduct {
  id: string;
  name: string;
  basePrice: number;
  priceBreaks: PriceBreak[];
}

export interface PriceCalculation {
  totalPrice: number;
  unitPrice: number;
  quantity: number;
  includesSetup: boolean;
  includesShipping: boolean;
}

// Product Model
export interface Product {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  images: string[];
  features: string[];
  customizable: boolean;
  bulkDiscounts: PriceBreak[];
  specifications: Record<string, string>;
}

export interface PriceBreak {
  minQuantity: number;
  unitPrice: number;
  setupFee?: number;
}

// Category Model
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  featuredImage: string;
  products: Product[];
  subcategories?: Category[];
}

// Testimonial Model
export interface Testimonial {
  id: string;
  customerName: string;
  organizationType: string;
  location: string;
  rating: number;
  quote: string;
  orderDetails: string;
  customerPhoto?: string;
}

// Trust Signal Model
export interface TrustSignal {
  id: string;
  icon: string;
  title: string;
  description: string;
  metric?: string;
}