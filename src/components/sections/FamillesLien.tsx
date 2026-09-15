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
    <section className="bg-white py-16 md:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-card order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1603394336952-3628e17d3920?w=800&q=80"
              alt="Élèves en uniforme au Lycée Canadien de Dakar"
              loading="lazy"
              className="w-full h-72 md:h-96 object-cover"
            />
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <SectionLabel text={t('familles.surtitre')} />
            <h2
              className="font-heading font-extrabold text-navy mb-5"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}
            >
              {t('familles.h2')}
            </h2>
            <p className="font-body text-text-soft/70 leading-relaxed mb-10">
              {t('familles.text')}
            </p>

            {/* 3 piliers */}
            <div className="flex flex-col gap-4">
              {[
                { Icon: CalendarCheck, label: "Points d'étape réguliers" },
                { Icon: MessageSquare, label: 'Équipe joignable' },
                { Icon: Bell, label: 'Suivi en temps réel' },
              ].map(({ Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-offwhite flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-navy" />
                  </div>
                  <span className="font-body text-sm text-text-soft/70 leading-snug">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
