import useForget from "../../../features/auth/hooks/useForget";
import Button from "../../Button";
import Input from "../../Input";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function FormForgetPassword() {
  const { form, isPending, onSubmit } = useForget();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={"email"}
        placeholder="البريد الالكتروني"
        icon={<MdOutlineMarkEmailRead />}
        name="email"
        register={register}
        error={errors.email}
      />

      <Button
        text="ارسال رابط التفعيل"
        isPending={isPending}
        waitingText="جاري ارسال رابط التفعيل..."
      />
    </form>
  );
}
