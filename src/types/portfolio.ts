export interface SkillItem {
  name: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'Databases' | 'Tools & Platforms' | 'Core Fundamentals';
  description: string;
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ArchitectureNode {
  step: number;
  label: string;
  sublabel?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution?: string;
  techStack: string[];
  features?: string[];
  challenges: string[];
  results: string[];
  metricsPlaceholder?: string;
  liveDemoUrl: string;
  githubUrl: string;
  architectureNodes?: ArchitectureNode[];
  featured?: boolean;
}

export interface DevelopmentFocusItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechnicalApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface EducationInfo {
  degree: string;
  school: string;
  expectedGraduation: string;
  focus: string;
  focusAreas: string[];
}

export interface PortfolioData {
  name: string;
  tagline: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  heroIntro: string;
  aboutText: string;
  education: EducationInfo;
  developmentFocus: DevelopmentFocusItem[];
  approachSteps: TechnicalApproachStep[];
  skillsCategories: SkillCategory[];
  projects: Project[];
}
