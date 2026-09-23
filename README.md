# SUDHARSHANA LAKSHMI NARASIMHAA ASTROLOGY CENTRE

A modern, responsive, and dignified web application for **Sudharshana Lakshmi Narasimhaa Astrology Centre** (Salem, Tamil Nadu).

Built with **React 18**, **TypeScript**, **Tailwind CSS 3.4**, **Framer Motion**, and **React Router v6**.

---

## 🚀 Quick Start

### Development Server
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Type Checking
```bash
npx tsc --noEmit
```

---

## 📁 Project Structure

```
src/
  assets/
    images/             # Brand photographs & imagery
  components/
    cards/              # ServiceCard, FeatureCard, StepCard, TestimonialCard, ContactCard
    common/             # PageHero, CTASection, FAQAccordion, GalleryGrid, Lightbox, Seo, FloatingActions
    forms/              # AppointmentForm, FormField, SuccessState
    layout/             # TopBar, Navbar, MobileMenu, Footer, Layout, ScrollToTop, PageTransition
    ui/                 # Button, SectionHeading, OrnamentDivider, ImageWithFallback, Reveal, Container, Section
  data/
    business.ts         # Single Source of Truth for all business details (name, phone, address, map link)
    navigation.ts       # Main navigation menu links
    services.ts         # List of 8 core services & detailed coverage items
    vastu.ts            # Vastu consultation specifications & steps
    pooja.ts            # Ceremonial pooja & ritual descriptions
    faqs.ts             # Frequently Asked Questions (from confirmed business data)
    testimonials.ts     # Client testimonials registry (editable by client)
    gallery.ts          # Sanctum & consultation gallery registry
    assets.ts           # Central image & asset registry
  hooks/
    useScrollLock.ts    # Body scroll lock for drawers & lightboxes
    useReducedMotion.ts # Accessibility prefers-reduced-motion detector
    useLightbox.ts      # Gallery lightbox state management
  lib/
    api.ts              # Phase 2 backend endpoint integration stub
    motion.ts           # Framer motion variants & ease constants
    utils.ts            # Classname merger utility
    validation.ts       # Frontend form validation logic
  pages/
    HomePage.tsx        # 13-section complete landing page
    AboutPage.tsx       # About the astrologer & centre philosophy
    ServicesPage.tsx    # Expanded service showcase
    VastuPage.tsx       # Residential & commercial Vastu consultation
    PoojaPage.tsx       # Pooja & Hindu priest services
    GalleryPage.tsx     # Image gallery with full-screen lightbox
    TestimonialsPage.tsx# Client feedback page
    ContactPage.tsx     # Contact info & direct message form
    BookAppointmentPage.tsx # Consultation booking portal
    NotFoundPage.tsx    # Branded 404 page
  types.ts              # Shared TypeScript definitions
```

---

## ✏️ How to Edit Content & Data

All business details are centralized to ensure **zero hardcoded strings** in the UI.

### 1. Update Business Details
Edit [`src/data/business.ts`](file:///e:/MRN/src/data/business.ts):
- Address, phone numbers, WhatsApp link, Google Maps location URL, and brand taglines.

### 2. Add / Edit Testimonials
Edit [`src/data/testimonials.ts`](file:///e:/MRN/src/data/testimonials.ts):
Add entries adhering to the `TestimonialItem` interface:
```ts
{
  id: 't-7',
  name: 'Client Name',
  service: 'Vastu Consultation',
  quote: 'Client review text goes here.',
  rating: 5 // 1-5 or null to hide stars
}
```

### 3. Add Gallery Photography
1. Place image files in `src/assets/images/`.
2. Register them in [`src/data/assets.ts`](file:///e:/MRN/src/data/assets.ts).
3. Add entries to [`src/data/gallery.ts`](file:///e:/MRN/src/data/gallery.ts).

---

## 🔌 Connecting a Real Backend (Phase 2)

All form submissions route through the unified stub in [`src/lib/api.ts`](file:///e:/MRN/src/lib/api.ts).

To connect your backend API:
1. Open [`src/lib/api.ts`](file:///e:/MRN/src/lib/api.ts).
2. Replace `submitAppointment` with a real `fetch` or `axios` call:

```ts
export async function submitAppointment(data: AppointmentRequest): Promise<{ ok: true }> {
  const response = await fetch('https://api.yourdomain.com/v1/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error('Submission failed');
  return { ok: true };
}
```

The `AppointmentForm` component will automatically handle loading indicators, validation, and success states upon resolving `submitAppointment`.

---

## 🎨 Design System

- **Colors**: Maroon (`maroon-700` `#661223`), Antique Gold (`gold-400` `#C9A24A`), Warm Cream (`cream-50` `#FDFAF4`), Deep Ink (`ink-900` `#1F1916`).
- **Typography**: Cormorant Garamond (Serif display headings), Inter (Sans body & UI controls).
