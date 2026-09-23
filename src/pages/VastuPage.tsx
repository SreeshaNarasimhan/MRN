import React from 'react';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { Seo } from '@/components/common/Seo';
import { StepCard } from '@/components/cards/StepCard';
import { vastuServices, vastuSteps } from '@/data/vastu';
import { CheckCircle2, Home, Building2, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export const VastuPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Vastu Consultation"
        description="Traditional Vastu Shastra consultation for residential homes, office spaces, commercial buildings, and new constructions in Salem."
        path="/vastu"
      />

      <PageHero
        title="VASTU SHASTRA CONSULTATION"
        subtitle="Aligning living and working spaces with natural directional principles for environmental balance and domestic peace."
      />

      {/* What is Vastu */}
      <Section bg="cream-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <SectionHeading
            eyebrow="ANCIENT ARCHITECTURAL HARMONY"
            title="UNDERSTANDING VASTU SHASTRA"
            className="mb-4"
          />
          <p className="text-base md:text-lg text-ink-800 font-sans leading-relaxed">
            Vastu Shastra is the traditional Indian science of architecture and spatial orientation. It considers the flow of natural energy across five core elements (Pancha Bhoota) — Earth, Water, Fire, Air, and Space.
          </p>
          <p className="text-sm md:text-base text-ink-700 font-sans leading-relaxed">
            Our consultation emphasizes practical, respectful recommendations for site layouts, room placements, and directional alignments without making exaggerated claims or demanding unnecessary structural demolition.
          </p>
        </div>
      </Section>

      {/* Residential & Commercial Vastu */}
      <Section bg="cream-100">
        <SectionHeading
          eyebrow="SPECIALIZED DOMAINS"
          title="RESIDENTIAL & COMMERCIAL VASTU"
          subtitle="Tailored spatial guidance for homes, apartments, retail shops, and commercial offices."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vastuServices.map((v) => {
            const IconComp = v.id === 'residential-vastu' ? Home : Building2;
            return (
              <div
                key={v.id}
                className="bg-cream-50 border border-gold-400/30 rounded-2xl p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-maroon-700/10 text-maroon-700 flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-ink-900 mb-3">{v.title}</h3>
                  <p className="text-sm text-ink-700 font-sans leading-relaxed mb-6">
                    {v.description}
                  </p>
                  <ul className="space-y-3 mb-8 border-t border-gold-400/20 pt-4">
                    {v.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm font-sans text-ink-800">
                        <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="primary" as={Link} to={`/book-appointment?service=${encodeURIComponent(v.title)}`}>
                  <Compass className="w-4 h-4 mr-2" /> BOOK VASTU CONSULTATION
                </Button>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Consultation Process */}
      <Section bg="cream-50">
        <SectionHeading
          eyebrow="THE METHODOLOGY"
          title="VASTU CONSULTATION PROCESS"
          subtitle="Four structured steps to evaluate and enhance your property layout."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vastuSteps.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              className="h-full"
            />
          ))}
        </div>
      </Section>

      <CTASection title="ALIGN YOUR SPACE WITH TRADITIONAL HARMONY" />
    </>
  );
};
