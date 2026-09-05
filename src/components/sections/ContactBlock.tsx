import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  eleve_nom: string;
  niveau: string;
  demande: string;
  message: string;
  consentement: boolean;
}

interface FormErrors {
  nom?: string;
  email?: string;
  telephone?: string;
  niveau?: string;
  demande?: string;
  consentement?: string;
}

export default function ContactBlock() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormData>({
    nom: '', email: '', telephone: '', eleve_nom: '',
    niveau: '', demande: '', message: '', consentement: false,
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.nom.trim()) newErrors.nom = 'Votre nom est requis';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Adresse e-mail invalide';
    if (!form.telephone.trim()) newErrors.telephone = 'Votre numéro est requis';
    if (!form.niveau) newErrors.niveau = 'Sélectionnez un niveau';
    if (!form.demande) newErrors.demande = 'Sélectionnez votre demande';
    if (!form.consentement)
      newErrors.consentement = 'Vous devez accepter le traitement de vos données';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');

    try {
      const endpoint =
        import.meta.env.VITE_FORM_ADMISSIONS ||
        'https://formsubmit.co/ajax/abou050793@gmail.com';

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Nouvelle demande LCD — ${form.demande} (${form.niveau})`,
          _captcha: 'false',
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          eleve_nom: form.eleve_nom || 'Non renseigné',
          niveau: form.niveau,
          demande: form.demande,
          message: form.message || 'Aucun message',
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === 'true' || data.success === true || res.status === 200)) {
        setStatus('success');
        setTimeout(() => navigate('/merci'), 2000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field?: string) =>
    `w-full bg-white/10 border ${
      field ? 'border-red-300' : 'border-white/20'
    } text-white placeholder-white/40 rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-200 min-h-[48px]`;

  const selectClass = (field?: string) =>
    `w-full appearance-none border ${
      field ? 'border-red-300' : 'border-white/20'
    } text-white rounded-md px-4 py-3 pr-10 text-sm font-body focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-200 min-h-[48px] cursor-pointer`;

  const labelClass = 'block font-body text-white/80 text-xs font-medium mb-1.5 uppercase tracking-wide';
  const errorClass = 'text-red-300 text-xs mt-1 font-body';

  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-12">
            <SectionLabel text="Contact" light />
            <h2
              className="font-heading font-extrabold text-white"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}
            >
              {t('contact_block.h2')}
            </h2>
            <p className="font-body text-white/60 mt-3 leading-relaxed">
              {t('contact_block.intro')}
            </p>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-12 gap-4">
              <CheckCircle2 size={48} className="text-gold" />
              <h3 className="font-heading font-bold text-white text-xl">
                {t('contact_block.success_title')}
              </h3>
              <p className="font-body text-white/70">
                {t('contact_block.success_text')}
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">

              {/* Nom */}
              <div>
                <label className={labelClass}>{t('contact_block.nom_label')}</label>
                <input
                  type="text" name="nom" value={form.nom} onChange={handleChange}
                  placeholder={t('contact_block.nom_placeholder')}
                  className={inputClass(errors.nom)}
                />
                {errors.nom && <p className={errorClass}>{errors.nom}</p>}
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>{t('contact_block.email_label')}</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder={t('contact_block.email_placeholder')}
                  className={inputClass(errors.email)}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>

              {/* Téléphone */}
              <div>
                <label className={labelClass}>{t('contact_block.telephone_label')}</label>
                <input
                  type="tel" name="telephone" value={form.telephone} onChange={handleChange}
                  placeholder={t('contact_block.telephone_placeholder')}
                  className={inputClass(errors.telephone)}
                />
                {errors.telephone && <p className={errorClass}>{errors.telephone}</p>}
              </div>

              {/* Prénom élève */}
              <div>
                <label className={labelClass}>{t('contact_block.eleve_nom_label')}</label>
                <input
                  type="text" name="eleve_nom" value={form.eleve_nom} onChange={handleChange}
                  placeholder={t('contact_block.eleve_nom_placeholder')}
                  className={inputClass()}
                />
              </div>

              {/* Niveau */}
              <div>
                <label className={labelClass}>{t('contact_block.niveau_label')}</label>
                <div className="relative">
                  <select
                    name="niveau" value={form.niveau} onChange={handleChange}
                    className={selectClass(errors.niveau)}
                    style={{ backgroundColor: '#102048' }}
                  >
                    <option value="" style={{ backgroundColor: '#102048', color: 'rgba(255,255,255,0.45)' }}>{t('contact_block.niveau_placeholder')}</option>
                    {(t('contact_block.niveaux', { returnObjects: true }) as string[]).map((n) => (
                      <option key={n} value={n} style={{ backgroundColor: '#102048', color: 'white' }}>{n}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                </div>
                {errors.niveau && <p className={errorClass}>{errors.niveau}</p>}
              </div>

              {/* Demande */}
              <div>
                <label className={labelClass}>{t('contact_block.demande_label')}</label>
                <div className="relative">
                  <select
                    name="demande" value={form.demande} onChange={handleChange}
                    className={selectClass(errors.demande)}
                    style={{ backgroundColor: '#102048' }}
                  >
                    <option value="" style={{ backgroundColor: '#102048', color: 'rgba(255,255,255,0.45)' }}>{t('contact_block.demande_placeholder')}</option>
                    {(t('contact_block.demandes', { returnObjects: true }) as string[]).map((d) => (
                      <option key={d} value={d} style={{ backgroundColor: '#102048', color: 'white' }}>{d}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                </div>
                {errors.demande && <p className={errorClass}>{errors.demande}</p>}
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className={labelClass}>{t('contact_block.message_label')}</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder={t('contact_block.message_placeholder')}
                  rows={4}
                  className={inputClass() + ' resize-none'}
                />
              </div>

              {/* Consentement */}
              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox" name="consentement"
                    checked={form.consentement} onChange={handleChange}
                    className="mt-0.5 w-4 h-4 rounded border-white/30 bg-white/10 text-gold focus:ring-gold shrink-0"
                  />
                  <span className="font-body text-white/60 text-xs leading-relaxed">
                    {t('contact_block.consentement')}
                  </span>
                </label>
                {errors.consentement && (
                  <p className={errorClass}>{errors.consentement}</p>
                )}
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                {status === 'error' && (
                  <div className="flex items-center gap-2 mb-4 text-red-300">
                    <AlertCircle size={16} />
                    <span className="text-sm font-body">{t('contact_block.error_text')}</span>
                  </div>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className="w-full bg-red-lcd hover:bg-red-hover disabled:opacity-60 text-white font-heading font-semibold text-sm py-4 rounded-md transition-colors duration-200 uppercase tracking-wide min-h-[52px]"
                >
                  {status === 'sending'
                    ? t('contact_block.sending')
                    : t('contact_block.submit')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
