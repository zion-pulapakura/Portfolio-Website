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
    </section>
  );
};

export default Section;
