import React from 'react';
import { cn } from '@/lib/utils';

interface OrnamentDividerProps {
  className?: string;
  light?: boolean;
}

export const OrnamentDivider: React.FC<OrnamentDividerProps> = ({ className, light = false }) => {
  return (
    <div className={cn('flex items-center justify-center gap-3 my-4', className)} aria-hidden="true">
      <div className={cn('h-[1px] w-12 sm:w-16', light ? 'bg-gold-400/40' : 'bg-gold-500/40')} />
      <div className={cn('w-2 h-2 rotate-45 border', light ? 'border-gold-300 bg-gold-400/20' : 'border-gold-500 bg-gold-400')} />
      <div className={cn('h-[1px] w-12 sm:w-16', light ? 'bg-gold-400/40' : 'bg-gold-500/40')} />
    </div>
  );
};
