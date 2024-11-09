import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";
import RegisterPage from "../pages/register/RegisterPage";
import AuthWrapper from "./AuthWrapper";

const LoginPage = lazy(() => import("../pages/login/LoginPage"));

export const Router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/",
    element: <AuthWrapper />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: "",
        element: <DashboardPage />,
        children: [
          {
            path: "/dashboard1",
            element: <div>Dashboard1</div>,
          },
        ],
      },
    ],
  },
]);
