import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartStore } from "../models";

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      count: 0,

      setCount: (newCount: number) =>
        set(() => ({
          count: newCount,
        })),

      inc: () =>
        set((state) => ({
          count: state.count + 1,
        })),

      dec: () =>
        set((state) => ({
          count: Math.max(0, state.count - 1),
        })),
    }),
    {
      name: "cart-storage",
    },
  ),
);
