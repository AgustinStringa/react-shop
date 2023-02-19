import React, { useContext } from "react";
import "Styles/MyOrder.css";
const MyOrder = ({ children }) => {
  return <div className="order-list">{children}</div>;
};

export default MyOrder;
