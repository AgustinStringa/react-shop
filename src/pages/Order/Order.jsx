import React from "react";
import Layout from "Components/Layout/Layout";
import MyOrder from "Containers/MyOrder";
import "./Order.css";
const Order = () => {
  return (
    <Layout>
      <div className="order-container">
        <h1 className="main-title">My order</h1>
        <div className="resume">
          <div>
            <p className="date">04.25.2021</p>
            <p className="count-articles">6 articles</p>
          </div>
          <div>
            <p className="final-price">$ 560.00</p>
          </div>
        </div>
        <MyOrder />
      </div>
    </Layout>
  );
};

export default Order;
