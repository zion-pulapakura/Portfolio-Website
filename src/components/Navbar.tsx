import React, { useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("landing");
  const navItems: NavItem[] = [
    { id: "landing", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
  ];

  useEffect(() => {
    const sections = navItems.map((item) => item.id);
    const navHeight = 80; // Approximate navbar height

    const handleScroll = () => {
      const scrollPosition = window.scrollY + navHeight + 50;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80; // Approximate navbar height
      const sectionPosition = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between py-4 z-50">
      {/* Logo on the left */}
      <div
        className="pl-20 font-logo text-green-accent text-3xl font-bold cursor-pointer animate-fade-in"
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
              activeSection === item.id
                ? "text-green-accent"
                : "text-text-primary opacity-70 hover:opacity-100"
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-green-accent animate-fade-in"></span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
