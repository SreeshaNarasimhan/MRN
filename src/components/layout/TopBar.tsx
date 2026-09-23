import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { business } from '@/data/business';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-maroon-900 text-gold-300 py-2 px-4 text-[11px] sm:text-xs font-sans tracking-[0.15em] uppercase border-b border-gold-400/20">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
        {/* Left: Phone */}
        <a
          href={business.phone.href}
          className="flex items-center gap-1.5 hover:text-cream-50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded-sm"
        >
          <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
          <span>{business.phone.display}</span>
        </a>

        {/* Centre: Consultation note (Hidden on mobile < md) */}
        <span className="hidden md:inline-block text-gold-300 font-semibold tracking-[0.2em] text-[11px]">
          {business.consultationNote}
        </span>

        {/* Right: Location */}
        <a
          href={business.maps.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-cream-50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded-sm"
        >
          <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
          <span>{business.city}</span>
        </a>
      </div>
    </div>
  );
};
