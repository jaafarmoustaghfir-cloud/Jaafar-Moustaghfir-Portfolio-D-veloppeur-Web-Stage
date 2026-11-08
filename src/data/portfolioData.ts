import { Project, ServiceItem, PackItem, TimelineEntry, FAQItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Jaafar Moustaghfir',
  role: 'Étudiant en 2ème année DUT Génie Informatique (CDL) & Développeur Web',
  school: 'École Supérieure de Technologie d\'Agadir (ESTA) – Université Ibn Zohr',
  location: 'Agadir / Ouled Teima, Maroc',
  baccalaureate: 'Baccalauréat Sciences Physiques, mention Bien (2025) – Ouled Teima',
  internshipTarget: 'Stage de 2 mois en France (dates flexibles à convenir)',
  email: 'jaafarmoustaghfir@gmail.com',
  phone: '+212 772 908 456',
  phoneClean: '212772908456',
  avatarUrl: '/assets/aistudio/WhatsApp_Image_2026-04-13_at_19.02.13_8490ca06.jpeg',
  socials: {
    github: 'https://github.com/jaafarmoustaghfir',
    linkedin: 'https://www.linkedin.com/in/jaafar-moustaghfir-439336411',
    instagram: 'https://www.instagram.com/jaafarmoustaghfir',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'ouled-teima',
    title: 'Commune d\'Ouled Teima',
    sector: 'Service Public & Institutionnel',
    url: 'https://commune-d-ouled-teimaa.netlify.app/',
    imageUrl: '/assets/aistudio/Capture_d__cran_2026-11-08_233704_b7a1b3de.png',
    logoUrl: '/assets/projects/commune_logo.png',
    realization:
      'Conception et développement complet du portail de bureau d\'état civil dématérialisé pour la commune d\'Ouled Teima. Interface fluide permettant de formuler et suivre des demandes d\'actes administratifs en ligne.',
    userBenefit:
      'Évite aux citoyens les files d\'attente physiques et accélère l\'obtention des documents officiels (actes de naissance, fiches d\'état civil, certificats) avec un accès simple 24h/24.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web', 'Netlify'],
    metricsOrHighlight: 'Portail citoyen actif en ligne',
  },
  {
    id: 'skysouss-cars',
    title: 'Sky Souss Cars',
    sector: 'Location de Véhicules & Tourisme',
    url: 'https://skysousscars1.netlify.app/',
    imageUrl: '/assets/aistudio/Capture_d__cran_2026-11-08_233603_8fa1af02.png',
    logoUrl: '/assets/projects/skysouss_logo.png',
    realization:
      'Création du site commercial pour une agence de location de voitures à Agadir : présentation de la flotte disponible (Dacia Logan, Duster, Clio 4), mise en avant du tarif d\'appel à 250 DH/jour, livraison aéroport et tunnel de réservation instantané via WhatsApp.',
    userBenefit:
      'Conversion commerciale directe sans intermédiaire lourd : les clients sélectionnent leur modèle, visualisent les tarifs transparents et valident leur réservation en 1 clic sur WhatsApp.',
    technologies: ['HTML5', 'CSS3 / Tailwind', 'JavaScript', 'WhatsApp API Integration', 'Netlify'],
    metricsOrHighlight: 'Dès 250 DH/jour · Réservation WhatsApp directe',
  },
  {
    id: 'jaafar-tawjih',
    title: 'Jaafar Tawjih',
    sector: 'EdTech & Orientation Scolaire',
    url: 'https://jaafartawjih.netlify.app/',
    imageUrl: '/assets/aistudio/Capture_d__cran_2026-11-08_233408_245e19f6.png',
    logoUrl: '/assets/projects/jaafar_tawjih_logo.png',
    realization:
      'Plateforme web d\'orientation post-bac dédiée aux bacheliers marocains : moteur de simulation automatisé du calcul de seuils 75/25 (National/Régional), bibliothèque de QCM corrigés pour concours (ENSA, Médecine FMP) et guides méthodologiques.',
    userBenefit:
      'Permet aux élèves de calculer précisément leurs chances d\'admission en 1 seconde et de s\'entraîner efficacement avec des annales corrigées en accès libre.',
    technologies: ['HTML5', 'CSS3', 'JavaScript / Algorithmique', 'Architecture Web', 'Netlify'],
    metricsOrHighlight: 'Simulateur de seuils 75/25 + QCM interactifs',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'vitrine',
    title: 'Site Vitrine Professionnel',
    badge: 'Visibilité & Vente',
    description:
      'Présentation soignée de votre entreprise, de vos services ou de vos produits pour inspirer confiance et convertir vos visiteurs en clients qualifiés.',
    deliverables: [
      'Architecture moderne sur mesure',
      'Optimisation pour le référencement (SEO local)',
      'Formulaire de contact & liens WhatsApp directs',
      'Affichage ultra-rapide et responsive',
    ],
  },
  {
    id: 'institutions',
    title: 'Portail Institutionnel & Associatif',
    badge: 'Services & Citoyens',
    description:
      'Solutions dédiées aux communes, associations et organismes publics : dématérialisation des démarches, publication d\'annonces et informations citoyennes claires.',
    deliverables: [
      'Structure conforme aux exigences institutionnelles',
      'Formulaires de demandes et démarches en ligne',
      'Accessibilité et clarté pour tout public',
      'Mise à jour simple du contenu',
    ],
  },
  {
    id: 'edtech',
    title: 'Plateforme Éducative & Outils Métier',
    badge: 'Calculateurs & Outils',
    description:
      'Développement d\'outils web interactifs : simulateurs personnalisés, quiz/QCM, calculateurs spécifiques à votre activité pour apporter une valeur immédiate.',
    deliverables: [
      'Logique de calcul algorithmique précise',
      'Interface intuitive pensée pour les utilisateurs',
      'Résultats instantanés sans rechargement de page',
      'Compatibilité mobile optimale',
    ],
  },
  {
    id: 'mobile',
    title: 'Adaptation & Responsive Mobile',
    badge: 'Mobile-First',
    description:
      'Refonte ou adaptation ergonomique de sites existants pour garantir une navigation fluide et rapide sur smartphone et tablette.',
    deliverables: [
      'Navigation tactile adaptée aux écrans réduits',
      'Temps de chargement réduit au minimum',
      'Menus ergonomiques et boutons d\'action clairs',
      'Test multi-appareils (iOS & Android)',
    ],
  },
  {
    id: 'deploiement',
    title: 'Mise en Ligne & Déploiement Cloud',
    badge: 'Performance & Sécurité',
    description:
      'Configuration complète de votre hébergement moderne (Netlify, Vercel, serveurs Cloud), configuration de nom de domaine personnalisé et certificats HTTPS/SSL.',
    deliverables: [
      'Déploiement continu et sécurisé',
      'Configuration DNS & nom de domaine personnalisé',
      'Certificat SSL gratuit et renouvelé (HTTPS)',
      'Sauvegardes et monitoring de base',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Évolution Continue',
    badge: 'Pérennité',
    description:
      'Accompagnement après livraison pour veiller au bon fonctionnement de votre site, effectuer les mises à jour et faire évoluer vos fonctionnalités.',
    deliverables: [
      'Résolution rapide des anomalies éventuelles',
      'Mise à jour de textes, visuels et tarifs',
      'Optimisation continue de la sécurité',
      'Support réactif par WhatsApp et email',
    ],
  },
];

