import type { ServiceItem } from '@/types';

export const services: ServiceItem[] = [
  {
    id: 'astrology-consultation',
    title: 'Astrology Consultation',
    shortDesc: 'Comprehensive horoscope analysis for personal clarity and traditional guidance.',
    fullDesc: 'In-depth review of planetary positions at birth to provide traditional perspective on life events and upcoming periods.',
    iconName: 'Sparkles',
    category: 'astrology',
    covers: [
      'Comprehensive Horoscope Analysis',
      'Planetary Dasha Period Overview',
      'Life Guidance & Timing Assessment',
      'Personalized Consultation Session'
    ]
  },
  {
    id: 'birth-chart-kundali',
    title: 'Birth Chart / Kundali',
    shortDesc: 'Detailed computation and interpretation of your birth chart based on precise date, time, and birthplace.',
    fullDesc: 'Structured analysis of the 12 houses, planetary placements, and birth chart alignments according to traditional Vedic astrological principles.',
    iconName: 'ScrollText',
    category: 'astrology',
    covers: [
      'Janam Kundali Preparation',
      'Planetary Positions & House Analysis',
      'Ascendant & Rashi Detailed Assessment',
      'Important Life Phase Insights'
    ]
  },
  {
    id: 'marriage-astrology',
    title: 'Marriage Astrology',
    shortDesc: 'Thoughtful astrological evaluation for marital timing, compatibility, and family harmony.',
    fullDesc: 'Traditional guidance on marriage timing, planetary influences affecting relationships, and domestic well-being.',
    iconName: 'HeartHandshake',
    category: 'astrology',
    covers: [
      'Marriage Timing Evaluation',
      '7th House & Venus/Jupiter Assessment',
      'Harmonious Living Guidelines',
      'Family & Domestic Guidance'
    ]
  },
  {
    id: 'kundali-matching',
    title: 'Kundali Matching',
    shortDesc: 'Traditional Guna Milan and horoscope compatibility analysis for prospective couples.',
    fullDesc: 'Detailed evaluation of 36 Gunas, Koota matching, and Dosha analysis to assist families in marital decision making.',
    iconName: 'Users',
    category: 'astrology',
    covers: [
      'Ashtakoota Guna Milan (36 Points)',
      'Manglik Dosha Analysis',
      'Emotional & Health Compatibility',
      'Family Harmony Assessment'
    ]
  },
  {
    id: 'career-business-guidance',
    title: 'Career & Business Guidance',
    shortDesc: 'Astrological perspective on professional paths, business ventures, and timing for key decisions.',
    fullDesc: 'Assessment of 10th house strength, Saturn and Mercury planetary influences, and favorable periods for career growth or commercial initiatives.',
    iconName: 'Briefcase',
    category: 'guidance',
    covers: [
      'Career Path & Vocation Analysis',
      'Business Venture Timing Insights',
      'Workplace Harmony Guidance',
      'Financial Period Evaluations'
    ]
  },
  {
    id: 'vastu-consultation',
    title: 'Vastu Consultation',
    shortDesc: 'Traditional spatial alignment guidance for homes, offices, and commercial properties.',
    fullDesc: 'Analysis of five natural elements (Pancha Bhoota) and directional orientations to foster peace and balance in living and working spaces.',
    iconName: 'Home',
    category: 'vastu',
    covers: [
      'Residential Spatial Assessment',
      'Office & Workspace Alignment',
      'Pooja Room & Entrance Guidance',
      'Remedial Layout Recommendations'
    ]
  },
  {
    id: 'pooja-hindu-rituals',
    title: 'Pooja & Hindu Rituals',
    shortDesc: 'Traditional priest services for auspicious home ceremonies, homams, and sacred rites.',
    fullDesc: 'Sacred ceremonies conducted in accordance with Vedic rituals for domestic peace, auspicious beginnings, and spiritual devotion.',
    iconName: 'Flame',
    category: 'pooja',
    covers: [
      'Griha Pravesh Ceremonies',
      'Satyanarayana & Navagraha Poojas',
      'Homam & Divine Invocation Rites',
      'Family & Milestone Rituals'
    ]
  },
  {
    id: 'spiritual-remedies',
    title: 'Spiritual Remedies',
    shortDesc: 'Traditional practices, mantra recitation, and ritual suggestions tailored to individual charts.',
    fullDesc: 'Guidance on traditional observances, prayer practices, and charity (Dana) in alignment with classical astrological literature.',
    iconName: 'Compass',
    category: 'guidance',
    covers: [
      'Specific Stotra & Mantra Recitation',
      'Auspicious Day Observances',
      'Traditional Charity Guidelines',
      'Personal Spiritual Practice'
    ]
  }
];
