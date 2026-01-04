import React, { useState } from "react";
import SkillPill from "./SkillPill";

interface SkillsTabProps {
  skillCategories: Array<{
    title: string;
    skills: string[];
  }>;
}

const SkillsTab: React.FC<SkillsTabProps> = ({ skillCategories }) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    skillCategories[0]?.title || ""
  );

  return (
    <div
      className="flex flex-row gap-8 w-full"
      style={{ minHeight: "calc(100vh - 18rem)" }}
    >
      {/* Category Tabs on the left */}
      <div className="flex flex-col  border-text-primary/30 pr-8 w-64">
        {skillCategories.map((category) => (
          <button
            key={category.title}
            onClick={() => setActiveCategory(category.title)}
            className={`px-6 font-bold text-xl transition-all relative text-left h-1/4 border-y border-r border-text-primary/30 ${
              activeCategory === category.title
                ? "text-green-accent bg-green-accent/20"
                : "text-text-primary hover:text-text-primary/80"
            }`}
          >
            {category.title.toUpperCase()}
            {activeCategory === category.title && (
              <span className="absolute right-0 top-0 bottom-0 w-1 bg-green-accent"></span>
            )}
          </button>
        ))}
      </div>

      {/* Skill Pills on the right */}
      <div
        className="flex flex-wrap gap-4 flex-1 items-start content-start"
        style={{ maxWidth: "calc(66.67vw - 25rem)" }}
      >
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
