import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "../pages/auth/Register";
import Verify from "../pages/auth/Verify";
import { ToastContainer } from "react-toastify";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgetPassword";

import MainLayout from "../layouts/MainLayout";
import ResetPassword from "../pages/auth/ResetPassword";
import ResendCode from "../pages/auth/ResendCode";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import DetailsProduct from "../pages/DetailsProduct";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:productId", element: <DetailsProduct /> },
      { path: "cart", element: <Cart /> },
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

export default function Routes() {
  return (
    <>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
    </>
  );
}
