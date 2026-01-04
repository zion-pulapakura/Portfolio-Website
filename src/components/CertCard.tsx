import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
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
      className={`bg-card-dark rounded-xl overflow-hidden flex flex-col border border-gray-600 shadow-sm ${className} ${
        isVisible ? "animate-fade-in-up" : ""
      }`}
      style={{
        animationDelay: `${animationDelay}s`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="p-6 flex flex-row gap-4 relative">
        {/* Link in top right */}
        {certification.link && (
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity z-10"
            aria-label={`View ${certification.title} certificate`}
          >
            <FaArrowUpRightFromSquare className="w-5 h-5 text-gray-800" />
          </a>
        )}

        {/* Cert image in top left */}
        <div className="flex-shrink-0">
          <img
            src={certification.image}
            alt={certification.title}
            className="w-40 h-auto object-contain"
          />
        </div>

        {/* Title and description to the right of image */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-white text-xl font-bold mb-2">
            {certification.title}
          </h3>
          <p className="text-text-primary text-sm mb-2">
            {certification.description}
          </p>
          <p className="text-text-primary text-xs opacity-75">
            issued at {certification.date} by {certification.issuer}
          </p>
        </div>
      </div>

      {/* Summary underneath */}
      <div className="px-6 pb-6">
        <p className="text-white text-sm">{certification.summary}</p>
      </div>
    </div>
  );
};

export default CertCard;
