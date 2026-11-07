import { create } from "zustand";

// Define user type
interface User {
    name: string;
    email: string;
    image: string;
}

// Define store type
interface UserStore {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,

    setUser: (user) => set({ user }),

    clearUser: () => set({ user: null }),
}));