// Constants and static data for B2B E-commerce Website

// Design System Constants
export const COLORS = {
  LN_RED: '#C00',
  LN_BLUE: '#0056A3',
  LN_YELLOW: '#FFD700',
  LN_GRAY: '#F5F5F5',
  BORDER_GRAY: '#DDD',
} as const;

export const LAYOUT = {
  CONTAINER_MAX_WIDTH: '1200px',
  HEADER_HEIGHT: '80px',
  GRID_GAP_STANDARD: '20px',
  GRID_GAP_MAJOR: '30px',
  CARD_SIZE: {
    WIDTH: '300px',
    HEIGHT: '250px',
  },
  FEATURED_PRODUCT_WIDTH: '200px',
} as const;

// Company Information
export const COMPANY_INFO = {
  NAME: 'LANYARD NATION',
  ESTABLISHED: 'EST. 2008',
  PHONE: '1-800-LANYARD',
  PHONE_DISPLAY: '1-800-LANYARD',
  TRUSTPILOT_RATING: '4.9/5',
  ORDERS_DELIVERED: '100,000+',
  ORGANIZATIONS_SERVED: '5,000+',
} as const;

// Navigation Categories
export const NAVIGATION_CATEGORIES = [
  'All Products',
  'Lanyards',
  'ID Cards',
  'Wristbands',
  'Can Coolers',
  'Patches',
  'Tote Bags',
  'Lapel Pins',
  'Trade Show & Events',
  'Bulk Orders',
  'Request Quote',
] as const;

// Product Categories for Grid
export const PRODUCT_CATEGORIES = [
  'Custom Lanyards',
  'ID Cards & Holders',
  'Silicone Wristbands',
  'Tyvek Wristbands',
  'Fabric Wristbands',
  'Can Coolers',
  'Embroidered Patches',
  'Tote Bags',
  'Lapel Pins',
  'Lanyard Accessories',
  'Event Kits',
  'Custom Branding Suite',
] as const;

