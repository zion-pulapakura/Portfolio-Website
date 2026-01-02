import React, { useEffect } from "react";
import LandingSection from "./pages/LandingSection";
import ProjectsSection from "./pages/ProjectsSection";
import SkillsSection from "./pages/SkillsSection";
import AboutSection from "./pages/AboutSection";
import Navbar from "./components/Navbar";
import useCurrentSection from "./store/currentSectionStore";

const App: React.FC = () => {
  const setCurrentSection = useCurrentSection(
    (state) => state.setCurrentSection
  );

  useEffect(() => {
    const sections = ["landing", "projects", "skills", "about"];
    const NAVBAR_HEIGHT = 80;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + NAVBAR_HEIGHT;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentSection(
            sections[i] as "landing" | "projects" | "skills" | "about"
          );
          break;
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setCurrentSection]);

  return (
    <div className="w-full">
      <Navbar />
      <LandingSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </div>
  );
};

export default App;
