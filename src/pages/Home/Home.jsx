import React from "react";
import Layout from "Containers/Layout/Layout";
import ProductList from "Containers/ProductList";
import "Styles/Home.css";
import ProductDetail from "Containers/ProductDetail/ProductDetail";
const Home = () => {
  return (
    <Layout>
      <div className="container">
        <section className="product-list">
          <ProductList />
        </section>
        <ProductDetail />
      </div>
    </Layout>
  );
};

export default Home;
