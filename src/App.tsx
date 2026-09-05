import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import Home from './pages/Home';
import Programmes from './pages/Programmes';
import Admissions from './pages/Admissions';
import OrientationUniversitaire from './pages/OrientationUniversitaire';
import ProtectionBienEtre from './pages/ProtectionBienEtre';
import APropos from './pages/APropos';
import VieScolaire from './pages/VieScolaire';
import Campus from './pages/Campus';
import Partenaires from './pages/Partenaires';
import QuestionsFréquentes from './pages/QuestionsFréquentes';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';
import Merci from './pages/Merci';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import ConditionsGenerales from './pages/ConditionsGenerales';
import SchemaOrg from './components/ui/SchemaOrg';
import CookieBanner from './components/ui/CookieBanner';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <SchemaOrg />
        <Routes>
          {/* Page merci — layout propre sans navbar/footer */}
          <Route path="/merci" element={<Merci />} />

          {/* Toutes les autres routes avec layout principal */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/programmes" element={<MainLayout><Programmes /></MainLayout>} />
          <Route path="/admissions" element={<MainLayout><Admissions /></MainLayout>} />
          <Route path="/orientation-universitaire" element={<MainLayout><OrientationUniversitaire /></MainLayout>} />
          <Route path="/protection-bien-etre" element={<MainLayout><ProtectionBienEtre /></MainLayout>} />
          <Route path="/a-propos" element={<MainLayout><APropos /></MainLayout>} />
          <Route path="/vie-scolaire" element={<MainLayout><VieScolaire /></MainLayout>} />
          <Route path="/campus" element={<MainLayout><Campus /></MainLayout>} />
          <Route path="/partenaires" element={<MainLayout><Partenaires /></MainLayout>} />
          <Route path="/questions-frequentes" element={<MainLayout><QuestionsFréquentes /></MainLayout>} />
          <Route path="/actualites" element={<MainLayout><Actualites /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/mentions-legales" element={<MainLayout><MentionsLegales /></MainLayout>} />
          <Route path="/confidentialite" element={<MainLayout><Confidentialite /></MainLayout>} />
          <Route path="/conditions-generales" element={<MainLayout><ConditionsGenerales /></MainLayout>} />
        </Routes>
      </BrowserRouter>
      <CookieBanner />
    </HelmetProvider>
  );
}
