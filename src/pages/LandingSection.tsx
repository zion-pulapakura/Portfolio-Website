import React from "react";
import Section from "../components/Section";

const LandingSection: React.FC = () => {
  return (
    <Section
      id="landing"
      className="flex flex-row relative"
      bgType="purple-green"
    >
      <div className="w-2/3 relative flex flex-col justify-center pl-20 pr-10 z-10">
        <div className="flex flex-col">
          <h1
            className="text-green-accent text-9xl font-bold leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            AI ENGINEER.
          </h1>
          <p
            className="text-text-primary text-2xl mt-4 max-w-3xl animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            A 16 year old AI and software engineer based in Melbourne,
            Australia, who loves experimenting and building with AI.
          </p>
        </div>
      </div>

      <div className="w-1/3 relative flex items-center justify-center z-10"></div>

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
