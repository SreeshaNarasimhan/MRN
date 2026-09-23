import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';
import { Container } from '@/components/ui/Container';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { business } from '@/data/business';
import { assets } from '@/data/assets';
import { Reveal } from '@/components/ui/Reveal';
import { scaleUp } from '@/lib/motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-cream-50 pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden border-b border-gold-400/20">
      {/* Background soft radial ambient glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-maroon-700/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            <span className="text-eyebrow text-gold-600 mb-3 tracking-[0.25em]">
              {business.name}
            </span>

            <h1 className="text-display font-serif font-bold text-ink-900 leading-[1.05] tracking-tight mb-4">
              DIVINE GUIDANCE <br />
              <span className="text-maroon-700">FOR LIFE</span>
            </h1>

            <OrnamentDivider className="justify-center lg:justify-start my-2" />

            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gold-600 mb-4 font-sans">
              {business.subTagline}
            </p>

            <p className="text-base md:text-lg text-ink-700 font-sans leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Personalized horoscope analysis, birth chart matching, Vastu spatial alignment, and traditional Hindu priest services by {business.astrologer} in Salem.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                as={Link}
                to="/book-appointment"
                className="w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 mr-2" /> BOOK CONSULTATION
              </Button>
              <Button
                variant="outline"
                size="lg"
                as="a"
                href={business.phone.href}
                className="w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 mr-2" /> CALL NOW
              </Button>
            </div>

            {/* Address Trust Line */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-ink-700 font-sans pt-4 border-t border-gold-400/20">
              <MapPin className="w-4 h-4 text-maroon-700 shrink-0" />
              <span>{business.address.full}</span>
            </div>
          </div>

          {/* Right Column: Deity Composition */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal variants={scaleUp} className="relative w-full max-w-md">
              {/* Outer decorative halo border */}
              <div className="absolute -inset-3 rounded-3xl border border-gold-400/40 pointer-events-none" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-gold-400/20 via-maroon-700/10 to-gold-400/20 pointer-events-none" />

              {/* Deity Image Container */}
              <div className="relative bg-maroon-900 rounded-2xl p-3 shadow-2xl border border-gold-400/50 overflow-hidden group">
                {/* Corner gold ornaments */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-400 z-10" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-400 z-10" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-400 z-10" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-400 z-10" />

                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-maroon-950 flex items-center justify-center">
                  <ImageWithFallback
                    src={assets.deity.src}
                    alt={assets.deity.alt}
                    loading="eager"
                    fetchPriority="high"
                    objectFit="cover"
                    className="w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 inset-x-0 text-center px-4">
                    <span className="text-[11px] font-serif font-semibold text-gold-300 tracking-widest uppercase">
                      {assets.deity.title}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
