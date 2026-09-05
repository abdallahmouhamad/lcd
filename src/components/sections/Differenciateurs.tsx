import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  BookOpen, Languages, Users, Shield, Sparkles, GraduationCap
} from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';

const icons = [BookOpen, Languages, Users, Shield, Sparkles, GraduationCap];

export default function Differenciateurs() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <SectionLabel text={t('diff.surtitre')} />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            {t('diff.h2')}
          </h2>
        </div>

        {/* Container seul animé — pas de stagger individuel sur chaque bloc */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mb-16"
        >
          {[1, 2, 3, 4, 5, 6].map((n, i) => {
            const Icon = icons[i];
            const isOrientation = n === 6;
            const inner = (
              <>
                <div className="shrink-0 w-10 h-10 rounded-lg bg-red-lcd/10 flex items-center justify-center mt-0.5">
                  <Icon size={18} className="text-red-lcd" />
                </div>
                <div>
                  <h3 className={`font-heading font-bold text-navy text-base mb-1.5${isOrientation ? ' group-hover:text-red-lcd transition-colors duration-200' : ''}`}>
                    {t(`diff.d${n}_titre`)}
                  </h3>
                  <p className="font-body text-text-soft/70 text-sm leading-relaxed">
                    {t(`diff.d${n}_text`)}
                  </p>
                  {isOrientation && (
                    <span className="font-body text-red-lcd text-xs font-semibold mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                      En savoir plus →
                    </span>
                  )}
                </div>
              </>
            );
            return isOrientation ? (
              <Link
                key={n}
                to="/orientation-universitaire"
                className="group flex gap-4 hover:opacity-80 transition-opacity duration-200"
              >
                {inner}
              </Link>
            ) : (
              <div key={n} className="flex gap-4">
                {inner}
              </div>
            );
          })}
        </motion.div>

        {/* Bandeau preuve OCDE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="bg-navy rounded-2xl py-8 px-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-baseline gap-3">
            <span className="font-heading font-extrabold text-gold" style={{ fontSize: '3rem' }}>
              TOP 5
            </span>
            <span className="font-body text-white/70 text-sm max-w-xs leading-snug">
              Le système éducatif de l'Ontario figure parmi les cinq plus performants
              au monde selon les évaluations internationales PISA de l'OCDE.
            </span>
          </div>
          <div className="shrink-0 border border-white/20 rounded-lg px-4 py-2 text-center">
            <p className="font-body text-white/50 text-xs uppercase tracking-widest">Source</p>
            <p className="font-heading font-semibold text-white text-sm">OCDE · PISA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
