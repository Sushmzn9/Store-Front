import React from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import ProductDes from "./ProductDes";

const Products = () => {
  return (
    <>
      <Header />
      <main className="h-screen">
        <ProductDes />
      </main>
      <Footer />
    </>
  );
};

export default Products;
