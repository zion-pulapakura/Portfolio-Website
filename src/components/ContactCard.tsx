import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaMedium } from "react-icons/fa6";

interface ContactCardProps {
  isVisible?: boolean;
  animationDelay?: number;
}

const ContactCard: React.FC<ContactCardProps> = ({
  isVisible = true,
  animationDelay = 0,
}) => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/zion-pulapakura",
      color: "text-gray-800",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/zion-pulapakura",
      color: "text-blue-600",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://youtube.com/@zion-pulapakura",
      color: "text-red-600",
    },
    {
      name: "Medium",
      icon: FaMedium,
      url: "https://medium.com/@zion-pulapakura",
      color: "text-gray-800",
    },
  ];

  return (
    <div
      className={`bg-card-dark rounded-xl overflow-hidden flex flex-col border border-gray-600 shadow-sm ${
        isVisible ? "animate-fade-in-up" : ""
      }`}
      style={{
        animationDelay: `${animationDelay}s`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="p-6 flex flex-col">
        <h3 className="text-white text-2xl font-bold mb-4">CONTACT ME 😊</h3>

        <p className="text-text-primary text-md mb-6">
          If you're in Melbourne, I'd love to meet up and chat.
        </p>

        <div className="flex flex-col gap-3 mb-6">
          <div>
            <span className="text-white font-semibold">Email: </span>
            <span className="text-text-primary">pulapakura.zion@gmail.com</span>
          </div>
          <div>
            <span className="text-white font-semibold">Phone: </span>
            <span className="text-text-primary">+61 469 857 881</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg bg-white hover:opacity-80 transition-opacity"
                aria-label={link.name}
              >
                <span className="text-gray-800 text-base font-semibold">
                  {link.name}
                </span>
                <Icon className={`w-8 h-8 ${link.color}`} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
