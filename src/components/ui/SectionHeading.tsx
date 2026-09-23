import React from 'react';
import { cn } from '@/lib/utils';
import { OrnamentDivider } from './OrnamentDivider';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={cn('max-w-3xl mb-12 md:mb-16', alignClasses, className)}>
      {eyebrow && <span className="text-eyebrow block mb-2">{eyebrow}</span>}
      <h2
        className={cn(
          'text-h2 font-serif font-semibold tracking-tight',
          light ? 'text-cream-50' : 'text-ink-900'
        )}
      >
        {title}
      </h2>
      <OrnamentDivider light={light} className={align === 'left' ? 'justify-start' : 'justify-center'} />
      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg max-w-2xl mt-3 font-sans leading-relaxed',
            align === 'center' ? 'mx-auto' : '',
            light ? 'text-cream-200/90' : 'text-ink-700'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
