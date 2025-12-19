import React, { useRef, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import CarouselArrow from "./CarouselArrow";
import { Project } from "../types";

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
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const lastCardDelay = 0.8 + (projects.length - 1) * 0.1;
      const animationDuration = 0.8;
      const totalAnimationTime = (lastCardDelay + animationDuration) * 1000;

      const timer = setTimeout(() => {
        setShowArrows(true);
      }, totalAnimationTime);

      return () => clearTimeout(timer);
    } else {
      setShowArrows(false);
    }
  }, [isVisible, projects.length]);

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
      <CarouselArrow direction="left" onClick={scrollLeft} show={showArrows} />

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
              animationDelay={0.8 + index * 0.1}
            />
          ))}
        </div>
      </div>

      <CarouselArrow
        direction="right"
        onClick={scrollRight}
        show={showArrows}
      />
    </div>
  );
};

export default ProjectsCarousel;
