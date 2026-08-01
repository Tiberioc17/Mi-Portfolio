import React from 'react';
import {FileText, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center pt-20 pb-16 px-4 md:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight animate-fade-in">
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600">Hola, soy</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600">
                Tiberio
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-indigo-800 mb-8 animate-fade-in-delay">
              Desarrollador De Software
            </h2>
            
            <p className="text-gray-600 mb-10 max-w-lg animate-fade-in-delay-2">
              Como desarrollador de software, me enfoco en crear soluciones digitales modernas, funcionales y escalables que respondan a necesidades reales. Disfruto transformar ideas en aplicaciones intuitivas, priorizando la calidad del código, la experiencia del usuario y la mejora continua en cada proyecto.

            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10 animate-fade-in-delay-3">
              <a 
                href="#contacto" 
                className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-medium transition-all hover:bg-indigo-600 hover:shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Contáctame
              </a>
              
              <a 
                href="/public/CV_Tiberio_Carvajal_G.pdf" 
                className="px-6 py-3 bg-white text-indigo-700 border border-indigo-700 rounded-lg font-medium transition-all hover:bg-indigo-100 flex items-center gap-2"
                target="_blank"
                rel="cv tiberio carvajal"
                download
              >
                <FileText size={18} /> Descargar CV
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in-delay-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                <img 
                  src="./images/profile.png" 
                  alt="portada" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 md:mt-20 animate-bounce">
          <a 
            href="#proyectos" 
            className="text-gray-500 hover:text-indigo-700 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;