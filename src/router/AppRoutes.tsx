import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import NotFound from "@/components/ui/NotFound";
import ForgetPassword from "@/pages/auth/forget-password";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import ResendCode from "@/pages/auth/resend-code";
import ResetPassword from "@/pages/auth/reset-password";
import Verify from "@/pages/auth/verify";
import DetailsProduct from "@/pages/user/DetailsProduct";


import Home from "@/pages/user/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:productId", element: <DetailsProduct/>}
    ],
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
        element: <ForgetPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "resend-code",
        element: <ResendCode />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function AppRoutes() {
  return (
    <>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
    </>
  );
}
