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

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
