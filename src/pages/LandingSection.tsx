import React from "react";
import Section from "../components/Section";
import SocialLinks from "../components/SocialLinks";
import { getColor } from "../utils/getColor";

const LandingSection: React.FC = () => {
  const { leftSideColor } = getColor("purple-green");

  return (
    <Section
      id="landing"
      className="flex flex-row relative"
      bgType="purple-green"
    >
      <div className="w-2/3 relative flex flex-col justify-center pl-20 pr-10 z-10">
        {/* Three horizontal lines behind logo (extending from left side) */}
        <div
          className="absolute top-10 left-0 w-96 h-px z-0"
          style={{ backgroundColor: leftSideColor }}
        ></div>
        <div
          className="absolute top-16 left-0 w-80 h-px z-0"
          style={{ backgroundColor: leftSideColor }}
        ></div>
        <div
          className="absolute top-[88px] left-0 w-72 h-px z-0"
          style={{ backgroundColor: leftSideColor }}
        ></div>

        <h2
          className="absolute top-10 left-20 font-logo text-green-accent text-3xl font-bold z-20 animate-fade-in"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          zion pulapakura
        </h2>

        <div className="flex flex-col">
          <h1
            className="text-green-accent text-9xl font-bold leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            AI ENGINEER.
          </h1>
          <p
            className="text-text-primary text-2xl mt-4 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Curious by nature, I explore AI through building—each project
            teaches me something new.
          </p>
        </div>
      </div>

      <div className="w-1/3 relative flex items-center justify-center z-10">
        <SocialLinks animationDelay="0.3s" />
      </div>

      <div
        className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 z-20 animate-fade-in"
        style={{ animationDelay: "0.5s", opacity: 0 }}
      >
        <div
          className="absolute w-80 h-96 border-4 border-white"
          style={{
            top: "20px",
            left: "20px",
          }}
        ></div>
        <img
          src="/images/me.png"
          alt="Zion Pulapakura"
          className="w-80 h-96 object-cover relative z-10"
        />
      </div>
    </Section>
  );
};

export default LandingSection;
