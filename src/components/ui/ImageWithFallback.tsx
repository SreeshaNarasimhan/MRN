import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  fallbackLabel,
  objectFit = 'cover',
  ...props
}) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={cn(
          'w-full h-full min-h-[200px] bg-cream-100 border border-dashed border-gold-400/60 rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-inner',
          className
        )}
      >
        <div className="w-12 h-12 rounded-full bg-maroon-700/10 flex items-center justify-center mb-3 text-maroon-700">
          <ImageIcon className="w-6 h-6 stroke-[1.5]" />
        </div>
        <p className="text-xs font-semibold text-maroon-900 tracking-wider uppercase mb-1">
          {fallbackLabel || alt}
        </p>
        <p className="text-[11px] text-ink-700 font-sans max-w-[220px]">
          Image placeholder — replace in src/assets/images/
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={cn('transition-opacity duration-300', objectFit === 'contain' ? 'object-contain' : 'object-cover', className)}
      {...props}
    />
  );
};
