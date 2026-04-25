/**
 * Dynamic Branding Configuration (White-Label Support)
 * 
 * Change these values to rebrand the entire application.
 * All components import from this config instead of hardcoding values.
 */

export const BRAND = {
  // Hotel Identity
  name: import.meta.env.VITE_HOTEL_NAME || "Cloudy Hill Cottage",
  tagline: import.meta.env.VITE_HOTEL_TAGLINE || "Your Mountain Escape in Ella",
  description: import.meta.env.VITE_HOTEL_DESCRIPTION || "Experience the magic of Sri Lanka's hill country at our boutique cottage nestled in the misty mountains of Ella.",
  
  // Logo & Images
  logo: import.meta.env.VITE_LOGO_URL || "/logo.png",
  favicon: import.meta.env.VITE_FAVICON_URL || "/favicon.ico",
  heroImage: import.meta.env.VITE_HERO_IMAGE || "/hero-bg.jpg",
  
  // Contact Information
  phone: import.meta.env.VITE_HOTEL_PHONE || "+94 77 123 4567",
  email: import.meta.env.VITE_HOTEL_EMAIL || "hello@cloudyhillcottage.com",
  address: import.meta.env.VITE_HOTEL_ADDRESS || "Ella, Badulla District, Sri Lanka",
  
  // Social Media
  social: {
    facebook: import.meta.env.VITE_SOCIAL_FACEBOOK || "https://facebook.com/cloudyhillcottage",
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || "https://instagram.com/cloudyhillcottage",
    tripadvisor: import.meta.env.VITE_SOCIAL_TRIPADVISOR || "",
  },
  
  // Owners/Hosts
  hosts: {
    names: import.meta.env.VITE_HOST_NAMES || "Renu & Nalaka",
    story: "Your hosts who have been welcoming guests to their mountain home for over a decade.",
  },
};

export const THEME = {
  // Primary Colors - "Mist & Mountain" Boutique Aesthetic
  colors: {
    primary: import.meta.env.VITE_PRIMARY_COLOR || "#1B3022",      // Deep Forest Green
    primaryLight: "#2D4A36",                                        // Lighter forest green
    primaryDark: "#0F1A14",                                         // Darker forest green
    
    secondary: import.meta.env.VITE_SECONDARY_COLOR || "#708090",  // Slate Grey
    secondaryLight: "#8A9BA8",                                      // Lighter slate
    secondaryDark: "#566573",                                       // Darker slate
    
    accent: import.meta.env.VITE_ACCENT_COLOR || "#D4AF37",        // Soft Gold
    accentLight: "#E5C76B",                                         // Lighter gold
    accentDark: "#B8960F",                                          // Darker gold
    
    // UI Colors
    background: "#FAFAFA",
    surface: "#FFFFFF",
    surfaceHover: "#F5F5F5",
    
    // Text Colors
    text: "#1A1A1A",
    textMuted: "#6B7280",
    textLight: "#9CA3AF",
    
    // Status Colors
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
    
    // Booking Status Colors
    status: {
      pending: { bg: "#FEF3C7", text: "#92400E", border: "#F59E0B" },
      confirmed: { bg: "#D1FAE5", text: "#065F46", border: "#10B981" },
      completed: { bg: "#DBEAFE", text: "#1E40AF", border: "#3B82F6" },
      cancelled: { bg: "#FEE2E2", text: "#991B1B", border: "#EF4444" },
    },
    
    // Loyalty Status Colors
    loyalty: {
      standard: { bg: "#F3F4F6", text: "#374151" },
      silver: { bg: "#E5E7EB", text: "#1F2937" },
      gold: { bg: "#FEF3C7", text: "#92400E" },
      platinum: { bg: "#EDE9FE", text: "#5B21B6" },
    },
  },
  
  // Typography
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  
  // Spacing & Sizing
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
  
  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  
  // Glassmorphism
  glass: {
    background: "rgba(255, 255, 255, 0.8)",
    backdropBlur: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
};

// Animation Presets for Framer Motion
export const ANIMATIONS = {
  // Page transitions
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  
  // Stagger children (for lists)
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  
  // Individual item in stagger
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  },
  
  // Card hover effect
  cardHover: {
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    transition: { duration: 0.2 },
  },
  
  // Fade in
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  
  // Slide in from left
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4 },
  },
  
  // Slide in from right
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4 },
  },
  
  // Scale up
  scaleUp: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 },
  },
};

// Currency Configuration
export const CURRENCY = {
  code: import.meta.env.VITE_CURRENCY_CODE || "LKR",
  symbol: import.meta.env.VITE_CURRENCY_SYMBOL || "LKR",
  locale: import.meta.env.VITE_LOCALE || "en-LK",
  
  format: (amount) => {
    return new Intl.NumberFormat(CURRENCY.locale, {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  },
  
  display: (amount) => `${CURRENCY.symbol} ${CURRENCY.format(amount)}`,
};

// Helper function to get CSS variables
export const getCSSVariables = () => ({
  "--color-primary": THEME.colors.primary,
  "--color-primary-light": THEME.colors.primaryLight,
  "--color-primary-dark": THEME.colors.primaryDark,
  "--color-secondary": THEME.colors.secondary,
  "--color-accent": THEME.colors.accent,
  "--font-heading": THEME.fonts.heading,
  "--font-body": THEME.fonts.body,
});

export default { BRAND, THEME, ANIMATIONS, CURRENCY };
