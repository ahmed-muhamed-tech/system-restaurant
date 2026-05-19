import { Link } from "react-router-dom";

export default function HeadForgetPassword() {
  return (
    <div className="mb-4">
      <h2 className="text-2xl mb-1 leading-snug">
        نسيت كلمة المرور؟ <br />
        في <span className="text-primary font-black">مزاج</span>
      </h2>

      <p className="text-sm text-muted">
        أدخل بريدك الإلكتروني وسنرسل لك رابط لإعادة تعيين كلمة المرور.
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
