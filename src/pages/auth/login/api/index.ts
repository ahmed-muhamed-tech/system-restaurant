import { api } from "@/services/api";

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/auth/login", {
    email: email,
    password: password,
  });

  return response.data;
};