import React from 'react';
import { cn } from '@/lib/utils';

interface StepCardProps {
  step: string;
  title: string;
  description: string;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({ step, title, description, className }) => {
  return (
    <div
      className={cn(
        'relative bg-cream-50 border border-gold-400/25 rounded-2xl p-8 shadow-[0_2px_24px_-12px_rgba(102,18,35,0.2)] hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between',
        className
      )}
    >
      <div>
        <span className="text-4xl md:text-5xl font-serif font-bold text-transparent [-webkit-text-stroke:1.5px_#C9A24A] block mb-4">
          {step}
        </span>
        <h3 className="text-xl font-serif font-semibold text-ink-900 mb-3 tracking-wide uppercase text-sm">
          {title}
        </h3>
        <p className="text-sm text-ink-700 leading-relaxed font-sans">{description}</p>
      </div>
    </div>
  );
};
