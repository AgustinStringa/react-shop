import React from "react";
import Layout from "../../components/Layout/Layout";
import ProductList from "../../containers/ProductList";
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
