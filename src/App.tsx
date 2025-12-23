import React from "react";
import LandingSection from "./pages/LandingSection";
import ProjectsSection from "./pages/ProjectsSection";
import SkillsSection from "./pages/SkillsSection";
import AboutSection from "./pages/AboutSection";
import ScrollArrow from "./components/ScrollArrow";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="w-full">
      <Navbar />
      <LandingSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ScrollArrow />
    </div>
  );
};

export default App;
