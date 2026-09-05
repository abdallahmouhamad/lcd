import { useTranslation } from 'react-i18next';
import bemLogo from '../assets/images/bem.jpeg';
import camesLogo from '../assets/images/cames.jpg';
import anaqLogo from '../assets/images/anaqsup.png';
import ontarioLogo from '../assets/images/dso.png';

const logos = [
  { src: bemLogo, alt: 'BEM Dakar — école partenaire fondatrice', key: 'bem' },
  { src: camesLogo, alt: 'CAMES — Conseil Africain et Malgache pour l\'Enseignement Supérieur', key: 'cames' },
  { src: anaqLogo, alt: 'ANAQ-SUP Sénégal — Autorité Nationale d\'Assurance Qualité', key: 'anaq' },
  { src: ontarioLogo, alt: 'Ontario DESO — Ministère de l\'Éducation de l\'Ontario', key: 'ontario' },
];

export default function PartenairesStrip() {
  const { t } = useTranslation();

  return (
    <section
      className="bg-white border-t border-gold py-8"
      aria-label="Nos partenaires institutionnels et académiques"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center mb-8"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: '#9ca3af',
            textTransform: 'uppercase',
          }}
        >
          {t('partners.label')}
        </p>

        <div
          role="list"
          className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
        >
          {logos.map(({ src, alt, key }) => (
            <div
              key={key}
              role="listitem"
              className="flex items-center justify-center"
            >
              <img
                src={src}
                alt={alt}
                className="h-12 md:h-14 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
