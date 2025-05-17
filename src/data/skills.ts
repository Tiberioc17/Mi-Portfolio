import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { id: 1, name: "HTML5", icon: "html", category: "frontend", level: 5 },
  { id: 2, name: "CSS3", icon: "css", category: "frontend", level: 5 },
  { id: 3, name: "JavaScript", icon: "javascript", category: "frontend", level: 4 },
  { id: 4, name: "React", icon: "react", category: "frontend", level: 3 },
  { id: 5, name: "Vue.js", icon: "vue", category: "frontend", level: 3 },
  { id: 6, name: "TypeScript", icon: "typescript", category: "frontend", level: 3 },
  { id: 7, name: "Tailwind CSS", icon: "tailwind", category: "frontend", level: 5 },
  { id: 8, name: "SASS/SCSS", icon: "sass", category: "frontend", level: 4 },
  
  // Backend
  { id: 9, name: "Node.js", icon: "node", category: "backend", level: 4 },
  { id: 11, name: "Python", icon: "python", category: "backend", level: 3 },
  { id: 12, name: "PHP", icon: "php", category: "backend", level: 3 },
  { id: 13, name: "GraphQL", icon: "graphql", category: "backend", level: 3 },
  
  // Database
  { id: 16, name: "MySQL", icon: "mysql", category: "database", level: 3 },
  
  // Tools
  { id: 18, name: "Git", icon: "git", category: "tools", level: 5 },
  { id: 21, name: "Figma", icon: "figma", category: "tools", level: 2 },
  { id: 22, name: "VS Code", icon: "vscode", category: "tools", level: 5 },
];