import { api } from "@/services/api";

export const resetPasswordUser = async ({
  token,
  password,
}: {
  token: string;
  password: string;
}) => {
  const response = await api.post("/auth/reset-password", {
    token: token,
    new_password: password,
  });
  return response.data;
};