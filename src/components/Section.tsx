import React from "react";

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
            "linear-gradient(to right, #cdf382 0%,#cdf382 66.67%, #462dd5 66.67%, #462dd5 100%)",
        };
      default:
        return {};
    }
  };

  const isPurpleGreen = background === "purple-green";

  const leftSideColor = isPurpleGreen
    ? "rgba(205, 243, 130, 0.36)"
    : "rgba(70, 45, 213, 0.36)";
  const rightSideColor = isPurpleGreen
    ? "rgba(70, 45, 213, 0.36)"
    : "rgba(205, 243, 130, 0.36)";

  return (
    <section
      id={id}
      className={`min-h-screen w-full relative overflow-hidden ${className}`}
      style={getBackgroundStyle()}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-32 left-32 w-48 h-48 rounded-full border"
          style={{ borderColor: leftSideColor }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 rounded-full border"
          style={{ borderColor: leftSideColor }}
        ></div>

        <div
          className="absolute top-[38%] right-0 w-96 h-px"
          style={{ backgroundColor: rightSideColor }}
        ></div>
        <div
          className="absolute top-[40%] right-0 w-80 h-px"
          style={{ backgroundColor: rightSideColor }}
        ></div>
        <div
          className="absolute top-[42%] right-0 w-72 h-px"
          style={{ backgroundColor: rightSideColor }}
        ></div>

        <div
          className="absolute bottom-60 left-80 w-2 h-2 rounded-full"
          style={{ backgroundColor: leftSideColor }}
        ></div>
      </div>
      {children}
    </section>
  );
};

export default Section;
