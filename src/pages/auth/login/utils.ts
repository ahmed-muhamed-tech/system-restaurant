
import type { UserInfo } from "@/utils/types/auth.types";
import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("صيغة البريد الإلكتروني غير صحيحة"),

  password: z
    .string()
    .min(1, "كلمة المرور مطلوبة")
    .min(8, "كلمة المرور لازم تكون 8 حروف على الأقل")
    .max(50, "كلمة المرور لازم تكون 50 حرف على الأكثر"),
});

export type LoginSuccessResponse = {
  data: {
    access_token: string;
    user: UserInfo;
  };
  message: string;
  success: boolean;
};

export type LoginFrom = {
  email: string;
  password: string;
};

// utils/types.ts
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
