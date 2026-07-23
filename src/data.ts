import { Project, Education, SkillCategory, CreativeProject, PromptSection } from './types';

export const PERSONAL_INFO = {
  name: "FAROUQI MANAL",
  title: "Développeuse en Intelligence Artificielle & Science des Données",
  location: "Agadir, Maroc",
  email: "farouqimanal@gmail.com",
  phone: "+212 682434065",
  linkedin: "https://linkedin.com/in/manal-farouqi",
  github: "https://github.com/manalfarouqi",
  tagline: "Fusionner la rigueur du Machine Learning avec une narration numérique audacieuse.",
  bio: "Diplômée d'une Licence d'Excellence en Analyse de Données et Intelligence Artificielle, je conçois des systèmes IA de bout en bout : du prétraitement des données à la modélisation complexe (Deep Learning, NLP, Computer Vision) jusqu'à leur conteneurisation et déploiement Cloud automatisé.",
  status: "Disponible pour Opportunités IA & Data (Industrie & R&D)",
};

export const PROJECTS: Project[] = [
  {
    id: "f1-commentator",
    title: "F1 Live AI Commentator",
    subtitle: "Système d'Analyse de Course F1 en Temps Réel Multi-Agents & RAG",
    description: "Pipeline IA multi-agents et RAG prédisant les positions F1 et générant des commentaires instantanés en direct.",
    fullDetails: [
      "Développement d'un pipeline YOLOv8 pour la détection temps réel des drapeaux, sécurité et accidents en piste.",
      "Entraînement d'un modèle LightGBM sur 26 saisons de F1 (MAE = 1,33, R² = 0,86) pour prédire les positions en course.",
      "Génération de commentaires en < 500 ms grâce à 4 personas IA (Analyste Technique, Commentateur Dramatique, Statisticien, Expert Règlement).",
      "RAG sur le règlement FIA F1 2025 intégré via ChromaDB pour vérifier la conformité des dépassements."
    ],
    techStack: ["Python", "FastAPI", "React", "LightGBM", "YOLOv8", "Gemini 2.5 Flash", "ChromaDB", "Docker"],
    metrics: [
      { label: "Modèle LightGBM R²", value: "0,86" },
      { label: "Erreur Moyenne MAE", value: "1,33 pos" },
      { label: "Latence Commentaire", value: "< 500 ms" },
      { label: "Données Entraînées", value: "26 Saisons" }
    ],
    category: "AI & ML",
    githubUrl: "https://github.com/manalfarouqi",
    demoKey: "f1",
    badge: "⭐ Projet Phare F1"
  },
  {
    id: "facial-emotion",
    title: "Détection Faciale & Émotionnelle",
    subtitle: "Modèle Vision par Ordinateur CNN & API REST Haute Précision",
    description: "Réseau de neurones CNN sous TensorFlow classant 7 émotions en temps réel via API FastAPI.",
    fullDetails: [
      "Architecture CNN personnalisée développée sous TensorFlow/Keras.",
      "Atteinte de 95,0% de précision sur le jeu de test pour la reconnaissance de 7 émotions fondamentales.",
      "Exposition des prédictions via FastAPI avec journalisation et persistance des données sur PostgreSQL."
    ],
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "FastAPI", "PostgreSQL"],
    metrics: [
      { label: "Précision Test CNN", value: "95,0%" },
      { label: "Temps Inférence", value: "~18 ms" },
      { label: "Classes Émotions", value: "7 Émotions" },
      { label: "Dataset FER-2013", value: "35 000+ Visages" }
    ],
    category: "Vision",
    githubUrl: "https://github.com/manalfarouqi",
    demoKey: "emotion",
    badge: "Computer Vision"
  },
  {
    id: "hr-pulse",
    title: "HR Pulse AI",
    subtitle: "Analyse Sémantique d'Offres d'Emploi via RAG & Azure AI NER",
    description: "Plateforme RAG et Azure AI NER analysant les offres d'emploi pour le matching de compétences.",
    fullDetails: [
      "Pipeline RAG combinant recherche sémantique vectorielle et génération contextuelle.",
      "Extraction automatique d'entités (NER) avec Azure AI Language pour identifier les compétences requises.",
      "Provisionnement d'infrastructure automatisé via Terraform et déploiement continu CI/CD avec GitHub Actions."
    ],
    techStack: ["Python", "LangChain", "Azure AI NER", "Terraform", "FastAPI", "React/Vite", "Docker", "CI/CD"],
    metrics: [
      { label: "F1-Score Azure NER", value: "92,4%" },
      { label: "Offres & CVs Traités", value: "1 200+" },
      { label: "Temps Analyse RAG", value: "< 180 ms" },
      { label: "Compétences Clés", value: "15+ Entités" }
    ],
    category: "GenAI & NLP",
    githubUrl: "https://github.com/manalfarouqi",
    demoKey: "hr",
    badge: "Azure Cloud & MLOps"
  },
  {
    id: "zoroxp",
    title: "ZoroXP",
    subtitle: "Application Web d'Analyse de Sentiment à Interface Rétro Windows XP",
    description: "Interface rétro Windows XP propulsée par un moteur NLP pour l'analyse de sentiment instantanée.",
    fullDetails: [
      "Développement d'une interface utilisateur réactive imitant fidèlement l'expérience Windows XP.",
      "Intégration d'une API d'analyse de sentiment NLP temps réel.",
      "Démonstration de la synergie entre rétro-design et modèles de langage modernes."
    ],
    techStack: ["React", "Next.js", "FastAPI", "Python", "Tailwind CSS"],
    metrics: [
      { label: "F1-Score NLP Sentiment", value: "89,2%" },
      { label: "Vitesse d'Analyse", value: "< 90 ms" },
      { label: "Textes Benchmark", value: "50 000+" },
      { label: "Score AUC-ROC", value: "0,91" }
    ],
    category: "Full-Stack",
    githubUrl: "https://github.com/manalfarouqi",
    demoKey: "zoroxp",
    badge: "Design Rétro & NLP"
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "Développement IA",
    institution: "Simplon Maghreb",
    period: "Septembre 2025 – Mars 2026",
    location: "Maroc",
    description: "Formation intensive axée sur l'ingénierie IA, la conteneurisation, les architectures MLOps et la mise en production de modèles complexes."
  },
  {
    degree: "Licence d'Excellence – Analyse de Données & IA",
    institution: "Faculté des Sciences, Agadir",
    period: "2024 – 2026",
    location: "Agadir, Maroc",
    description: "Programme sélectif axé sur le Machine Learning, Deep Learning, le NLP et la modélisation statistique avancée.",
    highlight: "Mention d'Excellence"
  },
  {
    degree: "DEUG Professionnel – Génie Informatique",
    institution: "Faculté des Sciences, Agadir",
    period: "2022 – 2024",
    location: "Agadir, Maroc",
    description: "Fondations solides en programmation orientée objet, bases de données relationnelles, algorithmique et génie logiciel."
  },
  {
    degree: "Introduction à l'Automatisation avec Python",
    institution: "Orange Digital Center Agadir",
    period: "Mars 2024",
    location: "Agadir, Maroc",
    description: "Certification pratique sur le scripting Python, le scraping web et l'automatisation de flux de travail."
  },
  {
    degree: "Baccalauréat Sciences Mathématiques A, Option Française",
    institution: "Lycée Ajdir",
    period: "2021",
    location: "Agadir, Maroc",
    description: "Spécialisation en mathématiques pures, physique et logique rigoureuse."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "IA & Machine Learning",
    iconName: "Brain",
    skills: [
      { name: "TensorFlow & Keras", proficiency: "Avancé / Prod", tag: "Deep Learning", projects: "Détection Émotions 95,0% Acc" },
      { name: "Scikit-learn & LightGBM", proficiency: "Expertise R&D", tag: "Modèles Prédictifs", projects: "F1 Predictor (MAE 1,33, R² 0,86)" },
      { name: "YOLOv8 & OpenCV", proficiency: "Avancé", tag: "Computer Vision", projects: "Analyse Flux Vidéo & Dépassements" },
      { name: "EasyOCR & Traitement d'Image", proficiency: "Maîtrisé", projects: "Extraction de Texte & Plaques" }
    ]
  },
  {
    title: "IA Générative & NLP",
    iconName: "Sparkles",
    skills: [
      { name: "RAG & ChromaDB", proficiency: "Expertise R&D", tag: "Vector DB", projects: "Règlement FIA F1 2025 Vectorisé" },
      { name: "LangChain & Gemini API", proficiency: "Avancé / Prod", tag: "LLM Orchestration", projects: "Système Multi-Agents (< 500 ms)" },
      { name: "spaCy, Hugging Face & NER", proficiency: "Avancé", projects: "HR Pulse AI & Extraction Sémantique" },
      { name: "Analyse de Sentiment", proficiency: "Avancé / Prod", projects: "Application ZoroXP NLP" }
    ]
  },
  {
    title: "Cloud & Infra",
    iconName: "Cloud",
    skills: [
      { name: "Docker & Conteneurisation", proficiency: "Maîtrisé / Prod", projects: "Microservices FastAPI & Deployment" },
      { name: "Azure ML & Cognitive Services", proficiency: "Pratique Avancée", projects: "Azure AI Language NER" },
      { name: "Terraform (Infra as Code)", proficiency: "Pratique En Production", projects: "Provisionnement Automatisé Cloud" },
      { name: "CI/CD GitHub Actions & Airflow", proficiency: "Maîtrisé", projects: "Pipelines de Validation Continues" }
    ]
  },
  {
    title: "Langages & Dev",
    iconName: "Code",
    skills: [
      { name: "Python", proficiency: "Expertise", tag: "Langage Principal", projects: "Scoring, Async, Pipelines, Scripts" },
      { name: "SQL (PostgreSQL, MySQL, SQLite)", proficiency: "Avancé", projects: "BDD Relationnelles & Journalisation" },
      { name: "FastAPI & Spring Boot", proficiency: "Avancé / Prod", projects: "APIs REST & Endpoints Securisés" },
      { name: "JavaScript, React, Next.js, Tailwind", proficiency: "Maîtrisé", projects: "Interfaces Web & UI Éditoriales" }
    ]
  }
];

