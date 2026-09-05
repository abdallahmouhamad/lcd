import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  CheckCircle2, FileText, Clock,
  Users, Star, Globe, Heart, Award, GraduationCap,
} from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import SectionLabel from '../components/ui/SectionLabel';
import { Link } from 'react-router-dom';
import ContactBlock from '../components/sections/ContactBlock';

function Section1Hero() {
  return (
    <section className="bg-navy pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Admissions" light />
        <h1
          className="font-heading font-extrabold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Admissions : l&apos;avenir de votre enfant commence ici
        </h1>
        <p className="font-body text-white/80 italic text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
          Au Lycée Canadien de Dakar, nous pensons que chaque élève mérite une éducation qui le prépare
          aux opportunités du monde tout en lui donnant les moyens d&apos;agir chez lui.
        </p>
        <p className="font-body text-white/70 mb-8">
          Les inscriptions sont ouvertes, de la 6ᵉ à la Terminale.
        </p>
        <a
          href="#contact-block"
          className="inline-flex items-center justify-center bg-red-lcd hover:bg-red-hover text-white font-heading font-semibold text-sm px-8 py-4 rounded-md transition-colors duration-200 uppercase tracking-wide min-h-[52px]"
        >
          Demander un rendez-vous
        </a>
      </div>
    </section>
  );
}

interface Profil {
  Icon: LucideIcon;
  texte: string;
}

const profils: Profil[] = [
  { Icon: Star, texte: "Les collégiens et lycéens curieux, motivés, désireux d'apprendre" },
  { Icon: Award, texte: "Les titulaires d'un diplôme du secondaire ou d'un premier diplôme universitaire" },
  { Icon: Users, texte: "Les adultes actifs qui veulent monter en niveau" },
  { Icon: Star, texte: "Les sportifs de haut niveau" },
  { Icon: Globe, texte: "Les candidats attirés par un parcours exigeant et une ouverture internationale" },
  { Icon: Heart, texte: "Les familles qui cherchent une communauté scolaire fondée sur des valeurs" },
  { Icon: GraduationCap, texte: "Les jeunes qui visent une grande université, ici ou à l'étranger" },
];

function Section2Qui() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Profils accueillis" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Qui accueille-t-on au LCD ?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {profils.map(({ Icon, texte }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex items-start gap-4 bg-offwhite rounded-xl p-5"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                <Icon size={18} className="text-navy" />
              </div>
              <p className="font-body text-text-soft/80 text-sm leading-relaxed">{texte}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const arguments_: string[] = [
  "Un curriculum canadien, lisible à l'international",
  "Un cadre sûr et bienveillant, avec un accompagnement scolaire et humain",
  "Une orientation universitaire personnalisée et un appui dans les démarches de mobilité",
  "L'appartenance au réseau BEM Africa",
  "Des bourses partielles, selon dossier",
  "Pas d'examen d'État sur le Programme Canadien : la réussite des cours obligatoires suffit",
  "Des horaires souples : jour, soir, en ligne ou en présentiel",
  "Un suivi adapté au rythme de chaque élève",
  "Une équipe qui connaît chaque enfant par son nom",
];

