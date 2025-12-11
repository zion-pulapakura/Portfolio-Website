import React from "react";
import Section from "../components/Section";
import meImage from "../images/me.png";

interface LandingSectionProps {
  onScrollToNext: () => void;
}

const LandingSection: React.FC<LandingSectionProps> = ({ onScrollToNext }) => {
  return (
    <Section id="landing" className="flex flex-row relative">
      {/* Left Section - 2/3 width, Purple background */}
      <div className="w-2/3 bg-purple-primary relative flex flex-col justify-center pl-20 pr-10 z-10">
        {/* Dotted vertical line on the left */}
        <div
          className="absolute left-8 top-0 bottom-0 w-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #87CEEB 0, #87CEEB 4px, transparent 4px, transparent 8px)",
          }}
        ></div>

        {/* Logo at the top - aligned with AI ENGINEER */}
        <h2 className="absolute top-10 left-20 font-logo text-green-accent text-3xl font-bold z-20">
          zion pulapakura
        </h2>

        {/* Main content */}
        <div className="flex flex-col">
          <h1 className="text-green-accent text-9xl font-bold leading-tight">
            AI ENGINEER.
          </h1>
          <p className="text-text-primary text-2xl mt-4 max-w-2xl">
            Curious by nature, I explore AI through building—each project
            teaches me something new.
          </p>
        </div>
      </div>

      {/* Right Section - 1/3 width, Green background */}
      <div className="w-1/3 bg-green-accent relative flex items-center justify-center z-10">
        {/* Scroll arrow button in bottom right */}
        <button
          onClick={onScrollToNext}
          className="absolute bottom-10 right-10 w-14 h-14 rounded-full bg-purple-primary flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer z-20"
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
      </div>

      {/* Image positioned in between the two backgrounds, centered vertically */}
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 z-20">
        {/* White rectangle outline offset by 20px down and right */}
        <div
          className="absolute w-80 h-96 border-4 border-white"
          style={{
            top: "20px",
            left: "20px",
          }}
        ></div>
        {/* Actual image */}
        <img
          src={meImage}
          alt="Zion Pulapakura"
          className="w-80 h-96 object-cover relative z-10"
        />
      </div>
    </Section>
  );
};

export default LandingSection;
