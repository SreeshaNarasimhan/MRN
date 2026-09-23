import React from 'react';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { Seo } from '@/components/common/Seo';
import { vastuServices } from '@/data/vastu';
import { poojaServices } from '@/data/pooja';
import { CheckCircle2, Home, Flame, Compass, Calendar, Sparkles, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export const VastuPoojaPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Vastu & Pooja Services"
        description="Traditional Vastu Shastra spatial consultation and authentic Hindu priest pooja rituals offered by Sri Narasimachari in Salem."
        path="/vastu-pooja"
      />

      <PageHero
        title="VASTU & POOJA"
        subtitle="Traditional guidance for harmonious spaces and sacred beginnings."
      />

      {/* Main Combined Vastu & Pooja Section */}
      <Section bg="cream-50" id="vastu-pooja-overview">
        <SectionHeading
          eyebrow="SACRED HARMONY & RITUALS"
          title="OUR VASTU & POOJA SERVICES"
          subtitle="Traditional guidance for harmonious spaces and sacred beginnings."
        />

        {/* Two main elegant content blocks inside ONE unified section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* Card A: VASTU CONSULTATION */}
          <div className="bg-cream-100/90 border border-gold-400/40 rounded-3xl p-8 md:p-10 shadow-lg flex flex-col justify-between hover:border-gold-400/70 transition-all duration-300">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-maroon-700 text-cream-50 flex items-center justify-center shadow-md">
                  <Compass className="w-7 h-7 stroke-[1.75]" />
                </div>
                <div>
                  <span className="text-xs font-serif font-semibold tracking-widest text-gold-600 uppercase block">
                    SPATIAL ALIGNMENT
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900">
                    VASTU CONSULTATION
                  </h3>
                </div>
              </div>

              <p className="text-sm md:text-base text-ink-800 font-sans leading-relaxed mb-6">
                Aligning residential and commercial properties with classical directional energy flow and five core natural elements (Pancha Bhoota) for peace, stability, and growth.
              </p>

              <div className="space-y-4 border-t border-gold-400/25 pt-6 mb-8">
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-maroon-800">
                  Key Consultation Offerings:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-ink-800 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span><strong>Residential & Commercial Vastu:</strong> Guidance for homes, flats, shops, and business offices.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink-800 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span><strong>Direction and Space Analysis:</strong> Detailed evaluation of cardinal points, main entrance, and room placement.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink-800 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span><strong>Traditional Vastu Guidance:</strong> Rooted in classical architectural scriptures without unnecessary demolition.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink-800 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span><strong>Practical Property Recommendations:</strong> Non-invasive remedies, element balancing, and layout optimization.</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button
              variant="primary"
              as={Link}
              to="/book-appointment?service=Vastu+Consultation"
              className="w-full"
            >
              <Home className="w-4 h-4 mr-2" /> BOOK VASTU CONSULTATION
            </Button>
          </div>

          {/* Card B: POOJA & RITUAL SERVICES */}
          <div className="bg-cream-100/90 border border-gold-400/40 rounded-3xl p-8 md:p-10 shadow-lg flex flex-col justify-between hover:border-gold-400/70 transition-all duration-300">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-maroon-700 text-cream-50 flex items-center justify-center shadow-md">
                  <Flame className="w-7 h-7 stroke-[1.75]" />
                </div>
                <div>
                  <span className="text-xs font-serif font-semibold tracking-widest text-gold-600 uppercase block">
                    VEDIC PRIEST RITES
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900">
                    POOJA & RITUAL SERVICES
                  </h3>
                </div>
              </div>

              <p className="text-sm md:text-base text-ink-800 font-sans leading-relaxed mb-6">
                Officiating traditional Hindu poojas and sacred Vedic homams with devotion, precise ritual mantras, and auspicious Muhurtham timing for family ceremonies.
              </p>

              <div className="space-y-4 border-t border-gold-400/25 pt-6 mb-8">
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-maroon-800">
                  Key Ceremonial Offerings:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-ink-800 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span><strong>Housewarming / Griha Pravesh:</strong> Auspicious ritual ceremonies prior to occupying new homes.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink-800 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span><strong>Traditional Hindu Poojas:</strong> Sri Satyanarayana Swamy Pooja, Navagraha, and deity homams.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink-800 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span><strong>Special Poojas & Rituals:</strong> Vedic homams, family milestone rites, and festival poojas.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink-800 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span><strong>Spiritual Ceremonies & Rites:</strong> Marriage ceremonies, Namakarana naming, and traditional observances.</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button
              variant="gold"
              as={Link}
              to="/book-appointment?service=Pooja+and+Ritual+Services"
              className="w-full"
            >
              <Sparkles className="w-4 h-4 mr-2" /> REQUEST POOJA & RITUAL SERVICES
            </Button>
          </div>
        </div>
      </Section>

      {/* Detailed Vastu Breakdown */}
      <Section bg="cream-100">
        <SectionHeading
          eyebrow="VASTU SHASTRA DETAILS"
          title="RESIDENTIAL & COMMERCIAL VASTU GUIDANCE"
          subtitle="Explore spatial orientation principles for homes and business premises."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {vastuServices.map((v) => {
            const IconComp = v.id === 'residential-vastu' ? Home : Building2;
            return (
              <div
                key={v.id}
                className="bg-cream-50 border border-gold-400/30 rounded-2xl p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-maroon-700/10 text-maroon-700 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h4 className="text-xl font-serif font-semibold text-ink-900 mb-2">{v.title}</h4>
                  <p className="text-sm text-ink-700 font-sans leading-relaxed mb-4">{v.description}</p>
                  <ul className="space-y-2 border-t border-gold-400/20 pt-4 mb-6">
                    {v.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs md:text-sm font-sans text-ink-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Detailed Pooja Services List */}
      <Section bg="cream-50">
        <SectionHeading
          eyebrow="TRADITIONAL CEREMONIES"
          title="AUTHENTIC POOJA & RITUAL SERVICES"
          subtitle="Conducted by Sri Narasimachari according to classical Vedic scriptures."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {poojaServices.map((p) => (
            <div
              key={p.id}
              className="bg-cream-100/70 border border-gold-400/30 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-maroon-700/10 text-maroon-700 flex items-center justify-center mb-3">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-semibold text-ink-900 mb-2">{p.title}</h4>
                <p className="text-xs text-ink-700 font-sans leading-relaxed mb-3">{p.description}</p>
                <p className="text-[11px] text-gold-600 font-sans italic border-t border-gold-400/20 pt-2 mb-4">
                  {p.significance}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                as={Link}
                to={`/book-appointment?service=${encodeURIComponent(p.title)}`}
                className="w-full text-xs"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" /> REQUEST RITUAL
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <CTASection title="SCHEDULE YOUR VASTU OR POOJA CONSULTATION" />
    </>
  );
};
