import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UserCheck, Globe, FileText, Languages, Heart, GraduationCap } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import WorldMap from '../components/ui/WorldMap';
import SEOHead from '../components/ui/SEOHead';
import SectionLabel from '../components/ui/SectionLabel';
import ContactBlock from '../components/sections/ContactBlock';

function PlaneIconSVG({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  );
}

function Section1Hero() {
  return (
    <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1400&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 30%' }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Après le lycée" light />
        <h1
          className="font-heading font-extrabold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Le diplôme n&apos;est pas une fin.{' '}
          <span className="text-gold">C&apos;est un départ.</span>
        </h1>
        <p className="font-body text-white/85 italic text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
          La plupart des établissements s&apos;arrêtent au diplôme.
          Nous considérons que notre travail commence vraiment là.
          L&apos;orientation universitaire est intégrée au parcours
          dès la Seconde, et elle ne se limite pas à une destination.
        </p>
        <p className="font-body text-white/70 max-w-2xl mx-auto leading-relaxed">
          Au Lycée Canadien de Dakar, l&apos;orientation universitaire n&apos;est pas un rendez-vous de fin
          d&apos;année. C&apos;est un accompagnement continu, intégré au parcours de chaque élève.
        </p>
      </div>
    </section>
  );
}

interface NiveauRow {
  niveau: string;
  objectif: string;
  actions: string;
}

const niveaux: NiveauRow[] = [
  {
    niveau: 'Seconde',
    objectif: 'Explorer',
    actions:
      "Découverte des filières et des métiers, tests d'intérêt, rencontres avec des professionnels, choix des matières cohérent avec le projet.",
  },
  {
    niveau: 'Première',
    objectif: 'Cibler',
    actions:
      "Sélection des universités et des pays, compréhension des critères d'admission, préparation linguistique, construction du profil hors des cours.",
  },
  {
    niveau: 'Terminale',
    objectif: 'Candidater',
    actions:
      "Constitution des dossiers, rédaction des lettres de motivation, calendrier des candidatures, préparation aux entretiens, accompagnement des démarches de mobilité.",
  },
];

