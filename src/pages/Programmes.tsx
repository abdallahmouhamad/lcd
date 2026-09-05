import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/ui/SEOHead';
import SectionLabel from '../components/ui/SectionLabel';
import ContactBlock from '../components/sections/ContactBlock';
import WhatsAppButton from '../components/ui/WhatsAppButton';

function Section1Hero() {
  return (
    <section className="relative bg-offwhite pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=75"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: '40% center' }}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(242,244,247,0.93)" }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Nos parcours" />
        <h1
          className="font-heading font-extrabold text-navy leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Nos programmes : une éducation d&apos;excellence,
          <br className="hidden md:block" /> au cœur du Sénégal
        </h1>
        <p className="font-body text-navy/70 italic text-xl mb-5">
          Conçu pour l&apos;Afrique. Reconnu partout.
        </p>
        <p className="font-body text-text-soft/70 leading-relaxed max-w-2xl mx-auto">
          Au Lycée Canadien de Dakar, les élèves ne se contentent pas de suivre un programme scolaire.
          Ils suivent un parcours pensé pour aiguiser leur esprit, affirmer leur identité et les conduire
          avec assurance vers les universités et les métiers dont ils rêvent.
        </p>
      </div>
    </section>
  );
}

function Section2Modele() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel text="Pédagogie" />
            <h2
              className="font-heading font-extrabold text-navy leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
            >
              Notre modèle pédagogique
            </h2>
            <p className="font-body text-text-soft/80 leading-relaxed">
              Notre modèle associe les standards internationaux à un ancrage local assumé. Le curriculum
              canadien de l&apos;Ontario constitue le pilier de notre enseignement. Nos liens étroits avec le
              programme national sénégalais en constituent le second. Les élèves du LCD bénéficient ainsi
              du meilleur des deux mondes : un passeport pour l&apos;international, et un sentiment profond
              d&apos;appartenance à leur terre.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]"
          >
            {/* TODO: remplacer par photo LCD officielle — salle de classe en activité */}
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80"
              alt="Salle de classe moderne avec des élèves africains"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface Parcours {
  num: string;
  titre: string;
  niveau: string;
  borderColor: string;
  tagBg: string;
  tagColor: string;
  texte: string;
  cleLabel: string;
  cle: string;
  points: string[];
  passerelle: string | null;
}

const parcoursData: Parcours[] = [
  {
    num: '01',
    titre: 'Programme Canadien',
    niveau: 'De la 3ᵉ à la Terminale · Grade 9 à 12',
    borderColor: 'border-red-lcd',
    tagBg: 'bg-red-lcd/10 text-red-lcd',
    tagColor: 'text-red-lcd',
    texte:
      "Votre enfant suit un programme entièrement canadien, conforme au curriculum de l'Ontario. Il valide chaque cours à son rythme, sans examen d'État couperet. La réussite des cours obligatoires suffit à obtenir le diplôme.",
    cleLabel: 'À la clé',
    cle:
      "Le Diplôme d'Études Secondaires de l'Ontario (DESO), communément appelé le Bac Canadien. Ce diplôme est délivré par notre école partenaire canadienne, accréditée par le ministère de l'Éducation de l'Ontario. Le Lycée Canadien de Dakar est la première école internationale au Sénégal à le promouvoir. Le nom et les coordonnées de notre école partenaire vous sont communiqués lors du premier entretien. La convention de partenariat est disponible sur demande auprès de la Direction.",
    points: [
      'Enseignement en français et en anglais',
      'Validation par cours, sans examen final unique',
      "Un diplôme accepté comme titre d'admission par des milliers d'universités dans le monde",
      "Une progression au rythme de l'élève",
    ],
    passerelle: null,
  },
  {
    num: '02',
    titre: 'Programme Hybride',
    niveau: 'De la 6ᵉ à la Terminale',
    borderColor: 'border-gold',
    tagBg: 'bg-gold/10 text-gold',
    tagColor: 'text-gold',
    texte:
      "Le meilleur des deux mondes. Votre enfant suit le programme sénégalais, enrichi de modules canadiens. Il garde ses repères, ses examens et son cadre familier, tout en s'ouvrant progressivement aux méthodes et aux standards internationaux.",
    cleLabel: 'À la clé',
    cle:
      "Le Baccalauréat sénégalais, accompagné d'une attestation officielle des modules canadiens suivis.",
    points: [
      'Continuité avec le système national sénégalais',
      'Renforcement progressif en anglais',
      'Modules canadiens en méthodologie, technologie et esprit critique',
      'Passerelle possible vers le Programme Canadien à partir de la 3ᵉ',
    ],
    passerelle:
      "La passerelle vers le Programme Canadien en 3ᵉ permet aux parents de collégiens d'entrer sans engagement définitif. Votre enfant peut basculer selon ses résultats et son projet.",
  },
  {
    num: '03',
    titre: 'Prépa-Universitaire',
    niveau: 'Après le Baccalauréat',
    borderColor: 'border-navy',
    tagBg: 'bg-navy/10 text-navy',
    tagColor: 'text-navy',
    texte:
      "Votre enfant a son Bac, mais son dossier ne reflète pas son potentiel. Ce parcours lui permet de renforcer les matières clés, de consolider son dossier de candidature et de viser des universités plus sélectives, au Canada comme ailleurs.",
    cleLabel: 'À la clé',
    cle: "Un profil plus solide et un éventail d'options élargi.",
    points: [
      'Renforcement des matières clés',
      'Construction du dossier de candidature universitaire',
      'Préparation linguistique et aux tests de langue',
      'Accompagnement des démarches de mobilité',
    ],
    passerelle: null,
  },
];

