import { api } from "@/services/api";

export const forgetPasswordUser = async (_email: string) => {
  const response = await api.post("/auth/forgot-password", {
    email: _email,
  });
  return response.data;
};