import type { VastuItem } from '@/types';

export const vastuServices: VastuItem[] = [
  {
    id: 'residential-vastu',
    title: 'Residential Vastu',
    description: 'Guidelines for home design, orientation, and spatial arrangement to promote domestic peace and balance.',
    details: [
      'Main Entrance Orientation & Energy Flow',
      'Pooja Room Sanctity & Directional Placement',
      'Master Bedroom & Family Sleeping Orientations',
      'Kitchen Fire Element Placement (Agni Corner)',
      'Water Body & Sanitation Placement Considerations'
    ]
  },
  {
    id: 'commercial-vastu',
    title: 'Commercial Vastu',
    description: 'Traditional layout recommendations for offices, shops, industrial units, and business premises.',
    details: [
      'Executive Seating & Directional Alignment',
      'Cash Counter & Financial Vault Placement',
      'Main Entrance & Reception Spatial Arrangement',
      'Staff Workstation & Meeting Room Orientations',
      'Warehouse & Heavy Machinery Layout Recommendations'
    ]
  }
];

export const vastuSteps = [
  {
    step: '01',
    title: 'Initial Enquiry & Details',
    description: 'Share property specifications, directional layout, or floor plan prior to consultation.'
  },
  {
    step: '02',
    title: 'Site Plan Assessment',
    description: 'Detailed evaluation of cardinal directions, five elements distribution, and room placements.'
  },
  {
    step: '03',
    title: 'Traditional Analysis',
    description: 'Review against traditional Vastu Shastra principles without structural destruction recommendations.'
  },
  {
    step: '04',
    title: 'Guidance & Recommendations',
    description: 'Receive practical, non-invasive adjustments and directional suggestions for optimal balance.'
  }
];
