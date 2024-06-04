import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./pages/Layout/GuestLayout";
import LoginForm from "./pages/Auth/LoginForm";
import RegisterForm from "./pages/Auth/RegisterForm";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import AuthLayout from "./pages/Layout/AuthLayout";
import Dashboard from "./pages/Dashboard";
import ExpensePage from './pages/ExpensePage';
import Tags from "./pages/Tags";

const router =  createBrowserRouter ([
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: 'login',
                element: <LoginForm/>
            },
            {
                path: 'register',
                element: <RegisterForm/>
            },
            {
                path: 'forget-password',
                element: <ForgetPassword/>
            }
        ]
    },
    {
        path:'/app',
        element: <AuthLayout/>,
        children:[
            {
                path:'dashboard',
                element: <Dashboard/>,
                
            },
            {
                path:'expenses',
                element: <ExpensePage/>
            },
            {
                path:'tags',
                element: <Tags/>
            }
        ]
    }
])


export default router;