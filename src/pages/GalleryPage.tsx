import React from 'react';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { Seo } from '@/components/common/Seo';
import { GalleryGrid } from '@/components/common/GalleryGrid';
import { galleryItems } from '@/data/gallery';

export const GalleryPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Our Gallery"
        description="Explore photo moments from astrology consultations, traditional rituals, special occasions and divine celebrations at Sudharshana Lakshmi Narasimhaa Astrology Centre."
        path="/gallery"
      />

      <PageHero
        title="OUR GALLERY"
        subtitle="Moments from astrology consultations, traditional rituals, special occasions and divine celebrations."
      />

      <Section bg="cream-50">
        <SectionHeading
          eyebrow="PHOTO COLLECTION"
          title="OUR GALLERY"
          subtitle="Moments from astrology consultations, traditional rituals, special occasions and divine celebrations."
        />

        <GalleryGrid items={galleryItems} />

        <div className="mt-12 text-center text-xs font-sans text-ink-700 italic max-w-2xl mx-auto">
          Displaying authentic photos from Sri Narasimachari&apos;s consultation work, sacred rituals, and divine sanctum moments.
        </div>
      </Section>

      <CTASection />
    </>
  );
};
