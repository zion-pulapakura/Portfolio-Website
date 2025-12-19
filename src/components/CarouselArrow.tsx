import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface CarouselArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  show: boolean;
}

const CarouselArrow: React.FC<CarouselArrowProps> = ({
  direction,
  onClick,
  show,
}) => {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={`absolute ${
        isLeft ? "left-0 -translate-x-4" : "right-0 translate-x-4"
      } top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full ${
        isLeft ? "bg-purple-primary" : "bg-green-accent"
      } flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shadow-lg ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label={`Scroll ${direction}`}
    >
      {isLeft ? (
        <IoIosArrowBack className={`w-6 h-6 text-white`} />
      ) : (
        <IoIosArrowForward className={`w-6 h-6 text-gray-800`} />
      )}
    </button>
  );
};

export default CarouselArrow;
