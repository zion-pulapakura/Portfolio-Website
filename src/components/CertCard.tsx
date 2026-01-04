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
      className={`bg-card-dark rounded-xl overflow-hidden flex flex-col border border-gray-600 shadow-sm ${className} ${
        isVisible ? "animate-fade-in-up" : ""
      }`}
      style={{
        animationDelay: `${animationDelay}s`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="p-6 flex flex-row gap-4">
        {/* Cert image in top left */}
        <div className="flex-shrink-0">
          <img
            src={certification.image}
            alt={certification.title}
            className="w-48 h-auto object-contain"
          />
        </div>

        {/* Title and description to the right of image */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-white text-xl font-bold mb-2">
            {certification.title}
          </h3>
          <p className="text-text-primary text-sm">
            {certification.description}
          </p>
        </div>
      </div>

      {/* Summary underneath */}
      <div className="px-6 pb-6 flex flex-col flex-grow min-h-[120px]">
        <p className="text-text-primary text-sm flex-grow">
          {certification.summary}
        </p>
        <p className="text-text-primary text-xs opacity-75 mt-auto text-right">
          issued at {certification.date} by {certification.issuer}
        </p>
      </div>
    </div>
  );
};

export default CertCard;
