import { useMutation } from "@tanstack/react-query";
import type { ResetPasswordType } from "@/pages/auth/reset-password/models";
import { resetPasswordUser } from "@/pages/auth/reset-password/api";


export const useResetPassword = () => {
  return useMutation({
    mutationFn: (data: ResetPasswordType) => resetPasswordUser(data),
  });
};
