import React from 'react';
import { Seo } from '@/components/common/Seo';
import { HeroSection } from '@/sections/home/HeroSection';
import { ServiceHighlights } from '@/sections/home/ServiceHighlights';
import { AboutAstrologer } from '@/sections/home/AboutAstrologer';
import { ServicesSection } from '@/sections/home/ServicesSection';
import { HomepageGalleryPreview } from '@/sections/home/HomepageGalleryPreview';
import { HowItWorks } from '@/sections/home/HowItWorks';
import { WhyChooseUs } from '@/sections/home/WhyChooseUs';
import { DevotionalFeature } from '@/sections/home/DevotionalFeature';
import { TestimonialsSection } from '@/sections/home/TestimonialsSection';
import { FaqSection } from '@/sections/home/FaqSection';
import { CTASection } from '@/components/common/CTASection';

export const HomePage: React.FC = () => {
  return (
    <>
      <Seo path="/" />
      <HeroSection />
      <ServiceHighlights />
      <AboutAstrologer />
      <HomepageGalleryPreview />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseUs />
      <DevotionalFeature />
      <TestimonialsSection />
      <FaqSection />
      <CTASection />
    </>
  );
};
