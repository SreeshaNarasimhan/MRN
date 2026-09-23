import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { Seo } from '@/components/common/Seo';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { services } from '@/data/services';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Services"
        description="Comprehensive astrology consultation, birth chart Kundali reading, marriage matching, Vastu layout guidance, and Vedic priest services."
        path="/services"
      />

      <PageHero
        title="OUR CONSULTATION SERVICES"
        subtitle="Explore our complete range of traditional astrological analysis, spatial Vastu recommendations, and sacred priest rites."
      />

      <Section bg="cream-50">
        <SectionHeading
          eyebrow="ALL SERVICES"
          title="TRADITIONAL SERVICES OFFERED"
          subtitle="Click on any service to request a dedicated consultation appointment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} showCovers className="h-full" />
          ))}
        </div>
      </Section>

      {/* Help / Guidance Banner */}
      <div className="bg-maroon-900 text-cream-50 py-12 border-y border-gold-400/30">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-cream-50">
                Not sure which service fits your query?
              </h3>
              <p className="text-xs md:text-sm text-cream-200/80 font-sans mt-1">
                Reach out to us directly or visit our contact page for recommendations before booking.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-400 text-maroon-950 font-sans text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-gold-300 transition-colors shrink-0"
          >
            <span>CONTACT US</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Container>
      </div>

      <CTASection />
    </>
  );
};
