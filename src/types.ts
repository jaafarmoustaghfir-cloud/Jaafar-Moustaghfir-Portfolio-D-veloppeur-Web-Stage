export type VisitorIntent = 'all' | 'client' | 'recruiter' | 'jury';

export interface Project {
  id: string;
  title: string;
  sector: string;
  url: string;
  imageUrl: string;
  logoUrl?: string;
  realization: string;
  userBenefit: string;
  technologies: string[];
  metricsOrHighlight?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  badge: string;
}

export interface PackItem {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  features: string[];
  isFeatured?: boolean;
  idealFor: string;
  whatsAppMsg: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  institution: string;
  location: string;
  category: 'education' | 'association';
  description: string;
  highlights: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
