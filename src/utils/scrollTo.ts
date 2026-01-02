export const scrollTo = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const NAVBAR_HEIGHT = 80;
  const sectionPosition = sectionId === "landing" ? 0 : section.offsetTop;
  
  window.scrollTo({
    top: sectionPosition,
    behavior: "smooth",
  });
};  