export const CREATIVE_SKILLS: CreativeProject[] = [
  {
    title: "Studio Club FSA Agadir",
    category: "Photographie & Vidéographie",
    period: "Oct. 2022 – 2024",
    institution: "Faculté des Sciences, Agadir",
    description: "Cadrage, composition visuelle, retouche numérique et narration par l'image. Cette sensibilité esthétique se traduit par des interfaces utilisateurs soignées et un souci du détail dans la visualisation de données.",
    quote: "La photographie m'apprend à observer les motifs invisibles, tout comme l'analyse de données.",
    tags: ["Cadre & Lumière", "Storytelling Visuel", "Retouche"]
  },
  {
    title: "Théâtre – Institut Français",
    category: "Arts de la Scène & Expression",
    period: "2018",
    institution: "Agadir",
    description: "Pratique théâtrale développant l'aisance oratoire, la présence scénique, l'écoute active et la gestion de persona — des atouts majeurs pour la modélisation de systèmes multi-agents et les présentations techniques.",
    quote: "Le théâtre nourrit la création de personas virtuels plus humains et vivants.",
    tags: ["Prise de parole", "Incarner un Persona", "Improvisation"]
  }
];

export const DETAILED_PROMPT_BRIEF: PromptSection[] = [
  {
    id: "concept",
    title: "1. Concept Général & Charte Graphique Éditoriale",
    summary: "Marier l'élégance éditoriale Swiss Minimalist avec la rigueur scientifique de l'IA & Data Science.",
    details: [
      "Concept : 'Editorial AI Portfolio' — Un portfolio d'ingénieure IA épuré, bannissant les clichés génériques et privilégiant une typographie élégante.",
      "Palette Soie & Vert Forêt : Fond crème (#FAF8F4), texte noir profond (#171717), vert forêt (#0F5132), et accents dorés subtils (#B08D57) pour les badges phares.",
      "Mise en valeur des métriques : Priorité absolue aux chiffres réels (MAE 1,33, R² 0,86, F1-score 92,4%, 95,0% Précision) et à la transparence des démos.",
      "Transparence technique : Notebooks Colab exécutables et repositories GitHub accessibles en un clic pour chaque modèle."
    ]
  },
  {
    id: "visual-style",
    title: "2. Direction Artistique, Palette & Typographie",
    summary: "Papier crème chaud, contraste vert forêt/doré et typographie éditoriale haute lisibilité.",
    details: [
      "Fond principal : Crème papier chaleureux (#FAF8F4) pour une lecture reposante et distinguée.",
      "Accent Vert Forêt Profond : (#0F5132) pour une touche de sérénité et d'élégance scientifique.",
      "Accent Doré Élégant : (#B08D57) pour surligner le projet phare et les éléments clés.",
      "Typographie Titres : 'Playfair Display' (Serif classique d'art pour les noms & grands titres).",
      "Typographie Corps : 'Plus Jakarta Sans' (Rigueur technique et clarté d'affichage).",
      "Badges de Compétences : Gris chaud neutre (#EFEBE4) avec texte (#4A4A45)."
    ]
  },
  {
    id: "user-experience",
    title: "3. Démos, Notebooks & Accès Direct au Code",
    summary: "Accès transparent aux vrais notebooks Google Colab, architectures et traces d'exécution.",
    details: [
      "Section Démos & Notebooks Exécutables : Chaque projet dispose de son lien direct vers le notebook Colab et le repository GitHub.",
      "Traces d'Exécution Réelles : Visualisation des métriques de convergence, temps d'inférence (< 500 ms) et matrices de confusion.",
      "Téléchargement du CV PDF : Accessible directement depuis le header pour les recruteurs pressés.",
      "Assistant IA CV : Bulle de dialogue interactive répondant aux questions sur le parcours de Farouqi Manal."
    ]
  },
  {
    id: "structure",
    title: "4. Structure des Sections & Découpage Navigation",
    summary: "Parcours fluide en 5 étapes clés épurées pour une consultation rapide.",
    details: [
      "Header : Logo 'FM', badge 'IA & DATA', navigation 5 sections, bouton 'CV (PDF)' et 'Brief / Prompt'.",
      "01. Projets Phares : Cartes épurées avec métriques chiffrées (comma format), description en 1 phrase et accordéon d'architecture.",
      "02. Démos & Notebooks : Centre de ressources exécutables et notebooks Colab.",
      "03. Parcours & Compétences : Diplômes et matrice de compétences filtrable par onglets courts.",
      "04. Studio & Soft Skills : Photographie et Théâtre comme catalyseurs d'expression technique.",
      "05. Contact & Assistant IA : Prise de contact directe et téléchargement du CV."
    ]
  }
];