const raisonsOntario = [
  {
    num: '1',
    titre: 'Il figure parmi les cinq meilleurs du monde',
    texte:
      "Le système éducatif de l'Ontario se classe régulièrement dans les cinq premiers mondiaux aux évaluations internationales PISA de l'OCDE, qui mesurent tous les trois ans les acquis des élèves de quinze ans en lecture, en mathématiques et en sciences. Ce n'est pas notre appréciation. C'est celle d'une organisation indépendante.",
  },
  {
    num: '2',
    titre: 'Il évalue en continu, pas en une seule fois',
    texte:
      "Un élève valide ses cours au fil de l'année, de manière progressive. Le stress d'un examen final unique disparaît, et avec lui l'injustice qui veut qu'une mauvaise semaine efface trois bonnes années. Pour un enfant qui travaille régulièrement mais se bloque à l'épreuve, la différence est considérable.",
  },
  {
    num: '3',
    titre: 'Il produit un diplôme lisible partout',
    texte:
      "Un dossier canadien se lit sans traduction ni équivalence dans la quasi-totalité des systèmes universitaires du Nord. C'est un avantage considérable pour un élève francophone qui candidate depuis l'Afrique, et c'est souvent ce qui fait la différence à l'étape la plus sélective.",
  },
];

const chiffresOntario = [
  { val: '0', label: "examen d'État à passer sur le Programme Canadien" },
  { val: '0', label: "procédure d'équivalence pour candidater au Canada" },
  { val: '2', label: 'langues de travail maîtrisées à la sortie' },
];

