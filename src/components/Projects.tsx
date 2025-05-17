import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Mis <span className="text-indigo-700">Proyectos</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explora algunos de mis trabajos más recientes. Cada proyecto es una oportunidad para aprender y crear soluciones únicas.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  filter === 'all' 
                    ? 'bg-white shadow-sm text-indigo-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  filter === 'featured' 
                    ? 'bg-white shadow-sm text-indigo-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Destacados
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-indigo-600/90 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;