import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '@/types';
import { useScrollLock } from '@/hooks/useScrollLock';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

interface LightboxProps {
  isOpen: boolean;
  currentItem: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentItem,
  onClose,
  onNext,
  onPrev,
}) => {
  useScrollLock(isOpen);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-maroon-950/90 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute -top-12 right-0 sm:top-2 sm:-right-12 z-20 text-cream-100 hover:text-gold-400 bg-maroon-900/80 p-2.5 rounded-full border border-gold-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <button
          onClick={onPrev}
          aria-label="Previous Image"
          className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 z-20 text-cream-100 hover:text-gold-400 bg-maroon-900/80 p-3 rounded-full border border-gold-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={onNext}
          aria-label="Next Image"
          className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 z-20 text-cream-100 hover:text-gold-400 bg-maroon-900/80 p-3 rounded-full border border-gold-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="bg-cream-50 p-2 sm:p-4 rounded-2xl border border-gold-400/50 shadow-2xl overflow-hidden max-h-[75vh] flex flex-col items-center">
          <ImageWithFallback
            src={currentItem.src}
            alt={currentItem.alt}
            className="max-h-[65vh] w-auto object-contain rounded-xl"
          />
          <div className="mt-3 text-center px-4 py-1">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-1">
              {currentItem.category}
            </span>
            <p className="text-sm md:text-base font-serif font-semibold text-ink-900">
              {currentItem.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
