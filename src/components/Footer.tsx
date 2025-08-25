import React from 'react';
import { Github, Linkedin,    } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-5">
          <div className="mb- md:mb-0">
            <a href="#inicio" className="text-2xl font-bold text-white ">
              Mi Portafolio
            </a>
            <p className="text-gray-400 mt-2 max-w-xs mb-2 ">
              Gracias por visitar mi blog. tu visita es muy valiosa para mí 🔥
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-center">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/Tiberioc17" 
                target="_blank" 
                rel="Tiberioc17"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github size={45} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tiberio-carvajal-a746962a4" 
                target="_blank" 
                rel="Tiberio Carvajal"
                className="text-gray-400 hover:text-white  transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={45} />
              </a>
            </div>
            
            <a 
              href="/public/CV_Tiberio_Carvajal_G.pdf" 
              target="_blank"
              rel="cv tiberio carvajal"
              className="px-8 py-3 bg-indigo-700 hover:bg-indigo-600 rounded-lg text-sm transition-all duration-300 hover:scale-110 mb-2"
              download
            >
              Descargar CV
            </a>
            <p>Hecho por Tiberio Carvajal </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-2 flex flex-col md:flex-row justify-center items-center">
          
          <p className="text-gray-400 text-sm r md:mb-0">
            © {currentYear} Todos los derechos reservados
          </p>
          
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;