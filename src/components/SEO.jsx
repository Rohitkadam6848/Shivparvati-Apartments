import { Helmet } from "react-helmet-async";
import {
  PROJECT_NAME,
  PROJECT_SUBTITLE,
  BUILDER_NAME,
  ADDRESS,
  PHONE_NUMBER,
  EMAIL,
  RERA_CONFIG,
} from "../data/siteConfig";

export default function SEO() {
  const pageTitle = `${PROJECT_NAME} | 1 & 2 BHK Flats Katraj-Kondhwa Rd Pune | MahaRERA ${RERA_CONFIG.reraNumber}`;
  const pageDescription = `${PROJECT_NAME} by ${BUILDER_NAME} offers premium 1 & 2 BHK residential apartments with rooftop amenities on Katraj-Kondhwa Road, Pune. MahaRERA Reg No: ${RERA_CONFIG.reraNumber}. Direct builder price & zero brokerage.`;
  const siteUrl = "https://shivparvatiapartments.com";
  const ogImageUrl = `${siteUrl}/images/WhatsApp%20Image%202026-08-18%20at%2011.08.19%20PM%20(1).jpeg`;

  // JSON-LD Structured Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "name": PROJECT_NAME,
    "description": pageDescription,
    "url": siteUrl,
    "image": ogImageUrl,
    "telephone": PHONE_NUMBER,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ADDRESS.line1,
      "addressLocality": "Kondhwa Budruk",
      "addressRegion": "Maharashtra",
      "postalCode": "411046",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4635676,
      "longitude": 73.8767905,
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Rooftop Yoga Deck", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Children Play Area", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Open Air Gymnasium", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Landscaped Garden with Gazebo", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Covered Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "24/7 Gated Security", "value": true },
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "category": "1 & 2 BHK Residential Apartments",
    },
    "identifier": {
      "@type": "PropertyValue",
      "name": "MahaRERA Registration Number",
      "value": RERA_CONFIG.reraNumber,
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta
        name="keywords"
        content="Shivparvati Apartments, 1 BHK Pune, 2 BHK Pune, Flats in Kondhwa, Katraj Kondhwa Road apartments, MahaRERA PR1260002601322, Shivparvati Developers, Pune Real Estate"
      />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={ogImageUrl} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
}
