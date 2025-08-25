import React, { useState } from 'react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Bases de datos' },
    { id: 'tools', label: 'Herramientas' },
  ];
  
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getSkillIcon = (iconName: string) => {
    return (
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-indigo-100 text-indigo-700">
        {iconName.substring(0, 2).toUpperCase()}
      </div>
    );
  };

  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Mis <span className="text-indigo-700">Habilidades</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones digitales eficientes y elegantes.
          </p>
          
          <div className="flex justify-center flex-wrap gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-indigo-700 text-white' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.id} 
              className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
            >
              {getSkillIcon(skill.icon)}
              <h3 className="mt-3 text-gray-800 font-medium text-center">{skill.name}</h3>
              <div className="mt-2 w-full">
                <div className="w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;