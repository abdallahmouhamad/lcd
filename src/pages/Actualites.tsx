import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import SectionLabel from '../components/ui/SectionLabel';
import ContactBlock from '../components/sections/ContactBlock';

interface Article {
  categorie: string;
  tagClass: string;
  date: string;
  titre: string;
  extrait: string;
  image: string;
  imageAlt: string;
  content: string;
}

const articles: Article[] = [
  {
    categorie: "Ouverture",
    tagClass: "bg-red-lcd/10 text-red-lcd",
    date: "Août 2026",
    titre: "Le Lycée Canadien de Dakar ouvre ses portes en octobre 2026",
    extrait:
      "Première école internationale au Sénégal à promouvoir le Diplôme d'Études Secondaires de l'Ontario, le LCD accueille sa première promotion dès octobre 2026 au Point E, Dakar. Les inscriptions sont ouvertes.",
    // TODO: remplacer par photo officielle LCD
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=75",
    imageAlt: "Lycée Canadien de Dakar — ouverture",
    content: `Le Lycée Canadien de Dakar ouvre sa première promotion en octobre 2026. Installé au Point E, au cœur de Dakar, cet établissement propose un parcours secondaire complet, de la 6ᵉ à la Terminale, basé sur le curriculum de l'Ontario.

Le LCD est la première école internationale au Sénégal à promouvoir le Diplôme d'Études Secondaires de l'Ontario (DESO), délivré par son école partenaire canadienne accréditée par le ministère de l'Éducation de l'Ontario. Ce diplôme est accepté comme titre d'admission par des milliers d'universités à travers le monde, sans procédure d'équivalence pour les jurys canadiens, américains ou britanniques.

L'établissement est adossé au Groupe BEM Africa, groupe éducatif présent à Dakar depuis 2008, classé plusieurs fois meilleure Business School d'Afrique noire francophone par le magazine Jeune Afrique.

Les inscriptions pour la première promotion sont ouvertes. Les places sont limitées et les dossiers sont traités par ordre d'arrivée. Contactez l'équipe des admissions au +221 78 735 92 56 ou à contact@lcd.sn.`,
  },
  {
    categorie: "Programmes",
    tagClass: "bg-gold/10 text-gold",
    date: "Août 2026",
    titre: "Comprendre le Bac Canadien : ce que les parents doivent savoir",
    extrait:
      "Le Diplôme d'Études Secondaires de l'Ontario n'est pas un diplôme comme les autres. Il s'obtient sans examen d'État, il est reconnu par des milliers d'universités dans le monde et il se prépare depuis Dakar. Tour d'horizon.",
    // TODO: remplacer par photo officielle LCD
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=75",
    imageAlt: "Comprendre le Bac Canadien",
    content: `Le Diplôme d'Études Secondaires de l'Ontario, communément appelé Bac Canadien, est le diplôme de fin d'études secondaires de la province canadienne de l'Ontario. Son nom officiel est DESO — Diplôme d'Études Secondaires de l'Ontario.

Trois points essentiels pour les familles sénégalaises :

Il s'obtient sans examen d'État unique. Contrairement au Baccalauréat sénégalais, le DESO se valide par la réussite des cours obligatoires, un par un, au rythme de l'élève. Une mauvaise semaine n'efface pas trois bonnes années.

Il est lisible directement par les universités du Nord. Un jury d'admission canadien, américain ou britannique lit un dossier DESO sans procédure d'équivalence. C'est un avantage décisif pour un élève francophone africain qui candidate depuis Dakar.

Il est classé parmi les cinq meilleurs systèmes éducatifs du monde. L'Ontario figure régulièrement dans les cinq premiers des évaluations PISA de l'OCDE, qui mesurent les acquis des élèves de 15 ans en lecture, mathématiques et sciences.

Le LCD est la première école internationale au Sénégal à promouvoir ce parcours. Le diplôme lui-même est délivré par l'école partenaire canadienne du LCD, accréditée par le ministère de l'Éducation de l'Ontario.`,
  },
  {
    categorie: "Admissions",
    tagClass: "bg-navy/10 text-navy",
    date: "Août 2026",
    titre: "Inscriptions ouvertes : comment rejoindre la première promotion",
    extrait:
      "Les dossiers pour la rentrée d'octobre 2026 sont traités par ordre d'arrivée. Voici les étapes du processus, les pièces à fournir et le calendrier à retenir.",
    // TODO: remplacer par photo officielle LCD
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=75",
    imageAlt: "Inscriptions Lycée Canadien de Dakar",
    content: `Les inscriptions pour la rentrée d'octobre 2026 du Lycée Canadien de Dakar sont ouvertes. Les dossiers sont traités par ordre d'arrivée.

Le processus d'admission se déroule en quatre étapes :

Étape 1 — Prendre contact. Par téléphone, WhatsApp ou formulaire en ligne. L'équipe des admissions rappelle sous 24 heures ouvrées.

Étape 2 — Visiter le campus. Une visite individuelle sur mesure au Point E. Vous rencontrez l'équipe et voyez l'établissement tel qu'il est.

Étape 3 — Évaluation de niveau. À partir de la 6ᵉ, une évaluation scolaire lors de la visite détermine le niveau adapté et l'accompagnement nécessaire.

Étape 4 — Constitution du dossier. Après l'entretien final, l'équipe accompagne la famille dans les dernières formalités.

Les pièces du dossier : certificat de scolarité de l'année en cours, extrait de naissance de moins de trois mois, bulletins de l'année précédente et en cours, deux photos d'identité, fiche d'inscription.

Les frais de scolarité varient selon le parcours et le niveau. Ils sont présentés en détail, sans surprise, dès le premier échange. Des facilités de paiement et des bourses partielles peuvent être étudiées.

Contact : +221 78 735 92 56 / contact@lcd.sn`,
  },
];

