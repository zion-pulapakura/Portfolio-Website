import React from "react";
import CertCard from "./CertCard";
import { Certification } from "../types";

interface CertificationsTabProps {
  certifications: Certification[];
  isVisible: boolean;
}

const CertificationsTab: React.FC<CertificationsTabProps> = ({
  certifications,
  isVisible,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certifications.map((cert, index) => (
        <CertCard
          key={index}
          certification={cert}
          isVisible={isVisible}
          animationDelay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default CertificationsTab;

