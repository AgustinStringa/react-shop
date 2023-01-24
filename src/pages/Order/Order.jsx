import React from "react";
import Layout from "Containers/Layout/Layout";
import MyOrder from "Containers/MyOrder";
import "Styles/Order.css";
const Order = () => {
  const fecha = new Date();
  return (
    <Layout>
        <h1 className="main-title">My order</h1>
        <div className="resume">
          <div>
            <p className="date">{`${fecha.getDate()}.${fecha.getMonth()+1}.${fecha.getFullYear()}`}</p>
            <p className="count-articles">6 articles</p>
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
