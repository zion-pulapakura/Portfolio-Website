import React, { useEffect, useState } from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  background?: "purple-green" | "green-purple";
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = "",
  background,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const scrollToNext = () => {
    const sections = ["landing", "projects", "about"];
    const currentSection =
      sections.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top < window.innerHeight / 2;
        }
        return false;
      }) || "landing";

    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = currentIndex + 1;

    if (nextIndex < sections.length) {
      const nextSection = document.getElementById(sections[nextIndex]);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    if (id === "landing") {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [id]);
  const getBackgroundStyle = () => {
    switch (background) {
      case "purple-green":
        return {
          background:
            "linear-gradient(to right, #462dd5 0%, #462dd5 66.67%, #cdf382 66.67%, #cdf382 100%)",
        };
      case "green-purple":
        return {
          background:
            "linear-gradient(to right, #cdf382 0%, #cdf382 66.67%, #462dd5 66.67%, #462dd5 100%)",
        };
      default:
        return {};
    }
  };

  return (
    <section
      id={id}
      className={`min-h-screen w-full ${className}`}
      style={getBackgroundStyle()}
    >
      {children}

      <button
        onClick={scrollToNext}
        className={`absolute bottom-10 right-10 w-14 h-14 rounded-full bg-purple-primary flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer z-20 ${
          isLoaded ? "animate-bounce-dance" : ""
        }`}
        aria-label="Scroll to next section"
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
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </section>
  );
};

export default Section;
