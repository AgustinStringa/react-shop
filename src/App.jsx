import React, { useState, useEffect } from "react";
import "Styles/reset.css";
import "Styles/App.scss";
import NewPassword from "Pages/NewPassword/NewPassword";
import Login from "Pages/Login/Login";
import PasswordRecovery from "Pages/PasswordRecovery/PasswordRecovery";
import NotFound from "Pages/404/NotFound";
import Home from "Pages/Home/Home";
import Account from "Pages/Account/Account";
import Order from "Pages/Order/Order";
import Orders from "Pages/Orders/Orders";
import { ShopContext } from "./context/ShopContext";
import useReactShop from "./hooks/useReactShop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
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
      path: "/my-orders",
      element: <Orders />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  { basename: "/react-shop" }
);

const App = () => {
  getProducts;
  const {
    cart,
    setCart,
    user,
    setUser,
    products,
    setProducts,
    getProducts,
    filters,
    setFilters,
    sortByPrice,
    sortByRecent,
    filterProductByName,
  } = useReactShop();
  return (
    <>
      <ShopContext.Provider
        value={{
          cart,
          setCart,
          user,
          setUser,
          products,
          setProducts,
          getProducts,
          filters,
          setFilters,
          sortByPrice,
          sortByRecent,
          filterProductByName,
        }}
      >
        <RouterProvider router={router} />;
      </ShopContext.Provider>
    </>
  );
};

export default App;
