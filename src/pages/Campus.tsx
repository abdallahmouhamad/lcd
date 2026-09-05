import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Shield, Coffee, MapPin } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import SectionLabel from '../components/ui/SectionLabel';
import ContactBlock from '../components/sections/ContactBlock';

function Section1Hero() {
  return (
    <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1400&q=80"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Notre espace" light />
        <h1
          className="font-heading font-extrabold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Notre campus, au Point E
        </h1>
        <p className="font-body text-white/85 italic text-xl max-w-2xl mx-auto leading-relaxed">
          Le Lycée Canadien de Dakar est installé au Point E, l&apos;un des quartiers les mieux desservis
          de Dakar. Un emplacement central, accessible depuis l&apos;ensemble de l&apos;agglomération, dans un
          environnement calme propice au travail.
        </p>
      </div>
    </section>
  );
}

const attributs = [
  {
    Icon: Monitor,
    titre: "Des salles modernes",
    texte:
      "Équipées pour un enseignement interactif, avec les outils numériques intégrés au quotidien, pas rangés dans une salle spécialisée.",
  },
  {
    Icon: Shield,
    titre: "Un site sécurisé",
    texte:
      "Accès contrôlé, surveillance des entrées et des sorties, procédures claires pour la protection de chaque élève.",
  },
  {
    Icon: Coffee,
    titre: "Des espaces de vie",
    texte:
      "Des lieux pour travailler ensemble, se retrouver et souffler entre deux cours. L'école ne s'arrête pas à la salle de classe.",
  },
  {
    Icon: MapPin,
    titre: "Un quartier accessible",
    texte:
      "Le Point E est l'un des quartiers les mieux desservis de Dakar, ce qui simplifie les trajets quotidiens des familles de toute l'agglomération.",
  },
];

const photosGalerie = [
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=75",
    alt: "Façade du campus du Lycée Canadien de Dakar",
    // TODO: remplacer — façade campus LCD
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=75",
    alt: "Salle de classe au Lycée Canadien de Dakar",
    // TODO: remplacer — salle de classe LCD
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75",
    alt: "Espace commun au Lycée Canadien de Dakar",
    // TODO: remplacer — espace commun LCD
  },
];

function Section2Cadre() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Nos installations" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Un cadre pensé pour apprendre
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-6">
            {attributs.map(({ Icon, titre, texte }, i) => (
              <motion.div
                key={titre}
                initial={{ opacity: 0, x: -14 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-red-lcd/10 flex items-center justify-center mt-0.5">
                  <Icon size={18} className="text-red-lcd" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy text-sm mb-1">{titre}</h3>
                  <p className="font-body text-navy/70 text-sm leading-relaxed">{texte}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {photosGalerie.map(({ src, alt }, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, x: 14 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="overflow-hidden rounded-xl shadow-card"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Section3Localisation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const mapsUrl = "https://maps.google.com/?q=Point+E+Dakar+Senegal";

  return (
    <section className="bg-offwhite py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Nous trouver" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Nous trouver
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-2xl p-8 shadow-card"
          >
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-red-lcd shrink-0 mt-0.5" />
                <p className="font-body text-text-soft text-sm leading-relaxed">
                  Point E, Dakar — Sénégal
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-body text-red-lcd text-xs font-bold shrink-0 mt-0.5 w-4">📞</span>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+221787359256"
                    className="font-body text-text-soft text-sm hover:text-red-lcd transition-colors"
                  >
                    +221 78 735 92 56 (Sénégal)
                  </a>
                  <a
                    href="tel:+14165593769"
                    className="font-body text-text-soft text-sm hover:text-red-lcd transition-colors"
                  >
                    +1 (416) 559-3769 (Canada)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-body text-red-lcd text-xs font-bold shrink-0 mt-0.5 w-4">✉</span>
                <a
                  href="mailto:contact@lcd.sn"
                  className="font-body text-text-soft text-sm hover:text-red-lcd transition-colors"
                >
                  contact@lcd.sn
                </a>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-navy hover:bg-navy-deep text-white font-heading font-semibold text-sm px-6 py-3.5 rounded-md transition-colors duration-200 uppercase tracking-wide min-h-[48px]"
            >
              Ouvrir dans Google Maps
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl shadow-card"
            >
              {/* TODO: remplacer par capture statique Google Maps centrée
                  sur Point E, Dakar — ou intégrer iframe Google Maps */}
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=75"
                alt="Localisation Point E, Dakar"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <p className="font-body text-navy/50 text-xs mt-2 text-center">
              Cliquez pour ouvrir dans Google Maps
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden mt-3 inline-flex items-center justify-center w-full border border-navy text-navy font-heading font-semibold text-sm px-6 py-3 rounded-md transition-colors duration-200 hover:bg-navy hover:text-white"
            >
              Voir sur la carte
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Section4CTA() {
  return (
    <section className="bg-navy py-20 md:py-28 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-heading font-extrabold text-white mb-4"
          style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
        >
          Venez voir par vous-même
        </h2>
        <p className="font-body text-white/80 leading-relaxed mb-3 max-w-xl mx-auto">
          Une école se juge sur place. Nous organisons des visites individuelles, sur rendez-vous,
          pour que vous rencontriez l&apos;équipe et que vous vous fassiez votre propre idée.
        </p>
        <p className="font-body text-white/60 text-sm mb-8">
          Vous repartez avec le coût annuel complet, écrit, pour la classe de votre enfant.
        </p>
        <a
          href="/admissions#contact-block"
          className="inline-flex items-center justify-center bg-red-lcd hover:bg-red-hover text-white font-heading font-semibold text-sm px-8 py-4 rounded-md transition-colors duration-200 uppercase tracking-wide min-h-[52px]"
        >
          Réserver une visite
        </a>
      </div>
    </section>
  );
}

export default function Campus() {
  return (
    <>
      <SEOHead
        title="Notre campus au Point E | Lycée Canadien de Dakar"
        description="Un campus moderne et sécurisé au cœur de Dakar. Découvrez nos installations et réservez une visite."
        path="/campus"
      />
      <Section1Hero />
      <Section2Cadre />
      <Section3Localisation />
      <Section4CTA />
      <ContactBlock />
    </>
  );
}
