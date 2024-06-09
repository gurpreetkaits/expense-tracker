import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./pages/Layout/GuestLayout";
import LoginForm from "./pages/Auth/LoginForm";
import RegisterForm from "./pages/Auth/RegisterForm";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import AuthLayout from "./pages/Layout/AuthLayout";
import Dashboard from "./pages/Dashboard";
import ExpensePage from "./pages/ExpensePage";
import Tags from "./pages/Tags";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuestRoute>
        <GuestLayout />
      </GuestRoute>
    ),
    children: [
      {
        path: "/",
        element: <LoginForm />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "expenses",
        element: <ExpensePage />,
      },
      {
        path: "tags",
        element: <Tags />,
      },
    ],
  },
]);

export default router;
