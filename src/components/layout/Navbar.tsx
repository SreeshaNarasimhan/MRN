import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { business } from '@/data/business';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-30 w-full transition-all duration-300',
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-md border-b border-gold-400/30 shadow-[0_4px_20px_-10px_rgba(102,18,35,0.15)] py-3'
            : 'bg-cream-50/70 border-b border-gold-400/15 py-4'
        )}
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Lockup */}
          <Link
            to="/"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm"
          >
            <span className="font-serif font-bold text-lg md:text-xl tracking-wider text-maroon-900 group-hover:text-maroon-700 transition-colors leading-tight">
              {business.brandLine1}
            </span>
            <div className="flex items-center gap-2">
              <span className="font-serif font-semibold text-xs md:text-sm tracking-widest text-gold-600 group-hover:text-gold-500 transition-colors">
                {business.brandLine2}
              </span>
              <span className="h-[1px] w-6 bg-gold-400/60 hidden sm:inline-block" aria-hidden="true" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'relative py-1 text-xs xl:text-sm font-sans font-medium uppercase tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm',
                    isActive ? 'text-maroon-800 font-semibold' : 'text-ink-800 hover:text-maroon-700'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-400 rounded-full animate-fadeIn"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              as={Link}
              to="/book-appointment"
              className="hidden sm:inline-flex"
            >
              BOOK APPOINTMENT
            </Button>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              aria-label="Open navigation menu"
              className="lg:hidden p-2 text-maroon-900 hover:text-maroon-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg border border-gold-400/30"
            >
              <Menu className="w-6 h-6 stroke-[1.75]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
