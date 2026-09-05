import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { key: 'programmes', href: '/programmes' },
  {
    key: 'ecole',
    href: '#',
    children: [
      { key: 'apropos', href: '/a-propos' },
      { key: 'campus', href: '/campus' },
      { key: 'viescolaire', href: '/vie-scolaire' },
      { key: 'protection', href: '/protection-bien-etre' },
    ],
  },
  { key: 'orientation', href: '/orientation-universitaire' },
  { key: 'admissions', href: '/admissions' },
  {
    key: 'connaitre',
    href: '#',
    children: [
      { key: 'partenaires', href: '/partenaires' },
      { key: 'actualites', href: '/actualites' },
      { key: 'faq', href: '/questions-frequentes' },
    ],
  },
];

const CONTACT_PAGES = ['/admissions', '/contact'];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isContactPage = CONTACT_PAGES.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const switchLang = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  const navBg = scrolled
    ? 'bg-white shadow-sm border-b border-border-light'
    : 'bg-white/95 backdrop-blur-sm';

  const textColor = 'text-navy';
  const logoColor = 'text-navy';

  // CTA contextuel : sur /admissions et /contact → appeler
  const ctaLabel = isContactPage ? 'Nous appeler' : t('nav.cta');
  const ctaHref = isContactPage ? 'tel:+221787359256' : '/admissions';
  const ctaIsLink = !isContactPage;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${
          scrolled ? 'h-16' : 'h-[72px]'
        } flex items-center`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div
                className={`flex items-center gap-2 font-heading font-bold text-xl ${logoColor}`}
              >
                <span className="flex items-center">
                  <span>L</span>
                  <span className="text-red-lcd">C</span>
                  <span>D</span>
                </span>
                {/* Nom complet uniquement à partir de sm: */}
                <span className="hidden sm:block text-sm font-semibold text-navy/70">
                  Lycée Canadien de Dakar
                </span>
              </div>
            </Link>

            {/* NAV DESKTOP */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.key}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-body font-medium rounded-md transition-colors duration-200 ${textColor} hover:text-red-lcd`}
                    >
                      {t(`nav.${link.key}`)}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === link.key ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.key && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-card border border-border-light py-2 z-50"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.key}
                              to={child.href}
                              className="block px-4 py-2.5 text-sm text-navy/80 hover:text-red-lcd hover:bg-offwhite transition-colors duration-150"
                            >
                              {t(`nav.sous_menu.${child.key}`)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.key}
                    to={link.href}
                    className={`px-3 py-2 text-sm font-body font-medium rounded-md transition-colors duration-200 ${textColor} hover:text-red-lcd`}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                )
              )}
            </nav>

            {/* ACTIONS DESKTOP */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={switchLang}
                className={`flex items-center gap-1.5 text-sm font-body px-2 py-1 rounded transition-colors duration-200 ${textColor} hover:text-red-lcd`}
                aria-label="Changer de langue"
              >
                <span className="text-base">
                  {i18n.language === 'fr' ? '🇫🇷' : '🇨🇦'}
                </span>
                <span className="text-xs font-semibold uppercase">
                  {i18n.language === 'fr' ? 'FR' : 'EN'}
                </span>
              </button>

              {ctaIsLink ? (
                <Link
                  to={ctaHref}
                  className="bg-red-lcd hover:bg-red-hover text-white text-sm font-heading font-semibold px-5 py-2.5 rounded-md transition-colors duration-200 min-h-[44px] flex items-center uppercase tracking-wide"
                >
                  {ctaLabel}
                </Link>
              ) : (
                <a
                  href={ctaHref}
                  className="bg-red-lcd hover:bg-red-hover text-white text-sm font-heading font-semibold px-5 py-2.5 rounded-md transition-colors duration-200 min-h-[44px] flex items-center uppercase tracking-wide"
                >
                  {ctaLabel}
                </a>
              )}
            </div>

            {/* BURGER MOBILE */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={switchLang}
                className={`text-base ${textColor}`}
                aria-label="Changer de langue"
              >
                {i18n.language === 'fr' ? '🇫🇷' : '🇨🇦'}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-1.5 ${textColor}`}
                aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-border-light shadow-card lg:hidden overflow-y-auto max-h-[85vh]"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <div key={link.key}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.key ? null : link.key)
                        }
                        className="w-full flex items-center justify-between px-3 py-3 text-navy font-body font-medium text-sm rounded-md hover:bg-offwhite"
                      >
                        {t(`nav.${link.key}`)}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            openDropdown === link.key ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.key && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 flex flex-col gap-0.5 overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.key}
                                to={child.href}
                                className="block px-3 py-2.5 text-sm text-navy/70 hover:text-red-lcd rounded-md hover:bg-offwhite"
                              >
                                {t(`nav.sous_menu.${child.key}`)}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="block px-3 py-3 text-navy font-body font-medium text-sm rounded-md hover:bg-offwhite hover:text-red-lcd"
                    >
                      {t(`nav.${link.key}`)}
                    </Link>
                  )}
                </div>
              ))}
              {ctaIsLink ? (
                <Link
                  to={ctaHref}
                  className="mt-3 bg-red-lcd text-white text-center font-heading font-semibold px-5 py-3 rounded-md text-sm uppercase tracking-wide"
                >
                  {ctaLabel}
                </Link>
              ) : (
                <a
                  href={ctaHref}
                  className="mt-3 bg-red-lcd text-white text-center font-heading font-semibold px-5 py-3 rounded-md text-sm uppercase tracking-wide"
                >
                  {ctaLabel}
                </a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
