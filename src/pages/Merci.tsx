import { Helmet } from 'react-helmet-async';
import { CheckCircle2 } from 'lucide-react';

export default function Merci() {
  return (
    <>
      <Helmet>
        <title>Demande reçue | Lycée Canadien de Dakar</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-navy flex flex-col items-center justify-center px-4 py-16 text-center">
        {/* Logo centré en haut */}
        <div className="mb-10">
          <span className="font-heading font-extrabold text-white text-xl tracking-wide">
            Lycée Canadien <span className="text-gold">de Dakar</span>
          </span>
        </div>

        <CheckCircle2 size={64} className="text-gold mb-6" />

        <h1
          className="font-heading font-extrabold text-white mb-4"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
        >
          Votre demande est bien arrivée.
        </h1>

        <p className="font-body text-white/70 text-base leading-relaxed mb-3 max-w-sm">
          Notre équipe des admissions vous rappelle sous 24 heures ouvrées au numéro que vous nous
          avez indiqué.
        </p>

        <p className="font-body text-white/50 text-sm leading-relaxed mb-10 max-w-sm">
          En attendant, vous pouvez découvrir nos programmes ou nous écrire sur WhatsApp si votre
          question est urgente.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/programmes"
            className="inline-flex items-center justify-center bg-red-lcd hover:bg-red-hover text-white font-heading font-semibold text-sm px-8 py-4 rounded-md transition-colors duration-200 uppercase tracking-wide min-h-[52px]"
          >
            Découvrir nos programmes
          </a>
          <a
            href="https://wa.me/221787359256"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/40 text-white hover:border-white hover:bg-white/10 font-heading font-semibold text-sm px-8 py-4 rounded-md transition-colors duration-200 uppercase tracking-wide min-h-[52px]"
          >
            Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