function SectionPourquoiOntario() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Pourquoi l'Ontario" />
          <h2
            className="font-heading font-extrabold text-navy leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Pourquoi l&apos;Ontario
          </h2>
          <p className="font-body text-navy/60 mt-4 max-w-2xl mx-auto leading-relaxed">
            Nous aurions pu choisir n&apos;importe quel système étranger.
            Nous avons retenu celui de l&apos;Ontario pour trois raisons
            que vous pouvez vérifier sans nous croire sur parole.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-5 mb-10"
        >
          {raisonsOntario.map(({ num, titre, texte }) => (
            <div
              key={num}
              className="bg-white rounded-xl shadow-card p-7 md:p-8 flex gap-6"
            >
              <span
                className="font-heading font-extrabold text-red-lcd shrink-0 leading-none"
                style={{ fontSize: '3rem' }}
              >
                {num}
              </span>
              <div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">
                  {titre}
                </h3>
                <p className="font-body text-navy/70 text-sm leading-relaxed">
                  {texte}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bandeau de preuve */}
        <div className="bg-navy rounded-2xl px-8 py-8 md:px-12">
          <div className="grid grid-cols-3 gap-6 text-center">
            {chiffresOntario.map(({ val, label }) => (
              <div key={label}>
                <p
                  className="font-heading font-extrabold text-gold leading-none mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  {val}
                </p>
                <p className="font-body text-white/70 text-xs leading-snug">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Section3Parcours() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28" id="canadien" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel text="Nos parcours" />
          <h2
            className="font-heading font-extrabold text-navy leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Trois chemins, une même exigence
          </h2>
          <p className="font-body text-text-soft/70 mt-4 max-w-xl mx-auto leading-relaxed">
            Chaque élève est différent. C&apos;est pourquoi le LCD propose trois parcours, de la 6ᵉ à la
            Terminale, et même au-delà.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {parcoursData.map((p, i) => (
            <motion.div
              key={p.num}
              id={i === 1 ? 'hybride' : i === 2 ? 'prepa' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`bg-white rounded-xl border-l-4 ${p.borderColor} shadow-card p-8 md:p-10`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <span className={`font-heading font-extrabold text-4xl opacity-20 ${p.tagColor}`}>
                    {p.num}
                  </span>
                  <div>
                    <h3 className={`font-heading font-bold text-xl ${p.tagColor}`}>{p.titre}</h3>
                    <p className="font-body text-xs text-text-soft/50 uppercase tracking-wide mt-0.5">
                      {p.niveau}
                    </p>
                  </div>
                </div>
                <span className={`self-start sm:self-auto inline-flex text-xs font-heading font-semibold px-3 py-1 rounded-full ${p.tagBg}`}>
                  Parcours {p.num}
                </span>
              </div>

              <p className="font-body text-text-soft/80 leading-relaxed mb-6">{p.texte}</p>

              <ul className="flex flex-col gap-2.5 mb-6">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${p.tagColor}`} />
                    <span className="font-body text-text-soft/80 text-sm leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border-light pt-5">
                <p className="font-body text-xs text-text-soft/50 uppercase tracking-wide mb-1">
                  {p.cleLabel}
                </p>
                <p className={`font-heading font-semibold text-sm ${p.tagColor} leading-relaxed`}>
                  {p.cle}
                </p>
              </div>

              {p.passerelle && (
                <div className="mt-5 border-l-4 border-gold bg-gold/5 rounded-r-lg px-5 py-3">
                  <p className="font-body text-text-soft/80 text-sm leading-relaxed">
                    <span className="font-semibold text-navy">Passerelle : </span>
                    {p.passerelle}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface TableauRow {
  classe: string;
  parcours: string;
  parcoursBadge: string;
  raison: string;
}

const tableauData: TableauRow[] = [
  {
    classe: '6ᵉ à 4ᵉ',
    parcours: 'Programme Hybride',
    parcoursBadge: 'bg-gold/10 text-gold',
    raison:
      "Le collège est l'âge des fondations. Votre enfant consolide son socle dans un cadre familier, monte en anglais et acquiert les méthodes canadiennes sans rupture brutale.",
  },
  {
    classe: '3ᵉ',
    parcours: 'Canadien ou Hybride',
    parcoursBadge: 'bg-navy/10 text-navy',
    raison:
      "C'est l'année charnière. La 3ᵉ correspond à la Grade 9 ontarienne, donc au début du cursus qui mène au DESO. Le choix se fait avec vous, selon le projet et le niveau.",
  },
  {
    classe: 'Seconde',
    parcours: 'Programme Canadien',
    parcoursBadge: 'bg-red-lcd/10 text-red-lcd',
    raison:
      "Il reste trois années pleines pour valider le cursus canadien et construire un dossier universitaire solide. C'est la configuration la plus confortable.",
  },
  {
    classe: 'Première',
    parcours: 'Programme Canadien',
    parcoursBadge: 'bg-red-lcd/10 text-red-lcd',
    raison:
      "Encore possible, avec un plan de rattrapage des crédits établi dès l'entrée. Nous étudions la faisabilité au cas par cas, sans vendre l'impossible.",
  },
  {
    classe: 'Terminale',
    parcours: 'Canadien ou Prépa',
    parcoursBadge: 'bg-navy/10 text-navy',
    raison:
      "Selon que votre enfant souhaite passer son Bac sénégalais d'abord, ou basculer immédiatement. L'entretien d'orientation tranche.",
  },
  {
    classe: 'Bachelier',
    parcours: 'Prépa-Universitaire',
    parcoursBadge: 'bg-navy/10 text-navy',
    raison:
      "Renforcement des matières clés, consolidation du dossier et préparation aux candidatures internationales.",
  },
  {
    classe: 'Adulte actif',
    parcours: 'Canadien ou Prépa',
    parcoursBadge: 'bg-navy/10 text-navy',
    raison:
      "Aucune limite d'âge. Horaires souples, en journée, en soirée ou à distance, pour concilier reprise d'études et activité professionnelle.",
  },
];

function Section4Tableau() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Orientation" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Quelle porte pour votre enfant ?
          </h2>
          <p className="font-body text-text-soft/70 mt-4 max-w-xl mx-auto leading-relaxed">
            Repérez la classe actuelle de votre enfant. La ligne correspondante vous indique le parcours
            que nous recommandons, et pourquoi.
          </p>
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
                <th className="font-heading font-semibold text-left px-6 py-4 text-sm w-36">
                  Classe actuelle
                </th>
                <th className="font-heading font-semibold text-left px-6 py-4 text-sm w-52">
                  Parcours recommandé
                </th>
                <th className="font-heading font-semibold text-left px-6 py-4 text-sm">
                  Pourquoi celui-là
                </th>
              </tr>
            </thead>
            <tbody>
              {tableauData.map((row, i) => (
                <tr
                  key={row.classe}
                  className={`border-t border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}`}
                >
                  <td className="px-6 py-4 font-heading font-semibold text-navy text-sm whitespace-nowrap">
                    {row.classe}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex text-xs font-heading font-semibold px-3 py-1 rounded-full ${row.parcoursBadge}`}>
                      {row.parcours}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-body text-text-soft/80 text-sm leading-relaxed">
                    {row.raison}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 bg-navy/5 rounded-xl px-6 py-5 border border-navy/10"
        >
          <p className="font-body text-text-soft/80 text-sm leading-relaxed">
            Ce tableau donne une orientation, pas un verdict. Le niveau réel de votre enfant, son rapport
            à l&apos;anglais et son projet comptent autant que sa classe. C&apos;est précisément ce que nous regardons
            lors de l&apos;évaluation d&apos;entrée. Et s&apos;il apparaît qu&apos;un autre établissement lui conviendrait
            mieux, nous vous le dirons.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface Filiere {
  titre: string;
  etudes: string[];
  metiers: string[];
}

const filieres: Filiere[] = [
  {
    titre: 'Sciences avec mathématiques',
    etudes: [
      'Médecine', 'Pharmacie', 'Ingénierie et génie', 'Actuariat',
      'Sciences infirmières', 'Ingénierie financière', 'Informatique',
    ],
    metiers: [
      'Médecin', 'Pharmacien', 'Ingénieur', 'Développeur',
      'Expert en cybersécurité', 'Analyste de données', 'Comptable',
    ],
  },
  {
    titre: 'Sciences humaines',
    etudes: [
      'Psychologie', 'Criminologie', 'Sociologie', 'Histoire',
      'Ethnologie', 'Droit', 'Sciences politiques',
    ],
    metiers: [
      'Enseignant', 'Psychologue', 'Travailleur social',
      'Consultant en ressources humaines', 'Juriste', 'Chargé de développement',
    ],
  },
  {
    titre: 'Commerce et gestion',
    etudes: [
      'Gestion financière', 'Comptabilité', 'Marketing digital',
      'Management des opérations', 'Finance', 'Commerce international',
    ],
    metiers: [
      'Banquier', 'Assureur', 'Chef de projet',
      'Responsable marketing', 'Entrepreneur', 'Contrôleur de gestion',
    ],
  },
];

function Section5Debouches() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Débouchés" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Du lycée au métier : trois filières, mille possibilités
          </h2>
          <p className="font-body text-text-soft/70 mt-4 max-w-xl mx-auto leading-relaxed">
            Le diplôme n&apos;est pas une fin. C&apos;est un point de départ. Voici, concrètement, où il peut
            mener votre enfant.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {filieres.map((f, i) => (
            <motion.div
              key={f.titre}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-card overflow-hidden"
            >
              <div className="bg-navy px-6 py-5">
                <h3 className="font-heading font-bold text-white text-base">{f.titre}</h3>
              </div>
              <div className="px-6 py-6 space-y-5">
                <div>
                  <p className="font-body text-xs text-text-soft/50 uppercase tracking-widest mb-2">
                    Études
                  </p>
                  <p className="font-body text-text-soft/80 text-sm leading-relaxed">
                    {f.etudes.join(' · ')}
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs text-text-soft/50 uppercase tracking-widest mb-2">
                    Métiers
                  </p>
                  <p className="font-body text-text-soft/80 text-sm leading-relaxed">
                    {f.metiers.join(' · ')}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="border-l-4 border-gold bg-white rounded-lg px-6 py-4 shadow-card"
        >
          <p className="font-body text-text-soft/80 text-sm leading-relaxed">
            Le choix de la filière se prépare, il ne se subit pas. C&apos;est tout l&apos;objet du bilan
            d&apos;orientation en Seconde : aligner les matières de votre enfant sur le métier qu&apos;il vise,
            trois ans avant qu&apos;il ait à candidater.{' '}
            <Link
              to="/orientation-universitaire"
              className="text-red-lcd font-semibold hover:underline"
            >
              Découvrir notre accompagnement →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Programmes() {
  return (
    <>
      <SEOHead
        title="Nos programmes | Lycée Canadien de Dakar"
        description="Trois parcours de la 6e à la Terminale : Programme Canadien, Programme Hybride et Prépa-Universitaire. Découvrez lequel correspond à votre enfant."
        path="/programmes"
      />
      <Section1Hero />
      <Section2Modele />
      <SectionPourquoiOntario />
      <Section3Parcours />
      <Section4Tableau />
      <Section5Debouches />
      <WhatsAppButton page="programmes" />
      <ContactBlock />
    </>
  );
}
