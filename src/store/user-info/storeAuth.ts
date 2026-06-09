
import type { UserInfo } from "@/utils/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  userInfo: UserInfo | null;
  token: string | null;

  setUserInfo: (user: UserInfo | null) => void;
  setToken: (token: string) => void;
  clearUserInfo: () => void;
};

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
      }),
    },
  ),
);

export default useStore;
