import React from "react";
import OrderList from "Containers/OrderList";
import Layout from "Containers/Layout/Layout";
import "./Orders.css";
const Orders = () => {
  return (
    <Layout>
      <div className="my-orders-container">
        <h1 class="main-title">My orders</h1>
        <OrderList />
      </div>
    </Layout>
  );
};

export default Orders;
