import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      role: null,

      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      setRole: (role) => set({ role }),

      login: (userData, token) =>
        set({
          user: userData,
          token,
          isAuthenticated: true,
          role: userData.role,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          role: null,
        }),

      updateProfile: (updatedData) =>
        set((state) => ({
          user: { ...state.user, ...updatedData },
        })),

      checkAuth: () => {
        // This will be used to verify token validity on app start
        return true;
      },
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        role: state.role,
      }),
    }
  )
);

export default useAuthStore;
