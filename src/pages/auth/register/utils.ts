import z from "zod";

export type RegisterSuccessResponse = {
  message: string;
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

export type RegisterFrom = {
  firstName: string;
  lastName: string;
  phone: string;
  phoneAlt?: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerSchema = z
  .object({
    firstName: z.string().min(2, "الاسم الأول لازم يكون حرفين على الأقل"),
    lastName: z.string().min(2, "الاسم الأخير لازم يكون حرفين على الأقل"),

    email: z.string().email("الإيميل غير صحيح"),

    phone: z
      .string()
      .min(11, "رقم الموبايل غير صحيح")
      .max(11, "رقم الموبايل غير صحيح"),

    phoneAlt: z.string().optional(),

    password: z
      .string()
      .min(8, "كلمة المرور لازم تكون 8 حروف على الأقل")
      .max(50, "كلمة المرور لازم تكون 50 حرف على الأكثر")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,50}$/,
        "لازم تحتوي على حرف كبير وصغير ورقم ورمز",
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمة المرور مش متطابقة",
    path: ["confirmPassword"],
  });