export const PACKS: PackItem[] = [
  {
    id: 'essentiel',
    name: 'Pack Essentiel',
    tagline: 'L\'indispensable pour une présence en ligne propre et professionnelle.',
    priceNote: '[À REMPLIR]',
    idealFor: 'Artisans, indépendants, commerces locaux débutant en ligne',
    features: [
      'Site vitrine 1 à 3 pages optimisées',
      'Design responsive adapté smartphone & PC',
      'Bouton d\'appel & réservation WhatsApp directe',
      'Formulaire de contact simple',
      'Mise en ligne sur Netlify + HTTPS sécurisé',
      'Délai de réalisation convenu ensemble',
    ],
    whatsAppMsg:
      'Bonjour Jaafar, je souhaite échanger sur le Pack Essentiel pour mon projet de site web.',
  },
  {
    id: 'pro',
    name: 'Pack Pro',
    tagline: 'La solution complète pour développer votre clientèle et vos réservations.',
    priceNote: '[À REMPLIR]',
    isFeatured: true,
    idealFor: 'PME, agences de location, cabinets, structures en croissance',
    features: [
      'Site complet multi-sections ou multi-pages',
      'Catalogue de services ou flotte avec fiches dédiées',
      'Intégration tunnel WhatsApp & formulaires avancés',
      'Optimisation SEO technique et balises sociales',
      'Nom de domaine personnalisé configuré',
      'Guide de prise en main + support post-lancement',
    ],
    whatsAppMsg:
      'Bonjour Jaafar, je suis intéressé par le Pack Pro pour développer notre activité sur le web.',
  },
  {
    id: 'sur-mesure',
    name: 'Pack Sur Mesure',
    tagline: 'Pour les projets spécifiques : portails institutionnels ou outils interactifs.',
    priceNote: '[À REMPLIR]',
    idealFor: 'Communes, associations, plateformes éducatives, calculateurs métier',
    features: [
      'Cahier des charges personnalisé et modélisation',
      'Fonctionnalités dynamiques (simulateurs, démarches en ligne, quiz)',
      'Architecture évolutive et base de données si nécessaire',
      'Accompagnement méthodologique de A à Z',
      'Tests d\'utilisabilité approfondis',
      'Maintenance et suivi sur devis détaillé',
    ],
    whatsAppMsg:
      'Bonjour Jaafar, j\'ai un projet sur mesure (institutionnel / outil métier) et je souhaiterais un devis.',
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: '2024 – 2026',
    title: 'DUT Génie Informatique (2ème année)',
    institution: 'École Supérieure de Technologie d\'Agadir (ESTA)',
    location: 'Agadir, Maroc',
    category: 'education',
    description:
      'Formation universitaire d\'excellence en Conception et Développement de Logiciels (CDL). Algorithmique poussée, architecture logicielle, programmation en C, développement web, bases de données et gestion de projets agiles.',
    highlights: [
      'Spécialité : Conception & Développement de Logiciels',
      'Projets de groupe et résolution de problèmes algorithmiques',
      'Préparation aux écoles d\'ingénieurs et stages techniques',
    ],
  },
  {
    year: '2026 – 2027',
    title: 'Responsable Pôle Média – Club Sportif ESTA Agadir',
    institution: 'Club Sportif ESTA & Clubs Universitaires',
    location: 'ESTA Agadir',
    category: 'association',
    description:
      'Engagement actif au sein de la vie étudiante de l\'ESTA. Gestion de la communication visuelle, création de contenus numériques, couverture média des tournois et événements inter-universitaires, coordination d\'équipe.',
    highlights: [
      'Gestion de projet média et communication digitale',
      'Travail en équipe multidisciplinaire et leadership',
      'Membre actif investi dans plusieurs initiatives étudiantes',
    ],
  },
  {
    year: '2025',
    title: 'Baccalauréat Sciences Physiques (Mention Bien)',
    institution: 'Lycée Qualifiant',
    location: 'Ouled Teima, Maroc',
    category: 'education',
    description:
      'Solide formation scientifique fondamentale en mathématiques, physique et sciences appliquées. Rigueur d\'analyse, esprit méthodique et goût prononcé pour les technologies numériques.',
    highlights: [
      'Mention Bien',
      'Bases rigoureuses en mathématiques et modélisation',
    ],
  },
];

