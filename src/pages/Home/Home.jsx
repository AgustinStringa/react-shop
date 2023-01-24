import React from "react";
import Layout from "Containers/Layout/Layout";
import ProductList from "Containers/ProductList";
import "Styles/Home.css";
import ProductDetail from "Containers/ProductDetail/ProductDetail";
import LateralWindow from "Containers/LateralWindow";
import ShoppingCart from "Containers/ShoppingCart/ShoppingCart";
const Home = () => {
  return (
    <Layout>
      <div className="container">
        <section className="product-list">
          <ProductList />
        </section>
        {/* <ProductDetail /> */}
        <LateralWindow>
          {/* <ProductDetail/> */}
          <ShoppingCart/>
        </LateralWindow>
      </div>
    </Layout>
  );
};

export default Home;
