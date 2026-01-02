import React from "react";
import Section from "../components/Section";
import SkillBox from "../components/SkillBox";
import skillsData from "../data/skills.json";
import { useSectionVisibility } from "../hooks/useSectionVisibility";

function getEmojiForCategory(category: string): string {
  const emojiMap: Record<string, string> = {
    "AI & ML": "🤖",
    fullstack: "💻",
    infra: "⚙️",
    tools: "🛠️",
  };
  return emojiMap[category] || "📚";
}

const SkillsSection: React.FC = () => {
  const isVisible = useSectionVisibility("skills");

  // Convert skills object to array format
  const skillCategories = Object.entries(skillsData).map(([title, skills]) => ({
    title,
    skills: skills as string[],
    emoji: getEmojiForCategory(title),
  }));

  return (
    <Section id="skills" className="relative" bgType="purple-green">
      <div className="relative flex flex-col pl-20 pr-10 pt-32 pb-20 w-full min-h-screen z-10">
        <div>
          <h2
            className={`text-green-accent text-5xl font-bold mb-8 relative inline-block ${
              isVisible ? "animate-slide-in-down" : ""
            }`}
            style={{ animationDelay: "0s", opacity: isVisible ? 1 : 0 }}
          >
            SKILLS
            <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-green-accent"></span>
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            isVisible ? "animate-fade-in" : ""
          }`}
          style={{ animationDelay: "0.1s", opacity: isVisible ? 1 : 0 }}
        >
          {skillCategories.map((category) => (
            <SkillBox
              key={category.title}
              title={category.title}
              skills={category.skills}
              emoji={category.emoji}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
