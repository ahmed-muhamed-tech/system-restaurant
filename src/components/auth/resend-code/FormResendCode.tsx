import Input from "../../Input";
import Button from "../../Button";
import useResend from "../../../features/auth/hooks/useResend";

export default function FormResendCode() {
  const { form, isPending, onSubmit } = useResend();
  const {
    register,
    formState: { errors },
    handleSubmit,
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

      <Button
        text="اعاده ارسال كود التحقق"
        waitingText="جاري اعاده ارسال كود التحقق"
        isPending={isPending}
      />
    </form>
  );
}