function Section3Pourquoi() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Nos atouts" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Pourquoi les familles nous choisissent
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {arguments_.map((arg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-card"
            >
              <CheckCircle2 size={18} className="text-red-lcd shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-body text-text-soft/80 text-sm leading-relaxed">
                  {i === 2 ? (
                    <>
                      <Link
                        to="/orientation-universitaire"
                        className="text-red-lcd font-semibold hover:underline"
                      >
                        Une orientation universitaire personnalisée
                      </Link>
                      {' '}et un appui dans les démarches de mobilité
                    </>
                  ) : arg}
                </span>
                {i === 0 && (
                  <p className="font-body text-navy/50 text-xs leading-relaxed mt-1.5 italic">
                    Le LCD est la première école internationale au Sénégal à promouvoir le DESO, délivré par son école partenaire canadienne accréditée par le ministère de l&apos;Éducation de l&apos;Ontario.
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

interface Etape {
  num: string;
  titre: string;
  texte: string;
}

const etapes: Etape[] = [
  {
    num: '01',
    titre: "Demander des informations",
    texte:
      "Contactez notre équipe des admissions en ligne, par téléphone ou sur WhatsApp. Nous vous rappelons sous 24 heures ouvrées pour comprendre le profil de votre enfant et vos objectifs.",
  },
  {
    num: '02',
    titre: "Visiter le campus",
    texte:
      "Nous organisons une visite sur mesure au Point E. Vous rencontrez l'équipe, vous découvrez les salles de classe et vous voyez le LCD en conditions réelles.",
  },
  {
    num: '03',
    titre: "Évaluer le niveau de l'élève",
    texte:
      "À partir de la 6ᵉ, votre enfant passe une évaluation scolaire lors de la visite. Elle nous permet de déterminer le niveau qui lui convient et l'accompagnement dont il aura besoin.",
  },
  {
    num: '04',
    titre: "Finaliser l'inscription",
    texte:
      "Après l'évaluation, vous êtes reçu pour un entretien final. Notre équipe vous accompagne ensuite dans la constitution du dossier et les dernières formalités.",
  },
];

function Section4Processus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel text="Processus" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Notre processus d&apos;admission
          </h2>
          <p className="font-body text-text-soft/70 mt-3">Simple. Accompagné. Personnalisé.</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border-light z-0" />
          <div className="grid md:grid-cols-4 gap-8">
            {etapes.map((e, i) => (
              <motion.div
                key={e.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-red-lcd text-white font-heading font-extrabold text-lg shrink-0 shadow-card">
                    {e.num}
                  </div>
                  {i < etapes.length - 1 && (
                    <div className="md:hidden flex-1 h-px bg-border-light" />
                  )}
                </div>
                <h3 className="font-heading font-bold text-navy text-base mb-2">{e.titre}</h3>
                <p className="font-body text-text-soft/70 text-sm leading-relaxed">{e.texte}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const pieces: string[] = [
  "Certificat de scolarité de l'année en cours",
  "Extrait de naissance de moins de trois mois",
  "Bulletins de l'année précédente et de l'année en cours",
  "Deux photos d'identité",
  "Fiche d'inscription remplie",
];

function Section5Pieces() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-2xl p-8 shadow-card"
          >
            <h3 className="font-heading font-bold text-navy text-xl mb-6">Les pièces du dossier</h3>
            <ul className="flex flex-col gap-3 mb-8">
              {pieces.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <FileText size={16} className="text-red-lcd shrink-0 mt-0.5" />
                  <span className="font-body text-text-soft/80 text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border-light pt-5">
              <h4 className="font-heading font-semibold text-navy text-sm mb-3 flex items-center gap-2">
                <Clock size={14} className="text-gold" />
                Calendrier
              </h4>
              <div className="font-body text-text-soft/70 text-sm leading-relaxed space-y-1">
                <p>
                  <span className="font-semibold text-navy">Dès maintenant :</span>{' '}
                  prise de contact et visites
                </p>
                <p>
                  <span className="font-semibold text-navy">Septembre 2026 :</span>{' '}
                  évaluations et entretiens
                </p>
                <p>
                  <span className="font-semibold text-navy">Octobre 2026 :</span>{' '}
                  rentrée de la première promotion
                </p>
              </div>
              <p className="font-body text-text-soft/50 text-xs mt-3 italic leading-relaxed">
                Les dossiers déposés tôt offrent un plus grand choix de créneaux.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-card"
          >
            <h3 className="font-heading font-bold text-navy text-xl mb-6">Frais de scolarité</h3>
            <div className="font-body text-text-soft/80 leading-relaxed space-y-4 mb-8">
              <p>
                Le Lycée Canadien de Dakar propose un enseignement de haut niveau, lisible à
                l&apos;international, à un coût pensé pour rester accessible aux familles sénégalaises.
              </p>
              <p>
                Nos frais varient selon le parcours choisi et le niveau de votre enfant. Nous vous les
                présentons en détail, sans surprise, dès le premier échange avec notre équipe des
                admissions. Des facilités de paiement et des bourses partielles peuvent être étudiées
                selon le dossier.
              </p>
            </div>
            <a
              href="#contact-block"
              className="inline-flex items-center justify-center w-full bg-red-lcd hover:bg-red-hover text-white font-heading font-semibold text-sm px-6 py-3.5 rounded-md transition-colors duration-200 uppercase tracking-wide min-h-[48px] mb-3"
            >
              Connaître nos tarifs
            </a>
            <p className="font-body text-navy/50 text-xs leading-relaxed text-center">
              Ce bouton vous met en contact direct avec notre équipe. Nous vous communiquons le coût
              annuel complet lors du premier échange, tous frais inclus.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Admissions() {
  return (
    <>
      <SEOHead
        title="Admissions et inscriptions | Lycée Canadien de Dakar"
        description="Inscriptions ouvertes pour la rentrée d'octobre 2026. Processus en quatre étapes, pièces du dossier et prise de rendez-vous."
        path="/admissions"
      />
      <Section1Hero />
      <Section2Qui />
      <Section3Pourquoi />
      <Section4Processus />
      <Section5Pieces />
      <div id="contact-block">
        <ContactBlock />
      </div>
    </>
  );
}
