import { create } from "zustand";

const useAppStore = create((set) => ({
  isSignUpOpen: false,
  isLoginOpen: false,
  openSignUp: () => set({ isSignUpOpen: true }),
  closeSignUp: () => set({ isSignUpOpen: false }),
  openLogin: () => set({ isLoginOpen: true }),
  closeLogin: () => set({ isLoginOpen: false }),
}));

export default useAppStore;
