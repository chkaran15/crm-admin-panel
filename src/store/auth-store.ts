import type { AuthState } from "@/features/(auth)/interface/auth.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialAuthState = {
  isAuthenticated: false,
  loading: false,
  user: null, // Replace with your user type if needed
  setAuth: () => {},
  logout: () => {},
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => {
      return {
        ...initialAuthState,
        setAuth: (prevAuth) => set({ ...prevAuth, loading: false }),
        logout: () => set(initialAuthState),
      };
    },
    {
      name: "auth-storage", // Name of the storage key
    },
  ),
);

export { useAuthStore };
