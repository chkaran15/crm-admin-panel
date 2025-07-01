export type Role = "admin" | "user"; // Define roles as needed

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  image?: string; // Optional field for user image
}

export interface AuthState {
  authenticated: boolean;
  user: User | null;
}

export interface AuthActions {
  isAuthenticated: () => boolean;
  setAuth: (auth: AuthState) => void;
  logout: () => void;
}

export type AuthStateProps = AuthState & AuthActions;
