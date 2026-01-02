import React from "react";
import useColourStore, { BackgroundType } from "../store/colourStore";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  bgType?: BackgroundType;
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = "",
  bgType,
}) => {
  const getBgColours = useColourStore((state) => state.getBgColours);
  const background = getBgColours(bgType);
  
  const getDesignColours = useColourStore((state) => state.getDesignColours);
  const { leftSideColour, rightSideColour } = getDesignColours(bgType);

  return (
    <section
      id={id}
      className={`min-h-screen w-full relative overflow-hidden ${className}`}
      style={{ background }}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Large left side circle */}
        <div
          className="absolute bottom-32 left-32 w-48 h-48 rounded-full border"
          style={{ borderColor: leftSideColour }}
        />

        {/* Small left side circle */}
        <div
          className="absolute bottom-20 left-20 w-24 h-24 rounded-full border"
          style={{ borderColor: leftSideColour }}
        />

        {/* Small dot near left side circles */}
        <div
          className="absolute bottom-60 left-80 w-2 h-2 rounded-full"
          style={{ backgroundColor: leftSideColour }}
        />

        {/* Three horizontal lines on right side */}
        <div
          className="absolute top-[12%] right-0 h-[2px] w-36"
          style={{ backgroundColor: rightSideColour }}
        />
        <div
          className="absolute top-[14%] right-0 h-[2px] w-48"
          style={{ backgroundColor: rightSideColour }}
        />
        <div
          className="absolute top-[16%] right-0 h-[2px] w-36"
          style={{ backgroundColor: rightSideColour }}
        />
      </div>
      {children}
    </section>
  );
};

export default Section;
