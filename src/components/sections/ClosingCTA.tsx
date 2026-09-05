import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export default function ClosingCTA() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '221787359256';

  return (
    <section className="relative bg-offwhite py-20 md:py-28 overflow-hidden" ref={ref}>
      {/* Image de fond très légère */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1400&q=60"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-[0.06]"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <h2
            className="font-heading font-extrabold text-navy leading-tight mb-5"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)' }}
          >
            {t('closing.h2_line1')}{' '}
            <span className="text-red-lcd">{t('closing.h2_line2')}</span>
          </h2>
          <p className="font-body text-text-soft/70 leading-relaxed mb-8 max-w-lg mx-auto">
            {t('closing.text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="flex items-center justify-center bg-red-lcd hover:bg-red-hover text-white font-heading font-semibold text-sm px-8 py-4 rounded-md transition-colors duration-200 uppercase tracking-wide min-h-[52px]"
            >
              {t('closing.cta_primary')}
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Bonjour, je souhaite des informations sur le Lycée Canadien de Dakar.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-body font-semibold text-sm px-8 py-4 rounded-md transition-colors duration-200 min-h-[52px]"
            >
              <MessageCircle size={18} />
              {t('closing.cta_whatsapp')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
