import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";

const DashboardPage = lazy(() => import("../pages/dashboard/DashboardPage"));
const RegisterPage = lazy(() => import("../pages/register/RegisterPage"));
const UsersPage = lazy(() => import("../pages/user_list/UserListPage"));
const AddEditUserPage = lazy(() => import("../pages/user/AddEditUserPage"));
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
            path: "/user_list",
            element: <UsersPage />,
          },
          {
            path: "/user",
            element: <AddEditUserPage />,
          },
          {
            path: "/settings",
            element: <div>Dashboard2</div>,
          },
        ],
      },
    ],
  },
]);