function Section2TroisAns() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Accompagnement" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Un accompagnement sur trois ans
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="overflow-x-auto rounded-xl shadow-card border border-border-light"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-navy text-white">
                <th className="font-heading font-semibold text-left px-6 py-4 text-sm w-32">Niveau</th>
                <th className="font-heading font-semibold text-left px-6 py-4 text-sm w-36">Objectif</th>
                <th className="font-heading font-semibold text-left px-6 py-4 text-sm">
                  Ce que nous mettons en place
                </th>
              </tr>
            </thead>
            <tbody>
              {niveaux.map((row, i) => (
                <tr
                  key={row.niveau}
                  className={`border-t border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}`}
                >
                  <td className="px-6 py-5 font-heading font-bold text-navy text-sm whitespace-nowrap">
                    {row.niveau}
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex text-xs font-heading font-semibold px-3 py-1 rounded-full bg-red-lcd/10 text-red-lcd">
                      {row.objectif}
                    </span>
                  </td>
                  <td className="px-6 py-5 font-body text-text-soft/80 text-sm leading-relaxed">
                    {row.actions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

type ActionIcon = LucideIcon | (({ size, className }: { size?: number; className?: string }) => React.ReactElement);

interface Action {
  titre: string;
  Icon: ActionIcon;
  color: string;
  bg: string;
  texte: string;
  note?: string;
}

const actions: Action[] = [
  {
    titre: "Un bilan d'orientation individuel",
    Icon: UserCheck,
    color: 'text-red-lcd',
    bg: 'bg-red-lcd/10',
    texte:
      "Chaque élève est reçu, avec ses parents, pour construire un projet réaliste et ambitieux.",
  },
  {
    titre: "Une cartographie des destinations",
    Icon: Globe,
    color: 'text-gold',
    bg: 'bg-gold/10',
    texte:
      "Canada, Europe, Amérique du Nord, Afrique. Nous expliquons les systèmes, les coûts réels et les conditions d'accès.",
  },
  {
    titre: "La construction du dossier de candidature",
    Icon: FileText,
    color: 'text-red-lcd',
    bg: 'bg-red-lcd/10',
    texte:
      "Notes, activités, engagement, lettres. Les universités sélectives regardent bien plus que le bulletin.",
  },
  {
    titre: "La préparation linguistique",
    Icon: Languages,
    color: 'text-gold',
    bg: 'bg-gold/10',
    texte:
      "Anglais renforcé et préparation aux tests de langue exigés par les universités.",
  },
  {
    titre: "L'accompagnement des démarches de mobilité",
    Icon: PlaneIconSVG,
    color: 'text-red-lcd',
    bg: 'bg-red-lcd/10',
    texte:
      "Constitution du dossier, capacité financière, cohérence du projet d'études. Les démarches réglementées relèvent de professionnels habilités.",
    note: "Notre Directrice Générale, Mme Brigitte CHATUÉ TCHATAT, est consultante réglementée en immigration canadienne. Elle supervise personnellement l'accompagnement des familles dans leurs démarches de mobilité.",
  },
  {
    titre: "Un suivi après le départ",
    Icon: Heart,
    color: 'text-gold',
    bg: 'bg-gold/10',
    texte:
      "Nos anciens élèves restent en lien avec l'école et avec les promotions suivantes.",
  },
];

function Section3Concret() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Nos actions" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Ce que nous faisons concrètement
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {actions.map(({ titre, Icon, color, bg, texte, note }, i) => (
            <motion.div
              key={titre}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 shadow-card flex gap-4"
            >
              <div className={`shrink-0 w-10 h-10 rounded-lg ${bg} flex items-center justify-center mt-0.5`}>
                <Icon size={18} className={color} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy text-base mb-1.5">{titre}</h3>
                <p className="font-body text-text-soft/70 text-sm leading-relaxed">{texte}</p>
                {note && (
                  <p className="font-body text-navy/60 text-xs italic leading-relaxed mt-2">
                    {note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Section4BacCanadien() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-navy py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Débouchés" light />
          <h2
            className="font-heading font-extrabold text-white"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Où mène le Bac Canadien
          </h2>
          <p className="font-body text-white/80 mt-4 max-w-2xl mx-auto leading-relaxed">
            Le Diplôme d&apos;Études Secondaires de l&apos;Ontario (DESO) est accepté comme titre d&apos;admission par des
            milliers d&apos;universités à travers le monde, y compris parmi les plus sélectives d&apos;Amérique
            du Nord. Il présente un avantage décisif pour un élève francophone : il est immédiatement
            lisible par un jury d&apos;admission canadien, américain ou britannique, sans procédure
            d&apos;équivalence.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-8 mt-8"
        >
          <WorldMap />
          <p className="font-body text-white/60 text-sm text-center mt-4 max-w-xl mx-auto leading-relaxed">
            Le Diplôme d&apos;Études Secondaires de l&apos;Ontario est accepté par des milliers d&apos;universités
            dans le monde. Nous accompagnons chaque élève vers la destination qui correspond à son
            projet et aux moyens de sa famille.
          </p>
        </motion.div>

        {/* Dès réception de la liste validée par la Direction
            et des accords écrits, remplacer cet encadré par
            les logos des universités partenaires. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-navy/50 border border-white/10 rounded-xl px-8 py-10"
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <GraduationCap size={22} className="text-gold" />
            </div>
            <h3 className="font-heading font-semibold text-white/80 text-base">
              Partenariats universitaires en cours de formalisation
            </h3>
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-xl">
              Le réseau BEM Africa entretient des relations avec plus de 40 universités et écoles
              partenaires à travers le monde. Le Lycée Canadien de Dakar formalise actuellement ses
              propres conventions avec des établissements canadiens, européens et africains.
              La liste complète sera publiée avant la rentrée d&apos;octobre 2026.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white/30 text-white/80 hover:bg-white/10 font-heading font-semibold text-xs px-6 py-3 rounded-md transition-colors duration-200 uppercase tracking-wide mt-2"
            >
              Nous contacter pour en savoir plus
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function OrientationUniversitaire() {
  return (
    <>
      <SEOHead
        title="Après le lycée : orientation universitaire | Lycée Canadien de Dakar"
        description="Un accompagnement sur trois ans vers les universités internationales. Choix des filières, dossiers de candidature et démarches de mobilité."
        path="/orientation-universitaire"
      />
      <Section1Hero />
      <Section2TroisAns />
      <Section3Concret />
      <Section4BacCanadien />
      <ContactBlock />
    </>
  );
}
