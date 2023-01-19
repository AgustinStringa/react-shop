import React from "react";
import "./reset.css";
import "./App.scss";
import NewPassword from "../pages/NewPassword/NewPassword";
import Login from "../pages/Login/Login";
import PasswordRecovery from "../pages/PasswordRecovery/PasswordRecovery";
import NotFound from "../pages/404/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NewPassword />,
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
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
