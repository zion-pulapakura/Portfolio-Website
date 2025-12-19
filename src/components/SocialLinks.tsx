import React from "react";
import { FaGithub, FaYoutube, FaLinkedin, FaMedium } from "react-icons/fa6";
import { SocialLink } from "../types";

interface SocialLinksProps {
  className?: string;
  animationDelay?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = "",
  animationDelay = "0.3s",
}) => {
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

  return (
    <div
      className={`absolute top-10 right-10 flex gap-3 z-20 animate-slide-in-right ${className}`}
      style={{ animationDelay, opacity: 0 }}
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
  );
};

export default SocialLinks;
