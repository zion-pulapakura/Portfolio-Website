import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import SkillBox from "../components/SkillBox";
import CertCard from "../components/CertCard";
import skillsData from "../data/skills.json";
import certificationsData from "../data/certifications.json";
import { Certification } from "../types";

type TabType = "skills" | "certifications";

const SkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("skills");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const certifications = certificationsData.certifications as Certification[];

  const skillCategories = [
    {
      title: "AI & ML",
      skills: skillsData.aiMl,
      emoji: "🤖",
    },
    {
      title: "Full Stack",
      skills: skillsData.fullstack,
      emoji: "💻",
    },
    {
      title: "Infrastructure",
      skills: skillsData.infra,
      emoji: "☁️",
    },
    {
      title: "Tools",
      skills: skillsData.tools,
      emoji: "🛠️",
    },
  ];

  return (
    <Section id="skills" className="relative" bgType="purple-green">
      <div className="relative flex flex-col pl-20 pr-10 pt-32 pb-20 w-full min-h-screen z-10">
        <div>
          <h2
            className={`text-green-accent text-5xl font-bold mb-8 relative inline-block ${
              isVisible ? "animate-slide-in-down" : ""
            }`}
            style={{ animationDelay: "0s", opacity: isVisible ? 1 : 0 }}
          >
            SKILLS & CERTIFICATIONS
            <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-green-accent"></span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-6 mb-8">
          <button
            onClick={() => setActiveTab("skills")}
            className={`relative px-6 py-3 text-lg font-semibold transition-all duration-300 ${
              activeTab === "skills"
                ? "text-green-accent"
                : "text-text-primary opacity-60 hover:opacity-100"
            }`}
          >
            Skills
            {activeTab === "skills" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-accent animate-fade-in"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`relative px-6 py-3 text-lg font-semibold transition-all duration-300 ${
              activeTab === "certifications"
                ? "text-green-accent"
                : "text-text-primary opacity-60 hover:opacity-100"
            }`}
          >
            Certifications
            {activeTab === "certifications" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-accent animate-fade-in"></span>
            )}
          </button>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                isVisible ? "animate-fade-in" : ""
              }`}
              style={{ animationDelay: "0.1s", opacity: isVisible ? 1 : 0 }}
            >
              {skillCategories.map((category) => (
                <SkillBox
                  key={category.title}
                  title={category.title}
                  skills={category.skills}
                  emoji={category.emoji}
                />
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === "certifications" && (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl ${
                isVisible ? "animate-fade-in" : ""
              }`}
              style={{ animationDelay: "0.1s", opacity: isVisible ? 1 : 0 }}
            >
              {certifications.map((cert, index) => (
                <CertCard
                  key={cert.title}
                  certification={cert}
                  isVisible={isVisible}
                  animationDelay={0.2 + index * 0.1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
