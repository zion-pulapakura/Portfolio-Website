import React from "react";
import { scrollTo } from "../utils/scrollTo";
import useCurrentSection from "../store/currentSectionStore";
import useColourStore, { BackgroundType } from "../store/colourStore";

const Navbar: React.FC = () => {
  const currentSection = useCurrentSection((state) => state.currentSection);
  const getNavbarColours = useColourStore((state) => state.getNavbarColours);
  const getBgColours = useColourStore((state) => state.getBgColours);

  const navItems = [
    { id: "landing", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
  ];

  // Map section ID to bgType
  const sectionToBgType: Record<string, BackgroundType> = {
    landing: "purple-green",
    projects: "green-purple",
    skills: "purple-green",
    about: "green-purple",
  };

  const bgType = sectionToBgType[currentSection] || "purple-green";
  const { logoColour, activeNavColour, activeNavBg, inactiveNavColour } =
    getNavbarColours(bgType);
  const background = getBgColours(bgType);

  return (
    <nav
      className="fixed top-0 left-0 right-0 flex items-center justify-between py-4 z-50 transition-all duration-300"
      style={{ background }}
    >
      {/* Logo on the left */}
      <div
        className={`pl-20 font-logo ${logoColour} text-3xl font-bold cursor-pointer animate-fade-in transition-colors duration-300`}
        style={{ animationDelay: "0.1s", opacity: 0 }}
        onClick={() => scrollTo("landing")}
      >
        zion pulapakura
      </div>

      {/* Navigation tabs on the right */}
      <div className="pr-20 flex gap-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300 ${
              currentSection === item.id ? activeNavColour : inactiveNavColour
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
