import React from "react";
import "./reset.css";
import "./App.scss";
import NewPassword from "../pages/NewPassword/NewPassword";
import Login from "../pages/Login/Login";
import PasswordRecovery from "../pages/PasswordRecovery/PasswordRecovery";
import NotFound from "../pages/404/NotFound";
import Home from "../pages/Home/Home";
import Account from "../pages/Account/Account";
import Order from "../pages/Order/Order";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new-password",
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
    path: "/account",
    element: <Account />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
