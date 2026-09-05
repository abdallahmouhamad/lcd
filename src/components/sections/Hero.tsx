import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/* Images placeholder — à remplacer par les photos officielles LCD */
const heroImages = [
  {
    id: 0,
    // Classe avec élèves diversifiés face au prof — cadre scolaire vivant
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=90',
    style: { objectPosition: '40% center' },
  },
  {
    id: 1,
    // Étudiante souriante à son bureau avec cahiers
    src: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=1600&q=90',
    style: { objectPosition: '50% 20%' },
  },
  {
    id: 2,
    // Remise de diplômes — cérémonie de graduation
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=90',
    style: { objectPosition: '55% center' },
  },
  {
    id: 3,
    // Enfant concentré qui écrit — suivi individuel
    src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=90',
    style: { objectPosition: '50% 10%' },
  },
];

const INTERVAL_MS = 4500;

export default function Hero() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % heroImages.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative bg-offwhite overflow-hidden flex flex-col md:items-center star-pattern"
      style={{ paddingTop: '80px', minHeight: '100svh' }}
    >

      {/* Fond rouge diagonal — desktop */}
      <div
        className="absolute top-0 right-0 w-[42%] h-full bg-red-lcd hidden md:block"
        style={{ clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        aria-hidden="true"
      />

      {/* Carousel images — desktop */}
      <div
        className="absolute top-0 right-0 w-[42%] h-full hidden md:block overflow-hidden"
        style={{ clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        aria-hidden="true"
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={heroImages[current].id}
            src={heroImages[current].src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={heroImages[current].style}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            loading="eager"
          />
        </AnimatePresence>
        {/* Voile rouge sobre */}
        <div className="absolute inset-0 bg-red-lcd/15" />

        {/* Indicateurs de position */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setCurrent(i)}
              aria-label={`Image ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === current ? '20px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: i === current ? '#E0A238' : 'rgba(255,255,255,0.5)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Ligne dorée de séparation — desktop */}
      <svg
        className="absolute inset-0 w-full h-full hidden md:block pointer-events-none z-10"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line
          x1="63.04%" y1="0%"
          x2="58%" y2="100%"
          stroke="#E0A238"
          strokeWidth="1.5"
          opacity="0.65"
        />
      </svg>

      {/* Badge places limitées — desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 1.0, type: 'spring', bounce: 0.5 }}
        className="absolute bottom-10 right-[4%] hidden md:block z-20"
      >
        {/* Flottement continu */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          {/* Anneau ping #1 */}
          <motion.div
            className="absolute inset-0 rounded-full border border-gold"
            animate={{ scale: [1, 1.5], opacity: [0.55, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
          />
          {/* Anneau ping #2 décalé */}
          <motion.div
            className="absolute inset-0 rounded-full border border-gold"
            animate={{ scale: [1, 1.5], opacity: [0.55, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 1.1 }}
          />

          {/* Corps du badge */}
          <div className="relative w-32 h-32 rounded-full bg-white shadow-xl border-2 border-gold flex flex-col items-center justify-center select-none">
            {/* Point rouge urgence */}
            <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-red-lcd" />

            <span className="font-heading text-red-lcd text-[8px] font-bold tracking-widest uppercase">Places</span>
            <span className="font-heading text-navy font-extrabold text-2xl leading-none">limitées</span>
            <div className="w-8 h-px bg-gold my-1.5" />
            <span className="font-heading text-gold text-[9px] font-bold tracking-wider uppercase">Oct. 2026</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16 flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:w-[54%] lg:w-[50%]"
        >
          {/* Surtitre */}
          <motion.div variants={itemVariants}>
            <SectionLabel text={t('hero.surtitre')} />
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-navy leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)' }}
          >
            {t('hero.h1_line1')}
            <br />
            {t('hero.h1_line2')}
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            variants={itemVariants}
            className="font-body text-text-soft/75 text-lg leading-relaxed mb-8 max-w-lg"
          >
            {t('hero.soustitre')}
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            <Link
              to="/programmes"
              className="group flex items-center justify-center gap-2 bg-red-lcd hover:bg-red-hover text-white font-heading font-semibold text-sm px-6 py-3.5 rounded-md transition-colors duration-200 min-h-[48px] uppercase tracking-wide"
            >
              {t('hero.cta_primary')}
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 border-2 border-navy/30 hover:border-navy text-navy font-body text-sm px-6 py-3.5 rounded-md transition-colors duration-200 min-h-[48px]"
            >
              {t('hero.cta_secondary')}
            </Link>
          </motion.div>

          {/* Badge mobile */}
          <motion.div
            variants={itemVariants}
            className="md:hidden inline-flex items-center gap-2 bg-red-lcd/10 border border-red-lcd/30 text-red-lcd font-heading font-semibold text-xs px-4 py-2 rounded-full mb-6 self-start"
          >
            <span className="w-2 h-2 rounded-full bg-red-lcd shrink-0" />
            Places limitées · 1ère promotion
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 overflow-x-auto pb-1 md:flex-wrap md:overflow-x-visible"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
          >
            {[
              { val: t('hero.stat1_val'), label: t('hero.stat1_label') },
              { val: t('hero.stat2_val'), label: t('hero.stat2_label') },
              { val: t('hero.stat3_val'), label: t('hero.stat3_label') },
            ].map(({ val, label }) => (
              <div key={val} className="flex flex-col shrink-0">
                <span
                  className="font-heading font-extrabold text-red-lcd leading-none"
                  style={{ fontSize: '1.75rem' }}
                >
                  {val}
                </span>
                <span className="font-body text-text-soft/50 text-xs mt-1 max-w-[120px] leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Carousel mobile — bande en bas */}
        <div className="md:hidden mt-8 relative overflow-hidden rounded-xl" style={{ height: '260px' }}>
          <div
            className="absolute inset-0 bg-red-lcd"
            style={{ clipPath: 'polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)' }}
            aria-hidden="true"
          />
          <AnimatePresence mode="sync">
            <motion.img
              key={`mobile-${heroImages[current].id}`}
              src={heroImages[current].src}
              alt={t('hero.photo_alt')}
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
            style={heroImages[current].style}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              loading="eager"
            />
          </AnimatePresence>
          {/* Dots mobile */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {heroImages.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setCurrent(i)}
                aria-label={`Image ${i + 1}`}
                style={{
                  width: i === current ? '20px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: i === current ? '#E0A238' : 'rgba(255,255,255,0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 300ms',
                }}
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
