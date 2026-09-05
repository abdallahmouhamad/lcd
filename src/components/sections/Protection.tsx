import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';

export default function Protection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const engagements = ['e1', 'e2', 'e3', 'e4', 'e5'];

  return (
    <section className="bg-offwhite py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel text={t('protection.surtitre')} />
            <h2
              className="font-heading font-extrabold text-navy leading-tight mb-5"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}
            >
              {t('protection.h2_line1')}<br />
              <span className="text-red-lcd">{t('protection.h2_line2')}</span>
            </h2>
            <p className="font-body text-text-soft/80 leading-relaxed mb-7">
              {t('protection.intro')}
            </p>

            {/* Liste sans stagger individuel — container parent déjà animé */}
            <ul className="flex flex-col gap-4 mb-8">
              {engagements.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-red-lcd shrink-0 mt-0.5" />
                  <span className="font-body text-text-soft/80 text-sm leading-relaxed">
                    {t(`protection.${key}`)}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/protection-bien-etre"
              className="inline-flex items-center gap-2 text-red-lcd font-body font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              {t('protection.cta')} →
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]"
          >
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80"
              alt="Élèves en classe au Lycée Canadien de Dakar"
              className="w-full h-full object-cover"
              style={{ objectPosition: '40% center' }}
              width={700}
              height={525}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
