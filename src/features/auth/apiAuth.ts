import { api } from "../../services/api";
type dataUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  phoneAlt?: string;
};

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

export const forgetPasswordUser = async (_email: string) => {
  const response = await api.post("/auth/forgot-password", {
    email: _email,
  });
  return response.data;
};

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

export const resendCodeUser = async (email: string) => {
  const response = await api.post("/auth/resend-code", {
    email: email,
  });

  return response.data;
};

export const fetchUserInfo = async () => {
  const response = await api("/users/me")
  return response.data;
}