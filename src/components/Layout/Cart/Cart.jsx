import React from "react";
import IcoCart from "../../../assets/icons/icon_shopping_cart.svg";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div className="menu-cart">
      <Link to={"/cart"}>
        <img src={IcoCart} />
      </Link>
    </div>
  );
};

export default Cart;
