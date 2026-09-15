import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';

const stats = [
  { value: '2008', label: 'Fondation du groupe' },
  { value: '+4 000', label: 'Étudiants formés' },
  { value: '+40', label: 'Universités partenaires' },
  { value: '+30', label: 'Nationalités' },
];

const villes = ['Dakar', 'Abidjan', 'Douala', 'Brazzaville', 'Conakry'];

const apports = [
  "Formations communes pour les enseignants et les directions d'établissement",
  "Appui partagé sur la protection des élèves et l'accès à l'université",
  "Réseau panafricain d'anciens élèves en pleine expansion",
  "Continuité possible vers l'enseignement supérieur au sein du groupe",
];

export default function BemAfrica() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-navy py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <SectionLabel text="Adossement" light />
          <h2
            className="font-heading font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Nous ne partons pas de zéro.
          </h2>
          <p className="font-body text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Le Lycée Canadien de Dakar est une initiative du Groupe BEM Africa — un groupe
            éducatif installé depuis 2008, présent dans cinq pays, plusieurs fois classé
            meilleure Business School d'Afrique noire francophone par{' '}
            <span className="text-white/90 italic">Jeune Afrique</span>.
          </p>
        </motion.div>

        {/* Chiffres */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden mb-10"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-navy px-6 py-8 text-center"
            >
              <p
                className="font-heading font-extrabold text-gold leading-none mb-2"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
              >
                {value}
              </p>
              <p className="font-body text-white/55 text-sm leading-snug">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Présence géographique */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-12"
        >
          {villes.map((ville, i) => (
            <span key={ville} className="flex items-center gap-3">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-gold/50" aria-hidden="true" />}
              <span className="font-body text-white/60 text-sm tracking-wide">{ville}</span>
            </span>
          ))}
        </motion.div>

        {/* Ce que l'appartenance au réseau apporte */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="border-t border-white/10 pt-10"
        >
          <p className="font-body text-white/45 text-xs uppercase tracking-widest text-center mb-6">
            Ce que l'appartenance au réseau apporte à votre enfant
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {apports.map((texte, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <p className="font-body text-white/65 text-sm leading-relaxed">{texte}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
