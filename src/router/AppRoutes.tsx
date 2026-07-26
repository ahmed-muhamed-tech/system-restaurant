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
import Cart from "@/pages/user/cart";
import Favorites from "@/pages/user/Favorites";
import Profile from "@/pages/user/Profile";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "@/layouts/AdminLayout";
import Products from "@/pages/admin/Products";
import Dashboard from "@/pages/admin/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:productId", element: <DetailsProduct /> },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "favorites",
        element: (
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile-user",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "verify-email",
        element: <Verify />,
      },
      {
        index: true,
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
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
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
