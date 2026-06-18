import type { dataUser } from "@/pages/auth/register/models";
import { api } from "@/services/api";

export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
  phone,
  phoneAlt,
}: dataUser) => {
  const response = await api.post("/auth/register", {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    phone_primary: phone,
    ...(phoneAlt && { phone_secondary: phoneAlt }),
  });

  return response.data;
};