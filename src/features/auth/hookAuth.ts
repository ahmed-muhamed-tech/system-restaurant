import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchUserInfo,
  forgetPasswordUser,
  loginUser,
  registerUser,
  resendCodeUser,
  resetPasswordUser,
  verifyEmailUser,
} from "./apiAuth";
import useStore from "./storeAuth";
import { useEffect } from "react";

type dataUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  phoneAlt?: string;
};

type verifyType = {
  email: string;
  code: string;
};

type loginType = {
  email: string;
  password: string;
};

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data: dataUser) => registerUser(data),
  });
};

export const useVerifyEmailUser = () => {
  return useMutation({
    mutationFn: (data: verifyType) => verifyEmailUser(data),
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (data: loginType) => loginUser(data),
  });
};

export const useForgetPassword = () => {
  return useMutation({
    mutationFn: (_email: string) => forgetPasswordUser(_email),
  });
};

type ResetPasswordType = {
  token: string;
  password: string;
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (data: ResetPasswordType) => resetPasswordUser(data),
  });
};

export const useResendCode = () => {
  return useMutation({
    mutationFn: (email: string) => resendCodeUser(email),
  });
};

export const useMe = () => {
  const { setUserInfo } = useStore();

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: fetchUserInfo,
    retry: false,
  });

  useEffect(() => {
    if (data) {
      setUserInfo(data.data);
      return;
    }
    if (isError) {
      setUserInfo(null);
      return
    }
  }, [data, isSuccess, isError, isLoading]);

  return { data, isSuccess, isLoading, isError };
};
