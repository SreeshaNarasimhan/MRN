import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactCardProps {
  title: string;
  value: string;
  subValue?: string;
  iconName: string;
  href?: string;
  actionText?: string;
  className?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  title,
  value,
  subValue,
  iconName,
  href,
  actionText,
  className,
}) => {
  const IconComponent = (LucideIcons[iconName as keyof typeof LucideIcons] ||
    LucideIcons.Phone) as React.FC<{ className?: string; size?: number; strokeWidth?: number }>;

  const content = (
    <div
      className={cn(
        'bg-cream-50 border border-gold-400/30 rounded-2xl p-7 shadow-[0_2px_24px_-12px_rgba(102,18,35,0.25)] hover:border-gold-400/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full',
        className
      )}
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-maroon-700/10 flex items-center justify-center mb-5 text-maroon-700">
          <IconComponent size={24} strokeWidth={1.5} />
        </div>
        <span className="text-eyebrow block mb-1">{title}</span>
        <h3 className="text-lg md:text-xl font-semibold font-sans text-ink-900 mb-2 leading-snug">
          {value}
        </h3>
        {subValue && <p className="text-sm text-ink-700 font-sans leading-relaxed mb-4">{subValue}</p>}
      </div>

      {actionText && (
        <div className="pt-4 border-t border-gold-400/20 flex items-center text-xs font-semibold uppercase tracking-widest text-maroon-700 gap-1.5">
          <span>{actionText}</span>
          <LucideIcons.ArrowRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-2xl"
      >
        {content}
      </a>
    );
  }

  return content;
};
