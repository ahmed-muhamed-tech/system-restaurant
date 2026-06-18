
export type verifyType = {
  email: string;
  code: string;
};


export type VerifyForm = {
  verify: string;
};


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

export type LoginSuccessResponse = {
  data: {
    access_token: string;
    user: UserInfo;
  };
  message: string;
  success: boolean;
};

export type ApiError = Error & {
  response: {
    data: {
      message: string | [];
      statusCode: number;
      path: string;
      timestamp: string;
    };
    status: number;
  };
};
