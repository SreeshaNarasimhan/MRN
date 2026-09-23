import React from 'react';
import { Helmet } from 'react-helmet-async';
import { business } from '@/data/business';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description = 'Sudharshana Lakshmi Narasimhaa Astrology Centre in Salem provides traditional astrology consultation, Janam Kundali matching, Vastu Shastra consultation, and Hindu priest pooja services.',
  path = '/',
  image = '/assets/lakshmi-narasimha.jpg',
}) => {
  const fullTitle = title
    ? `${title} | ${business.shortName} — Astrology Centre, Salem`
    : `${business.shortName} — Astrology Centre, Salem | Divine Guidance for Life`;

  const siteUrl = 'https://sudharshananarasimhaa.com'; // Canonical baseline
  const canonicalUrl = `${siteUrl}${path}`;

  const schemaOrgJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: description,
    url: siteUrl,
    telephone: business.phone.display,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.line1,
      addressLocality: business.city,
      addressRegion: 'Tamil Nadu',
      postalCode: '636001',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'City',
      name: business.city,
    },
    knowsAbout: [
      'Astrology',
      'Vastu Shastra',
      'Hindu Priest Services',
      'Kundali Matching',
      'Vedic Poojas',
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
    </Helmet>
  );
};
