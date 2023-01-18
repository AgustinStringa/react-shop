import React from 'react'
import { createRoot } from 'react-dom/client';
import Home from './components/Home'
import SignUp from './components/Pages/SignUp/SignUp'
import Login from './components/Pages/Login/Login'
import NotFound from './components/Pages/404/NotFound';
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
            element: <SignUp />,
        },
        {
            path: "/login",
            element: <Login />,
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