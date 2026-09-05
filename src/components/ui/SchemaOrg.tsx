import { Helmet } from 'react-helmet-async';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Lycée Canadien de Dakar",
  "alternateName": "LCD",
  "url": "https://lcd.sn",
  "logo": "https://lcd.sn/logo.svg",
  "description": "École internationale au Point E, Dakar, promouvant le curriculum canadien de l'Ontario de la 6e à la Terminale.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Point E",
    "addressLocality": "Dakar",
    "addressCountry": "SN"
  },
  "telephone": "+221787359256",
  "email": "contact@lcd.sn",
  "foundingDate": "2026",
  "areaServed": "Sénégal",
  "educationalCredentialAwarded": "Diplôme d'Études Secondaires de l'Ontario (DESO)"
};

export default function SchemaOrg() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}
