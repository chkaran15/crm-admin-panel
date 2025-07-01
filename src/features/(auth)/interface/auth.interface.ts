export interface User {
  id: string;
  name: string;
  email: string;
  image?: string; // Optional field for user image
}

export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null; // Allow null for unauthenticated state
  setAuth: (prevAuth: AuthState) => void;
  logout: () => void;
}
