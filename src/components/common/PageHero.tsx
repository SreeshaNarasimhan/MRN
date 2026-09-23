import React from 'react';
import { Container } from '@/components/ui/Container';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow = 'SUDHARSHANA LAKSHMI NARASIMHAA',
  title,
  subtitle,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative bg-maroon-900 text-cream-50 pt-16 md:pt-24 pb-16 md:pb-24 border-b border-gold-400/25 overflow-hidden',
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C9A24A_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center max-w-3xl mx-auto">
        <span className="text-eyebrow text-gold-400 block mb-3">{eyebrow}</span>
        <h1 className="text-display font-serif font-bold text-cream-50 tracking-tight mb-4">
          {title}
        </h1>
        <OrnamentDivider light className="justify-center my-4" />
        {subtitle && (
          <p className="text-base md:text-lg text-cream-100/90 font-sans leading-relaxed max-w-2xl mx-auto mt-4">
            {subtitle}
          </p>
        )}
      </Container>
    </div>
  );
};
