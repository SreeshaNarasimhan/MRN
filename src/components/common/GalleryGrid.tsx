import React, { useState, useMemo } from 'react';
import type { GalleryItemSlot, GalleryCategory, GalleryItem } from '@/types';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Lightbox } from './Lightbox';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Camera, Plus } from 'lucide-react';

interface GalleryGridProps {
  items: GalleryItemSlot[];
}

const CATEGORIES: Array<'ALL' | GalleryCategory> = [
  'ALL',
  'ASTROLOGY & CONSULTATION',
  'POOJA & RITUALS',
  'EVENTS & OCCASIONS',
  'DIVINE MOMENTS',
];

const INITIAL_PAGE_SIZE = 15;

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | GalleryCategory>('ALL');
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on selected category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'ALL') {
      // In ALL view, show active real items first, then empty slots
      const realItems = items.filter((item) => typeof item.src === 'string' && item.src.length > 0);
      const emptySlots = items.filter((item) => item.src === null);
      return [...realItems, ...emptySlots];
    }
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  // Filter active real items for Lightbox modal
  const activeRealItems = useMemo(() => {
    return filteredItems
      .filter((item): item is GalleryItemSlot & { src: string } => typeof item.src === 'string' && item.src.length > 0)
      .map((item) => ({
        id: item.id,
        src: item.src,
        alt: item.alt,
        caption: item.caption,
        category: item.category,
      } as GalleryItem));
  }, [filteredItems]);

  const handleCategoryChange = (category: 'ALL' | GalleryCategory) => {
    setSelectedCategory(category);
    setVisibleCount(INITIAL_PAGE_SIZE);
    setLightboxIndex(null);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + INITIAL_PAGE_SIZE);
  };

  const handleRealItemClick = (item: GalleryItemSlot) => {
    if (!item.src) return;
    const activeIndex = activeRealItems.findIndex((r) => r.id === item.id);
    if (activeIndex !== -1) {
      setLightboxIndex(activeIndex);
    }
  };

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                'px-4 py-2 text-xs md:text-sm font-sans font-semibold tracking-wider uppercase rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400',
                isActive
                  ? 'bg-maroon-700 text-cream-50 shadow-md border border-gold-400/40'
                  : 'bg-cream-100 text-ink-800 hover:bg-maroon-900/10 hover:text-maroon-700 border border-gold-400/20'
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid Display */}
      {displayedItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedItems.map((item, index) => {
            const hasImage = typeof item.src === 'string' && item.src.length > 0;

            if (hasImage) {
              return (
                <div
                  key={item.id}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo: ${item.caption}`}
                  onClick={() => handleRealItemClick(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleRealItemClick(item);
                    }
                  }}
                  className="group relative bg-cream-50 rounded-2xl overflow-hidden border border-gold-400/30 shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 aspect-[4/3] transition-all duration-300 hover:border-gold-400/70 hover:shadow-xl"
                >
                  <ImageWithFallback
                    src={item.src!}
                    alt={item.alt}
                    objectFit="cover"
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-maroon-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[10px] font-semibold tracking-widest text-gold-300 uppercase mb-1 font-sans">
                      {item.category}
                    </span>
                    <p className="text-sm font-serif font-semibold text-cream-50 leading-snug">
                      {item.caption}
                    </p>
                  </div>
                </div>
              );
            }

            {/* Elegant Empty Photo Slot */}
            return (
              <div
                key={item.id}
                className="bg-cream-100/60 border-2 border-dashed border-gold-400/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-inner aspect-[4/3] relative overflow-hidden group hover:border-gold-400/70 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Camera className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="text-xs font-serif font-bold tracking-widest text-maroon-900 uppercase block mb-1">
                  {item.slotLabel || `SLOT 0${(index % 5) + 1}`}
                </span>
                <p className="text-xs font-sans text-ink-700 leading-snug mb-3 max-w-[200px]">
                  {item.category}
                </p>
                <span className="inline-flex items-center text-[10px] font-sans font-semibold tracking-wider text-gold-700 uppercase bg-gold-400/20 border border-gold-400/30 px-3 py-1 rounded-full">
                  <Plus className="w-3 h-3 mr-1 text-gold-600" /> FUTURE PHOTO SLOT
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State for category with no images yet */
        <div className="bg-cream-100 border border-gold-400/30 rounded-2xl p-12 text-center max-w-xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-maroon-700/10 text-maroon-700 flex items-center justify-center mx-auto">
            <Camera className="w-6 h-6 stroke-[1.5]" />
          </div>
          <h3 className="text-xl font-serif font-semibold text-ink-900">
            {selectedCategory}
          </h3>
          <p className="text-sm text-ink-700 font-sans leading-relaxed">
            Photos for this category will be added as new rituals and events take place.
          </p>
          <Button variant="outline" size="sm" onClick={() => handleCategoryChange('ALL')}>
            VIEW ALL PHOTOS
          </Button>
        </div>
      )}

      {/* Load More Button if more items exist */}
      {filteredItems.length > visibleCount && (
        <div className="text-center pt-4">
          <Button variant="gold" onClick={handleLoadMore}>
            LOAD MORE SLOTS ({filteredItems.length - visibleCount} REMAINING)
          </Button>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && activeRealItems.length > 0 && (
        <Lightbox
          isOpen={true}
          currentItem={activeRealItems[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % activeRealItems.length : null))}
          onPrev={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + activeRealItems.length) % activeRealItems.length : null))}
        />
      )}
    </div>
  );
};
