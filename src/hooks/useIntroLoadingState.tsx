import { create } from "zustand";

interface SessionState {
  isIntroLoading: boolean;
  setIsIntroLoading: (value: boolean) => void;
}

const useIntroLoadingState = create<SessionState>((set, get) => ({
  isIntroLoading: true,
  setIsIntroLoading: (value: boolean) => set({ isIntroLoading: value }),
}));

export default useIntroLoadingState;
