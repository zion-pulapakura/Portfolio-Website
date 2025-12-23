import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { scrollTo, setupScrollListener } from "../utils/scrollTo";

const ScrollArrow: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("landing");

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  useEffect(() => {
    const sections = ["landing", "projects", "skills", "about"];
    return setupScrollListener(sections, setCurrentSection);
  }, []);

  const scrollToNext = () => {
    const sections = ["landing", "projects", "skills", "about"];
    const nextIndex = sections.indexOf(currentSection) + 1;
    if (nextIndex >= sections.length) return; // Already at last section

    const nextSectionId = sections[nextIndex];
    scrollTo(nextSectionId);
  };

  return (
    <button
      onClick={scrollToNext}
      className={`fixed bottom-10 right-10 w-14 h-14 rounded-full bg-purple-primary flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer z-20 ${
        currentSection === "about" ? "hidden" : ""
      } shadow-lg ${isLoaded ? "animate-bounce-dance" : ""}`}
      aria-label="Scroll to next section"
    >
      <FaArrowDown className="w-6 h-6 text-white" />
    </button>
  );
};

export default ScrollArrow;
