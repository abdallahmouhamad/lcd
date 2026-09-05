import SEOHead from '../components/ui/SEOHead';
import Hero from '../components/sections/Hero';
import DilemmeParent from '../components/sections/DilemmeParent';
import Intro from '../components/sections/Intro';
import Programmes from '../components/sections/Programmes';
import Differenciateurs from '../components/sections/Differenciateurs';
import Protection from '../components/sections/Protection';
import FamillesLien from '../components/sections/FamillesLien';
import ClosingCTA from '../components/sections/ClosingCTA';
import ContactBlock from '../components/sections/ContactBlock';

export default function Home() {
  return (
    <>
      <SEOHead
        title="Lycée Canadien de Dakar | Bac Canadien au Sénégal"
        description="École internationale au Point E, de la 6e à la Terminale. Curriculum canadien de l'Ontario. Rentrée octobre 2026, places limitées."
        path="/"
      />
      <Hero />
      <Intro />
      <DilemmeParent />
      <Programmes />
      <Differenciateurs />
      <Protection />
      <FamillesLien />
      <ClosingCTA />
      <ContactBlock />
    </>
  );
}
