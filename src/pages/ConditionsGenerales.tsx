// TODO: faire valider ce texte par un juriste avant
// mise en ligne (section 13 du brief client)
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

export default function ConditionsGenerales() {
  return (
    <>
      <SEOHead
        title="Conditions générales | Lycée Canadien de Dakar"
        description="Conditions générales d'utilisation et d'inscription au Lycée Canadien de Dakar."
        path="/conditions-generales"
      />
      <section className="bg-offwhite pt-32 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel text="Légal" />
          <h1
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Conditions générales
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalSection title="Objet">
            <p>
              Les présentes conditions régissent l&apos;utilisation du site lcd.sn et les relations entre
              le Lycée Canadien de Dakar et les familles dans le cadre des démarches d&apos;inscription.
            </p>
          </LegalSection>

          <LegalSection title="Absence de garantie de résultat">
            <p>
              Le Lycée Canadien de Dakar ne garantit aucun résultat scolaire, aucune admission
              universitaire, aucun visa ni permis d&apos;études. Chaque dossier est étudié individuellement.
            </p>
          </LegalSection>

          <LegalSection title="Frais de scolarité">
            <p>
              Les frais varient selon le parcours et le niveau. Ils sont communiqués par écrit lors
              du premier échange. Aucune surprise en cours d&apos;année.
            </p>
          </LegalSection>

          <LegalSection title="Droit applicable">
            <p>Les présentes conditions sont soumises au droit sénégalais.</p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
