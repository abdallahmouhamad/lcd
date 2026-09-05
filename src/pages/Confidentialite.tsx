// TODO: faire valider ce texte par un juriste avant
// mise en ligne (section 13 du brief client)
// Requis pour activer Google Ads et Meta Ads
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

export default function Confidentialite() {
  return (
    <>
      <SEOHead
        title="Politique de confidentialité | Lycée Canadien de Dakar"
        description="Comment nous traitons vos données personnelles."
        path="/confidentialite"
      />
      <section className="bg-offwhite pt-32 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel text="Légal" />
          <h1
            className="font-heading font-extrabold text-navy"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Politique de confidentialité
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalSection title="Données collectées">
            <p>
              Nous collectons les données que vous nous transmettez via les formulaires de contact :
              nom, email, téléphone, niveau scolaire et contenu de votre message.
            </p>
          </LegalSection>

          <LegalSection title="Finalité du traitement">
            <p>
              Ces données sont utilisées exclusivement pour traiter votre demande d&apos;information
              ou d&apos;inscription.
            </p>
          </LegalSection>

          <LegalSection title="Base légale">
            <p>
              Le traitement repose sur votre consentement explicite, recueilli via la case à cocher
              du formulaire.
            </p>
          </LegalSection>

          <LegalSection title="Durée de conservation">
            <p>
              Les données des demandes non converties en inscription sont conservées 12 mois.
              Les dossiers d&apos;élèves inscrits sont conservés conformément à la réglementation
              sénégalaise.
            </p>
          </LegalSection>

          <LegalSection title="Vos droits">
            <p>
              Conformément à la loi sénégalaise 2008-12 sur la protection des données personnelles,
              vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
              Pour exercer ces droits : contact@lcd.sn
            </p>
          </LegalSection>

          <LegalSection title="Cookies">
            <p>
              Ce site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie
              publicitaire n&apos;est déposé sans votre consentement.
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
