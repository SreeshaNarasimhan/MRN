import React from 'react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { Reveal } from '@/components/ui/Reveal';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Traditional Knowledge',
      description: 'Grounded in classical Vedic astrological literature and traditional Vastu principles.',
      icon: 'BookOpen',
    },
    {
      title: 'Personalized Guidance',
      description: 'Every horoscope and property plan receives careful individual evaluation.',
      icon: 'UserCheck',
    },
    {
      title: 'Respectful Consultation',
      description: 'Dignified, calm, and confidential environment for sharing important personal queries.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Vedic Rites & Practices',
      description: 'Authentic priest services conducted according to established scriptural traditions.',
      icon: 'Flame',
    },
    {
      title: 'Appointment-Based Sessions',
      description: 'Dedicated consultation time ensuring thorough attention without unneeded delays.',
      icon: 'Clock',
    },
  ];

  return (
    <Section bg="cream-100">
      <SectionHeading
        eyebrow="OUR COMMITMENT"
        title="WHY CONSULT WITH US"
        subtitle="Dignified, traditional guidance tailored to your life situation."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.slice(0, 3).map((item, index) => (
          <Reveal key={index} delay={index * 0.08}>
            <FeatureCard
              title={item.title}
              description={item.description}
              iconName={item.icon}
              className="h-full"
            />
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 max-w-4xl mx-auto">
        {features.slice(3, 5).map((item, index) => (
          <Reveal key={index + 3} delay={(index + 3) * 0.08}>
            <FeatureCard
              title={item.title}
              description={item.description}
              iconName={item.icon}
              className="h-full"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
