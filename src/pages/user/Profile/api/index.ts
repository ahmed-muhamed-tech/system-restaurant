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

export async function updateAvatar(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("/users/me/avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export async function removeAvatar(id: string) {
  const response = await api.delete("/users/me/avatar", {
    data: {
      publicId: id,
    },
  });

  return response;
}
