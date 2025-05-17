// Project type
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

// Skill type
export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'database';
  level: number; // 1-5
}

// Testimonial type
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  image?: string;
}