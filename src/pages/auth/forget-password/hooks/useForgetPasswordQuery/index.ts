import { useMutation } from "@tanstack/react-query";
import { forgetPasswordUser } from "@/pages/auth/forget-password/api";

export const useForgetPassword = () => {
  return useMutation({
    mutationFn: (_email: string) => forgetPasswordUser(_email),
  });
};
