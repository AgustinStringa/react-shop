import React from "react";
import Layout from "Containers/Layout/Layout";
import ProductList from "Containers/ProductList";
import "Styles/Home.css";
import ProductDetail from "Containers/ProductDetail/ProductDetail";
import LateralWindow from "Containers/LateralWindow";
import ShoppingCart from "Containers/ShoppingCart/ShoppingCart";
import SearchFilters from "Containers/SearchFilters";
const Home = () => {
  return (
    <Layout>

        <SearchFilters/>
        <section className="product-list">
          <ProductList />
        </section>
        {/* <LateralWindow>
          <ProductDetail/>
          <ShoppingCart/>
        </LateralWindow> */}

    </Layout>
  );
};

export default Home;
