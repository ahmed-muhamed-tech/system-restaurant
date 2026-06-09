import { Link } from "react-router-dom";

export default function HeadLogin() {
  return (
    <div className="mb-4">
      <h2 className="text-2xl mb-1 leading-snug">
        أهلاً بعودتك <br />
        إلى <span className="text-primary font-black">مزاج</span>
      </h2>

      <p className="text-sm text-muted">
        سجّل دخولك للوصول إلى حسابك وطلب وجبتك بسهولة.
      </p>

      <div className="mt-2 text-sm flex items-center gap-2">
        <span className="text-muted">ليس لديك حساب؟</span>
        <Link
          to="/auth/register"
          className="text-primary font-semibold hover:underline"
        >
          إنشاء حساب
        </Link>
      </div>
    </div>
  );
}
