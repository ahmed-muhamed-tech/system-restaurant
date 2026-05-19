import Button from "../../Button";
import Input from "../../Input";
import { Link } from "react-router-dom";
import useVerify from "../../../features/auth/hooks/useVerify";

export default function FormVerifyEmail() {
  const { form, isPending, onSubmit } = useVerify();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="أدخل كود التحقق"
        name="verify"
        register={register}
        error={errors.verify}
      />

      <Button
        text="تفعيل الحساب"
        isPending={isPending}
        waitingText="جاري تفعيل الحساب..."
      />
      <Link to="/auth/resend-code" className="text-sm text-primary font-black">
        اعاده ارسال الكود مره اخري
      </Link>
    </form>
  );
}
