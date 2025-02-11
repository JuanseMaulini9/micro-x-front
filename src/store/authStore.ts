import { create } from "zustand";

interface Iauth {
  auth: boolean;
  setAuth: (state: boolean) => void;
}

export const useAuthStore = create<Iauth>((set) => ({
  auth: false,
  setAuth: (state) => set({ auth: state }),
}));
