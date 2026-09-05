import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import SectionLabel from '../components/ui/SectionLabel';
import ContactBlock from '../components/sections/ContactBlock';

function Section1Hero() {
  return (
    <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* TODO: remplacer par photo LCD officielle */}
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=75"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Sécurité et bien-être" light />
        <h1
          className="font-heading font-extrabold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          La protection de l&apos;enfance au Lycée Canadien de Dakar
        </h1>
        <p className="font-body text-white/80 italic text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
          Un cadre sûr pour chaque élève, et pour chaque membre de notre communauté.
        </p>
        <p className="font-body text-white/70 max-w-2xl mx-auto leading-relaxed">
          Nous croyons que chaque enfant a le droit de grandir, d&apos;apprendre et de s&apos;épanouir dans
          un environnement sûr, bienveillant et respectueux. Cette exigence ne s&apos;arrête pas aux
          élèves : elle s&apos;étend à toute notre communauté, personnel, familles et visiteurs compris.
        </p>
      </div>
    </section>
  );
}

interface Engagement {
  num: string;
  titre: string;
  texte: string;
}

const engagements: Engagement[] = [
  {
    num: "01",
    titre: "Un responsable de la protection de l'enfance formé",
    texte:
      "Identifié, joignable, présent dans l'établissement. Les élèves comme les parents savent à qui s'adresser.",
  },
  {
    num: "02",
    titre: "Une formation obligatoire pour tout le personnel",
    texte:
      "Enseignants, encadrement, personnel administratif. Sans exception et sans dérogation.",
  },
  {
    num: "03",
    titre: "Une politique claire contre le harcèlement",
    texte:
      "Écrite, portée à la connaissance des élèves et des familles, appliquée sans arrangement.",
  },
  {
    num: "04",
    titre: "Des canaux de signalement fiables et confidentiels",
    texte:
      "Accessibles aux élèves comme aux parents. Un enfant qui ne peut pas parler est un enfant seul.",
  },
  {
    num: "05",
    titre: "Une vérification systématique des antécédents",
    texte:
      "Pour chaque personne appelée à travailler auprès des élèves, quel que soit son poste.",
  },
];

function Section2Engagements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Sécurité · Engagement" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Nos engagements
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-border-light">
          {engagements.map((e, i) => (
            <motion.div
              key={e.num}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex gap-6 py-8"
            >
              <span
                className="font-heading font-extrabold text-red-lcd shrink-0 leading-none"
                style={{ fontSize: '3rem' }}
              >
                {e.num}
              </span>
              <div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{e.titre}</h3>
                <p className="font-body text-navy/70 leading-relaxed">{e.texte}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-navy rounded-2xl px-8 py-10 mt-10"
        >
          <h3 className="font-heading font-bold text-white text-xl mb-4">Notre conviction</h3>
          <p className="font-body text-white/80 leading-relaxed">
            Quand un enfant se sent en sécurité, il prend confiance. Quand le personnel se sent
            soutenu, il donne le meilleur de lui-même. Quand les parents sont associés, la confiance
            s&apos;installe. C&apos;est ce cadre que nous construisons, jour après jour.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Section3BienEtre() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <h2
              className="font-heading font-extrabold text-navy mb-4"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)' }}
            >
              Le bien-être au quotidien
            </h2>
            <p className="font-body text-navy/70 leading-relaxed mb-8">
              Le développement personnel et relationnel fait partie de la vie de l&apos;école, au même
              titre que les mathématiques ou les langues. Nous écoutons nos élèves, nous encourageons
              l&apos;entraide entre camarades et nous accompagnons chacun dans la construction d&apos;une
              culture scolaire bienveillante.
            </p>

            <h2
              className="font-heading font-extrabold text-navy mb-4"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)' }}
            >
              La sécurité est le fondement de l&apos;apprentissage
            </h2>
            <p className="font-body text-navy/70 leading-relaxed">
              Un enfant n&apos;apprend bien que s&apos;il se sent en sécurité. C&apos;est pour cette raison que la
              protection de l&apos;enfance n&apos;est pas un département séparé chez nous : c&apos;est une
              responsabilité partagée par toute l&apos;équipe, inscrite dans chaque geste du quotidien.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {/* TODO: remplacer par photo LCD officielle */}
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80"
              alt="Élèves dans un cadre scolaire bienveillant"
              className="w-full rounded-2xl shadow-card object-cover"
              style={{ maxHeight: '420px' }}
              width={600}
              height={450}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Section4Note() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-16 md:py-20" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="border border-gold bg-gold/10 rounded-xl p-8 flex gap-4"
        >
          <Shield size={22} className="text-gold shrink-0 mt-0.5" />
          <div>
            <h3 className="font-heading font-bold text-gold text-base mb-3">
              Entrée en vigueur : octobre 2026
            </h3>
            <p className="font-body text-navy/70 text-sm leading-relaxed">
              Ces cinq engagements constituent nos promesses aux familles. Ils entrent en vigueur
              à la rentrée d&apos;octobre 2026 et sont formalisés par écrit avant l&apos;ouverture de
              l&apos;établissement. Les familles qui souhaitent consulter notre politique de protection
              de l&apos;enfance complète peuvent en faire la demande à l&apos;adresse{' '}
              <a
                href="mailto:contact@lcd.sn"
                className="text-navy font-semibold hover:underline"
              >
                contact@lcd.sn
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ProtectionBienEtre() {
  return (
    <>
      <SEOHead
        title="Protection de l'enfance | Lycée Canadien de Dakar"
        description="Responsable formé, personnel formé, canaux de signalement confidentiels et vérification des antécédents. Nos engagements de protection."
        path="/protection-bien-etre"
      />
      <Section1Hero />
      <Section2Engagements />
      <Section3BienEtre />
      <Section4Note />
      <ContactBlock />
    </>
  );
}
