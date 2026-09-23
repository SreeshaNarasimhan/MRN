import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { business } from '@/data/business';

export const FloatingActions: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-6 right-6 z-40 flex flex-col gap-3 pointer-events-auto">
      <a
        href={business.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 transition-transform hover:scale-105"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
      <a
        href={business.phone.href}
        aria-label="Call Astrology Centre"
        className="w-12 h-12 rounded-full bg-maroon-700 text-cream-50 flex items-center justify-center shadow-lg hover:bg-maroon-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 transition-transform hover:scale-105 border border-gold-400/40"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};
