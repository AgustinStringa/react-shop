import React from "react";
import OrderList from "Containers/OrderList";
import Layout from "Containers/Layout/Layout";
import "Styles/Orders.css";
const Orders = () => {
  return (
    <Layout>
        <h1 class="main-title">My orders</h1>
        <OrderList />
    </Layout>
  );
};

export default Orders;
