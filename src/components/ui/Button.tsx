import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'outline' | 'ghostGold';
  size?: 'sm' | 'md' | 'lg';
  as?: any;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as,
  to,
  href,
  target,
  rel,
  children,
  className,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.08em] uppercase rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2';

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const variantClasses = {
    primary:
      'bg-maroon-700 text-cream-50 hover:bg-maroon-800 hover:-translate-y-0.5 shadow-[0_4px_20px_-4px_rgba(102,18,35,0.4)]',
    gold:
      'bg-gold-400 text-maroon-900 hover:bg-gold-300 hover:-translate-y-0.5 shadow-[0_4px_20px_-4px_rgba(201,162,74,0.4)]',
    outline:
      'border border-maroon-700/40 text-maroon-700 hover:bg-maroon-700 hover:text-cream-50 hover:-translate-y-0.5',
    ghostGold:
      'border border-gold-400/50 text-gold-200 hover:bg-gold-400 hover:text-maroon-900 hover:-translate-y-0.5',
  };

  const combinedClasses = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

  if (to || as === Link) {
    return (
      <Link to={to || '#'} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (as === 'a' || href) {
    return (
      <a href={href || '#'} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
