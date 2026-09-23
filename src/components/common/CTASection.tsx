import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';
import { business } from '@/data/business';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'CONSULTATION BY APPOINTMENT ONLY',
  subtitle = 'Schedule your one-on-one personal astrological analysis or Vastu consultation session.',
}) => {
  return (
    <Section bg="maroon-900" pattern className="text-center py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <span className="text-eyebrow text-gold-400 block mb-2">{business.shortName}</span>
        <h2 className="text-h2 font-serif font-bold text-cream-50 mb-3 uppercase tracking-wide">
          {title}
        </h2>
        <OrnamentDivider light className="justify-center mb-4" />
        <p className="text-sm md:text-base font-sans text-cream-200/90 leading-relaxed mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="gold" size="lg" as={Link} to="/book-appointment">
            <span>BOOK A CONSULTATION</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="ghostGold" size="lg" as="a" href={business.phone.href}>
            <Phone className="w-4 h-4 mr-2" /> CALL {business.phone.display}
          </Button>
        </div>
      </div>
    </Section>
  );
};
