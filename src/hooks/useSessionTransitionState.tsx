import { create } from "zustand";

export const sessions = [
  "home",
  "context",
  "battle",
  "victory",
  "tactic",
  "summary",
  "hero",
];

const initialIsBeginning = [true, true, true, true, true, true, true];
const initialIsEnd = [true, true, true, true, true, true, true];

const getIndexOfSession = (session) => {
  return sessions.findIndex((s) => s === session);
};

interface SessionState {
  index: number;
  isEnd: boolean[];
  isBeginning: boolean[];
  transiting: boolean;
  setTransiting: (value: boolean) => void;
  sliding: boolean;
  setSliding: (value: boolean) => void;
  setIndex: (value: number) => void;
  getSession: () => string;
  setSession: (value: string) => void;
  setIsEnd: (index: number, value: boolean) => void;
  setIsBeginning: (index: number, value: boolean) => void;
  getIsEnd: (index: number) => boolean;
  getIsBeginning: (index: number) => boolean;
  onNextSession: () => boolean;
  onPrevSession: () => boolean;
}

const useSessionTransitionState = create<SessionState>((set, get) => ({
  index: 0,
  isEnd: initialIsEnd,
  isBeginning: initialIsBeginning,
  setIndex: (value: number) => {
    set({ index: value });
  },
  transiting: false, // Initialize transiting
  setTransiting: (value: boolean) => set({ transiting: value }), // Implement setTransiting
  sliding: false, // Initialize transiting
  setSliding: (value: boolean) => set({ sliding: value }), // Implement setTransiting
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
  setIsEnd: (index: number, value: boolean) => {
    set((state) => {
      const updatedIsEnd = [...state.isEnd];
      updatedIsEnd[index] = value;
      return { isEnd: updatedIsEnd };
    });
  },
  setIsBeginning: (index: number, value: boolean) => {
    set((state) => {
      const updatedIsBeginning = [...state.isBeginning];
      updatedIsBeginning[index] = value;
      return { isBeginning: updatedIsBeginning };
    });
  },
  getIsEnd: (index: number) => {
    const { isEnd } = get();
    return isEnd[index];
  },
  getIsBeginning: (index: number) => {
    const { isBeginning } = get();
    return isBeginning[index];
  },
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
