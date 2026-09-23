import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { assets } from '@/data/assets';
import { business } from '@/data/business';

export const DevotionalFeature: React.FC = () => {
  return (
    <Section bg="maroon-900" pattern className="relative overflow-hidden py-20 md:py-28">
      {/* Ornamental framing border */}
      <div className="absolute inset-4 md:inset-8 border border-gold-400/30 rounded-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <span className="text-eyebrow text-gold-400 block mb-3">{business.shortName}</span>
        <h2 className="text-h2 font-serif font-bold text-cream-50 leading-tight mb-3">
          DIVINE GUIDANCE. <br />
          <span className="text-gold-300">PERSONALIZED CONSULTATION.</span>
        </h2>

        <OrnamentDivider light className="justify-center my-4" />

        <p className="text-base md:text-xl text-cream-100/90 font-sans leading-relaxed max-w-2xl mx-auto mb-10">
          Your journey matters. Seek thoughtful guidance for the path ahead through classical Vedic principles and personal consultation.
        </p>

        {/* Framed Deity Image */}
        <div className="w-full max-w-xs mx-auto mb-10 p-2.5 bg-maroon-950 rounded-2xl border border-gold-400/40 shadow-2xl">
          <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
            <ImageWithFallback
              src={assets.deity.src}
              alt={assets.deity.alt}
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="gold" size="lg" as={Link} to="/book-appointment">
            <Calendar className="w-4 h-4 mr-2" /> BOOK APPOINTMENT
          </Button>
        </div>
      </div>
    </Section>
  );
};
