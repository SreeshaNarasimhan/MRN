import type { GalleryItemSlot, GalleryCategory } from '@/types';
import { assets } from './assets';

// CENTRALIZED GALLERY DATA ARCHITECTURE
// 20 Photo Capacity Initial Architecture (5 per category)
// Categories:
// 1. ASTROLOGY & CONSULTATION
// 2. POOJA & RITUALS
// 3. EVENTS & OCCASIONS
// 4. DIVINE MOMENTS

export const galleryCategories: GalleryCategory[] = [
  'ASTROLOGY & CONSULTATION',
  'POOJA & RITUALS',
  'EVENTS & OCCASIONS',
  'DIVINE MOMENTS',
];

// Full /gallery page slots (5 slots per category = 20 total initial capacity)
export const galleryItems: GalleryItemSlot[] = [
  // ASTROLOGY & CONSULTATION (5 slots)
  {
    id: 'g-astrology-1',
    src: assets.astrologer.src,
    alt: assets.astrologer.alt,
    caption: 'Sri Narasimachari — Astrology Consultation & Traditional Guidance',
    category: 'ASTROLOGY & CONSULTATION',
    slotLabel: 'PHOTO 01',
  },
  {
    id: 'g-astrology-2',
    src: null,
    alt: 'Astrology Consultation Photo 02',
    caption: 'Photo 02 — Astrology Consultation',
    category: 'ASTROLOGY & CONSULTATION',
    slotLabel: 'PHOTO 02',
  },
  {
    id: 'g-astrology-3',
    src: null,
    alt: 'Astrology Consultation Photo 03',
    caption: 'Photo 03 — Astrology Consultation',
    category: 'ASTROLOGY & CONSULTATION',
    slotLabel: 'PHOTO 03',
  },
  {
    id: 'g-astrology-4',
    src: null,
    alt: 'Astrology Consultation Photo 04',
    caption: 'Photo 04 — Astrology Consultation',
    category: 'ASTROLOGY & CONSULTATION',
    slotLabel: 'PHOTO 04',
  },
  {
    id: 'g-astrology-5',
    src: null,
    alt: 'Astrology Consultation Photo 05',
    caption: 'Photo 05 — Astrology Consultation',
    category: 'ASTROLOGY & CONSULTATION',
    slotLabel: 'PHOTO 05',
  },

  // POOJA & RITUALS (5 slots)
  // PHOTO 01 -> Newly uploaded real photo 1
  // PHOTO 02 -> Newly uploaded real photo 2
  // PHOTO 03 -> Newly uploaded real photo 3
  // PHOTO 04 -> Future photo empty slot
  // PHOTO 05 -> Future photo empty slot
  {
    id: 'g-pooja-1',
    src: assets.gallery.pooja1.src,
    alt: assets.gallery.pooja1.alt,
    caption: 'Traditional Pooja & Ritual',
    category: 'POOJA & RITUALS',
    slotLabel: 'PHOTO 01',
  },
  {
    id: 'g-pooja-2',
    src: assets.gallery.pooja2.src,
    alt: assets.gallery.pooja2.alt,
    caption: 'Traditional Homam Ceremony',
    category: 'POOJA & RITUALS',
    slotLabel: 'PHOTO 02',
  },
  {
    id: 'g-pooja-3',
    src: assets.gallery.pooja3.src,
    alt: assets.gallery.pooja3.alt,
    caption: 'Temple Ritual & Worship',
    category: 'POOJA & RITUALS',
    slotLabel: 'PHOTO 03',
  },
  {
    id: 'g-pooja-4',
    src: null,
    alt: 'Pooja & Rituals Photo 04',
    caption: 'Photo 04 — Pooja & Rituals',
    category: 'POOJA & RITUALS',
    slotLabel: 'PHOTO 04',
  },
  {
    id: 'g-pooja-5',
    src: null,
    alt: 'Pooja & Rituals Photo 05',
    caption: 'Photo 05 — Pooja & Rituals',
    category: 'POOJA & RITUALS',
    slotLabel: 'PHOTO 05',
  },

  // EVENTS & OCCASIONS (5 slots)
  {
    id: 'g-events-1',
    src: assets.gallery.events1.src,
    alt: assets.gallery.events1.alt,
    caption: 'Naga Raja Ganapathi Temple Kumbhabhishekam Procession',
    category: 'EVENTS & OCCASIONS',
    slotLabel: 'PHOTO 01',
  },
  {
    id: 'g-events-2',
    src: null,
    alt: 'Events & Occasions Photo 02',
    caption: 'Photo 02 — Events & Occasions',
    category: 'EVENTS & OCCASIONS',
    slotLabel: 'PHOTO 02',
  },
  {
    id: 'g-events-3',
    src: null,
    alt: 'Events & Occasions Photo 03',
    caption: 'Photo 03 — Events & Occasions',
    category: 'EVENTS & OCCASIONS',
    slotLabel: 'PHOTO 03',
  },
  {
    id: 'g-events-4',
    src: null,
    alt: 'Events & Occasions Photo 04',
    caption: 'Photo 04 — Events & Occasions',
    category: 'EVENTS & OCCASIONS',
    slotLabel: 'PHOTO 04',
  },
  {
    id: 'g-events-5',
    src: null,
    alt: 'Events & Occasions Photo 05',
    caption: 'Photo 05 — Events & Occasions',
    category: 'EVENTS & OCCASIONS',
    slotLabel: 'PHOTO 05',
  },

  // DIVINE MOMENTS (5 slots)
  {
    id: 'g-divine-1',
    src: assets.deity.src,
    alt: assets.deity.alt,
    caption: 'Lord Sudharshana Lakshmi Narasimha Swamy Sanctum',
    category: 'DIVINE MOMENTS',
    slotLabel: 'PHOTO 01',
  },
  {
    id: 'g-divine-2',
    src: assets.gallery.pooja4.src,
    alt: assets.gallery.pooja4.alt,
    caption: 'Sri Narasimachari — Sacred Temple Sanctum',
    category: 'DIVINE MOMENTS',
    slotLabel: 'PHOTO 02',
  },
  {
    id: 'g-divine-3',
    src: null,
    alt: 'Divine Moments Photo 03',
    caption: 'Photo 03 — Divine Moments',
    category: 'DIVINE MOMENTS',
    slotLabel: 'PHOTO 03',
  },
  {
    id: 'g-divine-4',
    src: null,
    alt: 'Divine Moments Photo 04',
    caption: 'Photo 04 — Divine Moments',
    category: 'DIVINE MOMENTS',
    slotLabel: 'PHOTO 04',
  },
  {
    id: 'g-divine-5',
    src: null,
    alt: 'Divine Moments Photo 05',
    caption: 'Photo 05 — Divine Moments',
    category: 'DIVINE MOMENTS',
    slotLabel: 'PHOTO 05',
  },
];

