import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

const ScrollArrow: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const sections = ["landing", "projects", "about"];
    const currentSection =
      sections.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top < window.innerHeight / 2;
        }
        return false;
      }) || "landing";

    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = currentIndex + 1;

    if (nextIndex < sections.length) {
      const nextSection = document.getElementById(sections[nextIndex]);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <button
      onClick={scrollToNext}
      className={`fixed bottom-10 right-10 w-14 h-14 rounded-full bg-purple-primary flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer z-20 border-2 border-white shadow-lg ${
        isLoaded ? "animate-bounce-dance" : ""
      }`}
      aria-label="Scroll to next section"
    >
      <FaArrowDown className="w-6 h-6 text-white" />
    </button>
  );
};

export default ScrollArrow;
