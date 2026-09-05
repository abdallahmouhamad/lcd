import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

function handleResetCookies() {
  localStorage.removeItem('lcd_cookies');
  window.location.reload();
}

const footerLinks = {
  ecole: [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Notre campus', href: '/campus' },
    { label: 'Vie scolaire', href: '/vie-scolaire' },
    { label: 'Protection et bien-être', href: '/protection-bien-etre' },
    { label: 'Nos partenaires', href: '/partenaires' },
  ],
  programmes: [
    { label: 'Programme Canadien', href: '/programmes#canadien' },
    { label: 'Programme Hybride', href: '/programmes#hybride' },
    { label: 'Prépa-Universitaire', href: '/programmes#prepa' },
    { label: 'Orientation universitaire', href: '/orientation-universitaire' },
    { label: 'Admissions', href: '/admissions' },
  ],
  infos: [
    { label: 'Questions fréquentes', href: '/questions-frequentes' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
    { label: 'Conditions générales', href: '/conditions-generales' },
  ],
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Grille principale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Colonne 1 — Logo + contact */}
          <div>
            <div className="flex items-center gap-1.5 font-heading font-bold text-xl mb-5">
              <span>L</span>
              <span className="text-red-lcd">C</span>
              <span>D</span>
            </div>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-5">
              Lycée Canadien de Dakar<br />
              Une initiative du Groupe BEM Africa
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+221787359256"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors duration-200"
              >
                <Phone size={14} className="text-gold shrink-0" />
                +221 78 735 92 56
              </a>
              <a
                href="tel:+14165593769"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors duration-200"
              >
                <Phone size={14} className="text-gold shrink-0" />
                +1 (416) 559-3769
              </a>
              <a
                href="mailto:contact@lcd.sn"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors duration-200"
              >
                <Mail size={14} className="text-gold shrink-0" />
                contact@lcd.sn
              </a>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin size={14} className="text-gold shrink-0" />
                Point E, Dakar — Sénégal
              </div>
              <a
                href="https://lcd.sn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors duration-200"
              >
                <Globe size={14} className="text-gold shrink-0" />
                www.lcd.sn
              </a>
            </div>
          </div>

          {/* Colonne 2 — L'école */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-gold mb-5">
              {t('footer.col1_titre')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.ecole.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white text-sm font-body transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Programmes */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-gold mb-5">
              {t('footer.col2_titre')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.programmes.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white text-sm font-body transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Informations */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-gold mb-5">
              {t('footer.col3_titre')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.infos.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white text-sm font-body transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleResetCookies}
                  className="text-white/70 hover:text-white text-sm font-body transition-colors duration-200 text-left"
                >
                  Préférences cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur + mention légale */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/40 text-xs font-body leading-relaxed text-center max-w-3xl mx-auto">
            {t('footer.mention_legale')}
          </p>
        </div>
      </div>
    </footer>
  );
}
