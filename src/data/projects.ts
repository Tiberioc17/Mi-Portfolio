import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Demo",
    description: "Plataforma de comercio electrónico con carrito de compras, pagos y panel de administración. Desarrollada con React, Node.js y MongoDB.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg",
    github: "https://github.com/tuusuario/ecommerce",
    liveUrl: "https://ecommerce-tuproyecto.netlify.app",
    featured: true
  },
  {
    id: 3,
    title: "Demo ",
    description: "Sitio web responsivo para un fotógrafo profesional con galerías, sistema de filtros y contacto. Diseño minimalista enfocado en resaltar las imágenes.",
    technologies: ["HTML", "SCSS", "JavaScript", "Webpack"],
    image: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg",
    github: "https://github.com/tuusuario/photography-portfolio",
    liveUrl: "https://photo-tuproyecto.netlify.app",
    featured: false
  },
]