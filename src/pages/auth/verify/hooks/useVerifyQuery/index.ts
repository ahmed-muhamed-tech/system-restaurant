import type { verifyType } from "@/pages/auth/verify/models";
import { useMutation } from "@tanstack/react-query";
import { verifyEmailUser } from "@/pages/auth/verify/api";

export const useVerifyEmailUser = () => {
  return useMutation({
    mutationFn: (data: verifyType) => verifyEmailUser(data),
  });
};
