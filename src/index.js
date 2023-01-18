import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './components/App'
import SignUp from './components/Pages/SignUp/SignUp'
import Login from './components/Pages/Login/Login'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);
const root = createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);