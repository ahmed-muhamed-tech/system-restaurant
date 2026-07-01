import { api } from "@/services/api";
import type { UserInfo } from "../profile.types";

export async function getUser() {
  const response = await api.get("/users/me");
  return response.data;
}

export async function updateDataUser({
  firstName,
  lastName,
  phonePrimary,
  phoneSecondary,
  address,
  
}: UserInfo) {
  const body = {
    firstName,
    lastName,
    phonePrimary,
    phoneSecondary,
    address,
  };
  const response = await api.patch("/users/me", body);
  return response.data;
}
