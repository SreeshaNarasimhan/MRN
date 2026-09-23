import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Camera, Plus } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { homepageAstrologyGallery } from '@/data/gallery';
import { Lightbox } from '@/components/common/Lightbox';
import type { GalleryItem } from '@/types';

export const HomepageGalleryPreview: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Lightbox state for active real photos
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Extract active real items for Lightbox navigation
  const activeRealItems: GalleryItem[] = homepageAstrologyGallery
    .filter((slot): slot is GalleryItem & { src: string } => typeof slot.src === 'string' && slot.src.length > 0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    checkScroll();
    container.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    // Scroll approximately one card width plus gap
    const scrollAmount = 400;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <Section bg="cream-50" className="py-10 md:py-14 border-b border-gold-400/20 overflow-hidden">
      {/* Section Header with PREVIOUS / NEXT buttons */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <SectionHeading
          eyebrow="OUR GALLERY PREVIEW"
          title="A GLIMPSE INTO OUR JOURNEY"
          subtitle="Moments from astrology consultations, traditional rituals, special occasions and divine celebrations."
          align="left"
          className="mb-0 max-w-2xl text-center md:text-left"
        />

        {/* PREVIOUS / NEXT Scroll Control Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="group flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream-100 text-maroon-900 border border-gold-400/40 hover:bg-maroon-900 hover:text-gold-300 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            <span className="text-xs font-sans font-semibold tracking-wider uppercase">PREVIOUS</span>
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="group flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream-100 text-maroon-900 border border-gold-400/40 hover:bg-maroon-900 hover:text-gold-300 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span className="text-xs font-sans font-semibold tracking-wider uppercase">NEXT</span>
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Real Horizontal Scroll Container with Visible Styled Scrollbar */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto overflow-y-hidden custom-horizontal-scrollbar pb-5 pt-1 scroll-smooth focus-visible:outline-none select-none"
        tabIndex={0}
        aria-label="Horizontal photo gallery slider"
      >
        {/* Inner Track — Width set to max-content with flex-nowrap */}
        <div className="flex flex-nowrap gap-6 w-max">
          {homepageAstrologyGallery.map((slot, index) => {
            const hasImage = typeof slot.src === 'string' && slot.src.length > 0;

            if (hasImage) {
              const activeIndex = activeRealItems.findIndex((r) => r.id === slot.id);

              return (
                <div
                  key={slot.id}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo: ${slot.caption}`}
                  onClick={() => activeIndex !== -1 && setLightboxIndex(activeIndex)}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && activeIndex !== -1) {
                      e.preventDefault();
                      setLightboxIndex(activeIndex);
                    }
                  }}
                  className="flex-none w-[85vw] sm:w-[340px] md:w-[380px] lg:w-[400px] group relative bg-cream-100 rounded-2xl overflow-hidden border border-gold-400/40 shadow-md transition-all duration-300 hover:border-gold-400/80 hover:shadow-xl cursor-pointer aspect-[4/3]"
                >
                  <ImageWithFallback
                    src={slot.src!}
                    alt={slot.alt}
                    objectFit="cover"
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[10px] font-semibold tracking-widest text-gold-300 uppercase mb-1 font-sans">
                      {slot.category}
                    </span>
                    <p className="text-sm font-serif font-semibold text-cream-50 leading-snug">
                      {slot.caption}
                    </p>
                  </div>
                </div>
              );
            }

            {/* Elegant Empty Future Photo Slot (Slot 5) */}
            return (
              <div
                key={slot.id}
                className="flex-none w-[85vw] sm:w-[340px] md:w-[380px] lg:w-[400px] bg-cream-100/60 border-2 border-dashed border-gold-400/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-inner aspect-[4/3] relative overflow-hidden group hover:border-gold-400/70 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Camera className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="text-xs font-serif font-bold tracking-widest text-maroon-900 uppercase block mb-1">
                  {slot.slotLabel || `PHOTO 0${index + 1}`}
                </span>
                <p className="text-xs font-sans text-ink-700 leading-snug mb-3 max-w-[200px]">
                  Future Photo Slot
                </p>
                <span className="inline-flex items-center text-[10px] font-sans font-semibold tracking-wider text-gold-700 uppercase bg-gold-400/20 border border-gold-400/30 px-3 py-1 rounded-full">
                  <Plus className="w-3 h-3 mr-1 text-gold-600" /> FUTURE PHOTO SLOT
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* View Full Gallery Link Button */}
      <div className="mt-8 text-center">
        <Button variant="primary" size="lg" as={Link} to="/gallery">
          <span>VIEW FULL GALLERY</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

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
    </Section>
  );
};
