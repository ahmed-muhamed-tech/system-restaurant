import type { UserInfo } from "@/utils/types/auth.types";

export type Store = {
  userInfo: UserInfo | null;
  token: string | null;

  setUserInfo: (user: UserInfo | null) => void;
  setToken: (token: string) => void;
  clearUserInfo: () => void;
};