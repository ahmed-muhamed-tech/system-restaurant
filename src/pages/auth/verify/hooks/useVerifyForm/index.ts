import { zodResolver } from "@hookform/resolvers/zod";
import { verifySchema } from "@/pages/auth/verify/utils";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import type {
  ApiError,
  LoginSuccessResponse,
  VerifyForm,
} from "@/pages/auth/verify/modules";
import { useVerifyEmailUser } from "@/pages/auth/verify/hooks/useVerifyQuery";
import useStore from "@/session/storeAuth";

export default function useVerify() {
  const form = useForm<VerifyForm>({
    resolver: zodResolver(verifySchema),
  });

  const { mutate, isPending } = useVerifyEmailUser();
  const navigate = useNavigate();

  const { setUserInfo, setToken } = useStore();

  const onSubmit = (data: VerifyForm) => {
    const { verify } = data;
    const email = localStorage.getItem("email");
    if (email === null) {
      toast.error("الايميل ليس موجود");
      return;
    }
    mutate(
      { email, code: verify },
      {
        onSuccess: (data: LoginSuccessResponse) => {

          const message = data.message;
          const { user, access_token } = data.data;

          setToken(access_token);
          setUserInfo(user);

          if (message === "Email verified successfully") {
            toast.success("تم تفعيل الحساب بنجاح");
            navigate("/");
            localStorage.removeItem("email");
          }
        },
        onError: (error: Error) => {
          const apiError = error as ApiError;
          const message = apiError?.response?.data?.message;
          if (message === "Email is already verified") {
            toast.warning("الايميل بالفعل تم تفعيله");
          } else if (message === "Invalid or expired verification code") {
            toast.warning(
              "الكود خطأ او انتهي الرجاء محاوله كتابه الايميل لارسال الكود مره اخري",
            );
          } else if (message === "User not found")
            toast.warning("المستخدم غير موجود");
          else if (message[0] === "Code must contain digits only")
            toast.warning("كلمه السر أرقام فقط");
        },
      },
    );
  };

  return { form, isPending, onSubmit };
}
