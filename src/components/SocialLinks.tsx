import React from "react";
import GitHubIcon from "./icons/GitHubIcon";
import YouTubeIcon from "./icons/YouTubeIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import MediumIcon from "./icons/MediumIcon";

interface SocialLinksProps {
  className?: string;
  animationDelay?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = "",
  animationDelay = "0.3s",
}) => {
  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/zion-pulapakura",
      icon: <GitHubIcon className="w-5 h-5 text-gray-800" />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@zion-pulapakura",
      icon: <YouTubeIcon className="w-5 h-5 text-red-600" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/zion-pulapakura",
      icon: <LinkedInIcon className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "Medium",
      url: "https://medium.com/@zion-pulapakura",
      icon: <MediumIcon className="w-5 h-5 text-gray-800" />,
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
