import React, {useState, useEffect} from "react";
import IcoCart from "../../../assets/icons/icon_shopping_cart.svg";
import { Link } from "react-router-dom";
import MainMenuDesktop from "../MainMenuDesktop/MainMenuDesktop";
import "./Cart.css";
import ShoppingCart from 'Containers/ShoppingCart/ShoppingCart'
const Cart = () => {
  const [showCart, setShowCart] = useState(true);  
  return (
    <>
    <div className="menu-cart">
      <MainMenuDesktop />
      <button onClick={()=>{console.log("click", showCart);setShowCart(!showCart)}}>
        <img src={IcoCart} />
      </button>
    </div>
      {showCart && <ShoppingCart showCart={showCart} setShowCart={setShowCart}/>}
    </>
  );
};

export default Cart;
