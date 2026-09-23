import type { FaqItem } from '@/types';
import { business } from './business';

export const faqs: FaqItem[] = [
  {
    id: 'services-available',
    question: 'What services are available?',
    answer: `${business.shortName} offers professional Astrology Consultation, Birth Chart (Kundali) Analysis, Marriage Compatibility & Kundali Matching, Career & Business Guidance, Vastu Spatial Consultation, and Traditional Hindu Pooja & Priest Services.`
  },
  {
    id: 'how-to-book',
    question: 'How can I book a consultation?',
    answer: `You can submit a request through our online Book Appointment form, call us directly at ${business.phone.display}, or send a message via WhatsApp.`
  },
  {
    id: 'appointment-only',
    question: 'Is consultation by appointment only?',
    answer: `Yes, consultation is strictly by appointment only to ensure dedicated time and personalized attention for every individual.`
  },
  {
    id: 'location',
    question: 'Where is the centre located?',
    answer: `Our centre is located at ${business.address.full}.`
  },
  {
    id: 'how-to-contact',
    question: 'How can I contact the astrologer?',
    answer: `You may contact ${business.astrologer} via phone at ${business.phone.display} or WhatsApp at ${business.whatsapp.display}. Direct visits are accommodated by prior appointment.`
  }
];
