import React from "react";
import { Certification } from "../types";

interface CertCardProps {
  certification: Certification;
  className?: string;
  isVisible?: boolean;
  animationDelay?: number;
}

const CertCard: React.FC<CertCardProps> = ({
  certification,
  className = "",
  isVisible = true,
  animationDelay = 0,
}) => {
  return (
    <div
      className={`relative group ${className} ${
        isVisible ? "animate-fade-in-up" : ""
      }`}
      style={{
        animationDelay: `${animationDelay}s`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="relative bg-white rounded-lg p-4 md:p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-2 border-white/20">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-accent/20 to-purple-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>

        <img
          src={certification.image}
          alt={certification.title}
          className="w-full h-auto relative z-10"
        />
      </div>

      {/* Text content below the image */}
      <div className="mt-4 space-y-1">
        <h3 className="text-white text-lg font-bold">{certification.title}</h3>
        <p className="text-text-primary text-sm">{certification.issuer}</p>
        <div className="flex items-center justify-between">
          <p className="text-text-primary text-xs opacity-75">
            {certification.date}
          </p>
          {certification.description && (
            <p className="text-text-primary text-xs italic max-w-[60%] text-right">
              {certification.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertCard;
