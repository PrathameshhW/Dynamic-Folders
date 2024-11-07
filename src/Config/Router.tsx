import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";

const LoginPage = lazy(() => import("../pages/login/LoginPage"));

export const Router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/register", element: <h1>Register</h1> },
  {
    path: "/",
    element: <AuthWrapper />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>,
      },
    ],
  },
]);
