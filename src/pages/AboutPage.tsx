import React from 'react';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { Seo } from '@/components/common/Seo';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { business } from '@/data/business';
import { assets } from '@/data/assets';
import { Sparkles, Home, Flame, Shield, Heart, Award, Clock } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const offerings = [
    {
      title: 'Astrology Consultation',
      desc: 'In-depth analysis of birth horoscopes, planetary dasha periods, and classical planetary influences for personal life clarity.',
      icon: Sparkles,
    },
    {
      title: 'Vastu Shastra Consultation',
      desc: 'Practical spatial guidance for homes, commercial workspaces, and industrial premises to align with five directional elements.',
      icon: Home,
    },
    {
      title: 'Hindu Priest Rites & Poojas',
      desc: 'Authentic priest services for Griha Pravesh, Satyanarayana Swamy Pooja, Navagraha Homams, and traditional family ceremonies.',
      icon: Flame,
    },
  ];

  const pillars = [
    {
      title: 'Traditional Respect',
      desc: 'Grounded in authentic Vedic astrological texts and established ritual traditions without shortcuts.',
      icon: Shield,
    },
    {
      title: 'Confidential & Personal',
      desc: 'Every consultation session is conducted with complete privacy and personal attention.',
      icon: Heart,
    },
    {
      title: 'Considered Guidance',
      desc: 'Focusing on thoughtful perspective and practical remedies rather than deterministic claims.',
      icon: Award,
    },
  ];

  return (
    <>
      <Seo
        title="About Sri Narasimachari"
        description="With over 40 years of experience in astrology and 30+ years serving as a priest at Naga Raja Ganapathi Temple in Salem."
        path="/about"
      />

      <PageHero
        title="ABOUT OUR CENTRE"
        subtitle="Dedicated to traditional Vedic astrology, classical Vastu Shastra principles, and authentic Hindu priest services."
      />

      {/* Introduction & Lead Astrologer Bio */}
      <Section bg="cream-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-gold-400/50 pointer-events-none" />
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
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="LEAD ASTROLOGER & PRIEST"
              title="SRI NARASIMACHARI"
              align="left"
              className="mb-2"
            />
            <span className="text-xs font-serif font-semibold tracking-widest text-gold-600 uppercase block mb-4">
              ASTROLOGER • VASTU CONSULTANT • HINDU PRIEST
            </span>

            <p className="text-base md:text-lg text-ink-800 font-sans leading-relaxed">
              With over 40 years of experience in astrology and traditional spiritual practices, Sri Narasimachari has dedicated his life to offering guidance rooted in tradition.
            </p>

            <p className="text-sm md:text-base text-ink-700 font-sans leading-relaxed">
              He has been serving as a priest at Naga Raja Ganapathi Temple for over 30 years.
            </p>

            {/* Distinct Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
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

            <div className="pt-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-maroon-800 bg-gold-400/20 border border-gold-400/40 px-4 py-2 rounded-full font-sans">
                {business.consultationNote}
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Offerings */}
      <Section bg="cream-100">
        <SectionHeading
          eyebrow="OUR DOMAINS"
          title="THREE PILLARS OF GUIDANCE"
          subtitle="Combining classical horoscope analysis, structural energy alignment, and devotional ceremonies."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-cream-50 border border-gold-400/30 rounded-2xl p-8 shadow-sm hover:border-gold-400/60 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-maroon-700/10 text-maroon-700 flex items-center justify-center mb-5">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-ink-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-700 leading-relaxed font-sans">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Philosophy */}
      <Section bg="cream-50">
        <SectionHeading
          eyebrow="PHILOSOPHY & APPROACH"
          title="RESPECTFUL & AUTHENTIC CONSULTATION"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div key={idx} className="text-center p-6 bg-white/60 border border-gold-400/20 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-gold-400/15 text-gold-600 flex items-center justify-center mx-auto mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif font-semibold text-ink-900 mb-2">{p.title}</h4>
                <p className="text-xs md:text-sm text-ink-700 font-sans leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <CTASection />
    </>
  );
};
