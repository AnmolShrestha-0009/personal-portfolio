export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyContributions: string[];
  githubUrl?: string;
  isGithubConfigurable?: boolean;
  architectureSteps: string[];
  technicalHighlights: string[];
  category: 'ai-ml' | 'systems' | 'data-science';
  visualType: 'poker' | 'risk' | 'worldcup' | 'sentiment';
  disclaimer?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  badge: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
  status?: string;
  details: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  highlight: string;
  description: string;
  badge: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  statusBadge: string;
  heroHeading: string;
  heroSupporting: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  themes: {
    title: string;
    description: string;
  }[];
}
