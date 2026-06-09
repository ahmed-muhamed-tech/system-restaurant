import { useMutation } from "@tanstack/react-query";
import type { dataUser } from "@/pages/auth/register/models";
import { registerUser } from "@/pages/auth/register/api";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data: dataUser) => registerUser(data),
  });
};