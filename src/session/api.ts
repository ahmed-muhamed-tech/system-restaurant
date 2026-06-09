import { api } from "@/services/api";

export const fetchUserInfo = async () => {
  const response = await api("/users/me")
  return response.data;
}