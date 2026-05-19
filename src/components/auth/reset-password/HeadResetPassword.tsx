import { Link } from "react-router-dom";

export default function HeadResetPassword() {
  return (
    <div className="mb-4">
      <h2 className="text-2xl mb-1 leading-snug">
        تعيين كلمة مرور جديدة <br />
        في <span className="text-primary font-black">مزاج</span>
      </h2>

      <p className="text-sm text-muted">
        أدخل كلمة مرور جديدة لحسابك. حاول تختار كلمة قوية تحتوي على حروف وأرقام.
      </p>

      <div className="mt-2 text-sm flex items-center gap-2">
        <span className="text-muted">تذكرت كلمة المرور؟</span>
        <Link
          to="/auth/login"
          className="text-primary font-semibold hover:underline"
        >
          تسجيل الدخول
        </Link>
      </div>
    </div>
  );
}