import React from "react";
import Section from "../components/Section";
import meImage from "../images/me.png";

interface LandingSectionProps {
  onScrollToNext: () => void;
}

const LandingSection: React.FC<LandingSectionProps> = ({ onScrollToNext }) => {
  return (
    <Section id="landing" className="flex flex-col md:flex-row relative">
      {/* Left Section - 2/3 width, Purple background */}
      <div className="w-full md:w-2/3 bg-purple-primary relative flex flex-col justify-center pl-8 md:pl-20 pr-4 md:pr-10 py-20 md:py-0 z-10">
        {/* Dotted vertical line on the left */}
        <div
          className="hidden md:block absolute left-8 top-0 bottom-0 w-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #87CEEB 0, #87CEEB 4px, transparent 4px, transparent 8px)",
          }}
        ></div>

        {/* Logo at the top - aligned with AI ENGINEER */}
        <h2 className="absolute top-6 md:top-10 left-8 md:left-20 font-logo text-green-accent text-2xl md:text-3xl font-bold z-20">
          zion pulapakura
        </h2>

        {/* Main content */}
        <div className="flex flex-col mt-16 md:mt-0">
          <h1 className="text-green-accent text-5xl md:text-9xl font-bold leading-tight">
            AI ENGINEER.
          </h1>
          <p className="text-text-primary text-xl md:text-2xl mt-2 md:mt-4 max-w-2xl">
            Curious by nature, I explore AI through building—each project
            teaches me something new.
          </p>
        </div>
      </div>

      {/* Right Section - 1/3 width, Green background */}
      <div className="w-full md:w-1/3 bg-green-accent relative flex items-center justify-center min-h-[400px] md:min-h-0 z-10">
        {/* Scroll arrow button in bottom right */}
        <button
          onClick={onScrollToNext}
          className="absolute bottom-6 md:bottom-10 right-6 md:right-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-purple-primary flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer z-20"
          aria-label="Scroll to next section"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white"
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
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 z-20 hidden md:block">
        {/* White rectangle outline offset by 20px down and right */}
        <div
          className="absolute w-64 h-80 border-4 border-white"
          style={{
            top: "20px",
            left: "20px",
          }}
        ></div>
        {/* Actual image */}
        <img
          src={meImage}
          alt="Zion Pulapakura"
          className="w-64 h-80 object-cover relative z-10"
        />
      </div>

      {/* Mobile image positioning */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 md:hidden">
        {/* White rectangle outline offset by 20px down and right */}
        <div
          className="absolute w-48 h-64 border-4 border-white"
          style={{
            top: "20px",
            left: "20px",
          }}
        ></div>
        {/* Actual image */}
        <img
          src={meImage}
          alt="Zion Pulapakura"
          className="w-48 h-64 object-cover relative z-10"
        />
      </div>
    </Section>
  );
};

export default LandingSection;
