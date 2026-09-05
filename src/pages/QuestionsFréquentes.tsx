import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/ui/SEOHead';
import SectionLabel from '../components/ui/SectionLabel';
import ContactBlock from '../components/sections/ContactBlock';

interface FAQItem {
  question: string;
  reponse: string;
}

const faqs: FAQItem[] = [
  {
    question: "Le Lycée Canadien de Dakar délivre-t-il un diplôme canadien ?",
    reponse:
      "Le LCD promeut le Diplôme d'Études Secondaires de l'Ontario (DESO), le Bac Canadien. Ce diplôme est délivré par notre école partenaire canadienne, accréditée par le ministère de l'Éducation de l'Ontario. Le LCD est la première école internationale au Sénégal à proposer ce parcours. Le nom et les coordonnées de notre école partenaire vous sont communiqués lors du premier entretien. La convention de partenariat est disponible sur demande auprès de la Direction.",
  },
  {
    question: "À partir de quel niveau peut-on inscrire son enfant ?",
    reponse:
      "Nous accueillons les élèves de la 6ᵉ à la Terminale. Le Programme Hybride est ouvert dès la 6ᵉ. Le Programme Canadien démarre en 3ᵉ, ce qui correspond à la Grade 9 du système ontarien.",
  },
  {
    question: "Mon enfant doit-il parler anglais couramment ?",
    reponse:
      "Non. Notre enseignement est bilingue et progressif. Beaucoup de nos élèves arrivent avec un anglais scolaire et le renforcent année après année. C'est précisément l'un des apports du parcours.",
  },
  {
    question: "Y a-t-il un examen d'État à passer ?",
    reponse:
      "Sur le Programme Canadien, non. Le diplôme s'obtient par la validation des cours obligatoires, sans examen final unique. Sur le Programme Hybride, votre enfant présente le Baccalauréat sénégalais.",
  },
  {
    question: "Que se passe-t-il si mon enfant change d'avis en cours de route ?",
    reponse:
      "Une passerelle existe entre le Programme Hybride et le Programme Canadien à partir de la 3ᵉ. Nous en discutons avec vous et avec votre enfant, à la lumière de ses résultats et de son projet.",
  },
  {
    question: "Quels sont vos frais de scolarité ?",
    reponse:
      "Nos frais dépendent du parcours et du niveau. Nous vous les présentons en détail, sans surprise, dès le premier échange. Des facilités de paiement et des bourses partielles peuvent être étudiées selon le dossier.",
  },
  {
    question: "Peut-on visiter le campus avant de décider ?",
    reponse:
      "Nous vous y encourageons. Les visites se font sur rendez-vous, individuellement, pour que vous rencontriez l'équipe et voyiez l'établissement en conditions réelles.",
  },
  {
    question: "Accompagnez-vous les élèves après le lycée ?",
    reponse:
      "Oui. L'orientation universitaire est intégrée au parcours dès la Seconde : choix des filières, sélection des universités, construction du dossier de candidature, préparation linguistique et accompagnement des démarches de mobilité.",
  },
  {
    question: "Où en sont les inscriptions ?",
    reponse:
      "Les inscriptions pour la première promotion, rentrée d'octobre 2026, sont ouvertes. Les places sont limitées et les dossiers sont traités par ordre d'arrivée.",
  },
  {
    question: "Le LCD accueille-t-il des adultes ?",
    reponse:
      "Oui. Il n'y a pas de limite d'âge sur le Programme Canadien et la Prépa-Universitaire. Des horaires souples, en journée, en soirée ou à distance, permettent de concilier reprise d'études et activité professionnelle.",
  },
  {
    // IMPORTANT — Valider cette formulation avec la Direction
    // avant la mise en ligne. Si l'autorisation est obtenue
    // avant la rentrée, remplacer par la mention officielle.
    question: "L'école est-elle autorisée à fonctionner par l'État sénégalais ?",
    reponse:
      "Le Lycée Canadien de Dakar est en cours d'obtention de son autorisation auprès des autorités sénégalaises compétentes, conformément à la réglementation en vigueur. L'établissement opère sous l'égide du Groupe BEM Africa, acteur éducatif reconnu et établi au Sénégal depuis 2008. Les familles souhaitant des précisions sur le statut réglementaire de l'établissement peuvent contacter la Direction à contact@lcd.sn.",
  },
  {
    question: "Quels sont les horaires de l'établissement ?",
    reponse:
      "Le Lycée Canadien de Dakar propose trois formats d'horaires selon le parcours choisi : journée complète (matin et après-midi), soirée (pour les adultes actifs et les parcours en cours du soir), et à distance (pour certains modules du Programme Canadien). Les horaires précis par niveau sont communiqués lors du premier entretien avec l'équipe des admissions.",
  },
  {
    question: "Combien d'élèves maximum par classe ?",
    reponse:
      "Nos effectifs sont volontairement limités pour garantir un suivi personnalisé. Le nombre d'élèves par classe est communiqué lors de la visite du campus. Notre engagement : chaque enseignant connaît chaque élève par son nom.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.reponse,
    },
  })),
};

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
        <SectionLabel text="FAQ" />
        <h1
          className="font-heading font-extrabold text-navy leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Vos questions sur le Lycée Canadien de Dakar
        </h1>
        <p className="font-body text-navy/70 italic text-xl max-w-2xl mx-auto leading-relaxed">
          Les réponses aux questions que se posent les familles avant de nous contacter.
        </p>
      </div>
    </section>
  );
}

function AccordionItem({ item, isOpen, onToggle }: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border-light last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-navy text-base leading-snug">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="shrink-0 text-navy/40"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-body text-navy/70 text-sm leading-relaxed pb-5 pr-8">
              {item.reponse}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section2Accordeon() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-border-light shadow-card px-6 py-2"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function QuestionsFréquentes() {
  return (
    <>
      <SEOHead
        title="Questions fréquentes | Lycée Canadien de Dakar"
        description="Diplôme, niveaux, anglais, frais de scolarité, visites. Les réponses aux questions que se posent les parents."
        path="/questions-frequentes"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Section1Hero />
      <Section2Accordeon />
      <ContactBlock />
    </>
  );
}
