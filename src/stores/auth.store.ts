import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: number;
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  
  setUser: (user: User) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  checkAuth: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,

      setUser: (user) => set({ user }),
      
      setTokens: (accessToken, refreshToken) => 
        set({ 
          accessToken, 
          refreshToken,
          isAuthenticated: true 
        }),
      
      logout: () => 
        set({ 
          user: null, 
          accessToken: null, 
          refreshToken: null,
          isAuthenticated: false 
        }),
      
      checkAuth: () => {
        const { accessToken } = get();
        return !!accessToken;
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);