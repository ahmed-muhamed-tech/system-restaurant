import type { UserInfo } from "@/utils/types/auth.types";

export type verifyType = {
  email: string;
  code: string;
};


export type VerifyForm = {
  verify: string;
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
