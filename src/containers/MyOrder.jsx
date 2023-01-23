import React from "react";
import ProductInfo from "Components/ProductInfo/ProductInfo";
import './MyOrder.css'
const MyOrder = () => {
  return (
    <div className="order-list">
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
    </div>
  );
};

export default MyOrder;
