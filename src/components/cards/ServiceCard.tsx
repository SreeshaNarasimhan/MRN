import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import type { ServiceItem } from '@/types';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  showCovers?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  className,
  showCovers = false,
}) => {
  // Dynamically resolve icon or fallback to Sparkles
  const IconComponent = (LucideIcons[service.iconName as keyof typeof LucideIcons] ||
    LucideIcons.Sparkles) as React.FC<{ className?: string; size?: number; strokeWidth?: number }>;

  return (
    <div
      className={cn(
        'group bg-cream-50 border border-gold-400/25 rounded-2xl p-7 shadow-[0_2px_24px_-12px_rgba(102,18,35,0.25)] hover:border-gold-400/60 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(102,18,35,0.35)] transition-all duration-300 flex flex-col justify-between',
        className
      )}
    >
      <div>
        <div className="w-11 h-11 rounded-xl bg-maroon-700/10 flex items-center justify-center mb-5 text-maroon-700 group-hover:bg-maroon-700 group-hover:text-cream-50 transition-colors duration-300">
          <IconComponent size={22} strokeWidth={1.5} />
        </div>

        <h3 className="text-h3 font-serif font-semibold text-ink-900 mb-3 group-hover:text-maroon-700 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm md:text-base text-ink-700 leading-relaxed mb-4">
          {service.shortDesc}
        </p>

        {showCovers && service.covers && service.covers.length > 0 && (
          <ul className="mb-6 space-y-2 border-t border-gold-400/20 pt-4">
            {service.covers.map((item, idx) => (
              <li key={idx} className="text-xs md:text-sm text-ink-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-gold-400/15">
        <Link
          to={`/book-appointment?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center text-xs font-semibold tracking-widest text-maroon-700 uppercase group-hover:text-gold-600 transition-colors gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm"
        >
          <span>Consultation Guidance</span>
          <LucideIcons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
