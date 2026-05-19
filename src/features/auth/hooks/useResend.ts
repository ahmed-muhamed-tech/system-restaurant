import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { emailSchema } from "../../../utils/checkInputs";
import { useNavigate } from "react-router-dom";
import { useResendCode } from "../hookAuth";
import { toast } from "react-toastify";
import type { ApiError, FormDataResend } from "../../../utils/types";

export default function useResend() {
  const form = useForm<FormDataResend>({
    resolver: zodResolver(emailSchema),
  });

  const navigate = useNavigate();

  const { mutate, isPending } = useResendCode();

  const onSubmit = (data: FormDataResend) => {
    mutate(data.email, {
      onSuccess: () => {
        toast.success("تم ارسال الكود مره اخري");
        navigate("/auth/verify-email");
      },

      onError: (error: Error) => {
        
        const apiError = error as ApiError;
        const message = apiError?.response?.data?.message;
        if (!message) {
          toast.error("حدث خطأ غير متوقع");
          return;
        }

        if (message === "User not found") {
          toast.warning("هذا الايميل غير موجود");
          return;
        }

        if (message === "Email is already verified") {
          toast.warning("تم التحقق من البريد الالكتروني بالفعل");
          return;
        }

        // safer parsing for cooldown messages
        const match = typeof message === "string" && message.match(/\d+/);

        if (match) {
          toast.warning(`يرجى الانتظار ${match[0]} ثانية قبل إعادة المحاولة`);
          return;
        }

        toast.error("حدث خطأ غير متوقع");
      },
    });
  };

  return { isPending, onSubmit, form };
}
