import { Link } from "react-router-dom";
import FormRegister from "@/pages/auth/register/components/FormRegister";
import HeadRegister from "@/pages/auth/register/components/HeadRegister";

export default function Register() {
  return (
    <div>
      <HeadRegister />
      <FormRegister />

      <div className="mt-4 text-center">
        <h4 className="text-text">
          هل لديك حساب بالفعل؟{" "}
          <Link to="/auth/login" className="text-primary font-semibold">نسجيل الدخول</Link>
        </h4>
      </div>
    </div>
  );
}
