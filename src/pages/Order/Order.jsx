import React, { useContext } from "react";
import Layout from "Containers/Layout/Layout";
import MyOrder from "Containers/MyOrder";
import "Styles/Order.css";
import { ShopContext } from 'Context/ShopContext'
const Order = () => {
  const fecha = new Date();
  const { cart } = useContext(ShopContext);
  return (
    <Layout>
      <h1 className="main-title">My order</h1>
      <div className="resume">
        <div>
          <p className="date">{`${fecha.getDate()}.${fecha.getMonth() + 1}.${fecha.getFullYear()}`}</p>
          <p className="count-articles">{cart.length} {cart.length == 1 ? 'article' : 'articles'}</p>
        </div>
        <div>
          <p className="final-price">$ 560.00</p>
        </div>
      </div>
      <MyOrder />
    </Layout>
  );
};

export default Order;
