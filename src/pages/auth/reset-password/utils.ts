import z from "zod";

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