import React from 'react';
import LandingSection from './pages/LandingSection';
import ProjectsSection from './pages/ProjectsSection';
import AboutSection from './pages/AboutSection';

const App: React.FC = () => {
  const scrollToNext = () => {
    const sections = ['landing', 'projects', 'about'];
    const currentSection = sections.find((id) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
      }
      return false;
    }) || 'landing';

    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = currentIndex + 1;

      if (nextIndex < sections.length) {
      const nextSection = document.getElementById(sections[nextIndex]);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="w-full">
      <LandingSection onScrollToNext={scrollToNext} />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
};

export default App;

