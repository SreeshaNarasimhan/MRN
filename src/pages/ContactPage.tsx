import React from 'react';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { Seo } from '@/components/common/Seo';
import { ContactCard } from '@/components/cards/ContactCard';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { business } from '@/data/business';

export const ContactPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Contact Us"
        description={`Get in touch with ${business.shortName} in Salem. Phone: ${business.phone.display}, Location: ${business.address.full}.`}
        path="/contact"
      />

      <PageHero
        title="CONTACT OUR CENTRE"
        subtitle="Reach out to schedule your consultation appointment or make an enquiry."
      />

      {/* Contact Cards */}
      <Section bg="cream-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <ContactCard
            title="PHONE INQUIRY"
            value={business.phone.display}
            subValue="Call directly for appointment availability and scheduling."
            iconName="Phone"
            href={business.phone.href}
            actionText="CALL NOW"
          />

          <ContactCard
            title="WHATSAPP MESSAGE"
            value={business.whatsapp.display}
            subValue="Send a message on WhatsApp for quick coordination."
            iconName="MessageSquare"
            href={business.whatsapp.href}
            actionText="OPEN WHATSAPP"
          />

          <ContactCard
            title="VISIT CENTRE"
            value={business.city}
            subValue={business.address.full}
            iconName="MapPin"
            href={business.maps.href}
            actionText="OPEN GOOGLE MAPS"
          />
        </div>

        {/* Appointment Only Banner */}
        <div className="bg-maroon-900 text-cream-50 rounded-2xl p-6 md:p-8 text-center border border-gold-400/40 mb-16 shadow-lg">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block mb-1">
            IMPORTANT NOTICE
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-cream-50">
            {business.consultationNote}
          </h3>
          <p className="text-xs md:text-sm text-cream-200/80 font-sans mt-2 max-w-xl mx-auto">
            Please book prior to visiting the centre to ensure Sri Narasimachari is available for your consultation session.
          </p>
        </div>

        {/* Enquiry Form */}
        <div className="max-w-3xl mx-auto bg-cream-100 border border-gold-400/30 rounded-2xl p-8 md:p-12 shadow-sm">
          <SectionHeading
            eyebrow="DIRECT ENQUIRY"
            title="SEND US A MESSAGE"
            subtitle="Fill in your preferred date and contact details to request an appointment."
            className="mb-8"
          />
          <AppointmentForm variant="contact" />
        </div>
      </Section>

      <CTASection />
    </>
  );
};
