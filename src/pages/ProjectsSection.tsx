import React from "react";
import Section from "../components/Section";

const ProjectsSection: React.FC = () => {
  return (
    <Section
      id="projects"
      className="bg-green-accent flex items-center justify-center px-4 md:px-10"
    >
      <div className="text-center max-w-6xl w-full">
        <h2 className="text-purple-primary text-3xl md:text-5xl font-bold mb-6 md:mb-8">
          Projects
        </h2>
        <p className="text-purple-primary text-lg md:text-xl">
          Projects section content coming soon...
        </p>
      </div>
    </Section>
  );
};

export default ProjectsSection;
