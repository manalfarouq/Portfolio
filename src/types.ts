export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDetails: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  category: 'AI & ML' | 'GenAI & NLP' | 'Full-Stack' | 'Vision';
  githubUrl?: string;
  demoKey?: 'f1' | 'emotion' | 'hr' | 'zoroxp';
  badge: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
  highlight?: string;
}

export interface SkillItem {
  name: string;
  proficiency: string; // e.g. "Expertise / Prod", "Avancé", "Maîtrisé"
  tag?: string;
  projects?: string; // Real-world usage context e.g. "F1 Live Predictor, HR Pulse"
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface CreativeProject {
  title: string;
  category: string;
  period: string;
  institution: string;
  description: string;
  quote?: string;
  tags: string[];
  imageUrl?: string;
}

export interface PromptSection {
  id: string;
  title: string;
  summary: string;
  details: string[];
}
