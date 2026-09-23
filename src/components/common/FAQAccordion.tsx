import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/types';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FAQAccordionProps {
  items: FaqItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn('space-y-4 max-w-3xl mx-auto', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const triggerId = `faq-trigger-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="bg-cream-50 border border-gold-400/25 rounded-2xl overflow-hidden transition-colors hover:border-gold-400/50 shadow-sm"
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-lg md:text-xl font-semibold text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-inset"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-gold-500 shrink-0 transition-transform duration-300',
                    isOpen ? 'rotate-180 text-maroon-700' : ''
                  )}
                />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={shouldReduceMotion ? { height: 'auto', opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={shouldReduceMotion ? { height: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm md:text-base text-ink-700 font-sans leading-relaxed border-t border-gold-400/15">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
