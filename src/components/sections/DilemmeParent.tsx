import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PlaneTakeoff, Home } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';

export default function DilemmeParent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          {/* En-tête */}
          <div className="max-w-2xl mb-12">
            <SectionLabel text="Le point de départ" />
            <h2
              className="font-heading font-extrabold text-navy leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
            >
              Vous n&apos;avez plus<br />
              <span className="text-red-lcd">à choisir.</span>
            </h2>
            <p className="font-body text-navy/70 mt-4 leading-relaxed">
              Chaque parent ambitieux pour son enfant se heurte au même
              mur. Et jusqu&apos;à présent, il n&apos;existait que deux issues,
              également douloureuses.
            </p>
          </div>

          {/* Deux cartes problème */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              {
                Icon: PlaneTakeoff,
                titre: 'Le faire partir',
                texte:
                  'À quinze ou seize ans, vers un internat ou une famille ' +
                  "d'accueil à l'étranger. Le coût est lourd. Le risque est " +
                  'réel. Et vous perdez votre enfant précisément pendant ' +
                  'les années où il a le plus besoin de vous.',
              },
              {
                Icon: Home,
                titre: 'Le garder ici',
                texte:
                  "Dans un système solide, exigeant, respectable. Mais dont " +
                  "le diplôme passe par une procédure d'équivalence et " +
                  "n'ouvre pas seul, aujourd'hui, les portes des grandes " +
                  'universités du Nord.',
              },
            ].map(({ Icon, titre, texte }) => (
              <div
                key={titre}
                className="bg-offwhite border border-border-light rounded-xl p-7"
              >
                <Icon size={28} className="text-navy/30 mb-4" />
                <h3 className="font-heading font-bold text-navy text-lg mb-3">
                  {titre}
                </h3>
                <p className="font-body text-navy/60 text-sm leading-relaxed">
                  {texte}
                </p>
              </div>
            ))}
          </div>

          {/* Paragraphe de transition */}
          <p className="font-body text-navy/60 text-sm italic text-center mb-10 max-w-xl mx-auto leading-relaxed">
            La plupart des familles tranchent dans la douleur.
            D&apos;autres repoussent la décision, année après année,
            jusqu&apos;à ce qu&apos;il soit trop tard pour bien faire.
          </p>

          {/* Encadré La troisième voie */}
          <div className="bg-navy rounded-2xl px-8 py-10 md:px-12">
            <p className="font-heading font-semibold text-gold text-xs tracking-widest uppercase mb-4">
              La troisième voie
            </p>
            <h3
              className="font-heading font-extrabold text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
            >
              Désormais, votre enfant peut obtenir son{' '}
              <span className="text-gold">Bac Canadien</span>{' '}
              sans quitter le Sénégal.
            </h3>
            <p className="font-body text-white/75 leading-relaxed mb-8 max-w-2xl">
              Le Lycée Canadien de Dakar existe parce que ce choix
              n&apos;a pas lieu d&apos;être. Nous avons installé au Point E un
              parcours secondaire aux standards de l&apos;Ontario, du collège
              à la Terminale, qui conduit votre enfant vers les universités
              du monde entier tout en le laissant grandir auprès de sa
              famille, dans sa langue et dans sa ville.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Sans partir", "Sans équivalence", "Sans examen d'État"].map((pill) => (
                <span
                  key={pill}
                  className="font-heading font-semibold text-white text-sm px-4 py-2 rounded-full border border-white/20 bg-white/10"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
