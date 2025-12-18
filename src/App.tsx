import React from "react";
import LandingSection from "./pages/LandingSection";
import ProjectsSection from "./pages/ProjectsSection";
import AboutSection from "./pages/AboutSection";
import ScrollArrow from "./components/ScrollArrow";

const App: React.FC = () => {
  return (
    <div className="w-full">
      <LandingSection />
      <ProjectsSection />
      <AboutSection />
      <ScrollArrow />
    </div>
  );
};

export default App;
