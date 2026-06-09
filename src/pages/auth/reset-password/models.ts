export type ResetPasswordType = {
  token: string;
  password: string;
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
