import React, { useContext } from "react";
import Layout from "Containers/Layout/Layout";
import MyOrder from "Containers/MyOrder";
import "Styles/Order.css";
import { ShopContext } from "Context/ShopContext";
import ProductItem from "Components/ProductItem/ProductItem";
const Order = () => {
  const fecha = new Date();
  const { cart } = useContext(ShopContext);
  const calculatePrice = () => {
    let price = 0;
    cart.forEach((el) => {
      price += el.price;
    });
    return price;
  };
  calculatePrice();
  return (
    <Layout>
      <h1 className="main-title">My order</h1>
      <div className="resume">
        <div>
          <p className="date">{`${fecha.getDate()}.${
            fecha.getMonth() + 1
          }.${fecha.getFullYear()}`}</p>
          <p className="count-articles">
            {cart.length} {cart.length == 1 ? "article" : "articles"}
          </p>
        </div>
        <div>
          <p className="final-price">$ {calculatePrice()}</p>
        </div>
      </div>
      <div className="order-list-checkout">
        <MyOrder>
          {cart.map((el) => (
            <ProductItem {...el} inCart={false} />
          ))}
        </MyOrder>
      </div>
    </Layout>
  );
};

export default Order;
