import { useMutation } from "@tanstack/react-query";
import { resendCodeUser } from "@/pages/auth/resend-code/api";

export const useResendCode = () => {
  return useMutation({
    mutationFn: (email: string) => resendCodeUser(email),
  });
};