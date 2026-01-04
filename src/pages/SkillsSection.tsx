import React, { useState } from "react";
import Section from "../components/Section";
import skillsData from "../data/skills.json";
import certificationsData from "../data/certifications.json";
import { useSectionVisibility } from "../hooks/useSectionVisibility";
import SkillsTab from "../components/SkillsTab";
import CertificationsTab from "../components/CertificationsTab";
import { Certification } from "../types";

const SkillsSection: React.FC = () => {
  const isVisible = useSectionVisibility("skills");
  const [activeTab, setActiveTab] = useState<"skills" | "certs">("skills");

  // Convert skills object to array format
  const skillCategories = Object.entries(skillsData).map(([title, skills]) => ({
    title,
    skills: skills as string[],
  }));

  const certifications = certificationsData.certifications as Certification[];

  return (
    <Section id="skills" className="relative" bgType="purple-green">
      <div className="relative flex flex-col pl-20 pr-10 pt-32 pb-20 w-full min-h-screen z-10 ">
        <div>
          <h2
            className={`text-green-accent text-5xl font-bold mb-8 relative inline-block ${
              isVisible ? "animate-slide-in-down" : ""
            }`}
            style={{ animationDelay: "0s", opacity: isVisible ? 1 : 0 }}
          >
            <span
              className={`cursor-pointer transition-colors ${
                activeTab === "skills"
                  ? "text-green-accent"
                  : "text-text-primary"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              SKILLS
            </span>
            <span className="mx-2">/</span>
            <span
              className={`cursor-pointer transition-colors ${
                activeTab === "certs"
                  ? "text-green-accent"
                  : "text-text-primary"
              }`}
              onClick={() => setActiveTab("certs")}
            >
              CERTS
            </span>
            <span
              className={`absolute -bottom-2 w-1/3 h-1 bg-green-accent transition-all duration-300 ease-in-out ${
                activeTab === "skills" ? "left-0" : "left-[66.666667%]"
              }`}
            ></span>
          </h2>
        </div>

        <div
          className={isVisible ? "animate-fade-in" : ""}
        
          style={{ animationDelay: "0.1s", opacity: isVisible ? 1 : 0}}
        >
          {activeTab === "skills" ? (
            <SkillsTab skillCategories={skillCategories} />
          ) : (
            <CertificationsTab
              certifications={certifications}
              isVisible={isVisible}
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
