import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';
import { Seo } from '@/components/common/Seo';
import { business } from '@/data/business';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Seo title="Page Not Found" path="/404" />
      <Section bg="maroon-900" pattern className="min-h-[70vh] flex items-center justify-center text-center">
        <div className="max-w-xl mx-auto py-12">
          <span className="text-eyebrow text-gold-400 block mb-2">{business.shortName}</span>
          <h1 className="text-display font-serif font-bold text-cream-50 mb-3">404</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-gold-300 mb-4">PAGE NOT FOUND</h2>
          <OrnamentDivider light className="justify-center my-4" />
          <p className="text-sm md:text-base text-cream-100/80 font-sans leading-relaxed mb-8">
            The page you are looking for does not exist or may have been moved.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="gold" size="lg" as={Link} to="/">
              <Home className="w-4 h-4 mr-2" /> RETURN TO HOME
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};
