export interface NavLinkItem {
  name: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  covers: string[];
  category: 'astrology' | 'vastu' | 'pooja' | 'guidance';
}

export interface VastuItem {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface PoojaItem {
  id: string;
  title: string;
  description: string;
  significance: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  service: string;
  quote: string;
  rating: number | null;
}

export type GalleryCategory =
  | 'ASTROLOGY & CONSULTATION'
  | 'POOJA & RITUALS'
  | 'EVENTS & OCCASIONS'
  | 'DIVINE MOMENTS';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
}

export interface GalleryItemSlot {
  id: string;
  src: string | null;
  alt: string;
  caption: string;
  category: GalleryCategory;
  slotLabel?: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}
