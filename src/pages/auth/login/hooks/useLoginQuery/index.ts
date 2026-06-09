import { useMutation } from "@tanstack/react-query";
import type { loginType } from "@/pages/auth/login/models";
import { loginUser } from "@/pages/auth/login/api";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (data: loginType) => loginUser(data),
  });
};