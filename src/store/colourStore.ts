import { create } from "zustand";

export type BackgroundType = "purple-green" | "green-purple";

interface DesignColors {
  leftSideColor: string;
  rightSideColor: string;
}

interface ColourStore {
  getBgColours: (bgType?: BackgroundType) => string;
  getDesignColours: (bgType?: BackgroundType) => DesignColors;
}

const useColourStore = create<ColourStore>(() => ({
  getBgColours: (bgType?: BackgroundType): string => {
    const isPurpleGreen = bgType === "purple-green";
    return isPurpleGreen
      ? "linear-gradient(to right, #462dd5 0%, #462dd5 66.67%, #cdf382 66.67%, #cdf382 100%)"
      : "linear-gradient(to right, #cdf382 0%,#cdf382 66.67%, #462dd5 66.67%, #462dd5 100%)";
  },

  getDesignColours: (bgType?: BackgroundType): DesignColors => {
    const isPurpleGreen = bgType === "purple-green";
    return {
      leftSideColor: isPurpleGreen
        ? "rgba(205, 243, 130, 0.36)"
        : "rgba(70, 45, 213, 0.36)",
      rightSideColor: isPurpleGreen
        ? "rgba(70, 45, 213, 0.36)"
        : "rgba(205, 243, 130, 0.36)",
    };
  },
}));

export default useColourStore;
