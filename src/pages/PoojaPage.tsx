import React from 'react';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { Seo } from '@/components/common/Seo';
import { poojaServices } from '@/data/pooja';
import { Flame, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export const PoojaPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Pooja & Hindu Rituals"
        description="Authentic Hindu priest services for Griha Pravesh, Satyanarayana Swamy Pooja, Navagraha Homams, Vedic marriages, and family sacred rites."
        path="/pooja"
      />

      <PageHero
        title="POOJA & HINDU RITUALS"
        subtitle="Vedic priest services for sacred housewarmings, traditional homams, and milestone family ceremonies."
      />

      {/* Intro */}
      <Section bg="cream-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <SectionHeading
            eyebrow="VEDIC SACRED CEREMONIES"
            title="AUTHENTIC PRIEST SERVICES"
            className="mb-4"
          />
          <p className="text-base md:text-lg text-ink-800 font-sans leading-relaxed">
            Sacred poojas and homam ceremonies are performed in strict adherence to Vedic scriptures and family traditions. Sri Narasimachari officiates sacred rites with devotion, clarity, and adherence to prescribed rituals.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section bg="cream-100">
        <SectionHeading
          eyebrow="CEREMONIAL SERVICES"
          title="SACRED POOJAS & CEREMONIES"
          subtitle="Select a ceremonial ritual to request priest availability and auspicious date alignment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {poojaServices.map((p) => (
            <div
              key={p.id}
              className="bg-cream-50 border border-gold-400/30 rounded-2xl p-7 shadow-sm flex flex-col justify-between hover:border-gold-400/60 transition-all"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-maroon-700/10 text-maroon-700 flex items-center justify-center mb-4">
                  <Flame className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-ink-900 mb-2">{p.title}</h3>
                <p className="text-sm text-ink-700 font-sans leading-relaxed mb-4">{p.description}</p>
                <p className="text-xs text-gold-600 font-sans italic border-t border-gold-400/20 pt-3 mb-6">
                  {p.significance}
                </p>
              </div>

              <Button
                variant="outline"
                size="sm"
                as={Link}
                to={`/book-appointment?service=${encodeURIComponent(p.title)}`}
                className="w-full"
              >
                <Calendar className="w-3.5 h-3.5 mr-2" /> REQUEST RITUAL
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Traditional Practices */}
      <Section bg="cream-50">
        <div className="max-w-4xl mx-auto bg-maroon-900 text-cream-50 rounded-2xl p-8 md:p-12 border border-gold-400/30 shadow-xl text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-cream-50">
            Auspicious Muhurtham Alignment
          </h3>
          <p className="text-sm md:text-base text-cream-100/90 font-sans leading-relaxed max-w-2xl mx-auto">
            Prior to conducting any major pooja or Griha Pravesh ceremony, we assist in calculating the most auspicious date and time window (Shuba Muhurtham) tailored to your birth nakshatra.
          </p>
        </div>
      </Section>

      <CTASection title="ARRANGE SACRED PRIEST SERVICES" />
    </>
  );
};
