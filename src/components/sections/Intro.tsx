import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionLabel from '../ui/SectionLabel';
import bemLogo from '../../assets/images/bem.jpeg';
import bemAfricaLogo from '../../assets/images/bem-africa.jpeg';
import picLogo from '../../assets/images/pic.webp';
import louisLogo from '../../assets/images/Logo_Lycée_Louis-le-Grand.png';
import ocdeLogo from '../../assets/images/ocde.jpeg';

const partenaires = [
  { src: bemLogo,       alt: 'BEM Dakar',                                           key: 'bem',        h: 96 },
  { src: bemAfricaLogo, alt: 'BEM Africa — réseau panafricain',                     key: 'bem-africa', h: 92 },
  { src: picLogo,       alt: 'Performation Immigration (PIC)',                       key: 'pic',        h: 80 },
  { src: louisLogo,     alt: 'École Louis-le-Grand',                                key: 'louis',      h: 84 },
  { src: ocdeLogo,      alt: 'OCDE — Organisation de Coopération et Développement', key: 'ocde',       h: 92 },
];

const mentions = [
  'Curriculum de l\'Ontario',
  'Système classé Top 5 mondial · Évaluations PISA de l\'OCDE',
];

export default function Intro() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Texte — deux colonnes */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel text={t('intro.surtitre')} />
            <h2
              className="font-heading font-extrabold text-navy leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
            >
              {t('intro.h2')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="font-body text-navy font-medium text-lg leading-relaxed italic">
              {t('intro.accroche')}
            </p>
            <p className="font-body text-text-soft/80 leading-relaxed">
              {t('intro.p1')}
            </p>
            <p className="font-body text-text-soft/80 leading-relaxed">
              {t('intro.p2')}
            </p>
          </motion.div>
        </div>

        {/* Séparateur + Partenaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          {/* Ligne séparatrice */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gray-200" />
            <span
              className="shrink-0 font-body uppercase tracking-widest text-gray-400"
              style={{ fontSize: '10px', letterSpacing: '0.14em' }}
            >
              {t('partners.label')}
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Logos partenaires */}
          <div
            role="list"
            aria-label="Nos partenaires institutionnels et académiques"
            className="flex flex-wrap justify-center items-center gap-8 md:gap-14 mb-8"
          >
            {partenaires.map(({ src, alt, key, h }, i) => (
              <motion.div
                key={key}
                role="listitem"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="group flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  style={{ height: `${h}px`, width: 'auto', objectFit: 'contain' }}
                  className="transition-all duration-300 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          {/* Mentions textuelles — tags sobres avec accent or */}
          <div className="flex flex-wrap justify-center gap-3">
            {mentions.map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="flex items-stretch overflow-hidden rounded-md border border-navy/10 bg-offwhite"
              >
                <div className="w-[3px] flex-shrink-0" style={{ backgroundColor: '#E0A238', opacity: 0.7 }} />
                <span
                  className="px-4 py-2 font-body font-medium text-navy/60"
                  style={{ fontSize: '15px', letterSpacing: '0.02em' }}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
