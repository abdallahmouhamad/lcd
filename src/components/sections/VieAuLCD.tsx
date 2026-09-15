import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    alt: 'Élèves en cours au Lycée Canadien de Dakar',
    offset: 'md:mt-0',
  },
  {
    src: 'https://images.unsplash.com/photo-1687794504223-8bdc02e25ef6?w=800&q=80',
    alt: 'Lycéens en classe au Lycée Canadien de Dakar',
    offset: 'md:mt-10',
  },
  {
    src: 'https://images.unsplash.com/photo-1744809495173-217ca4faa8bc?w=800&q=80',
    alt: 'Travail académique au Lycée Canadien de Dakar',
    offset: 'md:mt-5',
  },
];

export default function VieAuLCD() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28 overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <SectionLabel text="Campus & vie scolaire" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Un environnement conçu pour apprendre et grandir
          </h2>
          <p className="font-body text-navy/60 mt-4 max-w-xl mx-auto leading-relaxed">
            Au Point E, au cœur de Dakar. Des effectifs volontairement limités,
            deux langues de travail et une équipe qui connaît chaque élève par son nom.
          </p>
        </motion.div>

        {/* Mosaïque décalée */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {photos.map(({ src, alt, offset }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`rounded-2xl overflow-hidden shadow-card ${offset}`}
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
