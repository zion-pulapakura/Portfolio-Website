const NAVBAR_HEIGHT = 80;

export const scrollTo = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const sectionPosition =
    sectionId === "landing" ? 0 : section.offsetTop - NAVBAR_HEIGHT;

  window.scrollTo({
    top: sectionPosition,
    behavior: "smooth",
  });
};

export const getActiveSection = (sections: string[]): string => {
  const scrollPosition = window.scrollY + NAVBAR_HEIGHT;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }

  return sections[0] || "landing";
};

export const setupScrollListener = (
  sections: string[],
  onActiveSectionChange: (sectionId: string) => void
): (() => void) => {
  const handleScroll = () => {
    onActiveSectionChange(getActiveSection(sections));
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
};
