import React from "react";
import SkillPill from "./SkillPill";
import YouTubeIcon from "./icons/YouTubeIcon";
import GitHubIcon from "./icons/GitHubIcon";
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
  return (
    <div
      className={`flex-shrink-0 w-[500px] bg-card-dark rounded-xl overflow-hidden flex flex-col border border-gray-600 ${
        isVisible ? "animate-fade-in-up" : ""
      }`}
      style={{
        animationDelay: `${animationDelay}s`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="w-full h-48 bg-gray-300 flex items-center justify-center overflow-hidden">
        <img
          src={imageUrl}
          alt={project.name}
          className="w-full h-full object-cover"
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
  );
};

export default ProjectCard;

