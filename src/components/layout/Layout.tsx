import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { PageTransition } from './PageTransition';
import { FloatingActions } from '@/components/common/FloatingActions';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50 font-sans antialiased text-ink-800 selection:bg-maroon-700 selection:text-cream-50 overflow-x-hidden">
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <FloatingActions />
      <Footer />
    </div>
  );
};
