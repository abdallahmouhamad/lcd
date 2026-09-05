import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Heart, GraduationCap, Briefcase, Network, Target, Star, Wrench, ChevronDown } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import SectionLabel from '../components/ui/SectionLabel';
import ContactBlock from '../components/sections/ContactBlock';

// Ce formulaire est routé vers partenariats@lcd.sn via VITE_FORMSPREE_PARTENAIRES
// via VITE_FORMSPREE_PARTENAIRES — DISTINCT du formulaire admissions
// Ne jamais mélanger les deux flux (section 8 du brief client)

function Section1Hero() {
  return (
    <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: '55% center' }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Partenariats" light />
        <h1
          className="font-heading font-extrabold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Construire ensemble de nouvelles opportunités
        </h1>
        <p className="font-body text-white/85 italic text-xl max-w-2xl mx-auto leading-relaxed">
          Au Lycée Canadien de Dakar, nous sommes convaincus que l&apos;éducation est une responsabilité
          partagée. Nous travaillons avec des organisations qui partagent notre engagement : élargir
          l&apos;accès à une éducation de qualité et ouvrir de nouveaux horizons aux élèves.
        </p>
      </div>
    </section>
  );
}

const arguments_partenariat = [
  {
    Icon: Network,
    texte: "L'appartenance au réseau d'écoles du Groupe BEM Africa",
  },
  {
    Icon: Target,
    texte:
      "Un engagement clair sur l'accès à l'enseignement supérieur et la réussite scolaire",
  },
  {
    Icon: Star,
    texte:
      "Des standards exigeants en matière de protection de l'enfance et de bien-être des élèves",
  },
  {
    Icon: Wrench,
    texte:
      "Un appui opérationnel assuré par l'équipe du LCD et par les systèmes du réseau",
  },
];

