import { useForm } from "react-hook-form";
import { registerSchema } from "@/pages/auth/register/utils";
import type {
  ApiError,
  RegisterFrom,
  RegisterSuccessResponse,
} from "@/pages/auth/register/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useRegisterUser } from "@/pages/auth/register/hooks/useRegisterQuery";
import { toast } from "react-toastify";

export default function useRegisterForm() {
  let navigate = useNavigate();
  const { mutate, isPending } = useRegisterUser();

  const form = useForm<RegisterFrom>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFrom) => {
    const { firstName, lastName, email, password, phone, phoneAlt } = data;
    mutate(
      { firstName, lastName, email, password, phone, phoneAlt },
      {
        onSuccess: (data: RegisterSuccessResponse) => {
          const { message } = data;

          if (
            message ===
            "Registration successful. Please check your email for the verification code."
          ) {
            localStorage.setItem("email", email);
            form.reset();
            toast.success("تحقق من الايميل");
            navigate("/auth/verify-email");
          }
        },
        onError: (error: Error) => {
          const apiError = error as ApiError;
          const message = apiError?.response?.data?.message;
          if (message === "Email already in use")
            toast.warning("الحساب مسجل بالفعل");
          else if (message[0] === "Invalid Egyptian phone number")
            toast.warning("هذا الرقم غير مصري");
          else if (message === "Phone number already in use")
            toast.warning("هذا الرقم مستخدم بالفعل");
          else toast.error("حدث خطأ غير متوقع");
        },
      },
    );
  };

  return { form, onSubmit, isPending };
}
