import { create } from "zustand";

export const sessions = ["home", "context", "battle", "cq", "summary", "hero"];

const getIndexOfSession = (session) => {
  return sessions.findIndex((s) => s == session);
};

interface SessionState {
  index: number;
  isEnd: boolean;
  isBeginning: boolean;
  setIndex: (value: number) => void;

  getSession: () => string;
  setSession: (value: string) => void;

  setIsEnd: (value: boolean) => void;
  setIsBeginning: (value: boolean) => void;

  onNextSession: () => boolean;
  onPrevSession: () => boolean;
}

const useSessionTransitionState = create<SessionState>((set, get) => ({
  index: 0,
  isBeginning: true,
  isEnd: true,
  setIndex: (value: number) => {
    set({ index: value });
  },
  setSession: (value: string) => {
    const newIndex = getIndexOfSession(value);
    if (newIndex !== -1) {
      set({ index: newIndex });
    }
  },
  getSession: () => {
    const { index } = get();
    return sessions[index];
  },
  setIsBeginning: (value) => set({ isBeginning: value }),
  setIsEnd: (value) => set({ isEnd: value }),
  onPrevSession: () => {
    const { index } = get();
    if (index > 0) {
      const newIndex = index - 1;
      set({ index: newIndex });
      return true;
    }
    return false;
  },
  onNextSession: () => {
    const { index } = get();
    if (index < sessions.length - 1) {
      const newIndex = index + 1;
      set({ index: newIndex });
      return true;
    }
    return false;
  },
}));

export default useSessionTransitionState;
