import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Users, Shield, ArrowRight } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import SectionLabel from '../components/ui/SectionLabel';
import ContactBlock from '../components/sections/ContactBlock';

function Section1Hero() {
  return (
    <section className="relative bg-offwhite pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=1400&q=75"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(242,244,247,0.93)" }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Notre histoire" />
        <h1
          className="font-heading font-extrabold text-navy leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Là où l&apos;ambition prend racine, et prend son envol
        </h1>
        <p className="font-body text-navy/70 italic text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
          Le Lycée Canadien de Dakar n&apos;est pas seulement une école. C&apos;est un tremplin pour les jeunes
          Africains qui veulent découvrir qui ils sont, ce qui les anime et jusqu&apos;où ils peuvent aller.
        </p>
        <p className="font-body text-navy/60 max-w-2xl mx-auto leading-relaxed">
          Notre campus est installé au Point E, au cœur de Dakar. L&apos;établissement est membre du réseau
          BEM Africa.
        </p>
      </div>
    </section>
  );
}

interface Portrait {
  nom: string;
  fonction: string;
  citation: string;
  bio: string;
  photo: string;
  photoAlt: string;
}

const portraits: Portrait[] = [
  {
    nom: "Dr Pape Madické DIOP",
    fonction: "PRÉSIDENT-FONDATEUR · GROUPE BEM AFRICA",
    citation:
      "Le Lycée Canadien de Dakar est né d'une conviction simple : nos enfants méritent le meilleur, ici, chez eux. Nous voulons former des jeunes solides, curieux, autonomes, prêts à réussir aussi bien dans les grandes écoles du monde que dans la vie. Nous plaçons l'élève au centre de tout. Nous cultivons l'excellence, l'ouverture et l'esprit critique, au cœur d'un continent qui avance.",
    bio: "32 ans d'expérience dans l'enseignement supérieur · Docteur en Sciences de Gestion, diplômé de l'ESSEC de Paris · Chevalier de l'Ordre National du Lion · Officier de l'Ordre National du Mérite",
    // TODO: remplacer par portrait officiel Dr Pape Madické DIOP
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    photoAlt: "Portrait Dr Pape Madické DIOP",
  },
  {
    nom: "Mme Brigitte CHATUÉ TCHATAT",
    fonction: "DIRECTRICE GÉNÉRALE · LYCÉE CANADIEN DE DAKAR",
    citation:
      "Depuis 2011, j'accompagne des jeunes Africains vers les meilleures opportunités internationales. L'aventure a commencé au Canada, puis à Douala, à Yaoundé, et aujourd'hui à Dakar. En 2019, nous avons ouvert la première école du Cameroun à promouvoir le diplôme secondaire de l'Ontario, issu d'un système classé parmi les cinq meilleurs au monde. Le Lycée Canadien de Dakar prolonge ce parcours. Notre but est simple : former une génération fière de ses racines et prête à conquérir le monde.",
    bio: "Plus de 15 ans dans l'éducation internationale · À l'origine, en 2019, de la première école du Cameroun à promouvoir le diplôme secondaire de l'Ontario · Consultante réglementée en immigration canadienne",
    // TODO: remplacer par portrait officiel Mme Brigitte CHATUÉ TCHATAT
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    photoAlt: "Portrait Mme Brigitte CHATUÉ TCHATAT",
  },
];

