import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'lcd_cookies';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage indisponible (mode privé, iframe, etc.)
    }
  }, []);

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, 'accepted'); } catch {}
    setVisible(false);
  }

  function refuse() {
    try { localStorage.setItem(STORAGE_KEY, 'refused'); } catch {}
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border-light shadow-card-hover"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="font-body text-navy/70 text-sm leading-relaxed flex-1">
              Ce site utilise des cookies techniques nécessaires à son fonctionnement. Aucun traceur
              publicitaire n&apos;est déposé sans votre consentement.{' '}
              <a href="/confidentialite" className="text-red-lcd underline hover:no-underline">
                En savoir plus
              </a>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={refuse}
                className="font-heading font-semibold text-xs border border-navy text-navy px-4 py-2 rounded-md hover:bg-navy hover:text-white transition-colors duration-200 min-h-[36px]"
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="font-heading font-semibold text-xs bg-red-lcd hover:bg-red-hover text-white px-4 py-2 rounded-md transition-colors duration-200 min-h-[36px]"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