export const SKILLS_DATA = {
  technical: [
    { name: 'Langage C & Algorithmique', level: 'Avancé', category: 'Système & Logique' },
    { name: 'Développement Web (HTML5 / CSS3)', level: 'Avancé', category: 'Frontend' },
    { name: 'JavaScript & Écosystème Web', level: 'Opérationnel', category: 'Frontend' },
    { name: 'Responsive Web & Tailwind CSS', level: 'Avancé', category: 'UI / Ergonomie' },
    { name: 'Git & Collaboration GitHub', level: 'Opérationnel', category: 'DevOps & Versioning' },
    { name: 'Hébergement & Déploiement Netlify', level: 'Opérationnel', category: 'Cloud & Web' },
    { name: 'Intégration API & Webhook (WhatsApp)', level: 'Opérationnel', category: 'Intégration' },
  ],
  humanSkills: [
    { title: 'Résolution de problèmes', desc: 'Approche méthodique, rigueur logique issue du cursus C et sciences fondamentales.' },
    { title: 'Travail en équipe', desc: 'Habitude des projets académiques collaboratifs et de la dynamique associative étudiante.' },
    { title: 'Curiosité & Veille', desc: 'Capacité à apprendre de nouvelles technologies et bibliothèques en autonomie rapide.' },
    { title: 'Sens du service client', desc: 'Compréhension du besoin métier concret, écoute active et souci du résultat fonctionnel.' },
  ],
  languages: [
    { lang: 'Arabe', level: 'Langue maternelle', note: 'Maîtrise bilingue / Arabe standard & dialectal' },
    { lang: 'Français', level: 'Bon niveau', note: 'Langue d\'enseignement universitaire & communication professionnelle' },
    { lang: 'Anglais', level: 'Niveau moyen', note: 'Documentation technique, compréhension écrite et apprentissage continue' },
  ],
};

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Échange & Cadrage',
    desc: 'Discussion sur vos objectifs, votre cible, vos préférences graphiques et vos besoins précis (services, nombre de pages, fonctionnalités).',
  },
  {
    step: '02',
    title: 'Devis & Proposition',
    desc: 'Remise d\'un devis clair et transparent sans surprise, avec calendrier de livraison et structure proposée pour le site.',
  },
  {
    step: '03',
    title: 'Réalisation & Retours',
    desc: 'Développement du site, intégration des textes et visuels, adaptation mobile et validation commune à chaque étape clé.',
  },
  {
    step: '04',
    title: 'Mise en Ligne & Suivi',
    desc: 'Déploiement sécurisé sur serveur cloud, configuration de votre nom de domaine et accompagnement pour la prise en main.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Quels sont les délais moyens pour concevoir et livrer un site ?',
    answer:
      'Pour un site vitrine Essentiel, comptez généralement entre 5 et 10 jours ouvrés une fois tous vos contenus fournis. Pour un projet plus complet (catalogue de location, plateforme ou portail institutionnel), le délai est généralement de 2 à 3 semaines selon la complexité.',
  },
  {
    question: 'Combien de modifications sont possibles durant le projet ?',
    answer:
      'Chaque commande inclut des étapes de validation itérative. Les retours et ajustements sur la mise en page, les couleurs et les textes sont intégrés jusqu\'à votre validation finale avant la mise en ligne officielle.',
  },
  {
    question: 'Comment fonctionnent l\'hébergement et le nom de domaine ?',
    answer:
      'Le site est déployé sur des infrastructures modernes et hautement sécurisées (comme Netlify ou Vercel) avec certificat SSL (HTTPS) inclus. Je vous guide pour le choix et la configuration de votre nom de domaine personnalisé (ex. .ma, .fr, .com).',
  },
  {
    question: 'Quelles sont les modalités de paiement ?',
    answer:
      'Les conditions sont définies en amont sur le devis : généralement un acompte au lancement des travaux puis le solde à la mise en ligne et livraison du projet. Moyens acceptés : virement bancaire ou modalités convenues ensemble.',
  },
];
