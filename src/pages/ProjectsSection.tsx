import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import ProjectsCarousel from "../components/ProjectsCarousel";
import projectsData from "../data/projects.json";
import { Project } from "../types";

const ProjectsSection: React.FC = () => {
  const projects = projectsData.projects as Project[];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const getImageUrl = (imagePath: string) => {
    return imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  };

  return (
    <Section id="projects" className="relative" bgType="green-purple">
      <div className="relative flex flex-col pl-20 pr-10 pt-32 pb-20 w-full min-h-screen">
        <div>
          <h2
            className={`text-purple-primary text-5xl font-bold mb-8 relative inline-block ${
              isVisible ? "animate-slide-in-down" : ""
            }`}
            style={{ animationDelay: "0s" }}
          >
            PROJECTS
            <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-purple-primary"></span>
          </h2>
        </div>

        <ProjectsCarousel
          projects={projects}
          isVisible={isVisible}
          getImageUrl={getImageUrl}
        />
      </div>
    </Section>
  );
};

export default ProjectsSection;
