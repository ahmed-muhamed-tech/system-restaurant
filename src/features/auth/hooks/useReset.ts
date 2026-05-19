import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useResetPassword } from "../hookAuth";
import { resetpasswordSchema } from "../../../utils/checkInputs";
import type { ApiError } from "../../../utils/types";

export default function useReset() {
  const form = useForm({
    resolver: zodResolver(resetpasswordSchema),
  });

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const { mutate, isPending } = useResetPassword();

  let navigate = useNavigate();

  const onSubmit = (data: { password: string }) => {
    if (!token) {
      console.error("Invalid token");
      toast.error("حدث خطأ غير متوقع");
      return;
    }

    const { password } = data;

    mutate(
      { token, password },
      {
        onSuccess: () => {
          toast.success("تم اعاده تعيين كلمه المرور بنجاح");
          navigate("/auth/login");
        },
        onError: (error: Error) => {
          const apiError = error as ApiError;
          const { message } = apiError?.response?.data;
          if (message === "Invalid or expired reset token")
            toast.warning("رمز اعادة التعيين غير صالح او انتهت صلاحيته");
          else toast.error("حدث خطأ غير متوقع");
        },
      },
    );
  };
  return { onSubmit, isPending, form };
}
