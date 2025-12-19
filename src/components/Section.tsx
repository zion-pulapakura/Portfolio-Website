import React from "react";
import { getColor, BackgroundType } from "../utils/getColor";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  background?: BackgroundType;
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = "",
  background,
}) => {
  const colors = getColor(background);

  return (
    <section
      id={id}
      className={`min-h-screen w-full relative overflow-hidden ${className}`}
      style={{ background: colors.background }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-32 left-32 w-48 h-48 rounded-full border"
          style={{ borderColor: colors.leftSideColor }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 rounded-full border"
          style={{ borderColor: colors.leftSideColor }}
        ></div>

        <div
          className="absolute top-[38%] right-0 w-96 h-px"
          style={{ backgroundColor: colors.rightSideColor }}
        ></div>
        <div
          className="absolute top-[40%] right-0 w-80 h-px"
          style={{ backgroundColor: colors.rightSideColor }}
        ></div>
        <div
          className="absolute top-[42%] right-0 w-72 h-px"
          style={{ backgroundColor: colors.rightSideColor }}
        ></div>

        <div
          className="absolute bottom-60 left-80 w-2 h-2 rounded-full"
          style={{ backgroundColor: colors.leftSideColor }}
        ></div>

        <div
          className="absolute left-8 top-0 bottom-0 w-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #87CEEB 0, #87CEEB 4px, transparent 4px, transparent 8px)",
          }}
        ></div>
      </div>
      {children}
    </section>
  );
};

export default Section;
