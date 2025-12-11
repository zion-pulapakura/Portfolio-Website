import React, { useState } from "react";
import SkillPill from "./SkillPill";

interface SkillBoxProps {
  title: string;
  skills: string[];
  emoji?: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({ title, skills, emoji }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full md:w-96 h-72 rounded-xl bg-card-dark overflow-hidden cursor-pointer transition-all duration-500 ease-in-out shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] border border-purple-primary/10 hover:border-purple-primary/30 hover:scale-[1.02] hover:shadow-[0_15px_35px_-5px_rgba(70,45,213,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 to-green-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Title overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isHovered ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        {emoji && <span className="text-4xl md:text-5xl mb-2">{emoji}</span>}
        <h3 className="text-white text-xl md:text-2xl font-bold">{title}</h3>
      </div>

      {/* Skills pills - slides in from right */}
      <div
        className={`absolute inset-0 flex flex-wrap items-center justify-center gap-3 p-6 transition-transform duration-500 ease-in-out ${
          isHovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {skills.map((skill, index) => (
          <SkillPill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillBox;


