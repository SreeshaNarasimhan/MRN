import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  bg?: 'cream-50' | 'cream-100' | 'maroon-900' | 'maroon-950';
  className?: string;
  containerClassName?: string;
  pattern?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  bg = 'cream-50',
  className,
  containerClassName,
  pattern = false,
}) => {
  const bgClasses = {
    'cream-50': 'bg-cream-50 text-ink-800',
    'cream-100': 'bg-cream-100 text-ink-800 border-y border-gold-400/15',
    'maroon-900': 'bg-maroon-900 text-cream-50 border-y border-gold-400/20',
    'maroon-950': 'bg-maroon-950 text-cream-50',
  };

  return (
    <section
      id={id}
      className={cn(
        'relative py-16 md:py-24 lg:py-28 overflow-hidden',
        bgClasses[bg],
        className
      )}
    >
      {pattern && (bg === 'maroon-900' || bg === 'maroon-950') && (
        <div
          className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C9A24A_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />
      )}
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};
