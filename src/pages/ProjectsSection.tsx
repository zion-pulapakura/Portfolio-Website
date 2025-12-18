import React, { useRef, useEffect, useState } from "react";
import Section from "../components/Section";
import SkillPill from "../components/SkillPill";
import projectsData from "../data/projects.json";

interface Project {
  name: string;
  description: string;
  image: string;
  skills: string[];
  links: {
    youtube?: string;
    github?: string;
  };
}

const YouTubeIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ProjectsSection: React.FC = () => {
  const projects = projectsData.projects as Project[];
  const carouselRef = useRef<HTMLDivElement>(null);
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

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 500, behavior: "smooth" });
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

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 w-12 h-12 rounded-full bg-purple-primary flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            ref={carouselRef}
            className="overflow-x-auto overflow-y-hidden pb-6 scrollbar-hide scroll-smooth w-full"
          >
            <div className="flex gap-6" style={{ width: "max-content" }}>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[500px] bg-card-dark rounded-xl overflow-hidden flex flex-col border border-gray-600 ${
                    isVisible ? "animate-fade-in-up" : ""
                  }`}
                  style={{
                    animationDelay: `${0.2 + index * 0.1}s`,
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center overflow-hidden">
                    <img
                      src={getImageUrl(project.image)}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {project.name}
                    </h3>

                    <p className="text-text-primary text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, skillIndex) => (
                        <SkillPill key={skillIndex} skill={skill} />
                      ))}
                    </div>

                    <div className="flex gap-3 justify-end">
                      {project.links.youtube && (
                        <a
                          href={project.links.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
                          aria-label={`View ${project.name} on YouTube`}
                        >
                          <YouTubeIcon className="w-5 h-5 text-red-600" />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
                          aria-label={`View ${project.name} on GitHub`}
                        >
                          <GitHubIcon className="w-5 h-5 text-gray-800" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 w-12 h-12 rounded-full bg-purple-primary flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
 