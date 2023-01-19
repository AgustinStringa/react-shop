import React from 'react'
import { createRoot } from 'react-dom/client';
import Home from './components/Home'
import NewPassword from './components/Pages/NewPassword/NewPassword'
import Login from './components/Pages/Login/Login'
import NotFound from './components/Pages/404/NotFound';
import PasswordRecovery from './components/Pages/PasswordRecovery/PasswordRecovery';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/signup",
            element: <NewPassword />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/password-recovery",
            element: <PasswordRecovery />,
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]);
const root = createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);