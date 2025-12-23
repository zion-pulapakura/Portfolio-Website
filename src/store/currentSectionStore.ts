import { create } from "zustand";

type SectionId = "landing" | "projects" | "skills" | "about";

interface CurrentSectionState {
  currentSection: SectionId;
  setCurrentSection: (section: SectionId) => void;
  getNextSection: () => SectionId | undefined;
}

const useCurrentSection = create<CurrentSectionState>((set, get) => ({
  currentSection: "landing",
  setCurrentSection: (section) => set({ currentSection: section }),
  getNextSection: () => {
    const currentSection = get().currentSection;
    switch (currentSection) {
      case "landing":
        return "projects";
      case "projects":
        return "skills";
      case "skills":
        return "about";
    }
  },
}));

export default useCurrentSection;
