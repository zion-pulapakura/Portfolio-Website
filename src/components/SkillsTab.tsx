import React, { useState } from "react";
import SkillPill from "./SkillPill";

interface SkillsTabProps {
  skillCategories: Array<{
    title: string;
    skills: string[];
  }>;
  isVisible: boolean;
}

const SkillsTab: React.FC<SkillsTabProps> = ({ skillCategories, isVisible }) => {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0]?.title || "");

  return (
    <div className="flex flex-col">
      {/* Category Tabs */}
      <div className="flex border-b border-text-primary/30 mb-8">
        {skillCategories.map((category, index) => (
          <button
            key={category.title}
            onClick={() => setActiveCategory(category.title)}
            className={`px-6 py-3 font-bold text-lg transition-all relative ${
              activeCategory === category.title
                ? "text-green-accent"
                : "text-text-primary hover:text-text-primary/80"
            } ${index > 0 ? "border-l border-text-primary/30" : ""}`}
          >
            {category.title}
            {activeCategory === category.title && (
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-green-accent"></span>
            )}
          </button>
        ))}
      </div>

      {/* Skill Pills */}
      <div className="flex flex-wrap gap-3">
        {skillCategories
          .find((cat) => cat.title === activeCategory)
          ?.skills.map((skill, index) => (
            <SkillPill key={index} skill={skill} />
          ))}
      </div>
    </div>
  );
};

export default SkillsTab;