function Section2Modele() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionLabel text="Notre approche" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Notre modèle de partenariat
          </h2>
        </div>
        <p className="font-body text-navy/60 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
          Membre du réseau BEM Africa, le Lycée Canadien de Dakar s&apos;appuie sur un modèle panafricain
          fondé sur le partenariat, l&apos;impact et l&apos;innovation. Avec nos partenaires, nous bâtissons une
          école où davantage d&apos;élèves accèdent aux outils, aux compétences et à l&apos;accompagnement
          dont ils ont besoin pour réussir.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {arguments_partenariat.map(({ Icon, texte }, i) => (
            <motion.div
              key={texte}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex items-start gap-4 bg-offwhite rounded-xl p-5"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <Icon size={18} className="text-gold" />
              </div>
              <p className="font-body text-navy/80 text-sm leading-relaxed">{texte}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const formes = [
  {
    tag: "Bourses et impact social",
    bordure: "border-red-lcd",
    tagBg: "bg-red-lcd/10",
    tagColor: "text-red-lcd",
    Icon: Heart,
    iconColor: "text-red-lcd",
    texte:
      "Des partenaires engagés en faveur de l'égalité des chances et de l'accès à l'éducation. Permettre à des élèves méritants d'accéder à un parcours canadien.",
  },
  {
    tag: "Universités et institutions académiques",
    bordure: "border-gold",
    tagBg: "bg-gold/10",
    tagColor: "text-gold",
    Icon: GraduationCap,
    iconColor: "text-gold",
    texte:
      "Des collaborations qui ouvrent des passerelles vers l'enseignement supérieur, au Canada comme partout dans le monde.",
  },
  {
    tag: "Prestataires et entreprises",
    bordure: "border-navy",
    tagBg: "bg-navy/10",
    tagColor: "text-navy",
    Icon: Briefcase,
    iconColor: "text-navy",
    texte:
      "Des organisations qui contribuent à la qualité de notre environnement scolaire, de nos infrastructures et de nos programmes.",
  },
];

function Section3Formes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-offwhite py-20 md:py-28" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Types de partenariat" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Trois formes de partenariat
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {formes.map(({ tag, bordure, tagBg, tagColor, Icon, iconColor, texte }, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`bg-white rounded-xl p-6 border-l-4 ${bordure} flex gap-5`}
            >
              <div className="shrink-0 mt-0.5">
                <Icon size={22} className={iconColor} />
              </div>
              <div>
                <span className={`inline-block font-heading font-semibold text-xs ${tagColor} ${tagBg} px-3 py-1 rounded-full mb-3`}>
                  {tag}
                </span>
                <p className="font-body text-navy/70 text-sm leading-relaxed">{texte}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Status = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  organisation: string;
  nom: string;
  email: string;
  telephone: string;
  type_partenariat: string;
  message: string;
}

function Section4Formulaire() {
  const endpointUrl =
    (import.meta.env.VITE_FORM_PARTENAIRES as string | undefined) ||
    'https://formsubmit.co/ajax/abou050793@gmail.com';

  const [form, setForm] = useState<FormData>({
    organisation: '',
    nom: '',
    email: '',
    telephone: '',
    type_partenariat: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.organisation.trim()) e.organisation = "Obligatoire";
    if (!form.nom.trim()) e.nom = "Obligatoire";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) e.email = "Email invalide";
    if (!form.type_partenariat) e.type_partenariat = "Obligatoire";
    if (!form.message.trim()) e.message = "Obligatoire";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const res = await fetch(endpointUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Nouveau partenariat LCD — ${form.type_partenariat}`,
          _captcha: 'false',
          ...form,
        }),
      });
      const data = await res.json().catch(() => ({}));
      setStatus(res.ok && (data.success === 'true' || data.success === true) ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const fieldClass = (err?: string) =>
    `w-full font-body text-sm border ${err ? 'border-red-lcd' : 'border-border-light'} rounded-md px-4 py-3 bg-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-colors`;

  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <SectionLabel text="Devenir partenaire" light />
          <h2
            className="font-heading font-extrabold text-white"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Devenir partenaire
          </h2>
          <p className="font-body text-white/70 mt-4 max-w-xl mx-auto leading-relaxed">
            Vous souhaitez collaborer avec le Lycée Canadien de Dakar ? Décrivez votre organisation
            et votre projet. Notre équipe vous répond sous 48 heures.
          </p>
        </div>

        {status === 'success' ? (
          <div className="flex flex-col items-center gap-4 py-10 text-center">
            <CheckCircle2 size={48} className="text-gold" />
            <p className="font-heading font-bold text-white text-lg">
              Proposition reçue — merci !
            </p>
            <p className="font-body text-white/70 text-sm">
              Notre équipe vous répondra sous 48 heures.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-heading font-semibold text-white/70 text-xs uppercase tracking-wide block mb-1.5">
                  Organisation *
                </label>
                <input
                  type="text"
                  placeholder="Nom de votre organisation"
                  value={form.organisation}
                  onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                  className={fieldClass(errors.organisation)}
                />
                {errors.organisation && (
                  <p className="font-body text-red-lcd text-xs mt-1">{errors.organisation}</p>
                )}
              </div>
              <div>
                <label className="font-heading font-semibold text-white/70 text-xs uppercase tracking-wide block mb-1.5">
                  Nom du contact *
                </label>
                <input
                  type="text"
                  placeholder="Prénom Nom"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className={fieldClass(errors.nom)}
                />
                {errors.nom && (
                  <p className="font-body text-red-lcd text-xs mt-1">{errors.nom}</p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-heading font-semibold text-white/70 text-xs uppercase tracking-wide block mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="contact@organisation.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={fieldClass(errors.email)}
                />
                {errors.email && (
                  <p className="font-body text-red-lcd text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="font-heading font-semibold text-white/70 text-xs uppercase tracking-wide block mb-1.5">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="+221 XX XXX XX XX"
                  value={form.telephone}
                  onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                  className={fieldClass()}
                />
              </div>
            </div>

            <div>
              <label className="font-heading font-semibold text-white/70 text-xs uppercase tracking-wide block mb-1.5">
                Type de partenariat *
              </label>
              <div className="relative">
                <select
                  value={form.type_partenariat}
                  onChange={(e) => setForm({ ...form, type_partenariat: e.target.value })}
                  className={`${fieldClass(errors.type_partenariat)} appearance-none pr-10 cursor-pointer`}
                  style={{ backgroundColor: '#102048' }}
                >
                  <option value="" style={{ backgroundColor: '#102048', color: 'rgba(255,255,255,0.45)' }}>— Sélectionner —</option>
                  <option value="Bourse" style={{ backgroundColor: '#102048', color: 'white' }}>Bourse</option>
                  <option value="Université" style={{ backgroundColor: '#102048', color: 'white' }}>Université</option>
                  <option value="Entreprise" style={{ backgroundColor: '#102048', color: 'white' }}>Entreprise</option>
                  <option value="Autre" style={{ backgroundColor: '#102048', color: 'white' }}>Autre</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
              </div>
              {errors.type_partenariat && (
                <p className="font-body text-red-lcd text-xs mt-1">{errors.type_partenariat}</p>
              )}
            </div>

            <div>
              <label className="font-heading font-semibold text-white/70 text-xs uppercase tracking-wide block mb-1.5">
                Votre message *
              </label>
              <textarea
                rows={5}
                placeholder="Décrivez votre organisation et votre projet de partenariat..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={fieldClass(errors.message)}
              />
              {errors.message && (
                <p className="font-body text-red-lcd text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {status === 'error' && (
              <p className="font-body text-red-lcd text-sm text-center">
                Une erreur s&apos;est produite. Veuillez réessayer ou nous contacter directement.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center bg-red-lcd hover:bg-red-hover disabled:opacity-60 text-white font-heading font-semibold text-sm px-8 py-4 rounded-md transition-colors duration-200 uppercase tracking-wide min-h-[52px] self-center"
            >
              {status === 'sending' ? 'Envoi…' : 'Envoyer ma proposition'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function Partenaires() {
  return (
    <>
      <SEOHead
        title="Nos partenaires | Lycée Canadien de Dakar"
        description="Bourses, universités et entreprises. Construisons ensemble de nouvelles opportunités pour les élèves du Sénégal."
        path="/partenaires"
      />
      <Section1Hero />
      <Section2Modele />
      <Section3Formes />
      <Section4Formulaire />
      <ContactBlock />
    </>
  );
}
