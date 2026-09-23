import React from 'react';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { Seo } from '@/components/common/Seo';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { business } from '@/data/business';
import { MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const TestimonialsPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Client Testimonials"
        description="Read client feedback and testimonials for astrology consultations and Vastu guidance at Sudharshana Lakshmi Narasimhaa Astrology Centre."
        path="/testimonials"
      />

      <PageHero
        title="CLIENT FEEDBACK"
        subtitle="Shared experiences from individuals who have consulted with Sri Narasimachari."
      />

      <Section bg="cream-50">
        <SectionHeading
          eyebrow="CLIENT REVIEWS"
          title="EXPERIENCES & FEEDBACK"
          subtitle="Honest feedback provided by our valued consultation visitors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} className="h-full" />
          ))}
        </div>

        {/* Share Experience Invitation */}
        <div className="mt-16 bg-cream-100 border border-gold-400/30 rounded-2xl p-8 max-w-3xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-serif font-semibold text-ink-900">
            Have you consulted with Sri Narasimachari?
          </h3>
          <p className="text-sm text-ink-700 font-sans leading-relaxed">
            We value your thoughts and feedback. If you have recently visited our centre or received a consultation, feel free to share your experience with us via WhatsApp or phone call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button variant="gold" as="a" href={business.whatsapp.href} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-4 h-4 mr-2" /> SHARE VIA WHATSAPP
            </Button>
            <Button variant="outline" as="a" href={business.phone.href}>
              <Phone className="w-4 h-4 mr-2" /> CALL CENTRE
            </Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
};
