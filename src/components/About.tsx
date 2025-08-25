import React, { useState, useRef } from 'react';
import { BookOpen, Clock, Coffee, Code, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: "Omni.pro Colombia SAS",
      position: "Practicante de Desarrollo Frontend",
      period: "Noviembre 2024 - Mayo 2025",
      description: [
        "Desarrollé interfaces web responsivas adaptadas a múltiples dispositivos.", 
        " Colaboración en la implementación de soluciones de diseño responsivo.",
        " Implementé formularios con operaciones CRUD, garantizando la funcionalidad completa en las interfaces de usuario."
      ]
    },
    
  ];

  const education = [
    {
      id: 1,
      institution: "Corporación Universitaria Iberoamericana",	
      degree: "Ingenieria de Software",
      period: "2025 - actualmente"
    },
    {
      id: 1,
      institution: "Servicio Nacional de aprendizaje Sena ",	
      degree: "Técnico en desarrollo de aplicaciones para dispositivos móviles",
      period: "2023 - 2025"
    },
    {
      id: 2,
      institution: "Corporación Unificada Nacional de Educación Superior CUN",
      degree: "Bootcamp- Inteligencia Artificial Nivel Explorador",
      period: "Agos 2025"
    },
    {
      id: 2,
      institution: "Platzi",
      degree: "Curso de Flutter",
      period: "Abr 2025"
    },
    {
      id: 3,
      institution: "Platzi",
      degree: "Curso de React.js",
      period: "Mar 2025"
    },
    {
      id: 4,
      institution: "Platzi",
      degree: "Fundamentos de ingeniería de Software",
      period: "Feb 2025"
    },
    {
      id: 4,
      institution: "Cisco Networking Academy",
      degree: "Introducción a la Ciberseguridad",
      period: "Feb 2025"
    },
    {
      id: 5,
      institution: "Platzi",
      degree: "Fundamentos de Python",
      period: "Abr 2024"
    },
    {
      id: 6,
      institution: "Netzun",
      degree: "Curso de SQL Intermedio",
      period: "Oct 2024"
    },
  ];

  const [showAllEducation, setShowAllEducation] = useState(false);
  const educationRef = useRef<HTMLDivElement>(null);

  const visibleEducation = showAllEducation ? education : education.slice(0, 2);

  const handleToggleEducation = () => {
    if (showAllEducation) {
      setShowAllEducation(false);
      setTimeout(() => {
        educationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // Espera a que el DOM actualice antes de hacer scroll
    } else {
      setShowAllEducation(true);
    }
  };

  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Sobre <span className="text-indigo-700">Mí</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Conozca un poco más sobre mi trayectoria, experiencia y filosofía de trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Code size={24} className="text-indigo-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Mi Historia</h3>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Desarrollador Junior con pasión por crear aplicaciones modernas y funcionales. Comencé de forma autodidacta, desarrollando proyectos junto a amigos, y posteriormente inicié mis estudios en programación de aplicaciones móviles logrando así trabajar en una multinacional como aprendíz de desarrollo frontend. He trabajado en proyectos que abarcan desde sitios web hasta aplicaciones móviles, utilizando tecnologías frontend como React y Vue.js, además con conocimientos en backend. Me motiva construir experiencias digitales accesibles y me mantengo en constante actualización con las últimas tendencias del sector.
              </p>
              
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 ">
  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:scale-110  hover:shadow-2xl hover:shadow-indigo-400/60 hover:bg-indigo-50 ">
    <Coffee size={24} className="text-indigo-700 mb-2" />
    <span className="text-lg font-bold text-gray-800 ">750+</span>
    <span className="text-sm text-gray-500">Tazas de café</span>
  </div>
  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:scale-110  hover:shadow-2xl hover:shadow-indigo-400/60 hover:bg-indigo-50 ">
    <Code size={24} className="text-indigo-700 mb-2" />
    <span className="text-lg font-bold text-gray-800">3+</span>
    <span className="text-sm text-gray-500">Proyectos</span>
  </div>
  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:scale-110  hover:shadow-2xl hover:shadow-indigo-400/60 hover:bg-indigo-50 ">
    <Clock size={24} className="text-indigo-700 mb-2" />
    <span className="text-lg font-bold text-gray-800">1+</span>
    <span className="text-sm text-gray-500">Año de exp.</span>
  </div>
</div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Briefcase size={24} className="text-indigo-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Experiencia</h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-indigo-200 pl-4 ml-2">
                    <div className="relative">
                      <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-[22px] top-1.5"></div>
                      <h4 className="text-lg font-bold text-gray-800">{exp.position}</h4>
                      <p className="text-indigo-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                      <p className="text-gray-600 text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6" ref={educationRef}>
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <BookOpen size={24} className="text-indigo-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Educación</h3>
              </div>
              
              <div className="space-y-6">
                {visibleEducation.map((edu) => (
                  <div key={edu.id + edu.degree} className="border-l-2 border-indigo-200 pl-4 ml-2">
                    <div className="relative">
                      <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-[22px] top-1.5"></div>
                      <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
                      <p className="text-indigo-600 font-medium">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                    </div>
                  </div>
                ))}
                {education.length > 2 && (
                  <button
                    className="mt-2 text-indigo-700 font-semibold hover:underline"
                    onClick={handleToggleEducation}
                  >
                    {showAllEducation ? 'Ver menos' : 'Ver más'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;