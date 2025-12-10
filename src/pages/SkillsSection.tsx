import React from "react";
import Section from "../components/Section";

const SkillsSection: React.FC = () => {
  return (
    <Section
      id="skills"
      className="bg-purple-primary flex items-center justify-center px-4 md:px-10"
    >
      <div className="text-center max-w-6xl w-full">
        <h2 className="text-green-accent text-3xl md:text-5xl font-bold mb-6 md:mb-8">
          Skills
        </h2>
        <p className="text-text-primary text-lg md:text-xl">
          Skills section content coming soon...
        </p>
      </div>
    </Section>
  );
};

export default SkillsSection;
