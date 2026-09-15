import { useTranslation } from 'react-i18next';
import bemLogo from '../assets/images/bem.jpeg';
import bemAfricaLogo from '../assets/images/bem-africa.jpeg';
import picLogo from '../assets/images/pic.webp';
import louisLogo from '../assets/images/Logo_Lycée_Louis-le-Grand.png';
import ocdeLogo from '../assets/images/ocde.jpeg';

/* h = hauteur d'affichage individuelle pour équilibrer le poids visuel */
const logos = [
  { src: bemLogo,       alt: 'BEM Dakar — école partenaire fondatrice',              key: 'bem',        h: 96 },
  { src: bemAfricaLogo, alt: 'BEM Africa — réseau panafricain',                      key: 'bem-africa', h: 92 },
  { src: picLogo,       alt: 'Performation Immigration (PIC)',                        key: 'pic',        h: 80 },
  { src: louisLogo,     alt: 'École Louis-le-Grand — partenaire académique',          key: 'louis',      h: 84 },
  { src: ocdeLogo,      alt: 'OCDE — Organisation de Coopération et Développement',  key: 'ocde',       h: 92 },
];

const mentions = [
  'Curriculum de l\'Ontario',
  'Système classé Top 5 mondial · Évaluations PISA de l\'OCDE',
];

export default function PartenairesStrip() {
  const { t } = useTranslation();

  return (
    <section
      className="bg-white border-t border-gold py-10"
      aria-label="Nos partenaires institutionnels et académiques"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <p
          className="text-center mb-8"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', color: '#9ca3af', textTransform: 'uppercase' }}
        >
          {t('partners.label')}
        </p>

        {/* Logos */}
        <div
          role="list"
          className="flex flex-wrap justify-center items-center gap-10 md:gap-14 mb-8"
        >
          {logos.map(({ src, alt, key, h }) => (
            <div key={key} role="listitem" className="flex items-center justify-center">
              <img
                src={src}
                alt={alt}
                style={{ height: `${h}px`, width: 'auto', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Mentions textuelles — tags sobres avec accent or */}
        <div className="flex flex-wrap justify-center gap-3">
          {mentions.map((label) => (
            <div
              key={label}
              className="flex items-stretch overflow-hidden rounded-md border border-navy/10 bg-offwhite"
            >
              <div className="w-[3px] flex-shrink-0" style={{ backgroundColor: '#E0A238', opacity: 0.7 }} />
              <span
                className="px-4 py-2 font-body font-medium text-navy/60"
                style={{ fontSize: '15px', letterSpacing: '0.02em' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
