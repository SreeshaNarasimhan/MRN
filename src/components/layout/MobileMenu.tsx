import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, Calendar } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { business } from '@/data/business';
import { Button } from '@/components/ui/Button';
import { useScrollLock } from '@/hooks/useScrollLock';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useScrollLock(isOpen);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-maroon-950/80 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            id="mobile-menu-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-maroon-950 text-cream-50 border-l border-gold-400/30 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gold-400/20">
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-lg text-cream-50 tracking-wider">
                    {business.brandLine1}
                  </span>
                  <span className="font-serif text-xs text-gold-400 tracking-widest">
                    {business.brandLine2}
                  </span>
                </div>
                <button
                  ref={closeBtnRef}
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 text-gold-300 hover:text-cream-50 rounded-full border border-gold-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <nav className="py-6 flex flex-col gap-2" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `px-4 py-3 text-base font-sans font-medium rounded-xl transition-colors ${
                        isActive
                          ? 'bg-maroon-900 text-gold-400 border border-gold-400/30 font-semibold'
                          : 'text-cream-100 hover:bg-maroon-900/50 hover:text-gold-300'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Footer Actions */}
            <div className="pt-6 border-t border-gold-400/20 space-y-4">
              <Button
                variant="gold"
                size="lg"
                to="/book-appointment"
                onClick={onClose}
                className="w-full"
              >
                <Calendar className="w-4 h-4 mr-2" /> BOOK APPOINTMENT
              </Button>

              <OrnamentDivider light className="my-2" />

              <div className="flex items-center justify-around text-xs text-gold-300 pt-2 font-sans">
                <a
                  href={business.phone.href}
                  className="flex items-center gap-1.5 hover:text-cream-50"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call</span>
                </a>
                <a
                  href={business.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cream-50"
                >
                  <MessageSquare className="w-4 h-4 text-gold-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
