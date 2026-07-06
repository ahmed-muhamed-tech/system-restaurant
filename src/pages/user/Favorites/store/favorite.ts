import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FavoriteStore } from "../favorite.types";

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set) => ({
      count: 0,

      inc: () =>
        set((state) => ({
          count: state.count + 1,
        })),

      setCount: (newCount: number) =>
        set(() => ({
          count: newCount,
        })),

      dec: () =>
        set((state) => ({
          count: Math.max(0, state.count - 1),
        })),
    }),
    {
      name: "favorite-storage",
    },
  ),
);
