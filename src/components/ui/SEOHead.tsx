import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://lcd.sn';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEOHead({ title, description, path = '' }: SEOHeadProps) {
  const fullTitle = title.includes('Lycée Canadien de Dakar')
    ? title
    : `${title} | Lycée Canadien de Dakar`;

  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_SN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
