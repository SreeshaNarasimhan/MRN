import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { assets } from '@/data/assets';
import { Reveal } from '@/components/ui/Reveal';

export const AboutAstrologer: React.FC = () => {
  return (
    <Section bg="cream-50" className="py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        {/* Left: Astrologer Portrait with gold frame & offset outline */}
        <div className="lg:col-span-5 flex justify-center">
          <Reveal className="relative w-full max-w-sm">
            {/* Offset gold background frame */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-gold-400/50 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative bg-cream-100 border border-gold-400/40 rounded-2xl p-3 shadow-xl overflow-hidden">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-maroon-900">
                <ImageWithFallback
                  src={assets.astrologer.src}
                  alt={assets.astrologer.alt}
                  objectFit="cover"
                  className="w-full h-full object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: Text & Biography */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <SectionHeading
            eyebrow="ABOUT THE ASTROLOGER"
            title="SRI NARASIMACHARI"
            align="left"
            className="mb-2 max-w-none text-center lg:text-left"
          />

          <span className="text-xs font-serif font-semibold tracking-widest text-gold-600 uppercase block mb-6">
            ASTROLOGER • VASTU CONSULTANT • HINDU PRIEST
          </span>

          <div className="space-y-4 text-base text-ink-700 font-sans leading-relaxed mb-6">
            <p>
              With over 40 years of experience in astrology and traditional spiritual practices, Sri Narasimachari has dedicated his life to offering guidance rooted in tradition.
            </p>
            <p>
              He has been serving as a priest at Naga Raja Ganapathi Temple for over 30 years.
            </p>
          </div>

          {/* Two Distinct Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
            <div className="bg-cream-100 border border-gold-400/35 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-maroon-700/10 text-maroon-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-maroon-900 block leading-none mb-1">
                  40+ YEARS
                </span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-ink-700 font-semibold block">
                  ASTROLOGY & TRADITIONAL PRACTICES
                </span>
              </div>
            </div>

            <div className="bg-cream-100 border border-gold-400/35 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-maroon-700/10 text-maroon-700 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-maroon-900 block leading-none mb-1">
                  30+ YEARS
                </span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-ink-700 font-semibold block">
                  SERVING AS TEMPLE PRIEST
                </span>
              </div>
            </div>
          </div>

          <Button variant="outline" as={Link} to="/about">
            <span>LEARN MORE ABOUT SRI NARASIMACHARI</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Section>
  );
};
