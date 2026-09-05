import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mic2, Cpu, Trophy } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import SectionLabel from '../components/ui/SectionLabel';
import ContactBlock from '../components/sections/ContactBlock';

function Section1Hero() {
  return (
    <section className="relative bg-offwhite pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1400&q=75"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 10%' }}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(242,244,247,0.93)" }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Au quotidien" />
        <h1
          className="font-heading font-extrabold text-navy leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          La vie au-delà de la salle de classe
        </h1>
        <p className="font-body text-navy/70 italic text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
          Au Lycée Canadien de Dakar, les activités hors des cours ne sont pas un supplément. Elles
          font partie intégrante de notre approche pédagogique et de notre promesse : une éducation
          tournée vers l&apos;avenir, qui prépare à l&apos;université, au métier et à la vie.
        </p>
        <p className="font-body text-navy/60 max-w-2xl mx-auto leading-relaxed">
          Nos élèves explorent leurs passions, acquièrent des compétences concrètes et se construisent
          un profil qui les distingue au moment de candidater à l&apos;université.
        </p>
      </div>
    </section>
  );
}

const familles = [
  {
    titre: "S'exprimer",
    Icon: Mic2,
    iconColor: "text-red-lcd",
    iconBg: "bg-red-lcd/10",
    activites: ["Club de débat et art oratoire", "Journal de l'école", "Théâtre", "Prise de parole en public"],
    complement:
      "Prendre la parole, défendre une idée, convaincre. Ces compétences se travaillent, et elles font la différence.",
  },
  {
    titre: "Créer et construire",
    Icon: Cpu,
    iconColor: "text-gold",
    iconBg: "bg-gold/10",
    activites: ["Robotique", "Initiation au codage", "Ateliers scientifiques", "Projets technologiques"],
    complement:
      "La technologie n'est pas un écran. C'est un outil de création que nos élèves apprennent à maîtriser.",
  },
  {
    titre: "Se dépasser",
    Icon: Trophy,
    iconColor: "text-navy",
    iconBg: "bg-navy/10",
    activites: [
      "Football",
      "Activités sportives collectives",
      "Tournois inter-établissements",
      "Sorties culturelles",
    ],
    complement:
      "Le sport enseigne ce que les cours ne peuvent pas donner : la résilience, le collectif, la gestion de l'échec.",
  },
];

function Section2Activites() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionLabel text="Activités" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Nos activités
          </h2>
        </div>
        <p className="font-body text-navy/60 text-center mb-12 max-w-xl mx-auto leading-relaxed">
          Trois familles d&apos;activités, pensées pour former des esprits complets.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {familles.map(({ titre, Icon, iconColor, iconBg, activites, complement }, i) => (
            <motion.div
              key={titre}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-offwhite rounded-2xl p-6 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                <Icon size={32} className={iconColor} />
              </div>
              <h3 className="font-heading font-bold text-navy text-lg mb-4">{titre}</h3>
              <ul className="flex flex-col gap-1.5 mb-4">
                {activites.map((a) => (
                  <li key={a} className="font-body text-text-soft/70 text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                    {a}
                  </li>
                ))}
              </ul>
              <p className="font-body text-navy/60 text-sm italic leading-relaxed mt-auto">
                {complement}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="border border-gold bg-gold/5 rounded-xl px-6 py-5"
        >
          <p className="font-body text-navy/70 text-sm leading-relaxed text-center">
            Nos élèves bénéficient des activités proposées par l&apos;école, mais aussi de celles du réseau
            BEM Africa, qui rassemble des établissements dans plusieurs pays du continent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const raisons = [
  {
    num: "01",
    titre: "Elles font la différence à l'admission universitaire",
    texte:
      "Les meilleures universités ne regardent pas seulement les notes. Elles cherchent des jeunes engagés, curieux, utiles à leur communauté. Ces activités permettent à nos élèves de bâtir un profil singulier.",
  },
  {
    num: "02",
    titre: "Elles développent des compétences que les cours ne donnent pas",
    texte:
      "Travailler en équipe, tenir un délai, encaisser un échec, résoudre un problème sans solution toute faite.",
  },
  {
    num: "03",
    titre: "Elles révèlent des vocations",
    texte:
      "C'est souvent en essayant quelque chose pour la première fois qu'un jeune découvre ce qui l'anime.",
  },
];

function Section3Pourquoi() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Pourquoi ça compte" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Pourquoi ces activités comptent vraiment
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {raisons.map(({ num, titre, texte }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="bg-white rounded-xl p-6 shadow-card"
            >
              <p
                className="font-heading font-extrabold text-gold mb-3"
                style={{ fontSize: '2rem' }}
              >
                {num}
              </p>
              <h3 className="font-heading font-bold text-navy text-base mb-3 leading-snug">{titre}</h3>
              <p className="font-body text-navy/70 text-sm leading-relaxed">{texte}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const photos = [
  {
    src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=600&q=75",
    alt: "Activité sportive des élèves",
    // TODO: remplacer par photo LCD officielle — activité sportive
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75",
    alt: "Atelier créatif des élèves",
    // TODO: remplacer par photo LCD officielle — atelier créatif
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=75",
    alt: "Vie scolaire au LCD",
    // TODO: remplacer par photo LCD officielle — vie scolaire
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=75",
    alt: "Groupe d'élèves au LCD",
    // TODO: remplacer par photo LCD officielle — groupe d'élèves
  },
];

function Section4Photos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="En images" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            La vie au LCD
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {photos.map(({ src, alt }, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-48 sm:h-64 object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function VieScolaire() {
  return (
    <>
      <SEOHead
        title="Vie scolaire et activités | Lycée Canadien de Dakar"
        description="Débat, robotique, codage, sport et culture. Les activités qui construisent le profil de nos élèves."
        path="/vie-scolaire"
      />
      <Section1Hero />
      <Section2Activites />
      <Section3Pourquoi />
      <Section4Photos />
      <ContactBlock />
    </>
  );
}
