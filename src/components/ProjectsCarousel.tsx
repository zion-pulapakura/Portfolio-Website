import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";

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

interface ProjectsCarouselProps {
  projects: Project[];
  isVisible: boolean;
  getImageUrl: (imagePath: string) => string;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
  projects,
  isVisible,
  getImageUrl,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

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
            <ProjectCard
              key={index}
              project={project}
              imageUrl={getImageUrl(project.image)}
              isVisible={isVisible}
              animationDelay={0.2 + index * 0.1}
            />
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
  );
};

export default ProjectsCarousel;

