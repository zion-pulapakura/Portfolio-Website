import { create } from "zustand";

export type BackgroundType = "purple-green" | "green-purple";

interface DesignColours {
  leftSideColour: string;
  rightSideColour: string;
}

interface NavbarColours {
  logoColour: string;
  activeNavColour: string;
  activeNavBg: string;
  inactiveNavColour: string;
}

interface ColourStore {
  getBgColours: (bgType?: BackgroundType) => string;
  getDesignColours: (bgType?: BackgroundType) => DesignColours;
  getNavbarColours: (bgType?: BackgroundType) => NavbarColours;
}

const useColourStore = create<ColourStore>(() => ({
  getBgColours: (bgType?: BackgroundType) => {
    const isPurpleGreen = bgType === "purple-green";
    return isPurpleGreen
      ? "linear-gradient(to right, #462dd5 0%, #462dd5 66.67%, #cdf382 66.67%, #cdf382 100%)"
      : "linear-gradient(to right, #cdf382 0%,#cdf382 66.67%, #462dd5 66.67%, #462dd5 100%)";
  },

  getDesignColours: (bgType?: BackgroundType) => {
    const isPurpleGreen = bgType === "purple-green";
    return {
      leftSideColour: isPurpleGreen
        ? "rgba(205, 243, 130, 0.36)"
        : "rgba(70, 45, 213, 0.36)",
      rightSideColour: isPurpleGreen
        ? "rgba(70, 45, 213, 0.36)"
        : "rgba(205, 243, 130, 0.36)",
    };
  },

  getNavbarColours: (bgType?: BackgroundType) => {
    const isPurpleGreen = bgType === "purple-green";

    return {
      logoColour: isPurpleGreen ? "text-green-accent" : "text-purple-primary",
      activeNavColour: isPurpleGreen
        ? "text-purple-primary"
        : "text-green-accent",
      activeNavBg: isPurpleGreen ? "bg-purple-primary" : "bg-green-accent",
      inactiveNavColour: isPurpleGreen ? "text-gray-800" : "text-white",
    };
  },
}));

export default useColourStore;
