import { create } from "zustand";

type SectionId = "landing" | "projects" | "skills" | "about";

interface CurrentSectionState {
  currentSection: SectionId;
  setCurrentSection: (section: SectionId) => void;
}

export const useCurrentSectionStore = create<CurrentSectionState>((set) => ({
  currentSection: "landing",
  setCurrentSection: (section) => set({ currentSection: section }),
}));
