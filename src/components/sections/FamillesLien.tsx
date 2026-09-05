import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageSquare, CalendarCheck, Bell } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';

export default function FamillesLien() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-16 md:py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionLabel text={t('familles.surtitre')} />
          <h2
            className="font-heading font-extrabold text-navy mb-5"
            style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}
          >
            {t('familles.h2')}
          </h2>
          <p className="font-body text-text-soft/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t('familles.text')}
          </p>

          {/* 3 piliers */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { Icon: CalendarCheck, label: "Points d'étape réguliers" },
              { Icon: MessageSquare, label: 'Équipe joignable' },
              { Icon: Bell, label: 'Suivi en temps réel' },
            ].map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-offwhite flex items-center justify-center">
                  <Icon size={20} className="text-navy" />
                </div>
                <span className="font-body text-xs text-text-soft/60 leading-snug text-center">
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
