import React from "react";
import { scrollTo } from "../utils/scrollTo";
import useCurrentSection from "../store/currentSectionStore";

const Navbar: React.FC = () => {
  const currentSection = useCurrentSection((state) => state.currentSection);
  const navItems = [
    { id: "landing", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
  };

  // Determine color scheme based on active section
  const isProjectsOrAbout =
    currentSection === "projects" || currentSection === "about";
  const logoColor = isProjectsOrAbout
    ? "text-purple-primary"
    : "text-green-accent";
  const activeNavColor = isProjectsOrAbout
    ? "text-green-accent"
    : "text-purple-primary";
  const activeNavBg = isProjectsOrAbout
    ? "bg-green-accent"
    : "bg-purple-primary";

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between py-4 z-50">
      {/* Logo on the left */}
      <div
        className={`pl-20 font-logo ${logoColor} text-3xl font-bold cursor-pointer animate-fade-in transition-colors duration-300`}
        style={{ animationDelay: "0.1s", opacity: 0 }}
        onClick={() => handleNavClick("landing")}
      >
        zion pulapakura
      </div>

      {/* Navigation tabs on the right */}
      <div className="pr-20 flex gap-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300 ${
              currentSection === item.id ? activeNavColor : "text-gray-800"
            }`}
          >
            {item.label}
            {currentSection === item.id && (
              <span
                className={`absolute -bottom-0.5 left-0 right-0 h-0.5 ${activeNavBg} animate-fade-in`}
              ></span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
