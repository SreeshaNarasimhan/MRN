import React from 'react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQAccordion } from '@/components/common/FAQAccordion';
import { faqs } from '@/data/faqs';

export const FaqSection: React.FC = () => {
  return (
    <Section bg="cream-100" id="faq">
      <SectionHeading
        eyebrow="COMMON QUESTIONS"
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="Answers to common queries regarding our consultation process and centre."
      />

      <FAQAccordion items={faqs} />
    </Section>
  );
};
