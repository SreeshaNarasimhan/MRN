import React from 'react';
import { CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { business } from '@/data/business';

interface SuccessStateProps {
  onReset: () => void;
}

export const SuccessState: React.FC<SuccessStateProps> = ({ onReset }) => {
  return (
    <div
      role="region"
      aria-live="polite"
      className="bg-cream-50 border border-gold-400/40 rounded-2xl p-8 md:p-12 text-center shadow-[0_4px_30px_-10px_rgba(102,18,35,0.2)] animate-fadeIn"
    >
      <div className="w-16 h-16 rounded-full bg-gold-400/15 text-gold-500 border border-gold-400/40 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
      </div>

      <h3 className="text-display font-serif font-semibold text-ink-900 mb-3 text-3xl md:text-4xl">
        Thank you.
      </h3>

      <p className="text-base md:text-lg text-ink-800 max-w-md mx-auto mb-4 font-sans leading-relaxed">
        Thank you. Your consultation request has been noted.
      </p>

      <div className="inline-block bg-maroon-700/8 border border-maroon-700/20 px-4 py-2 rounded-full mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-maroon-800 font-sans">
          {business.consultationNote}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <Button variant="primary" as="a" href={business.phone.href} className="w-full sm:w-auto">
          <Phone className="w-4 h-4 mr-2" /> CALL NOW
        </Button>
        <Button variant="gold" as="a" href={business.whatsapp.href} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <MessageSquare className="w-4 h-4 mr-2" /> WHATSAPP
        </Button>
      </div>

      <button
        onClick={onReset}
        className="text-xs font-semibold uppercase tracking-widest text-ink-700 hover:text-maroon-700 transition-colors underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
      >
        Submit another request
      </button>
    </div>
  );
};
