# CV Hafid AZZOUZ - Développeur Web

CV responsive et optimisé pour l'impression, développé en HTML/CSS/JS vanilla.

## 📋 Description

CV de Hafid AZZOUZ - Développeur Web en recherche d'alternance CDA (Concepteur Développeur d'Applications).  
Compétences principales : Laravel, React, PHP, JavaScript.

**Disponibilité :** fin mars 2026  
**Format :** 1 semaine CCI Formation / 3 semaines en entreprise

---

## 🚀 Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Design responsive (mobile-first)
- **JavaScript Vanilla** - Animations et interactions
- **Google Fonts** - Typographie (Baskervville)
- **Font Awesome** - Icônes

---

## 📂 Structure du projet

```
CV_HafidAZZOUZ-WebDesign/
│
├── index.html              # Page principale
├── build.sh                # Script de build pour production
│
├── style/
│   ├── _variables.css      # Variables globales (couleurs, fonts, breakpoints)
│   ├── _normalize.css      # Normalisation navigateurs
│   ├── _reset.css          # Reset CSS custom
│   ├── _baseDesign.css     # Typographie et styles de base
│   ├── _bloc.css           # Layout et structure
│   ├── _utilities.css      # Classes utilitaires
│   ├── _responsive.css     # Media queries (320px → 1920px)
│   ├── _advancedDesign.css # Animations et effets
│   ├── _print.css          # Styles d'impression A4
│   └── main.min.css        # CSS concaténé (production)
│
├── script/
│   └── mains.js            # Animations timeline et interactions
│
└── img/
    └── Hafid AZZOUZ CCI-V FDWWM.jpg/webp
```

---

## 🛠️ Installation & Utilisation

### Mode développement

Ouvrir directement `index.html` dans un navigateur.  
Les fichiers CSS sont chargés individuellement pour faciliter le debug.

### Mode production

1. Exécuter le script de build :
```bash
bash build.sh
```

2. Dans `index.html`, commenter les CSS individuels (lignes 29-36) et décommenter :
```html
<link rel="stylesheet" href="style/main.min.css" />
```

3. Le fichier `main.min.css` contient tous les styles concaténés (sauf `_print.css` qui reste séparé).

---

## 📱 Responsive Design

Le CV est optimisé pour tous les écrans (approche mobile-first) :

- **Mobile** : 320px - 767px
- **Tablet** : 768px - 1023px
- **Desktop** : 1024px - 1439px
- **Large Desktop** : 1440px - 1919px
- **Ultra-large** : 1920px+

### Timeline interactive (desktop uniquement)

Au survol de la timeline verticale (≥1024px), les années s'affichent avec un effet "voyage dans le temps" :
- Opacité et échelle dynamiques selon la distance de la souris
- Animation fluide via `requestAnimationFrame`

---

## 🖨️ Impression

Le CV est optimisé pour l'impression A4 (2 pages équilibrées) :

- Format compact et professionnel
- Couleurs préservées (`print-color-adjust: exact`)
- Timeline masquée
- Typographie ajustée (8px - 16px)

**Pour imprimer :** `Ctrl+P` (ou `Cmd+P` sur Mac)

---

## ✨ Fonctionnalités

### Animations
- Révélation progressive des sections au scroll (Intersection Observer)
- Animation des listes (apparition séquentielle)
- Symboles dynamiques au survol des items de liste
- Timeline interactive avec effet de proximité

### Accessibilité
- Structure HTML sémantique
- Attributs ARIA
- Contraste de couleurs optimisé
- Navigation au clavier

### Performance
- Fichiers CSS séparés en dev, concaténés en prod
- `_print.css` chargé uniquement pour l'impression
- Images optimisées (WebP + fallback JPG)
- Animations GPU-accelerated

---

## 🎨 Palette de couleurs

```css
--color-white: #F5F7F0       /* Fond principal */
--color-dark: #192201        /* Texte principal */
--color-orange: orange       /* Accents (nom, titres) */
--color-blue: #00A0DC        /* Liens, contact */
--color-green: #A4C639       /* Design, timeline */
--color-gray-light: #9CA396  /* Texte secondaire */
```

---

## 📧 Contact

- **Email :** ha3z@outlook.fr
- **LinkedIn :** [linkedin.com/in/hafid-azzouz](https://www.linkedin.com/in/hafid-azzouz)
- **Portfolio :** [ha3z.myportfolio.com](https://ha3z.myportfolio.com)
- **Téléphone :** 06 46 26 13 20

---

## 📝 Licence

Ce projet est un CV personnel. Tous droits réservés © 2026 Hafid AZZOUZ.

---

## 🔧 Améliorations futures

- [ ] Ajouter un mode clair (light mode) pour le confort de lecture
- [ ] Intégration i18n (français/anglais)
- [ ] Version PDF téléchargeable automatiquement
- [ ] Animations GSAP pour la timeline