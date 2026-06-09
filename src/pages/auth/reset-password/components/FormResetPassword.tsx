import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import useReset from "@/pages/auth/reset-password/hooks/useResetPasswordForm";
import Input from "@/pages/auth/components/Input";
import Button from "@/pages/auth/components/Button";

export default function FormResetPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const { form, onSubmit, isPending } = useReset();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="كلمة المرور الجديدة"
        handleShowPassword={() => setShowPassword(!showPassword)}
        icon={showPassword ? <IoIosEyeOff /> : <IoIosEye />}
        name="password"
        register={register}
        error={errors.password}
      />

      <Button
        text="تحديث كلمة المرور"
        isPending={isPending}
        waitingText="جاري تحديث كلمه المرور..."
      />
    </form>
  );
}
