import React from "react";
import Section from "../components/Section";

const AboutSection: React.FC = () => {
  return (
    <Section
      id="about"
      className="bg-purple-primary flex items-center justify-center px-4 md:px-10"
    >
      <div className="text-center max-w-4xl w-full">
        <h2 className="text-green-accent text-3xl md:text-5xl font-bold mb-6 md:mb-8">
          About Me
        </h2>
        <p className="text-text-primary text-lg md:text-xl">
          About section content coming soon...
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
