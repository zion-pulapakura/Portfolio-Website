import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { scrollTo } from "../utils/scrollTo";

const ScrollArrow: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("landing");

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  return (
    <button
      onClick={() => scrollTo("projects")}
      className={`fixed bottom-10 right-10 w-14 h-14 rounded-full bg-purple-primary flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer z-20 ${
        currentSection === "about" ? "hidden" : ""
      } shadow-lg ${isLoaded ? "animate-bounce-dance" : ""}`}
    >
      <FaArrowDown className="w-6 h-6 text-white" />
    </button>
  );
};

export default ScrollArrow;
