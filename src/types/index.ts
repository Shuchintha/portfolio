export type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
  desc?: string; // Short description
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface NavLink {
  label: string;
  path: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
