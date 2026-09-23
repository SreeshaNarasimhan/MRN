import React from 'react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { services } from '@/data/services';
import { Reveal } from '@/components/ui/Reveal';

export const ServicesSection: React.FC = () => {
  return (
    <Section bg="cream-100" id="services">
      <SectionHeading
        eyebrow="OUR SERVICES"
        title="TRADITIONAL ASTROLOGY & SACRED RITUALS"
        subtitle="Comprehensive Vedic consultation, planetary analysis, Vastu guidelines, and traditional priest services."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.05}>
            <ServiceCard service={service} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
