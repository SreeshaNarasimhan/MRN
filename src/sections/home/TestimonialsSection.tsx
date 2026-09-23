import React from 'react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { Reveal } from '@/components/ui/Reveal';

export const TestimonialsSection: React.FC = () => {
  return (
    <Section bg="cream-50" id="testimonials">
      <SectionHeading
        eyebrow="CLIENT EXPERIENCE"
        title="WHAT OUR VISITORS SAY"
        subtitle="Feedback from clients who have sought traditional astrological and Vastu guidance."
      />

      {/* Desktop 3-column grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.slice(0, 3).map((item, index) => (
          <Reveal key={item.id} delay={index * 0.08}>
            <TestimonialCard testimonial={item} className="h-full" />
          </Reveal>
        ))}
      </div>

      {/* Mobile CSS Scroll Snap Carousel */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-5 px-5 scrollbar-none">
        {testimonials.slice(0, 3).map((item) => (
          <div key={item.id} className="snap-center shrink-0 w-[85vw] max-w-[340px]">
            <TestimonialCard testimonial={item} className="h-full" />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <span className="text-xs text-ink-700 font-sans italic">
          Testimonials will be updated regularly with client consent.
        </span>
      </div>
    </Section>
  );
};
