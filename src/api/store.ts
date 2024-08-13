import { StoreState, Actions, Conference, Quote } from "@/types/types";
import { create } from "zustand";
import { famousQuotes } from "./quotes";

export const useStore = create<StoreState & Actions>((set) => ({
  allData: [] as Conference[],
  quotes: [] as Quote[],
  setAllData: (data: Conference[]) => set({ allData: data }),
  setQuotes: (data: Quote[]) => set({ quotes: data }),
  getRandomQuote: () => {
    const randomQuote =
      famousQuotes[Math.floor(Math.random() * famousQuotes.length)];
    return randomQuote;
  },
}));
