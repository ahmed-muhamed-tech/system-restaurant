import z from "zod";

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

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("صيغة البريد الإلكتروني غير صحيحة"),
});
