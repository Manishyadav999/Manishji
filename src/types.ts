export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  applications: string[];
  advantages: string[];
  specifications: Record<string, string>;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  rating: number;
  comment: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
}

export interface Highlight {
  id: string;
  value: string;
  suffix?: string;
  label: string;
}
