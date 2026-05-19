<div align="center">

# 🔥 بازوكا — Bazooka

### منصة إدارة طلبات وتوصيل الأكل

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?style=flat-square&logo=reactquery)
![Zustand](https://img.shields.io/badge/Zustand-4-brown?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)

</div>

---

## 📋 نظرة عامة

**بازوكا** هو نظام متكامل لإدارة طلبات الأكل والتوصيل.  
الفرونت اند مبني بـ React + TypeScript ويتواصل مع NestJS Backend عن طريق REST API.

### الأدوار في النظام

| الدور | الصلاحيات |
|-------|-----------|
| 🧑‍💻 **زبون (User)** | تصفح المنيو، إضافة للسلة، متابعة الطلب |
| 👨‍💼 **أدمن (Admin)** | إدارة الطلبات والمنتجات وفريق التوصيل |
| 🛵 **مندوب (Delivery)** | استلام الطلبات وتحديث حالة التوصيل |

---

## 🛠 التقنيات المستخدمة

```
Frontend Framework   →  React 18 + TypeScript 5
Build Tool           →  Vite 5
Styling              →  Tailwind CSS 3
State Management     →  Zustand 4 (مع persist)
Server State         →  TanStack Query 5
HTTP Client          →  Axios
Form Management      →  React Hook Form + Zod
Routing              →  React Router v6
Notifications        →  React Toastify
```

---

## 📁 هيكل المشروع

```
src/
├── components/                # UI Components قابلة لإعادة الاستخدام
│   ├── Button.tsx             # زر عام مع loading state
│   ├── Input.tsx              # حقل إدخال مع icon وvalidation
│   ├── AuthLogoLeft.tsx       # اللوحة الزخرفية في صفحات الـ Auth
│   └── auth/                  # مكونات خاصة بالـ Auth
│       ├── login/
│       ├── register/
│       ├── verify/
│       ├── forget-password/
│       ├── reset-password/
│       └── resend-code/
│
├── core/                      # إعدادات جوهرية
│   ├── Routes.tsx             # Router + QueryClientProvider
│   └── ProtectedRoute.tsx     # حماية الصفحات بالـ role
│
├── features/                  # الوحدات الرئيسية
│   └── auth/
│       ├── apiAuth.ts         # API calls للـ Auth endpoints
│       ├── hookAuth.ts        # useMutation hooks
│       ├── storeAuth.ts       # Zustand store (token + userInfo)
│       └── hooks/             # Custom hooks لكل form
│           ├── useLogin.ts
│           ├── useRegisterForm.ts
│           ├── useVerify.ts
│           ├── useForget.ts
│           ├── useReset.ts
│           └── useResend.ts
│
├── layouts/                   # تخطيطات الصفحات
│   ├── AuthLayout.tsx         # Layout صفحات التسجيل
│   └── MainLayout.tsx         # Layout الصفحات الرئيسية + Sidebar
│
├── pages/                     # صفحات الـ Routing
│   ├── Home.tsx
│   └── auth/
│       ├── Login.tsx
│       ├── Register.tsx
│       ├── Verify.tsx
│       ├── ForgetPassword.tsx
│       ├── ResetPassword.tsx
│       └── ResendCode.tsx
│
├── services/
│   └── api.ts                 # Axios instance + interceptors
│
└── utils/
    ├── types.ts               # TypeScript types وinterfaces
    └── checkInputs.ts         # Zod validation schemas
```

---

## ⚙️ متطلبات التشغيل

- Node.js **v18.0.0** أو أحدث
- npm **v9+** أو yarn **v1.22+**
- Backend NestJS شغال على `http://localhost:3000`

---

## 🚀 تثبيت وتشغيل المشروع

### 1 — Clone المشروع

```bash
git clone https://github.com/your-username/bazooka-frontend.git
cd bazooka-frontend
```

### 2 — تثبيت الـ Dependencies

```bash
npm install
```

### 3 — إعداد ملف البيئة

```bash
cp .env.example .env.local
```

افتح `.env.local` وعدّل القيم:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### 4 — تشغيل المشروع

```bash
# Development
npm run dev

# Build للـ Production
npm run build

# Preview الـ Build
npm run preview
```

---

## 🗺 صفحات الموقع

| URL | الصفحة | الصلاحية |
|-----|--------|----------|
| `/` | الرئيسية | مسجل دخول |
| `/auth/login` | تسجيل الدخول | الكل |
| `/auth/register` | إنشاء حساب | الكل |
| `/auth/verify-email` | التحقق من الإيميل | الكل |
| `/auth/forget-password` | نسيان كلمة السر | الكل |
| `/auth/reset-password` | إعادة تعيين كلمة السر | الكل |
| `/auth/resend-code` | إعادة إرسال كود التفعيل | الكل |
| `/foods` | قائمة الوجبات | زبون |
| `/order` | تتبع الطلب | زبون |
| `/admin` | داشبورد الأدمن | أدمن |
| `/delivery` | داشبورد المندوب | مندوب |

---

## 🔄 فلو المستخدم

```
مستخدم جديد:
Register → Verify Email → Home

مستخدم موجود:
Login → Home (أو Admin / Delivery حسب الـ role)

نسيان كلمة السر:
Forget Password → (رابط على الإيميل) → Reset Password → Login

كود التفعيل انتهى:
Verify Email → Resend Code → Verify Email
```

---

## 🔐 نظام الـ Authentication

### Token Management
- الـ **access_token** بيتحفظ في Zustand persist تحت اسم `token`
- في كل request، الـ Axios interceptor بيجيب الـ token ويحطه في الـ Authorization header تلقائياً

```ts
// كيفية عمل الـ interceptor
api.interceptors.request.use((config) => {
  const raw = localStorage.getItem("token")
  const token = JSON.parse(raw)?.state?.token
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
```

### Route Protection
```tsx
// حماية الصفحة بالـ token فقط
<ProtectedRoute>
  <MainLayout />
</ProtectedRoute>

// حماية بـ role معين
<ProtectedRoute allowedRoles={["admin"]}>
  <AdminLayout />
</ProtectedRoute>
```

---

## 📊 حالات الطلب

| الحالة | من يغيرها | يظهر للزبون؟ |
|--------|----------|--------------|
| ⏳ انتظار | أدمن | ✅ |
| ✅ موافقة | أدمن | ✅ |
| 🔥 جاري التحضير | أدمن | ✅ |
| 📦 تم الانتهاء | أدمن | ❌ |
| 🛵 استلم المندوب | مندوب | ✅ |
| 🚀 في الطريق | مندوب | ✅ |
| 🎉 تم التوصيل | مندوب | ✅ |

---

## 🧩 نمط الـ Custom Hooks

كل form عندها hook مستقل يحتوي على:
- إعداد الـ form (react-hook-form + zod)
- الـ mutation
- منطق الـ onSuccess و onError
- الـ navigation

```ts
// مثال — استخدام useLogin في الـ component
export default function FormLogin() {
  const { form, onSubmit, isPending } = useLogin()
  const { register, formState: { errors } } = form

  return (
    <form onSubmit={onSubmit}>
      <Input name="email" register={register} error={errors.email} />
      <Button text="دخول" isPending={isPending} />
    </form>
  )
}
```

---

## 🔷 TypeScript Types المهمة

```ts
// شكل بيانات اليوزر
type UserInfo = {
  id: string
  firstName: string
  lastName: string
  email: string
  role: string          // "user" | "admin" | "delivery"
  isVerified: boolean
  phonePrimary: string
  phoneSecondary: string | null
  address: string | null
  avatarUrl: string | null
}

// شكل الـ API Error
type ApiError = Error & {
  response: {
    data: {
      message: string | string[]
      statusCode: number
      path: string
      timestamp: string
    }
    status: number
  }
}

// Login / Verify Success Response
type Login_verify_SuccessResponse = {
  message: string
  access_token: string
  user: UserInfo
}
```

---

## 📦 الـ Dependencies الرئيسية

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "typescript": "^5.x",
  "tailwindcss": "^3.x",
  "@tanstack/react-query": "^5.x",
  "zustand": "^4.x",
  "axios": "^1.x",
  "react-hook-form": "^7.x",
  "@hookform/resolvers": "^3.x",
  "zod": "^3.x",
  "react-toastify": "^10.x",
  "react-icons": "^5.x",
  "vite": "^5.x"
}
```

---

## 🤝 المساهمون

| الاسم | الدور |
|-------|-------|
| أحمد | Frontend — React + TypeScript |
| محمد | Backend — NestJS + Prisma |

🔥 **بازوكا — أكل زي الصاروخ**

</div>
