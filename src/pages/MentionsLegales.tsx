// TODO: compléter avec raison sociale, forme juridique,
// numéro d'identification (section 13 du brief client)
import SEOHead from '../components/ui/SEOHead';
import SectionLabel from '../components/ui/SectionLabel';

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading font-bold text-navy text-xl mb-3">{title}</h2>
      <div className="font-body text-navy/70 leading-relaxed">{children}</div>
    </div>
  );
}

export default function MentionsLegales() {
  return (
    <>
      <SEOHead
        title="Mentions légales | Lycée Canadien de Dakar"
        description="Informations légales du Lycée Canadien de Dakar."
        path="/mentions-legales"
      />
      <section className="bg-offwhite pt-32 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel text="Légal" />
          <h1
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Mentions légales
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalSection title="Éditeur du site">
            <p>Lycée Canadien de Dakar — Une initiative du Groupe BEM Africa</p>
            <p>Adresse : Point E, Dakar — Sénégal</p>
            <p>Email : contact@lcd.sn</p>
            <p>Téléphone : +221 78 735 92 56</p>
            <p className="mt-3 text-navy/40 text-sm italic">
              [À compléter : raison sociale, forme juridique, numéro d&apos;identification,
              directeur de publication]
            </p>
          </LegalSection>

          <LegalSection title="Hébergement">
            <p className="text-navy/40 text-sm italic">
              [À compléter : nom de l&apos;hébergeur, adresse, coordonnées]
            </p>
            {/* TODO: compléter avec les informations de l'hébergeur
                avant la mise en ligne */}
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos) est protégé par le droit
              d&apos;auteur. Toute reproduction est interdite sans autorisation préalable.
            </p>
          </LegalSection>

          <LegalSection title="Rattachement">
            <p>
              Le Lycée Canadien de Dakar est membre du réseau BEM Africa, adossé au Groupe BEM Africa.
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
