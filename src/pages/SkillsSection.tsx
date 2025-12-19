import React, { useEffect, useState } from "react";
import Section from "../components/Section";

const SkillsSection: React.FC = () => {
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

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <Section id="skills" className="relative" background="purple-green">
      <div className="relative flex flex-col pl-20 pr-10 py-20 w-full min-h-screen">
        <div>
          <h2
            className={`text-green-accent text-5xl font-bold mb-8 relative inline-block ${
              isVisible ? "animate-slide-in-down" : ""
            }`}
            style={{ animationDelay: "0s" }}
          >
            SKILLS
            <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-green-accent"></span>
          </h2>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;

