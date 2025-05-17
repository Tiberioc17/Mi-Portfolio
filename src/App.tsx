import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;