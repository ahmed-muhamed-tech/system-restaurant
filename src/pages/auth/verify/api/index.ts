import { api } from "@/services/api";

export const verifyEmailUser = async ({
  email,
  code,
}: {
  email: string | null;
  code: string;
}) => {
  const response = await api.post("/auth/verify-email", {
    email: email,
    code: code,
  });

  return response.data;
};

