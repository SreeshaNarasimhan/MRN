// src/data/assets.ts
import deityImg from '@/assets/images/lakshmi-narasimha.jpg';
import astrologerImg from '@/assets/images/sri-narasimachari.jpg';

// Real user-provided gallery photos
import pooja1Img from '@/assets/images/gallery/pooja/pooja-1.jpg';
import pooja2Img from '@/assets/images/gallery/pooja/pooja-2.jpg';
import pooja3Img from '@/assets/images/gallery/pooja/pooja-3.jpg';
import pooja4Img from '@/assets/images/gallery/pooja/pooja-4.jpg';
import events1Img from '@/assets/images/gallery/events/events-1.jpg';

// Decorative mandala pattern SVG string for dark maroon background sections
export const mandalaSvg = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="45" stroke="#C9A24A" stroke-width="0.5" stroke-opacity="0.3"/>
  <circle cx="50" cy="50" r="35" stroke="#C9A24A" stroke-width="0.5" stroke-opacity="0.25"/>
  <circle cx="50" cy="50" r="25" stroke="#C9A24A" stroke-width="0.5" stroke-opacity="0.2"/>
  <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="#C9A24A" stroke-width="0.5" stroke-opacity="0.2"/>
  <polygon points="50,15 63,37 85,50 63,63 50,85 37,63 15,50 37,37" stroke="#C9A24A" stroke-width="0.5" stroke-opacity="0.25" fill="none"/>
</svg>
`;

export const assets = {
  deity: {
    src: deityImg,
    alt: 'Lord Lakshmi Narasimha Swamy Sanctum',
    title: 'Lord Lakshmi Narasimha',
  },
  astrologer: {
    src: astrologerImg,
    alt: 'Sri Narasimachari, Astrologer, Vastu Consultant & Hindu Priest',
    title: 'Sri Narasimachari',
  },
  gallery: {
    pooja1: {
      src: pooja1Img,
      alt: 'Sri Narasimachari performing traditional pooja and deity ritual',
      title: 'Traditional Pooja & Ritual',
    },
    pooja2: {
      src: pooja2Img,
      alt: 'Traditional Homam ceremony performed by Sri Narasimachari',
      title: 'Traditional Homam Ceremony',
    },
    pooja3: {
      src: pooja3Img,
      alt: 'Sri Narasimachari performing temple deity ritual and scripture reading',
      title: 'Temple Ritual & Worship',
    },
    pooja4: {
      src: pooja4Img,
      alt: 'Sri Narasimachari at Temple Sanctum',
      title: 'Sri Narasimachari at Temple Sanctum',
    },
    events1: {
      src: events1Img,
      alt: 'Sri Naga Raja Ganapathi Temple Kumbhabhishekam & Veda Vathya Procession',
      title: 'Naga Raja Ganapathi Temple Procession',
    },
  },
  poster: {
    src: deityImg,
    alt: 'Sudharshana Lakshmi Narasimhaa Astrology Centre',
    title: 'Brand Sanctum Poster',
  },
  card: {
    src: astrologerImg,
    alt: 'Astrology Centre Consultation Card',
    title: 'Consultation Business Card',
  },
} as const;
