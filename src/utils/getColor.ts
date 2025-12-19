export type BackgroundType = "purple-green" | "green-purple";

export interface SectionColors {
  background: string;
  leftSideColor: string;
  rightSideColor: string;
}

export const getColor = (bgType?: BackgroundType): SectionColors => {
  const isPurpleGreen = bgType === "purple-green";

  return {
    background: isPurpleGreen
      ? "linear-gradient(to right, #462dd5 0%, #462dd5 66.67%, #cdf382 66.67%, #cdf382 100%)"
      : "linear-gradient(to right, #cdf382 0%,#cdf382 66.67%, #462dd5 66.67%, #462dd5 100%)",
    leftSideColor: isPurpleGreen
      ? "rgba(205, 243, 130, 0.36)"
      : "rgba(70, 45, 213, 0.36)",
    rightSideColor: isPurpleGreen
      ? "rgba(70, 45, 213, 0.36)"
      : "rgba(205, 243, 130, 0.36)",
  };
};
