import React, { useRef, useEffect, useState } from "react";
import SkillPill from "./SkillPill";
import { FaGithub, FaYoutube } from "react-icons/fa6";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  imageUrl: string;
  isVisible: boolean;
  animationDelay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  imageUrl,
  isVisible,
  animationDelay,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState<number | null>(null);

  useEffect(() => {
    const img = imageRef.current;
    if (img) {
      const updateWidth = () => {
        if (img.offsetWidth > 0) {
          setImageWidth(img.offsetWidth);
        }
      };

      if (img.complete) {
        updateWidth();
      } else {
        img.onload = updateWidth;
      }
    }
  }, [imageUrl]);

  return (
    <div
      ref={cardRef}
      className={`flex-shrink-0 bg-card-dark rounded-xl overflow-hidden flex flex-col border border-gray-600 shadow-sm ${
        isVisible ? "animate-slide-in-left" : ""
      }`}
      style={{
        animationDelay: `${animationDelay}s`,
        opacity: isVisible ? 0 : 0,
        minHeight: "500px",
        width: imageWidth ? `${imageWidth}px` : "auto",
      }}
    >
      <div className="h-80 bg-gray-300 flex items-center justify-center overflow-hidden">
        <img
          ref={imageRef}
          src={imageUrl}
          alt={project.name}
          className="h-full w-auto object-contain"
          style={{ display: "block" }}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-white text-xl font-bold mb-2">{project.name}</h3>

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
              <FaYoutube className="w-5 h-5 text-red-600" />
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
              <FaGithub className="w-5 h-5 text-gray-800" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
