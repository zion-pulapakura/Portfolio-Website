import React from "react";

interface CertCardProps {
  image: string;
  alt: string;
  className?: string;
}

const CertCard: React.FC<CertCardProps> = ({ image, alt, className = "" }) => {
   return (
    <div className={`relative group ${className}`}>
      <div className="relative bg-white rounded-lg p-4 md:p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-2 border-white/20">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-accent/20 to-purple-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
        
        <img
          src={image}
          alt={alt}
          className="w-full h-auto relative z-10"
        />
      </div>
    </div>
  );
};

export default CertCard;

