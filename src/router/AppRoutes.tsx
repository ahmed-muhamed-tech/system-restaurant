import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import ResetPassword from "../pages/auth/reset-password";
import Register from "@/pages/auth/register";
import Verify from "@/pages/auth/verify";
import Login from "@/pages/auth/login";
import ForgetPassword from "@/pages/auth/forget-password";
import ResendCode from "@/pages/auth/resend-code";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "verify-email",
        element: <Verify />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword/>
      },{
        path: "reset-password",
        element: <ResetPassword/>
      },{
        path: "resend-code",
        element: <ResendCode/>
      }
    ],
  },
]);

export default function AppRoutes() {
  return (
   <><ToastContainer position="top-center" />
      <RouterProvider router={router} /></>
      
  
  );
}
