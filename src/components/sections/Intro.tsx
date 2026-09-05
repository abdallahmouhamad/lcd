import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionLabel from '../ui/SectionLabel';
import bemLogo from '../../assets/images/bem.jpeg';
import picLogo from '../../assets/images/pic.webp';
import louisLogo from '../../assets/images/Logo_Lycée_Louis-le-Grand.png';
import ontarioLogo from '../../assets/images/dso.png';
import pisaLogo from '../../assets/images/pisa.jpeg';

const partenaires = [
  { src: bemLogo,     alt: 'BEM Dakar',                                                      key: 'bem' },
  { src: picLogo,     alt: 'Performation Immigration (PIC)',                                  key: 'pic' },
  { src: louisLogo,   alt: 'École Louis-le-Grand',                                            key: 'louis' },
  { src: ontarioLogo, alt: 'Ontario DESO — Ministère de l\'Éducation',                       key: 'ontario' },
  { src: pisaLogo,    alt: 'PISA — Programme International pour le Suivi des Acquis',         key: 'pisa' },
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

          {/* Logos */}
          <div
            role="list"
            aria-label="Nos partenaires institutionnels et académiques"
            className="flex flex-wrap justify-center items-center gap-8 md:gap-14"
          >
            {partenaires.map(({ src, alt, key }, i) => (
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
                  className="h-16 md:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                  style={{ maxWidth: '160px' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
