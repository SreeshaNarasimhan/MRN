import React from 'react';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { Seo } from '@/components/common/Seo';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { business } from '@/data/business';
import { CheckCircle2, Phone, MessageSquare, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const BookAppointmentPage: React.FC = () => {
  const preparationItems = [
    'Date of birth (Day, Month, Year)',
    'Exact time of birth (if available)',
    'Place of birth (City / Town)',
    'Property floorplan or direction details (for Vastu)',
  ];

  return (
    <>
      <Seo
        title="Book Appointment"
        description={`Schedule a personal consultation with ${business.astrologer} at ${business.shortName} in Salem.`}
        path="/book-appointment"
      />

      <PageHero
        title="BOOK YOUR CONSULTATION"
        subtitle={business.consultationNote}
      />

      <Section bg="cream-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column Left */}
          <div className="lg:col-span-7 bg-cream-100 border border-gold-400/30 rounded-2xl p-8 md:p-10 shadow-sm">
            <SectionHeading
              eyebrow="APPOINTMENT REQUEST"
              title="APPOINTMENT DETAILS"
              subtitle="Please provide your contact information and preferred consultation slot."
              align="left"
              className="mb-8"
            />
            <AppointmentForm variant="appointment" />
          </div>

          {/* Supporting Panel Right */}
          <div className="lg:col-span-5 space-y-8">
            {/* Consultation Note Card */}
            <div className="bg-maroon-900 text-cream-50 border border-gold-400/40 rounded-2xl p-7 shadow-md">
              <span className="text-eyebrow text-gold-400 block mb-2">NOTICE</span>
              <h3 className="text-xl font-serif font-semibold text-cream-50 mb-3">
                {business.consultationNote}
              </h3>
              <p className="text-xs md:text-sm text-cream-200/80 font-sans leading-relaxed">
                Sessions are arranged strictly by prior appointment to allocate uninterrupted, dedicated time for every individual chart review.
              </p>
            </div>

            {/* What to Keep Ready */}
            <div className="bg-cream-50 border border-gold-400/30 rounded-2xl p-7 shadow-sm">
              <h3 className="text-lg font-serif font-semibold text-ink-900 mb-4 flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-gold-600" />
                What to Keep Ready
              </h3>
              <ul className="space-y-3 font-sans text-xs md:text-sm text-ink-800">
                {preparationItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Shortcuts */}
            <div className="bg-cream-100 border border-gold-400/30 rounded-2xl p-7 text-center space-y-4">
              <h4 className="text-base font-serif font-semibold text-ink-900">
                Prefer to book over phone or WhatsApp?
              </h4>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button variant="outline" size="sm" as="a" href={business.phone.href} className="w-full sm:w-auto">
                  <Phone className="w-3.5 h-3.5 mr-2" /> CALL CENTRE
                </Button>
                <Button
                  variant="gold"
                  size="sm"
                  as="a"
                  href={business.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-2" /> WHATSAPP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
};
