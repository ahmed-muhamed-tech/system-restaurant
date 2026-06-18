import { api } from "@/services/api";

export const resendCodeUser = async (email: string) => {
  const response = await api.post("/auth/resend-code", {
    email: email,
  });

  return response.data;
};