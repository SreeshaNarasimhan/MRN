import React from 'react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StepCard } from '@/components/cards/StepCard';
import { Reveal } from '@/components/ui/Reveal';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'BOOK AN APPOINTMENT',
      description: 'Select your preferred date, time window, and requested service through our online form or direct call.',
    },
    {
      step: '02',
      title: 'SHARE YOUR DETAILS',
      description: 'Provide birth chart details (date, time, and birthplace) or property specifications prior to your consultation.',
    },
    {
      step: '03',
      title: 'RECEIVE GUIDANCE',
      description: 'Engage in a personal, dedicated consultation session with Sri Narasimachari for traditional advice and clarity.',
    },
  ];

  return (
    <Section bg="cream-50">
      <SectionHeading
        eyebrow="CONSULTATION PROCESS"
        title="HOW IT WORKS"
        subtitle="Three simple steps to schedule your personal astrological or Vastu consultation."
      />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Desktop connecting line */}
        <div
          className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-gold-400/20 via-gold-400/60 to-gold-400/20 -translate-y-6 z-0"
          aria-hidden="true"
        />

        {steps.map((item, index) => (
          <Reveal key={index} delay={index * 0.1} className="relative z-10">
            <StepCard
              step={item.step}
              title={item.title}
              description={item.description}
              className="h-full"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