function ArticleModal({ article, onClose }: { article: Article; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy/50" aria-hidden="true" />
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative bg-white rounded-t-2xl md:rounded-2xl w-full md:max-w-2xl max-h-[95vh] md:max-h-[80vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 p-6 border-b border-border-light shrink-0">
          <div>
            <span className={`font-heading font-semibold text-xs px-3 py-1 rounded-full ${article.tagClass} inline-block mb-2`}>
              {article.categorie}
            </span>
            <h2 className="font-heading font-bold text-navy text-lg leading-snug">
              {article.titre}
            </h2>
            <p className="font-body text-navy/40 text-xs mt-1">{article.date}</p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-9 h-9 rounded-full bg-offwhite flex items-center justify-center hover:bg-border-light transition-colors duration-200 mt-0.5"
            aria-label="Fermer l'article"
          >
            <X size={16} className="text-navy/60" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 flex-1">
          {article.content.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-navy/75 text-sm leading-relaxed mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Section1Hero() {
  return (
    <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1400&q=80"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Actualités" light />
        <h1
          className="font-heading font-extrabold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Actualités du Lycée Canadien de Dakar
        </h1>
        <p className="font-body text-white/85 italic text-xl max-w-2xl mx-auto leading-relaxed">
          Les nouvelles de l&apos;école, les temps forts de la vie scolaire et nos repères sur
          l&apos;éducation internationale.
        </p>
      </div>
    </section>
  );
}

function Section2Articles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [openArticle, setOpenArticle] = useState<Article | null>(null);

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-7">
          {articles.map((a, i) => (
            <motion.article
              key={a.titre}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-offwhite rounded-2xl overflow-hidden shadow-card flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={a.image}
                  alt={a.imageAlt}
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`font-heading font-semibold text-xs px-3 py-1 rounded-full ${a.tagClass}`}>
                    {a.categorie}
                  </span>
                  <span className="font-body text-navy/40 text-xs">{a.date}</span>
                </div>
                <h2 className="font-heading font-bold text-navy text-base leading-snug mb-3">
                  {a.titre}
                </h2>
                <p className="font-body text-navy/65 text-sm leading-relaxed mb-5 flex-1">
                  {a.extrait}
                </p>
                <button
                  onClick={() => setOpenArticle(a)}
                  className="inline-flex items-center gap-1.5 font-heading font-semibold text-red-lcd text-xs hover:gap-2.5 transition-all duration-200 self-start"
                >
                  Lire la suite
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openArticle && (
          <ArticleModal article={openArticle} onClose={() => setOpenArticle(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default function Actualites() {
  return (
    <>
      <SEOHead
        title="Actualités | Lycée Canadien de Dakar"
        description="Les nouvelles de l'école et les temps forts de la vie scolaire du Lycée Canadien de Dakar."
        path="/actualites"
      />
      <Section1Hero />
      <Section2Articles />
      <ContactBlock />
    </>
  );
}
