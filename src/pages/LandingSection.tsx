import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import meImage from "../images/me.png";

interface LandingSectionProps {
  onScrollToNext: () => void;
}

const LandingSection: React.FC<LandingSectionProps> = ({ onScrollToNext }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
        {/* Social Media Links */}
        <div className="absolute top-10 right-10 flex gap-3 z-20">
          <a
            href="https://github.com/zion-pulapakura"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5 text-gray-800"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://youtube.com/@zion-pulapakura"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="YouTube"
          >
            <svg
              className="w-5 h-5 text-red-600"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/zion-pulapakura"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5 text-blue-600"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://medium.com/@zion-pulapakura"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Medium"
          >
            <svg
              className="w-5 h-5 text-gray-800"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </a>
        </div>

        {/* Scroll arrow button in bottom right */}
        <button
          onClick={onScrollToNext}
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
