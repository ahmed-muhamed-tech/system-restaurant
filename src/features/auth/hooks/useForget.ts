import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { emailSchema } from "../../../utils/checkInputs";
import { useForgetPassword } from "../hookAuth";
import { toast } from "react-toastify";
import type { ApiError } from "../../../utils/types";

export default function useForget() {
  const form = useForm({
    resolver: zodResolver(emailSchema),
  });

  const { mutate, isPending } = useForgetPassword();

  const onSubmit = (data: { email: string }) => {
    const { email } = data;
    mutate(email, {
      onSuccess: () => {
        toast.success("تم ارسال رابط التفعيل تحقق من الايميل لديك");
        form.reset();
      },
      onError: (error: Error) => {
        const apiError = error as ApiError;
        const { message } = apiError?.response?.data;
        if (message === "Email not found") toast.warning("الايميل غير موجود");
        else toast.error("حدث خطأ غير متوقع");
      },
    });
  };

  return { form, onSubmit, isPending };
}
