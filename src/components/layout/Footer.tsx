import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageSquare, Calendar } from 'lucide-react';
import { business } from '@/data/business';
import { navLinks } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon-950 text-cream-100 border-t border-gold-400/30 relative overflow-hidden">
      {/* Background mandala pattern opacity */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C9A24A_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <Container className="relative z-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm">
              <span className="font-serif font-bold text-xl text-cream-50 tracking-wider block">
                {business.brandLine1}
              </span>
              <span className="font-serif text-xs text-gold-400 tracking-widest block">
                {business.brandLine2}
              </span>
            </Link>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 font-sans">
              {business.title}
            </p>
            <p className="text-xs text-cream-200/80 leading-relaxed font-sans">
              Traditional astrology consultation, birth chart interpretation, Vastu spatial alignment, and authentic Hindu priest services in Salem.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-gold-300 border-b border-gold-400/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs font-sans">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-gold-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded-sm"
                  >
                    <span>›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-gold-300 border-b border-gold-400/20 pb-2">
              Contact Centre
            </h3>
            <ul className="space-y-3 text-xs font-sans text-cream-200/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <a
                  href={business.maps.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition-colors"
                >
                  {business.address.full}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={business.phone.href} className="hover:text-gold-300 transition-colors">
                  {business.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={business.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition-colors"
                >
                  WhatsApp: {business.whatsapp.display}
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-semibold text-gold-400 tracking-wider border border-gold-400/30 px-3 py-1 rounded-full bg-maroon-900/50">
                {business.consultationNote}
              </span>
            </div>
          </div>

          {/* Column 4: Appointment CTA Card */}
          <div className="bg-maroon-900/60 border border-gold-400/30 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-lg font-semibold text-cream-50 mb-2">
                Book Consultation
              </h3>
              <p className="text-xs text-cream-200/80 leading-relaxed font-sans mb-4">
                Schedule your one-on-one personal astrological or Vastu consultation session.
              </p>
            </div>
            <Button variant="ghostGold" size="sm" as={Link} to="/book-appointment" className="w-full">
              <Calendar className="w-3.5 h-3.5 mr-2" /> BOOK APPOINTMENT
            </Button>
          </div>
        </div>

        <OrnamentDivider light className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-cream-300/70 text-center sm:text-left">
          <p>© {currentYear} {business.name}. All rights reserved.</p>
          <p className="text-[11px] text-cream-300/50">
            {business.city}, Tamil Nadu, India
          </p>
        </div>
      </Container>
    </footer>
  );
};
