import React from "react";

interface SkillPillProps {
  skill: string;
}

const SkillPill: React.FC<SkillPillProps> = ({ skill }) => {
  return (
    <span className="inline-block px-4 py-2 bg-text-primary text-purple-primary rounded-full text-sm md:text-base font-medium whitespace-nowrap">
      {skill}
    </span>
  );
};

export default SkillPill;
