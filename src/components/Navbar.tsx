import React, { useEffect, useState } from "react";
import { FaGithub, FaYoutube, FaLinkedin, FaMedium } from "react-icons/fa6";
import { SocialLink } from "../types";

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

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/zion-pulapakura",
      icon: <FaGithub className="w-5 h-5 text-gray-800" />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@zion-pulapakura",
      icon: <FaYoutube className="w-5 h-5 text-red-600" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/zion-pulapakura",
      icon: <FaLinkedin className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "Medium",
      url: "https://medium.com/@zion-pulapakura",
      icon: <FaMedium className="w-5 h-5 text-gray-800" />,
    },
  ];

  useEffect(() => {
    const sections = navItems.map((item) => item.id);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

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
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="absolute top-10 left-0 right-0 flex items-center justify-between px-20 z-20">
      {/* Logo on the left */}
      <div
        className="font-logo text-green-accent text-3xl font-bold cursor-pointer animate-fade-in"
        style={{ animationDelay: "0.1s", opacity: 0 }}
        onClick={() => handleNavClick("landing")}
      >
        zion pulapakura
      </div>

      {/* Navigation tabs in the middle */}
      <div className="flex gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
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

      {/* Social links on the right */}
      <div
        className="flex gap-3 animate-slide-in-right"
        style={{ animationDelay: "0.3s", opacity: 0 }}
      >
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