function Section2Gouvernance() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionLabel text="Gouvernance" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Le mot de la gouvernance
          </h2>
        </div>
        <p className="font-body text-navy/60 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
          Une école se juge d&apos;abord sur ceux qui la portent. Voici les deux personnes qui engagent leur
          nom sur ce projet.
        </p>

        <div className="flex flex-col gap-10">
          {portraits.map((p, i) => (
            <motion.div
              key={p.nom}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="flex flex-col sm:flex-row gap-6 bg-offwhite rounded-2xl p-6 sm:p-8"
            >
              <div className="shrink-0 flex justify-center sm:block">
                <img
                  src={p.photo}
                  alt={p.photoAlt}
                  className="w-24 h-24 rounded-full object-cover shadow-card"
                  width={200}
                  height={200}
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-extrabold text-navy text-lg mb-1">{p.nom}</h3>
                <p className="font-heading font-semibold text-gold text-xs tracking-widest uppercase mb-2">
                  {p.fonction}
                </p>
                <div className="w-12 h-0.5 bg-gold mb-4" />
                <p className="font-body text-navy/80 italic text-sm leading-relaxed mb-4">
                  &ldquo;{p.citation}&rdquo;
                </p>
                <p className="font-body text-navy/50 text-xs leading-relaxed">{p.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const avantagesBEM = [
  {
    Icon: BookOpen,
    titre: "Des formations communes",
    texte:
      "Pour les enseignants et les directions d'établissement, à travers tout le réseau panafricain.",
  },
  {
    Icon: Users,
    titre: "Un réseau d'anciens élèves",
    texte:
      "Un réseau panafricain d'anciens élèves en pleine expansion, présent dans plusieurs pays du continent.",
  },
  {
    Icon: Shield,
    titre: "Un appui partagé",
    texte:
      "Sur la protection des élèves, la qualité scolaire et l'accès à l'université.",
  },
  {
    Icon: ArrowRight,
    titre: "Une continuité possible",
    texte:
      "Vers l'enseignement supérieur au sein du groupe, pour les élèves qui souhaitent poursuivre dans le réseau BEM.",
  },
];

const statsBEM = [
  { valeur: "2008", label: "Création de BEM Dakar" },
  { valeur: "+4 000", label: "Étudiants et auditeurs formés" },
  { valeur: "+30", label: "Nationalités représentées" },
  { valeur: "+40", label: "Universités et écoles partenaires" },
];

const villesBEM = ["Dakar", "Abidjan", "Douala", "Brazzaville", "Conakry"];

function Section3BEM() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionLabel text="Réseau" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Membre du réseau BEM Africa
          </h2>
        </div>
        <p className="font-body text-navy/60 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
          Le Lycée Canadien de Dakar est adossé au Groupe BEM Africa. Appartenir à ce réseau,
          c&apos;est bénéficier de moyens qu&apos;une école isolée ne peut pas réunir.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {avantagesBEM.map(({ Icon, titre, texte }, i) => (
            <motion.div
              key={titre}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="bg-white rounded-xl p-6 flex gap-4 shadow-card"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <Icon size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy text-sm mb-1.5">{titre}</h3>
                <p className="font-body text-navy/70 text-sm leading-relaxed">{texte}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cet encadré valorise la continuité LCD → écosystème BEM
            sans mentionner de garantie d'admission dans les autres
            établissements BEM — simple mise en valeur du réseau existant */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-offwhite border-l-4 border-red-lcd rounded-xl p-7 mb-8"
        >
          <h3 className="font-heading font-bold text-navy text-base mb-3">
            Un parcours de la 6ᵉ au Master, sous un même toit
          </h3>
          <p className="font-body text-navy/70 text-sm leading-relaxed">
            Le Groupe BEM Africa rassemble aujourd&apos;hui plusieurs institutions complémentaires :
            une business school, une école de technologie, une université anglo-saxonne et une
            grande école de droit. Un élève qui entre au Lycée Canadien de Dakar à la 6ᵉ peut,
            s&apos;il le souhaite, poursuivre dans le réseau BEM jusqu&apos;au Master.
            C&apos;est une continuité pédagogique rare en Afrique de l&apos;Ouest.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-navy rounded-2xl px-8 py-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {statsBEM.map(({ valeur, label }) => (
              <div key={label} className="text-center">
                <p className="font-heading font-extrabold text-white text-2xl md:text-3xl mb-1">
                  {valeur}
                </p>
                <p className="font-body text-white/60 text-xs leading-snug">{label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {villesBEM.map((v) => (
              <span
                key={v}
                className="font-body text-navy text-xs font-semibold bg-white/90 px-3 py-1 rounded-full"
              >
                {v}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const singularites = [
  {
    label: "L'Afrique",
    bordure: "border-red-lcd",
    texte:
      "Nous mettons en valeur l'identité africaine à travers une direction locale, des contenus adaptés à notre culture et la mise en avant de la richesse du continent.",
  },
  {
    label: "Le monde",
    bordure: "border-gold",
    texte:
      "Nous préparons nos élèves à s'épanouir dans un environnement international, grâce à des programmes exigeants et à une véritable ouverture sur le monde.",
  },
  {
    label: "L'avenir",
    bordure: "border-navy",
    texte:
      "Nous accompagnons chaque élève dans l'acquisition des compétences du XXIᵉ siècle, avec une meilleure compréhension des parcours professionnels et un programme d'orientation universitaire sur trois ans.",
  },
];

function Section4Singularite() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Notre identité" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Ce qui fait notre singularité
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {singularites.map(({ label, bordure, texte }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`bg-offwhite rounded-xl p-7 border-l-4 ${bordure}`}
            >
              <h3 className="font-heading font-extrabold text-navy text-xl mb-3">{label}</h3>
              <p className="font-body text-navy/70 leading-relaxed">{texte}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Section5Equipe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <SectionLabel text="Notre équipe" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Une équipe qui connaît chaque élève
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-body text-navy/70 leading-relaxed mb-10 max-w-2xl mx-auto text-center"
        >
          Nos effectifs sont volontairement limités. Ce choix n&apos;est pas anodin : il permet à chaque
          enseignant de connaître ses élèves, de repérer les difficultés tôt et d&apos;adapter son
          accompagnement. Nos professeurs ne se contentent pas de transmettre un programme.
          Ils suivent des jeunes.
        </motion.p>

        {/* TODO: section masquée — à compléter avec photos et notices
            de l'équipe pédagogique (section 14 du brief client, ligne 14) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-navy/20 bg-navy/5 rounded-xl px-8 py-10 text-center"
        >
          <p className="font-body text-navy/50 text-sm leading-relaxed">
            Photographies et notices de l&apos;équipe pédagogique — à venir à la rentrée d&apos;octobre 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function APropos() {
  return (
    <>
      <SEOHead
        title="Qui sommes-nous | Lycée Canadien de Dakar"
        description="École internationale membre du réseau BEM Africa, au Point E. Notre gouvernance, notre modèle et ce qui nous distingue."
        path="/a-propos"
      />
      <Section1Hero />
      <Section2Gouvernance />
      <Section3BEM />
      <Section4Singularite />
      <Section5Equipe />
      <ContactBlock />
    </>
  );
}
