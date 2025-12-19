import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

const ScrollArrow: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("landing");

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const isProjectsVisible =
          rect.top >= 0 && rect.top < window.innerHeight / 2;
        setCurrentSection(isProjectsVisible ? "projects" : "landing");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const sections = ["landing", "projects", "skills", "about"];
    const nextIndex = sections.indexOf(currentSection) + 1;
    const nextSection = document.getElementById(sections[nextIndex]);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      onClick={scrollToNext}
      className={`fixed bottom-10 right-10 w-14 h-14 rounded-full bg-purple-primary flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer z-20 ${
        currentSection === "projects" ? "border-2 border-white" : ""
      } shadow-lg ${isLoaded ? "animate-bounce-dance" : ""}`}
      aria-label="Scroll to next section"
    >
      <FaArrowDown className="w-6 h-6 text-white" />
    </button>
  );
};

export default ScrollArrow;
