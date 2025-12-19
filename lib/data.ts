export const projectsData = [
  {
    title: "Portfolio Website",
    description: {
      en: "Personal site built with Next.js to showcase my profile, projects, and background. Fully responsive design with SEO and performance optimizations. Includes a working contact form with automatic notifications via the API.",
      fr: "Site personnel construit avec Next.js pour présenter mon profil, mes projets et mon parcours. Design entièrement responsive avec optimisations SEO et performances. Comprend un formulaire de contact fonctionnel avec notifications automatiques via l'API."
    },
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Resend", "Vercel"],
    links: {
      github: "https://github.com/seanrw93/Personal-Portfolio-Page",
      live: "https://srw-dev.vercel.app/",
    },
    imageUrl: "/images/projects/portfolio.png",
  },
  {
    title: "HRnet",
    description: {
      en: "Rebuilt the internal HRnet app by switching from jQuery to React + Vite for better performance and easier maintenance. Converted a key jQuery plugin into a clean, modular React component with modern state handling. Used Redux Toolkit for global state and ran Lighthouse tests to compare performance before and after.",
      fr: "Reconstruit l'application interne HRnet en passant de jQuery à React pour de meilleures performances et une maintenance facilitée. Converti un plugin jQuery clé en un composant React propre et modulaire avec une gestion d'état moderne. Utilisé Redux Toolkit pour l'état global et effectué des tests Lighthouse pour comparer les performances avant et après."
    },
    tags: ["React", "Redux Toolkit", "React Bootstrap", "Vite", "Jest/Vitest", "React Testing Library", "Lighthouse"],
    links: {
      github: "",
      live: "https://hrnet-srw.vercel.app/",
    },
    imageUrl: "/images/projects/hrnet.png",
  },
  {
    title: "React i18n Datepicker plugin",
    description: {
      en: "Developed a controlled datepicker component for React that supports internationalization (i18n) out of the box.",
      fr: "Développé un composant de sélection de date controllé pour React qui prend en charge l'internationalisation (i18n) dès le départ."
    },
    tags: ["React", "i18n", "Atomic Design"],
    links: {
      github: "https://github.com/seanrw93/react-i18n-datepicker",
      live: "https://www.npmjs.com/package/react-i18n-datepicker",
    },
    imageUrl: "/images/projects/npm.png",
  },
  {
    title: "Argent Bank",
    description: {
      en: "A banking web app with React + Vite and Redux Toolkit where users can log in, manage their profile, and view personal data. Set up the backend API for secure data exchange using HTTP and JWT. Designed a responsive UI based on provided mockups, with careful attention to state management and access control. Also helped define specs for a future transactions API.",
      fr: "Construit une application bancaire web avec React + Vite et Redux Toolkit où les utilisateurs peuvent se connecter, gérer leur profil et consulter leurs données personnelles. Mis en place l'API backend pour un échange de données sécurisé utilisant HTTP et JWT. Conçu une interface utilisateur responsive basée sur des maquettes fournies, avec une attention particulière à la gestion de l'état et au contrôle d'accès. A également aidé à définir les spécifications pour une future API de transactions."
    },
    tags: ["React", "Vite", "React Router", "Redux Toolkit", "Sass", "Axios", "REST API", "Node.js", "Express", "MongoDB", "JWT"],
    links: {
      github: "https://github.com/seanrw93/remede-agence-OC-frontend",
      live: "https://argentbank-phi.vercel.app",
    },
    imageUrl: "/images/projects/argentbank.png",
  },
  {
    title: "SportSee",
    description: {
      en: "Built a fitness tracking app with React and D3 to display personalized stats like sessions, calories, and performance. Connected to a backend API I deployed, using a custom Axios service and native fetch for real-time data. Documented service functions with JSDoc for clear typing and maintainability. Followed Figma mockups closely and focused on a clean desktop experience, standardized data, and smooth user interactions.",
      fr: "Construit une application de suivi de fitness avec React et D3 pour afficher des statistiques personnalisées telles que les sessions, les calories et les performances. Connecté à une API backend que j'ai déployée, en utilisant un service Axios personnalisé et fetch natif pour des données en temps réel. Documenté les fonctions du service avec JSDoc pour une typage clair et une maintenabilité accrue. Suivi de près les maquettes Figma en mettant l'accent sur une expérience de bureau propre, des données standardisées et des interactions utilisateur fluides."
    },
    tags: ["React", "D3", "Fetch", "REST API", "JSDoc", "Figma"],
    links: {
      github: "",
      live: ""
    },
    imageUrl: "/images/projects/sportsee.png",
  },
  {
    title: "Billed SaaS App",
    description: {
      en: "Debugged and improved a SaaS expense management application. Fixed critical bugs in the employee dashboard, bill submission forms, and file upload functionality. Implemented comprehensive unit and integration tests using Jest to achieve high code coverage. Enhanced the login flow and improved error handling throughout the application.",
      fr: "Débogué et amélioré une application SaaS de gestion des notes de frais. Corrigé des bugs critiques dans le tableau de bord employé, les formulaires de soumission de factures et la fonctionnalité de téléchargement de fichiers. Implémenté des tests unitaires et d'intégration complets avec Jest pour atteindre une couverture de code élevée. Amélioré le flux de connexion et la gestion d'erreur dans toute l'application."
    },
    tags: ["JavaScript", "Jest", "Debugging", "Unit Testing", "Integration Testing"],
    links: {
      github: "https://github.com/seanrw93/Billed-app-EN",
      live: ""
    },
    imageUrl: "/images/projects/billed.png",
  },
  {
    title: "FishEye",
    description: {
      en: "An accessible prototype site for a platform showcasing independent photographers. Developed the homepage and individual photographer pages using HTML, CSS, and vanilla JavaScript, based on provided mockups. Data was loaded dynamically from a JSON file, with display logic structured around the Factory Method pattern. Accessibility was a core focus, with full keyboard navigation and screen reader support.",
      fr: "Un prototype de site accessible pour une plateforme mettant en avant des photographes indépendants. Développé la page d'accueil et les pages individuelles des photographes en utilisant HTML, CSS et JavaScript natif, basées sur des maquettes fournies. Les données ont été chargées dynamiquement à partir d'un fichier JSON, avec une logique d'affichage structurée autour du pattern Factory Method. L'accessibilité était un point central, avec une navigation complète au clavier et un support pour les lecteurs d'écran."
    },
    tags: ["HTML/CSS", "JavaScript", "Accessibility (RGAA/WCAG)", "Figma"],
    links: {
      github: "https://github.com/seanrw93/Front-End-Fisheye-EN",
      live: "https://seanrw93.github.io/Front-End-Fisheye-EN/index.html"
    },
    imageUrl: "/images/projects/fisheye.png",
  },
  {
    title: "Oh My Food!",
    description: {
      en: "Static recipe discovery website built with pure HTML and Sass. Features advanced CSS transitions and animations for a user-friendly experience. Implemented responsive design with modern CSS techniques and carefully crafted micro-interactions for enhanced usability.",
      fr: "Site statique de découverte de recettes construit avec HTML pur et Sass. Présente des transitions CSS avancées et des animations pour une expérience utilisateur conviviale. Mise en œuvre d'un design responsive avec des techniques CSS modernes et des micro-interactions soigneusement élaborées pour une utilisabilité améliorée."
    },
    tags: ["HTML", "Sass", "CSS Animations", "Responsive Design"],
    links: {
      github: "https://github.com/seanrw93/OhMyFood-OC",
      live: "https://seanrw93.github.io/OhMyFood-OC/"
    },
    imageUrl: "/images/projects/ohmyfood.png",
  },
  {
    title: "Canvas Square Swarm",
    description: {
      en: "Interactive canvas animation featuring a swarm of colorful squares that respond to user interactions. Built with pure HTML, CSS, and JavaScript using the Canvas API. Demonstrates particle physics, collision detection, and smooth animations with optimized performance for real-time rendering.",
      fr: "Animation interactive sur canvas mettant en vedette un essaim de carrés colorés qui répondent aux interactions utilisateur. Construit avec HTML pur, CSS et JavaScript en utilisant l'API Canvas. Démontre la physique des particules, la détection de collision et des animations fluides avec des performances optimisées pour le rendu en temps réel."
    },
    tags: ["HTML", "CSS", "JavaScript", "Canvas API", "Animation"],
    links: {
      github: "https://github.com/seanrw93/Canvas-Square-Swarm",
      live: "https://seanrw93.github.io/Canvas-Square-Swarm/"
    },
    imageUrl: "/images/projects/canvas.png",
  },
] as const;

export const skillsData = [
  "HTML5", "CSS3", "Sass", "Bootstrap", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vite", "Redux", "Angular", "Node.js", "Express", "MongoDB", "REST APIs", "Jest", "Vitest", "React Testing Library", "Git", "GitHub", "Figma", "Framer Motion", "Responsive Design", "Accessibility (WCAG/RGAA)"
] as const;
