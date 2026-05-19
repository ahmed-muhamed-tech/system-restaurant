import z from "zod";

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

export const verifySchema = z.object({
  verify: z
    .string()
    .min(6, "رمز التحقق يحتوي علي 6 أرقام")
    .max(6, "رمز التحقق يحتوي علي 6 أرقام"),
});

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

export const resetpasswordSchema = z.object({
  password: z
    .string()
    .min(8, "كلمة المرور لازم تكون 8 حروف على الأقل")
    .max(50, "كلمة المرور لازم تكون 50 حرف على الأكثر")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,50}$/,
      "لازم تحتوي على حرف كبير وصغير ورقم ورمز",
    ),
});

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("صيغة البريد الإلكتروني غير صحيحة"),
});
