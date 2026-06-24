import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Store } from "@/session/models";

const useStore = create<Store>()(
  persist(
    (set) => ({
      userInfo: null,
      token: null,

      setUserInfo: (user) =>
        set({
          userInfo: user,
        }),

      setToken: (token) =>
        set({
          token,
        }),

      clearUserInfo: () =>
        set({
          userInfo: null,
          token: null,
        }),
    }),
    {
      name: "token",
      partialize: (state) => ({
        token: state.token,
        userInfo: state.userInfo,
      }),
    },
  ),
);

export default useStore;
