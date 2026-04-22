# Khelcom Forage – Site Vitrine

Site vitrine officiel de **Khelcom Forage**, entreprise de forage d'eau et de sondage géotechnique basée à Dakar, Sénégal.

## 🚀 Démarrage rapide

### Prérequis
- [Node.js](https://nodejs.org/) ≥ 18
- npm ≥ 9

### Lancer le projet en développement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

---

## 📦 Structure du projet

```
khelcom-forage/
├── public/
│   ├── hero.png          # Image hero de la page d'accueil
│   └── services.png      # Image de la page services
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Barre de navigation responsive
│   │   ├── Footer.jsx        # Pied de page
│   │   ├── WhatsAppButton.jsx # Bouton WhatsApp flottant
│   │   └── ContactForm.jsx   # Formulaire de contact (démo)
│   ├── pages/
│   │   ├── Home.jsx          # Page d'accueil
│   │   ├── AboutServices.jsx # Page À propos & Services
│   │   └── Contact.jsx       # Page Contact
│   ├── App.jsx               # Composant racine + routage par état
│   ├── App.css               # Styles de layout
│   ├── index.css             # Styles globaux + tokens de design
│   └── main.jsx              # Point d'entrée React
├── index.html                # HTML racine avec SEO
├── tailwind.config.js        # Configuration Tailwind CSS
├── postcss.config.js         # Configuration PostCSS
└── vite.config.js            # Configuration Vite
```

---

## 🌍 Déploiement

### Option 1 – Netlify (recommandé)

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Construisez le projet :
   ```bash
   npm run build
   ```
3. Glissez le dossier `dist/` sur l'interface de Netlify **ou** connectez votre dépôt GitHub pour un déploiement continu.

### Option 2 – GitHub Pages

1. Installez le paquet de déploiement :
   ```bash
   npm install -D gh-pages
   ```
2. Ajoutez dans `package.json` :
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Lancez :
   ```bash
   npm run deploy
   ```

> **Note :** Pour GitHub Pages, pensez à configurer `base` dans `vite.config.js` avec le nom de votre dépôt.

---

## ✏️ Personnalisation

| Élément | Fichier |
|---|---|
| Coordonnées de contact | `src/pages/Contact.jsx`, `src/components/Footer.jsx` |
| Couleurs & typographie | `src/index.css` (variables CSS) |
| Services proposés | `src/pages/AboutServices.jsx` |
| Numéro WhatsApp | `src/components/WhatsAppButton.jsx` |
| Images | `public/hero.png`, `public/services.png` |

---

## 📋 Coordonnées

- **Email :** societedeforageetdesondage@gmail.com
- **Tél. 1 :** 77 246 54 00
- **Tél. 2 :** 76 781 62 62
- **Adresse :** FIFA VDN Lot N 9, Sipres 2, Dakar 11500

---

© Khelcom Forage – 2026
