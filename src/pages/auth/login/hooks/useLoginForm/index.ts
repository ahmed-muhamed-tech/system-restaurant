import { useForm } from "react-hook-form";
import type {
  ApiError,
  LoginFrom,
  LoginSuccessResponse,
} from "@/pages/auth/login/utils";
import { useLoginUser } from "@/pages/auth/login/hooks/useLoginQuery";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/pages/auth/login/utils";
import useStore from "@/session/storeAuth";

export default function useLogin() {
  const form = useForm<LoginFrom>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useLoginUser();
  let navigate = useNavigate();
  const { setUserInfo, setToken } = useStore();

  const onSubmit = (data: LoginFrom) => {
    const { email, password } = data;

    mutate(
      { email, password },
      {
        onSuccess: (data: LoginSuccessResponse) => {
          const { user, access_token } = data.data;
          setToken(access_token);
          setUserInfo(user);
          navigate("/");
          toast.success("تم تسجيل الدخول بنجاح");
        },
        onError: (error: Error) => {
          const apiError = error as ApiError;
          const { message } = apiError?.response?.data;
          if (message === "Invalid email or password")
            toast.warning("هناك خطا في الايميل او الباسوورد");
          else if (message === "Please verify your email before logging in")
            toast.warning(
              "هذا الايميل لم يتم تفعيله بعد انظر الي البريد الالكتروني وتحقق من ذالك",
            );
          else toast.error("حدث خطأ غير متوقع");
        },
      },
    );
  };

  return { form, onSubmit, isPending };
}
