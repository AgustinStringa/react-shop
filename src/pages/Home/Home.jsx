import React from "react";
import Layout from "Components/Layout/Layout";
import ProductList from "Containers/ProductList";
import "./Home.css";
const Home = () => {
  return (
    <Layout>
      <div className="container">
        <section className="product-list">
          <ProductList />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
