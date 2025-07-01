import type {
  AuthState,
  AuthStateProps,
} from "@/features/(auth)/interface/auth.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialAuthState: AuthState = {
  authenticated: false,
  user: null, // Replace with your user type if needed
};

const useAuthStore = create<AuthStateProps>()(
  persist(
    (set, get) => ({
      ...initialAuthState,
      isAuthenticated: () => {
        const state = get();
        return state.authenticated && state.user !== null;
      },
      setAuth: (authData: AuthState) =>
        set({
          authenticated: authData.authenticated,
          user: authData.user,
        }),
      logout: () => set(initialAuthState),
    }),
    {
      name: "auth-storage",
      // partialize: (state) => {
      //   // Persist only the necessary parts of the state
      //   return {
      //     authenticated: state.authenticated,
      //     user: state.user,
      //   };
      // },
    },
  ),
);

export { useAuthStore };