// Product Category Data for Grid
export const PRODUCT_CATEGORY_DATA = [
  {
    id: 'custom-lanyards',
    name: 'Custom Lanyards',
    image: '/images/categories/custom-lanyards.jpg',
    startingPrice: 0.89,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/custom-lanyards',
  },
  {
    id: 'id-cards-holders',
    name: 'ID Cards & Holders',
    image: '/images/categories/id-cards.jpg',
    startingPrice: 0.45,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/id-cards',
  },
  {
    id: 'silicone-wristbands',
    name: 'Silicone Wristbands',
    image: '/images/categories/silicone-wristbands.jpg',
    startingPrice: 0.35,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/silicone-wristbands',
  },
  {
    id: 'tyvek-wristbands',
    name: 'Tyvek Wristbands',
    image: '/images/categories/tyvek-wristbands.jpg',
    startingPrice: 0.25,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/tyvek-wristbands',
  },
  {
    id: 'fabric-wristbands',
    name: 'Fabric Wristbands',
    image: '/images/categories/fabric-wristbands.jpg',
    startingPrice: 0.65,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/fabric-wristbands',
  },
  {
    id: 'can-coolers',
    name: 'Can Coolers',
    image: '/images/categories/can-coolers.jpg',
    startingPrice: 1.25,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/can-coolers',
  },
  {
    id: 'embroidered-patches',
    name: 'Embroidered Patches',
    image: '/images/categories/embroidered-patches.jpg',
    startingPrice: 1.89,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/embroidered-patches',
  },
  {
    id: 'tote-bags',
    name: 'Tote Bags',
    image: '/images/categories/tote-bags.jpg',
    startingPrice: 2.45,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/tote-bags',
  },
  {
    id: 'lapel-pins',
    name: 'Lapel Pins',
    image: '/images/categories/lapel-pins.jpg',
    startingPrice: 1.15,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/lapel-pins',
  },
  {
    id: 'lanyard-accessories',
    name: 'Lanyard Accessories',
    image: '/images/categories/lanyard-accessories.jpg',
    startingPrice: 0.35,
    features: ['Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/lanyard-accessories',
  },
  {
    id: 'event-kits',
    name: 'Event Kits',
    image: '/images/categories/event-kits.jpg',
    startingPrice: 4.99,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/event-kits',
  },
  {
    id: 'custom-branding-suite',
    name: 'Custom Branding Suite',
    image: '/images/categories/branding-suite.jpg',
    startingPrice: 9.99,
    features: ['Custom Printing', 'Bulk Discounts'],
    ctaText: 'VIEW PRODUCTS',
    ctaLink: '/products/branding-suite',
  },
] as const;

// Trust Signals
export const TRUST_SIGNALS = [
  'Factory Direct',
  'Bulk Specialists',
  'Fast Turnaround',
  'Free Design',
] as const;

// Trust Signal Data
export const TRUST_SIGNAL_DATA = [
  {
    id: 'factory-direct',
    icon: '🏭',
    title: 'Factory Direct',
    description: 'No middlemen, lowest prices guaranteed',
    metric: 'Save up to 40%',
  },
  {
    id: 'bulk-specialists',
    icon: '📦',
    title: 'Bulk Specialists',
    description: 'Experts in large quantity orders',
    metric: '10+ years experience',
  },
  {
    id: 'fast-turnaround',
    icon: '⚡',
    title: 'Fast Turnaround',
    description: 'Rush orders available',
    metric: '7-day standard',
  },
  {
    id: 'free-design',
    icon: '🎨',
    title: 'Free Design',
    description: 'Professional design service included',
    metric: 'No setup fees',
  },
] as const;

// Organization Logos (placeholder data)
export const TRUSTED_ORGANIZATIONS = [
  { name: 'Harvard University', logo: '/images/logos/harvard.png' },
  { name: 'Microsoft', logo: '/images/logos/microsoft.png' },
  { name: 'Nike', logo: '/images/logos/nike.png' },
  { name: 'Apple', logo: '/images/logos/apple.png' },
  { name: 'Google', logo: '/images/logos/google.png' },
  { name: 'Amazon', logo: '/images/logos/amazon.png' },
  { name: 'Stanford University', logo: '/images/logos/stanford.png' },
  { name: 'IBM', logo: '/images/logos/ibm.png' },
] as const;

// Industries Served
export const INDUSTRIES = [
  'Schools & Universities',
  'Corporations & Businesses',
  'Trade Shows & Conventions',
  'Non-Profits & NGOs',
  'Sports Events',
  'Political Campaigns',
] as const;

// Trust Badges
export const TRUST_BADGES = [
  'Norton Secured',
  'BBB A+',
  'SSL',
] as const;

// Notification Bar Message
export const NOTIFICATION_MESSAGE = 
  '100,000+ Bulk Orders Delivered | 4.9/5 Trustpilot | FREE Shipping on Orders $500+ | 24/7 Bulk Order Hotline: 1-800-LANYARD';

// Search Placeholder
export const SEARCH_PLACEHOLDER = 'Search 1000+ Products, Styles, SKUs...';

// Hero Slider Settings
export const HERO_SLIDER_CONFIG = {
  AUTO_ROTATE_INTERVAL: 5000, // 5 seconds
  SHOW_DOTS: true,
} as const;

// Hero Slider Slides Data
export const HERO_SLIDES = [
  {
    title: 'Custom Lanyards for Schools & Events',
    subtitle: 'Professional ID solutions with bulk pricing',
    price: 'Starting at $0.89/unit',
    features: ['Free Design Proof', '7-Day Turnaround', '100% Satisfaction'],
    ctaText: 'GET INSTANT QUOTE',
    ctaLink: '/quote/lanyards',
    backgroundTheme: 'red' as const,
    productImages: [
      '/images/hero/lanyard-collage-1.jpg',
      '/images/hero/lanyard-collage-2.jpg',
      '/images/hero/lanyard-collage-3.jpg',
    ],
  },
  {
    title: 'Silicone Wristbands - Most Popular',
    subtitle: 'Durable, comfortable, and fully customizable',
    price: 'Starting at $0.35/unit',
    features: ['Free Design Proof', '7-Day Turnaround', '100% Satisfaction'],
    ctaText: 'CUSTOMIZE NOW',
    ctaLink: '/quote/wristbands',
    backgroundTheme: 'blue' as const,
    productImages: [
      '/images/hero/wristband-collage-1.jpg',
      '/images/hero/wristband-collage-2.jpg',
      '/images/hero/wristband-collage-3.jpg',
    ],
  },
  {
    title: 'Trade Show & Event Packages',
    subtitle: 'Complete branding solutions for your next event',
    price: 'Starting at $2.50/unit',
    features: ['Free Design Proof', '7-Day Turnaround', '100% Satisfaction'],
    ctaText: 'VIEW PACKAGES',
    ctaLink: '/quote/event-packages',
    backgroundTheme: 'green' as const,
    productImages: [
      '/images/hero/event-collage-1.jpg',
      '/images/hero/event-collage-2.jpg',
      '/images/hero/event-collage-3.jpg',
    ],
  },
] as const;

// Performance Requirements
export const PERFORMANCE = {
  PAGE_LOAD_TARGET: 3000, // 3 seconds
  INTERACTION_RESPONSE_TARGET: 100, // 100ms
} as const;

// Sample Product Data for Mega Menu Dropdowns
export const MEGA_MENU_PRODUCTS = {
  lanyards: [
    { id: 'l1', name: 'Custom Printed Lanyards', image: '/images/products/custom-lanyards.jpg', link: '/products/custom-lanyards' },
    { id: 'l2', name: 'Woven Lanyards', image: '/images/products/woven-lanyards.jpg', link: '/products/woven-lanyards' },
    { id: 'l3', name: 'Retractable Lanyards', image: '/images/products/retractable-lanyards.jpg', link: '/products/retractable-lanyards' },
    { id: 'l4', name: 'Breakaway Lanyards', image: '/images/products/breakaway-lanyards.jpg', link: '/products/breakaway-lanyards' },
  ],
  'id-cards': [
    { id: 'id1', name: 'PVC ID Cards', image: '/images/products/pvc-id-cards.jpg', link: '/products/pvc-id-cards' },
    { id: 'id2', name: 'Badge Holders', image: '/images/products/badge-holders.jpg', link: '/products/badge-holders' },
    { id: 'id3', name: 'ID Card Printers', image: '/images/products/id-printers.jpg', link: '/products/id-printers' },
    { id: 'id4', name: 'Magnetic Cards', image: '/images/products/magnetic-cards.jpg', link: '/products/magnetic-cards' },
  ],
  wristbands: [
    { id: 'w1', name: 'Silicone Wristbands', image: '/images/products/silicone-wristbands.jpg', link: '/products/silicone-wristbands' },
    { id: 'w2', name: 'Tyvek Wristbands', image: '/images/products/tyvek-wristbands.jpg', link: '/products/tyvek-wristbands' },
    { id: 'w3', name: 'Vinyl Wristbands', image: '/images/products/vinyl-wristbands.jpg', link: '/products/vinyl-wristbands' },
    { id: 'w4', name: 'Fabric Wristbands', image: '/images/products/fabric-wristbands.jpg', link: '/products/fabric-wristbands' },
  ],
  'can-coolers': [
    { id: 'c1', name: 'Neoprene Can Coolers', image: '/images/products/neoprene-coolers.jpg', link: '/products/neoprene-coolers' },
    { id: 'c2', name: 'Foam Can Coolers', image: '/images/products/foam-coolers.jpg', link: '/products/foam-coolers' },
    { id: 'c3', name: 'Bottle Coolers', image: '/images/products/bottle-coolers.jpg', link: '/products/bottle-coolers' },
    { id: 'c4', name: 'Collapsible Coolers', image: '/images/products/collapsible-coolers.jpg', link: '/products/collapsible-coolers' },
  ],
  patches: [
    { id: 'p1', name: 'Embroidered Patches', image: '/images/products/embroidered-patches.jpg', link: '/products/embroidered-patches' },
    { id: 'p2', name: 'Woven Patches', image: '/images/products/woven-patches.jpg', link: '/products/woven-patches' },
    { id: 'p3', name: 'PVC Patches', image: '/images/products/pvc-patches.jpg', link: '/products/pvc-patches' },
    { id: 'p4', name: 'Leather Patches', image: '/images/products/leather-patches.jpg', link: '/products/leather-patches' },
  ],
  'tote-bags': [
    { id: 't1', name: 'Canvas Tote Bags', image: '/images/products/canvas-totes.jpg', link: '/products/canvas-totes' },
    { id: 't2', name: 'Non-Woven Tote Bags', image: '/images/products/nonwoven-totes.jpg', link: '/products/nonwoven-totes' },
    { id: 't3', name: 'Cotton Tote Bags', image: '/images/products/cotton-totes.jpg', link: '/products/cotton-totes' },
    { id: 't4', name: 'Drawstring Bags', image: '/images/products/drawstring-bags.jpg', link: '/products/drawstring-bags' },
  ],
  'lapel-pins': [
    { id: 'lp1', name: 'Enamel Lapel Pins', image: '/images/products/enamel-pins.jpg', link: '/products/enamel-pins' },
    { id: 'lp2', name: 'Die Struck Pins', image: '/images/products/die-struck-pins.jpg', link: '/products/die-struck-pins' },
    { id: 'lp3', name: 'Photo Etched Pins', image: '/images/products/photo-etched-pins.jpg', link: '/products/photo-etched-pins' },
    { id: 'lp4', name: 'Trading Pins', image: '/images/products/trading-pins.jpg', link: '/products/trading-pins' },
  ],
} as const;