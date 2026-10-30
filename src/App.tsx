import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 flex flex-col transition-colors duration-300 selection:bg-blue-500/30 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero theme={theme} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
