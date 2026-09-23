import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';

// Lazy loading route components for performance
const HomePage = lazy(() =>
  import('@/pages/HomePage').then((m) => ({ default: m.HomePage }))
);
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ServicesPage = lazy(() =>
  import('@/pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const VastuPoojaPage = lazy(() =>
  import('@/pages/VastuPoojaPage').then((m) => ({ default: m.VastuPoojaPage }))
);
const GalleryPage = lazy(() =>
  import('@/pages/GalleryPage').then((m) => ({ default: m.GalleryPage }))
);
const TestimonialsPage = lazy(() =>
  import('@/pages/TestimonialsPage').then((m) => ({ default: m.TestimonialsPage }))
);
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const BookAppointmentPage = lazy(() =>
  import('@/pages/BookAppointmentPage').then((m) => ({ default: m.BookAppointmentPage }))
);
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

const LoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-cream-50 text-maroon-900">
    <div className="w-12 h-12 rounded-full border-2 border-gold-400 border-t-maroon-700 animate-spin mb-4" />
    <span className="text-xs font-serif font-semibold tracking-widest text-gold-600 uppercase">
      SUDHARSHANA LAKSHMI NARASIMHAA
    </span>
  </div>
);

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="vastu-pooja" element={<VastuPoojaPage />} />
              <Route path="vastu" element={<Navigate to="/vastu-pooja" replace />} />
              <Route path="pooja" element={<Navigate to="/vastu-pooja" replace />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="testimonials" element={<TestimonialsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="book-appointment" element={<BookAppointmentPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
