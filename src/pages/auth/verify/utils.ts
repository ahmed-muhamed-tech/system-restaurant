import z from "zod";

export const verifySchema = z.object({
  verify: z
    .string()
    .min(6, "رمز التحقق يحتوي علي 6 أرقام")
    .max(6, "رمز التحقق يحتوي علي 6 أرقام"),
});
