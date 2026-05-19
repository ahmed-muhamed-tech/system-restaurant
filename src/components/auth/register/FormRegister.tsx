import Input from "../../Input";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Button from "../../Button";
import { useState } from "react";
import useRegisterForm from "../../../features/auth/hooks/useRegisterForm";

export default function FormRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { form, onSubmit, isPending } = useRegisterForm();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  return (
    <form
      className="flex flex-col gap-2 lg:gap-4 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4 w-full flex-col md:flex-row items-center">
        <Input
          type="text"
          placeholder="الاسم الأول"
          name="firstName"
          register={register}
          error={errors.firstName}
        />
        <Input
          type="text"
          placeholder="الاسم الأخير"
          name="lastName"
          register={register}
          error={errors.lastName}
        />
      </div>

      <Input
        type="email"
        placeholder="البريد الإلكتروني"
        icon={<MdOutlineMailOutline />}
        name="email"
        register={register}
        error={errors.email}
      />

      <Input
        type="text"
        placeholder="رقم الموبايل الأساسي"
        icon={<IoCallOutline />}
        name="phone"
        register={register}
        error={errors.phone}
      />

      <Input
        type="text"
        placeholder="رقم موبايل إضافي (اختياري)"
        icon={<IoCallOutline />}
        name="phoneAlt"
        register={register}
        error={errors.phoneAlt}
      />

      <div className="flex gap-4 w-full flex-col md:flex-row items-center">
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

        <Input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="كلمة المرور"
          handleShowPassword={() => {
            setShowConfirmPassword(!showConfirmPassword);
          }}
          icon={showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
        />
      </div>
      <Button
        text="انشاء حساب"
        isPending={isPending}
        waitingText="جاري انشاء الحساب..."
      />
    </form>
  );
}
