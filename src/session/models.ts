export type UserInfo = {
  address: string | null;
  avatarPublicId: string | null;
  avatarUrl: string | null;
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  isVerified: boolean;
  lastName: string;
  phonePrimary: string;
  phoneSecondary: string | null;
  role: string;
  updatedAt: string;
};

export type Store = {
  userInfo: UserInfo | null;
  token: string | null;

  setUserInfo: (user: UserInfo | null) => void;
  setToken: (token: string) => void;
  clearUserInfo: () => void;
};