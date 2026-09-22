export interface AffiliateConfig {
  whatsappLink: string;
  whatsappNumber: string;
  whatsappMessage: string;
  selarSingleUrl: string;
  selarBundleUrl: string;
  affiliateName: string;
  affiliateCode: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
  highlight: string;
  badge?: string;
}

export interface WhatsAppProof {
  id: string;
  title: string;
  src: string;
  caption: string;
}

export interface ModuleItem {
  number: string;
  title: string;
  summary: string;
  details: string[];
  icon: string;
}

export interface BonusItem {
  number: string;
  title: string;
  value: string;
  description: string;
  tag: string;
}



export interface BookMetadata {
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  pageCount: number;
  projectsCount: number;
  cheatSheetsCount: number;
  basePrice: number; // 2500
  currencySymbol: string;
  author: string;
  releaseYear: string;
}

export interface Chapter {
  id: number;
  partNumber: number;
  partTitle: string;
  number: number;
  title: string;
  page: number;
  description: string;
  keyTakeaway: string;
  tag: 'HTML' | 'CSS' | 'JavaScript' | 'General' | 'Project' | 'CheatSheet';
  codeSnippet?: string;
  sampleCallout?: {
    type: 'KEY IDEA' | 'THINK OF IT LIKE THIS' | 'WATCH OUT' | 'TRY IT' | 'BEYOND THE LESSON';
    text: string;
  };
}

export interface ProjectDetail {
  id: string;
  title: string;
  part: string;
  page: number;
  description: string;
  techStack: string[];
  skillsLearned: string[];
  codeHighlight: string;
  interactiveDemoId: 'profile' | 'todo' | 'weather';
}

export interface PurchaseOrder {
  id: string;
  customer_name: string;
  customer_email: string;
  country?: string;
  amount: number; // 2500
  currency: 'NGN' | 'USD';
  status: 'completed' | 'processing' | 'failed';
  payment_method: 'card' | 'bank_transfer' | 'apple_pay' | 'google_pay';
  license_key: string;
  download_url?: string;
  created_at: string;
}

export interface SupabaseConfig {
  url: string;
  anonKey: string;
  isCustom: boolean;
  tableName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'content' | 'pricing' | 'formats' | 'prerequisites';
}

export interface Testimonials {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  projectCompleted: string;
  rating: number;
}
