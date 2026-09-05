# Lycée Canadien de Dakar — Site web vitrine

Site web vitrine officiel du Lycée Canadien de Dakar (lcd.sn).
Une initiative du Groupe BEM Africa.

## Stack technique

- Vite + React + TypeScript
- Tailwind CSS v3
- Framer Motion
- react-i18next (FR/EN)
- react-helmet-async
- react-router-dom
- Formspree (formulaires sans backend)

## Installation

```bash
npm install
cp .env.example .env
# Renseigner les variables dans .env
npm run dev
```

## Variables d'environnement

Voir `.env.example` pour la liste complète.

| Variable | Usage |
|---|---|
| `VITE_FORMSPREE_ADMISSIONS` | Endpoint Formspree admissions |
| `VITE_FORMSPREE_PARTENAIRES` | Endpoint Formspree partenaires |
| `VITE_WHATSAPP_NUMBER` | Numéro WhatsApp sans + |
| `VITE_SITE_URL` | URL de production |

## Build et déploiement

```bash
npm run build
# Les fichiers de production sont dans /dist
# Copier /dist sur le serveur
# Utiliser nginx.conf fourni à la racine
```

## Éléments à fournir avant mise en ligne

Voir section 14 du brief client (LCD_Brief_Site_Web_V1.pdf).

**Points bloquants :**
- Logo LCD vectoriel SVG (remplacer les placeholders)
- Photos officielles du campus (remplacer les URLs Unsplash)
- Portraits gouvernance Dr DIOP et Mme CHATUÉ TCHATAT
- Textes pages légales validés par un juriste
- Configuration des endpoints Formspree dans `.env`
- Confirmation écrite de la Direction sur la page Protection
  (condition de publication section 7.5 du brief client)

## Architecture

```
src/
  pages/          15 pages — une par route
  components/
    layout/       Navbar, Footer
    sections/     Sections de la Home
    ui/           Composants réutilisables
  i18n/           Traductions FR/EN
```

## Pages

| URL | Page |
|---|---|
| `/` | Accueil |
| `/programmes` | Nos programmes |
| `/admissions` | Admissions |
| `/orientation-universitaire` | Orientation universitaire |
| `/a-propos` | Qui sommes-nous |
| `/protection-bien-etre` | Protection et bien-être |
| `/vie-scolaire` | Vie scolaire |
| `/campus` | Notre campus |
| `/partenaires` | Nos partenaires |
| `/questions-frequentes` | FAQ |
| `/actualites` | Actualités |
| `/contact` | Contact |
| `/merci` | Page de confirmation (noindex) |
| `/mentions-legales` | Mentions légales |
| `/confidentialite` | Politique de confidentialité |
| `/conditions-generales` | Conditions générales |
# lcd
