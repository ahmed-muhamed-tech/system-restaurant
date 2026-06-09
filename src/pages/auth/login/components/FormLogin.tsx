import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

// components
import Button from "@/pages/auth/components/Button";
import Input from "@/pages/auth/components/Input";
import useLogin from "@/pages/auth/login/hooks/useLoginForm/index";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const { form, isPending, onSubmit } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        type="email"
        placeholder="البريد الاكتروني"
        name="email"
        register={register}
        error={errors.email}
      />

      <Input
        type={showPassword ? "text" : "password"}
        placeholder="كلمة المرور"
        handleShowPassword={() => {
          setShowPassword(!showPassword);
        }}
        icon={showPassword ? <IoIosEyeOff /> : <IoIosEye />}
        name="password"
        register={register}
        error={errors.password}
      />

      <Button
        text="تسجيل الدخول"
        isPending={isPending}
        waitingText="جاري تسجيل الدخول..."
      />

      <Link
        to="/auth/forget-password"
        className="text-sm text-primary font-black"
      >
        هل نسيت كلمه السر؟
      </Link>
    </form>
  );
}
