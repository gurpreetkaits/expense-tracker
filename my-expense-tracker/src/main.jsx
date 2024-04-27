import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/index.css'
import LoginForm from './pages/Auth/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ForgetPassword from './pages/Auth/ForgetPassword.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Expenses from './pages/ExpensePage.jsx'
import Tags from './pages/Tags.jsx'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />} >
        <Route path="login" element={<LoginForm />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="tags" element={<Tags />} />
        <Route path="forget-password" element={<ForgetPassword />} />
    </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