// HOMEPAGE CAROUSEL DATA — 5 positions for "A GLIMPSE INTO OUR JOURNEY"
// PHOTO 01 -> Existing Sri Narasimachari astrology/consultation photo
// PHOTO 02 -> First newly uploaded real pooja/ritual photo (pooja-1.jpg)
// PHOTO 03 -> Second newly uploaded real pooja/ritual photo (pooja-2.jpg)
// PHOTO 04 -> Third newly uploaded real pooja/ritual photo (pooja-3.jpg)
// PHOTO 05 -> Future photo empty slot (src: null)
export const homepageAstrologyGallery: GalleryItemSlot[] = [
  {
    id: 'h-1',
    src: assets.astrologer.src,
    alt: assets.astrologer.alt,
    caption: 'Sri Narasimachari — Astrology Consultation & Guidance',
    category: 'ASTROLOGY & CONSULTATION',
    slotLabel: 'PHOTO 01',
  },
  {
    id: 'h-2',
    src: assets.gallery.pooja1.src,
    alt: assets.gallery.pooja1.alt,
    caption: 'Traditional Pooja & Ritual',
    category: 'POOJA & RITUALS',
    slotLabel: 'PHOTO 02',
  },
  {
    id: 'h-3',
    src: assets.gallery.pooja2.src,
    alt: assets.gallery.pooja2.alt,
    caption: 'Traditional Homam Ceremony',
    category: 'POOJA & RITUALS',
    slotLabel: 'PHOTO 03',
  },
  {
    id: 'h-4',
    src: assets.gallery.pooja3.src,
    alt: assets.gallery.pooja3.alt,
    caption: 'Temple Ritual & Worship',
    category: 'POOJA & RITUALS',
    slotLabel: 'PHOTO 04',
  },
  {
    id: 'h-5',
    src: null,
    alt: 'Future Photo Slot 05',
    caption: 'Photo 05 — Future Photo Slot',
    category: 'POOJA & RITUALS',
    slotLabel: 'PHOTO 05',
  },
];
