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
    const cleanPath = imagePath.startsWith("../")
      ? imagePath.slice(3)
      : imagePath;
    try {
      return new URL(`../${cleanPath}`, import.meta.url).href;
    } catch {
      return imagePath;
    }
  };

  return (
    <Section id="projects" className="relative">
      <div
        className="relative flex flex-col pl-20 pr-10 py-20 w-full min-h-screen"
        style={{
          background:
            "linear-gradient(to right, #cdf382 0%, #cdf382 66.67%, #462dd5 66.67%, #462dd5 100%)",
        }}
      >
        <h2
          className={`text-purple-primary text-5xl font-bold mb-8 relative inline-block ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "0.1s", opacity: isVisible ? 1 : 0 }}
        >
          PROJECTS
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-purple-primary"></span>
        </h2>

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
