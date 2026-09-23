import { useState, useCallback } from 'react';
import type { GalleryItem } from '@/types';

export function useLightbox(items: GalleryItem[]) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % items.length : null));
  }, [items.length]);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null));
  }, [items.length]);

  const currentItem = selectedIndex !== null ? items[selectedIndex] : null;

  return {
    selectedIndex,
    currentItem,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
    isOpen: selectedIndex !== null,
  };
}
