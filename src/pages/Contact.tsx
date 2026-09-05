import { Phone, Mail, MapPin } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import SectionLabel from '../components/ui/SectionLabel';
import ContactBlock from '../components/sections/ContactBlock';

function Section1Hero() {
  return (
    <section className="relative bg-navy py-24 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1400&q=75"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/88" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Contact" light />
        <h1
          className="font-heading font-extrabold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Prenez contact avec nous
        </h1>
        <p className="font-body text-white/80 italic text-xl max-w-2xl mx-auto leading-relaxed">
          Une question sur nos programmes, sur les inscriptions ou sur les frais de scolarité ?
          Écrivez-nous ou appelez-nous. Notre équipe des admissions vous répond sous 24 heures ouvrées.
        </p>
      </div>
    </section>
  );
}

const coordonnees = [
  {
    Icon: Phone,
    titre: "Nous appeler",
    lignes: [
      { label: "+221 78 735 92 56", href: "tel:+221787359256" },
      { label: "+1 (416) 559-3769", href: "tel:+14165593769" },
    ],
    note: "Rappel sous 24 heures ouvrées",
  },
  {
    Icon: Mail,
    titre: "Nous écrire",
    lignes: [
      { label: "contact@lcd.sn", href: "mailto:contact@lcd.sn" },
    ],
    note: "Réponse sous 24 heures ouvrées",
  },
  {
    Icon: MapPin,
    titre: "Nous trouver",
    lignes: [
      { label: "Point E, Dakar — Sénégal", href: null },
    ],
    linkExtra: {
      label: "Voir sur Google Maps",
      href: "https://maps.google.com/?q=Point+E+Dakar+Senegal",
      external: true,
    },
    note: "",
  },
];

function Section2Coordonnees() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="Coordonnées" />
          <h2
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
          >
            Nos coordonnées
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {coordonnees.map(({ Icon, titre, lignes, note, linkExtra }) => (
            <div
              key={titre}
              className="bg-offwhite rounded-xl p-7 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-red-lcd/10 flex items-center justify-center">
                <Icon size={18} className="text-red-lcd" />
              </div>
              <h3 className="font-heading font-bold text-navy text-base">{titre}</h3>
              <div className="flex flex-col gap-1">
                {lignes.map(({ label, href }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      className="font-body text-text-soft text-sm hover:text-red-lcd transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <span key={label} className="font-body text-text-soft text-sm">
                      {label}
                    </span>
                  )
                )}
                {linkExtra && (
                  <a
                    href={linkExtra.href}
                    target={linkExtra.external ? "_blank" : undefined}
                    rel={linkExtra.external ? "noopener noreferrer" : undefined}
                    className="font-body text-red-lcd text-sm hover:underline mt-1"
                  >
                    {linkExtra.label}
                  </a>
                )}
              </div>
              {note && (
                <p className="font-body text-navy/40 text-xs">{note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Section3WhatsApp() {
  const whatsappUrl =
    "https://wa.me/221787359256?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20le%20Lyc%C3%A9e%20Canadien%20de%20Dakar.";

  return (
    <section className="bg-offwhite py-16 md:py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-card flex flex-col items-center gap-5">
          {/* WhatsApp icon */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#25D366" />
            <path
              d="M28.9 11.1A11.73 11.73 0 0 0 20.05 7.5C13.73 7.5 8.6 12.63 8.6 18.95c0 2.02.53 3.99 1.54 5.73L8.5 32l7.52-1.97a11.9 11.9 0 0 0 5.03 1.13h.01c6.32 0 11.45-5.13 11.45-11.44 0-3.05-1.19-5.92-3.61-8.62ZM20.05 29.35a9.89 9.89 0 0 1-5.04-1.38l-.36-.21-3.74.98.99-3.65-.24-.37a9.84 9.84 0 0 1-1.51-5.27c0-5.41 4.4-9.81 9.82-9.81 2.62 0 5.08 1.02 6.93 2.87a9.73 9.73 0 0 1 2.87 6.93c-.01 5.42-4.41 9.81-9.72 9.81Zm5.38-7.35c-.29-.15-1.74-.86-2.01-.96-.27-.1-.46-.15-.66.15-.19.29-.75.96-.92 1.16-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.5.07-.77.37-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.01c.15.2 2.06 3.15 5 4.41.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.19-.56-.34Z"
              fill="white"
            />
          </svg>

          <div>
            <p className="font-heading font-bold text-navy text-lg mb-1">
              Préférez WhatsApp ?
            </p>
            <p className="font-body text-navy/60 text-sm">
              Écrivez-nous directement.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white font-heading font-semibold text-sm px-8 py-4 rounded-md transition-colors duration-200 uppercase tracking-wide min-h-[52px]"
            style={{ backgroundColor: '#25D366' }}
          >
            Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Nous contacter | Lycée Canadien de Dakar"
        description="Point E, Dakar. Écrivez-nous ou appelez-nous. Notre équipe des admissions vous répond sous 24 heures."
        path="/contact"
      />
      <Section1Hero />
      <ContactBlock />
      <Section2Coordonnees />
      <Section3WhatsApp />
    </>
  );
}
