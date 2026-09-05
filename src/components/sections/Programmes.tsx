import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';

const parcours = [
  {
    key: 'p1',
    href: '/programmes#canadien',
    borderColor: 'border-red-lcd',
    tagBg: 'bg-red-lcd/10 text-red-lcd',
    tagColor: 'text-red-lcd',
    icon: '🍁',
  },
  {
    key: 'p2',
    href: '/programmes#hybride',
    borderColor: 'border-gold',
    tagBg: 'bg-gold/10 text-gold',
    tagColor: 'text-gold',
    icon: '🌍',
  },
  {
    key: 'p3',
    href: '/programmes#prepa',
    borderColor: 'border-navy',
    tagBg: 'bg-navy/10 text-navy',
    tagColor: 'text-navy',
    icon: '🎓',
  },
];

export default function Programmes() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28" id="programmes" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="text-center mb-14">
          <SectionLabel text={t('programmes.surtitre')} />
          <h2
            className="font-heading font-extrabold text-navy leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            {t('programmes.h2_line1')}{' '}
            <span className="text-red-lcd">{t('programmes.h2_line2')}</span>
          </h2>
          <p className="font-body text-text-soft/70 mt-4 max-w-xl mx-auto leading-relaxed">
            {t('programmes.intro')}
          </p>
        </div>

        {/* Grille des 3 cartes */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {parcours.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={p.href}
                className={`group block bg-white rounded-xl p-7 border-l-4 ${p.borderColor} shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full`}
              >
                {/* Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-heading font-semibold px-3 py-1 rounded-full ${p.tagBg}`}>
                    <span>{p.icon}</span>
                    {t(`programmes.${p.key}_tag`)}
                  </span>
                </div>

                {/* Niveau */}
                <p className={`font-body text-xs font-semibold tracking-wide uppercase mb-3 ${p.tagColor}`}>
                  {t(`programmes.${p.key}_niveau`)}
                </p>

                {/* Texte */}
                <p className="font-body text-text-soft/80 text-sm leading-relaxed mb-5">
                  {t(`programmes.${p.key}_text`)}
                </p>

                {/* À la clé */}
                <div className="border-t border-border-light pt-4 mt-auto">
                  <p className="font-body text-xs text-text-soft/50 uppercase tracking-wide mb-1">
                    {t(`programmes.${p.key}_cle_label`)}
                  </p>
                  <p className={`font-heading font-semibold text-sm ${p.tagColor}`}>
                    {t(`programmes.${p.key}_cle`)}
                  </p>
                </div>

                {/* En savoir plus */}
                <div className={`flex items-center gap-1 mt-4 text-xs font-body font-semibold ${p.tagColor} group-hover:gap-2 transition-all duration-200`}>
                  {t('programmes.en_savoir')}
                  <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note passerelle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="border-l-4 border-gold bg-white rounded-lg px-6 py-4 shadow-card"
        >
          <p className="font-body text-text-soft/80 text-sm leading-relaxed">
            <span className="font-semibold text-navy">Note : </span>
            {t('programmes.passerelle')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
