import React from 'react';
import { Quote, Star } from 'lucide-react';
import type { TestimonialItem } from '@/types';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className }) => {
  return (
    <div
      className={cn(
        'bg-cream-50 border border-gold-400/25 rounded-2xl p-7 shadow-[0_2px_24px_-12px_rgba(102,18,35,0.25)] flex flex-col justify-between hover:border-gold-400/50 transition-all duration-300',
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <Quote className="w-8 h-8 text-gold-400 opacity-80" strokeWidth={1.5} />
          {testimonial.rating !== null && (
            <div className="flex items-center gap-1 text-gold-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-4 h-4',
                    i < (testimonial.rating || 0) ? 'fill-gold-400 text-gold-400' : 'text-gold-200'
                  )}
                />
              ))}
            </div>
          )}
        </div>
        <p className="text-sm md:text-base text-ink-800 italic leading-relaxed mb-6 font-serif">
          "{testimonial.quote}"
        </p>
      </div>

      <div className="pt-4 border-t border-gold-400/20 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold font-sans text-ink-900">{testimonial.name}</h4>
          <span className="text-xs text-gold-600 font-sans">{testimonial.service}</span>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-ink-700 bg-cream-200/60 px-2.5 py-1 rounded-full border border-gold-400/20">
          Verified Client
        </span>
      </div>
    </div>
  );
};
